window.FHIR =
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {}
        /** *** */};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, {enumerable: true, get: getter});
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
        /** *** */ 		}
      /** *** */ 		Object.defineProperty(exports, '__esModule', {value: true});
      /** *** */ 	};
    /** *** */
    /** *** */ 	// create a fake namespace object
    /** *** */ 	// mode & 1: value is a module id, require it
    /** *** */ 	// mode & 2: merge all properties of value into the ns
    /** *** */ 	// mode & 4: return value when already ns object
    /** *** */ 	// mode & 8|1: behave like require
    /** *** */ 	__webpack_require__.t = function (value, mode) {
      /** *** */ 		if (mode & 1) value = __webpack_require__(value);
      /** *** */ 		if (mode & 8) return value;
      /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /** *** */ 		const ns = Object.create(null);
      /** *** */ 		__webpack_require__.r(ns);
      /** *** */ 		Object.defineProperty(ns, 'default', {enumerable: true, value});
      /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, ((key) => { return value[key]; }).bind(null, key));
      /** *** */ 		return ns;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = './src/browser.js');
    /** *** */ }({

    /***/ './node_modules/@babel/runtime/helpers/asyncToGenerator.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \**************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var {value} = info;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          const self = this;
          const args = arguments;
          return new Promise(((resolve, reject) => {
            const gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
            }

            _next(undefined);
          }));
        };
      }

      module.exports = _asyncToGenerator;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/construct.js':
    /*! **********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ './node_modules/@babel/runtime/helpers/setPrototypeOf.js');

      function isNativeReflectConstruct() {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;

        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], () => {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          module.exports = _construct = Reflect.construct;
        } else {
          module.exports = _construct = function _construct(Parent, args, Class) {
            const a = [null];
            a.push.apply(a, args);
            const Constructor = Function.bind.apply(Parent, a);
            const instance = new Constructor();
            if (Class) setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      module.exports = _construct;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/createClass.js':
    /*! ************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \*********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      function _defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
          const descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      module.exports = _createClass;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/getPrototypeOf.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      function _getPrototypeOf(o) {
        module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      module.exports = _getPrototypeOf;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/inheritsLoose.js':
    /*! **************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports) {
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      module.exports = _inheritsLoose;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/interopRequireDefault.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \********************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      module.exports = _interopRequireDefault;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/isNativeFunction.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \**************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf('[native code]') !== -1;
      }

      module.exports = _isNativeFunction;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/setPrototypeOf.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      function _setPrototypeOf(o, p) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      module.exports = _setPrototypeOf;
      /***/ }),

    /***/ './node_modules/@babel/runtime/helpers/wrapNativeSuper.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \*************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ './node_modules/@babel/runtime/helpers/getPrototypeOf.js');

      const setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ './node_modules/@babel/runtime/helpers/setPrototypeOf.js');

      const isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ './node_modules/@babel/runtime/helpers/isNativeFunction.js');

      const construct = __webpack_require__(/*! ./construct */ './node_modules/@babel/runtime/helpers/construct.js');

      function _wrapNativeSuper(Class) {
        const _cache = typeof Map === 'function' ? new Map() : undefined;

        module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (Class === null || !isNativeFunction(Class)) return Class;

          if (typeof Class !== 'function') {
            throw new TypeError('Super expression must either be null or a function');
          }

          if (typeof _cache !== 'undefined') {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return construct(Class, arguments, getPrototypeOf(this).constructor);
          }

          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
      }

      module.exports = _wrapNativeSuper;
      /***/ }),

    /***/ './node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js':
    /*! *********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \******************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

      const runtime = (function (exports) {
        const Op = Object.prototype;
        const hasOwn = Op.hasOwnProperty;
        let undefined; // More compressible than void 0.
        const $Symbol = typeof Symbol === 'function' ? Symbol : {};
        const iteratorSymbol = $Symbol.iterator || '@@iterator';
        const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
        const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          const generator = Object.create(protoGenerator.prototype);
          const context = new Context(tryLocsList || []);

          // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.
          generator._invoke = makeInvokeMethod(innerFn, self, context);

          return generator;
        }
        exports.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
          try {
            return {type: 'normal', arg: fn.call(obj, arg)};
          } catch (err) {
            return {type: 'throw', arg: err};
          }
        }

        const GenStateSuspendedStart = 'suspendedStart';
        const GenStateSuspendedYield = 'suspendedYield';
        const GenStateExecuting = 'executing';
        const GenStateCompleted = 'completed';

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        const ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        let IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        const getProto = Object.getPrototypeOf;
        const NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype
      && NativeIteratorPrototype !== Op
      && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        const Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = 'GeneratorFunction';

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
          ['next', 'throw', 'return'].forEach((method) => {
            prototype[method] = function (arg) {
              return this._invoke(method, arg);
            };
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          const ctor = typeof genFun === 'function' && genFun.constructor;
          return ctor
            ? ctor === GeneratorFunction
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        || (ctor.displayName || ctor.name) === 'GeneratorFunction'
            : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            if (!(toStringTagSymbol in genFun)) {
              genFun[toStringTagSymbol] = 'GeneratorFunction';
            }
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function (arg) {
          return {__await: arg};
        };

        function AsyncIterator(generator) {
          function invoke(method, arg, resolve, reject) {
            const record = tryCatch(generator[method], generator, arg);
            if (record.type === 'throw') {
              reject(record.arg);
            } else {
              const result = record.arg;
              const {value} = result;
              if (value
            && typeof value === 'object'
            && hasOwn.call(value, '__await')) {
                return Promise.resolve(value.__await).then((value) => {
                  invoke('next', value, resolve, reject);
                }, (err) => {
                  invoke('throw', err, resolve, reject);
                });
              }

              return Promise.resolve(value).then((unwrapped) => {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, (error) => {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke('throw', error, resolve, reject);
              });
            }
          }

          let previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new Promise(((resolve, reject) => {
                invoke(method, arg, resolve, reject);
              }));
            }

            return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
          }

          // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).
          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };
        exports.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function (innerFn, outerFn, self, tryLocsList) {
          const iter = new AsyncIterator(
            wrap(innerFn, outerFn, self, tryLocsList)
          );

          return exports.isGeneratorFunction(outerFn)
            ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then((result) => {
              return result.done ? result.value : iter.next();
            });
        };

        function makeInvokeMethod(innerFn, self, context) {
          let state = GenStateSuspendedStart;

          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error('Generator is already running');
            }

            if (state === GenStateCompleted) {
              if (method === 'throw') {
                throw arg;
              }

              // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              const {delegate} = context;
              if (delegate) {
                const delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === 'next') {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === 'throw') {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === 'return') {
                context.abrupt('return', context.arg);
              }

              state = GenStateExecuting;

              const record = tryCatch(innerFn, self, context);
              if (record.type === 'normal') {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done
                  ? GenStateCompleted
                  : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } if (record.type === 'throw') {
                state = GenStateCompleted;
                // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.
                context.method = 'throw';
                context.arg = record.arg;
              }
            }
          };
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
          const method = delegate.iterator[context.method];
          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === 'throw') {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator.return) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = 'return';
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === 'throw') {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = 'throw';
              context.arg = new TypeError(
                'The iterator does not provide a \'throw\' method'
              );
            }

            return ContinueSentinel;
          }

          const record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === 'throw') {
            context.method = 'throw';
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          const info = record.arg;

          if (!info) {
            context.method = 'throw';
            context.arg = new TypeError('iterator result is not an object');
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;

            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;

            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== 'return') {
              context.method = 'next';
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          }

          // The delegate iterator is finished, so forget it and continue with
          // the outer generator.
          context.delegate = null;
          return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[toStringTagSymbol] = 'Generator';

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return '[object Generator]';
        };

        function pushTryEntry(locs) {
          const entry = {tryLoc: locs[0]};

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          const record = entry.completion || {};
          record.type = 'normal';
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{tryLoc: 'root'}];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          const keys = [];
          for (const key in object) {
            keys.push(key);
          }
          keys.reverse();

          // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.
          return function next() {
            while (keys.length) {
              const key = keys.pop();
              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            }

            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            const iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === 'function') {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              let i = -1; const
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

              return next.next = next;
            }
          }

          // Return an iterator with no values.
          return {next: doneResult};
        }
        exports.values = values;

        function doneResult() {
          return {value: undefined, done: true};
        }

        Context.prototype = {
          constructor: Context,

          reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;

            this.method = 'next';
            this.arg = undefined;

            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (const name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === 't'
              && hasOwn.call(this, name)
              && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },

          stop() {
            this.done = true;

            const rootEntry = this.tryEntries[0];
            const rootRecord = rootEntry.completion;
            if (rootRecord.type === 'throw') {
              throw rootRecord.arg;
            }

            return this.rval;
          },

          dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            const context = this;
            function handle(loc, caught) {
              record.type = 'throw';
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = 'next';
                context.arg = undefined;
              }

              return !!caught;
            }

            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === 'root') {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle('end');
              }

              if (entry.tryLoc <= this.prev) {
                const hasCatch = hasOwn.call(entry, 'catchLoc');
                const hasFinally = hasOwn.call(entry, 'finallyLoc');

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error('try statement without catch or finally');
                }
              }
            }
          },

          abrupt(type, arg) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev
            && hasOwn.call(entry, 'finallyLoc')
            && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry
          && (type === 'break'
           || type === 'continue')
          && finallyEntry.tryLoc <= arg
          && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            const record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = 'next';
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },

          complete(record, afterLoc) {
            if (record.type === 'throw') {
              throw record.arg;
            }

            if (record.type === 'break'
          || record.type === 'continue') {
              this.next = record.arg;
            } else if (record.type === 'return') {
              this.rval = this.arg = record.arg;
              this.method = 'return';
              this.next = 'end';
            } else if (record.type === 'normal' && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },

          finish(finallyLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },

          catch(tryLoc) {
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                const record = entry.completion;
                if (record.type === 'throw') {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }

            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error('illegal catch attempt');
          },

          delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };

            if (this.method === 'next') {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        };

        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        true ? module.exports : undefined
      ));

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function('r', 'regeneratorRuntime = r')(runtime);
      }
      /***/ }),

    /***/ './node_modules/@babel/runtime/regenerator/index.js':
    /*! **********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(/*! regenerator-runtime */ './node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js');
      /***/ }),

    /***/ './node_modules/core-js/internals/a-function.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = function (it) {
        if (typeof it !== 'function') {
          throw TypeError(`${String(it)} is not a function`);
        } return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/add-to-unscopables.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const create = __webpack_require__(/*! ../internals/object-create */ './node_modules/core-js/internals/object-create.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');

      const UNSCOPABLES = wellKnownSymbol('unscopables');
      const ArrayPrototype = Array.prototype;

      // Array.prototype[@@unscopables]
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        hide(ArrayPrototype, UNSCOPABLES, create(null));
      }

      // add a key to Array.prototype[@@unscopables]
      module.exports = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/advance-string-index.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \*************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const codePointAt = __webpack_require__(/*! ../internals/string-at */ './node_modules/core-js/internals/string-at.js');

      // `AdvanceStringIndex` abstract operation
      // https://tc39.github.io/ecma262/#sec-advancestringindex
      module.exports = function (S, index, unicode) {
        return index + (unicode ? codePointAt(S, index, true).length : 1);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/an-instance.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = function (it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError(`Incorrect ${name ? `${name} ` : ''}invocation`);
        } return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/an-object.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');

      module.exports = function (it) {
        if (!isObject(it)) {
          throw TypeError(`${String(it)} is not an object`);
        } return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/array-for-each.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const arrayMethods = __webpack_require__(/*! ../internals/array-methods */ './node_modules/core-js/internals/array-methods.js');
      const sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ './node_modules/core-js/internals/sloppy-array-method.js');

      const internalForEach = arrayMethods(0);
      const SLOPPY_METHOD = sloppyArrayMethod('forEach');

      // `Array.prototype.forEach` method implementation
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      module.exports = SLOPPY_METHOD ? function forEach(callbackfn /* , thisArg */) {
        return internalForEach(this, callbackfn, arguments[1]);
      } : [].forEach;
      /***/ }),

    /***/ './node_modules/core-js/internals/array-from.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const bind = __webpack_require__(/*! ../internals/bind-context */ './node_modules/core-js/internals/bind-context.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ './node_modules/core-js/internals/call-with-safe-iteration-closing.js');
      const isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ './node_modules/core-js/internals/is-array-iterator-method.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const createProperty = __webpack_require__(/*! ../internals/create-property */ './node_modules/core-js/internals/create-property.js');
      const getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ './node_modules/core-js/internals/get-iterator-method.js');

      // `Array.from` method
      // https://tc39.github.io/ecma262/#sec-array.from
      module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
        const O = toObject(arrayLike);
        const C = typeof this === 'function' ? this : Array;
        const argumentsLength = arguments.length;
        let mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        const mapping = mapfn !== undefined;
        let index = 0;
        const iteratorMethod = getIteratorMethod(O);
        let length; let result; let step; let
          iterator;
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
        // if the target is not iterable or it's an array with the default iterator - use a simple case
        if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O);
          result = new C();
          for (;!(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping
              ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
              : step.value);
          }
        } else {
          length = toLength(O.length);
          result = new C(length);
          for (;length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/array-includes.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ './node_modules/core-js/internals/to-indexed-object.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ './node_modules/core-js/internals/to-absolute-index.js');

      // `Array.prototype.{ indexOf, includes }` methods implementation
      // false -> Array#indexOf
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      // true  -> Array#includes
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          const O = toIndexedObject($this);
          const length = toLength(O.length);
          let index = toAbsoluteIndex(fromIndex, length);
          let value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) {
            while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
            }
          } else {
            for (;length > index; index++) {
              if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
              }
            }
          } return !IS_INCLUDES && -1;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/array-method-has-species-support.js':
    /*! ****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const SPECIES = wellKnownSymbol('species');

      module.exports = function (METHOD_NAME) {
        return !fails(() => {
          const array = [];
          const constructor = array.constructor = {};
          constructor[SPECIES] = function () {
            return {foo: 1};
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/array-methods.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/internals/array-methods.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const bind = __webpack_require__(/*! ../internals/bind-context */ './node_modules/core-js/internals/bind-context.js');
      const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ './node_modules/core-js/internals/indexed-object.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ './node_modules/core-js/internals/array-species-create.js');

      // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
      // 0 -> Array#forEach
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      // 1 -> Array#map
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      // 2 -> Array#filter
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      // 3 -> Array#some
      // https://tc39.github.io/ecma262/#sec-array.prototype.some
      // 4 -> Array#every
      // https://tc39.github.io/ecma262/#sec-array.prototype.every
      // 5 -> Array#find
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      // 6 -> Array#findIndex
      // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
      module.exports = function (TYPE, specificCreate) {
        const IS_MAP = TYPE == 1;
        const IS_FILTER = TYPE == 2;
        const IS_SOME = TYPE == 3;
        const IS_EVERY = TYPE == 4;
        const IS_FIND_INDEX = TYPE == 6;
        const NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        const create = specificCreate || arraySpeciesCreate;
        return function ($this, callbackfn, that) {
          const O = toObject($this);
          const self = IndexedObject(O);
          const boundFunction = bind(callbackfn, that, 3);
          const length = toLength(self.length);
          let index = 0;
          const target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
          let value; let
            result;
          for (;length > index; index++) {
            if (NO_HOLES || index in self) {
              value = self[index];
              result = boundFunction(value, index, O);
              if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) {
                  switch (TYPE) {
                    case 3: return true; // some
                    case 5: return value; // find
                    case 6: return index; // findIndex
                    case 2: target.push(value); // filter
                  }
                } else if (IS_EVERY) return false; // every
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/array-species-create.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \*************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const isArray = __webpack_require__(/*! ../internals/is-array */ './node_modules/core-js/internals/is-array.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const SPECIES = wellKnownSymbol('species');

      // `ArraySpeciesCreate` abstract operation
      // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
      module.exports = function (originalArray, length) {
        let C;
        if (isArray(originalArray)) {
          C = originalArray.constructor;
          // cross-realm fallback
          if (typeof C === 'function' && (C === Array || isArray(C.prototype))) C = undefined;
          else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/bind-context.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const aFunction = __webpack_require__(/*! ../internals/a-function */ './node_modules/core-js/internals/a-function.js');

      // optional / simple context binding
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 0: return function () {
            return fn.call(that);
          };
          case 1: return function (a) {
            return fn.call(that, a);
          };
          case 2: return function (a, b) {
            return fn.call(that, a, b);
          };
          case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function (/* ...args */) {
          return fn.apply(that, arguments);
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/call-with-safe-iteration-closing.js':
    /*! ****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \*************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');

      // call something on iterator step with safe closing on error
      module.exports = function (iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (error) {
          const returnMethod = iterator.return;
          if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
          throw error;
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/check-correctness-of-iteration.js':
    /*! **************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \************************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const ITERATOR = wellKnownSymbol('iterator');
      let SAFE_CLOSING = false;

      try {
        let called = 0;
        const iteratorWithReturn = {
          next() {
            return {done: !!called++};
          },
          return() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function () {
          return this;
        };
        // eslint-disable-next-line no-throw-literal
        Array.from(iteratorWithReturn, () => { throw 2; });
      } catch (error) { /* empty */ }

      module.exports = function (exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        let ITERATION_SUPPORT = false;
        try {
          const object = {};
          object[ITERATOR] = function () {
            return {
              next() {
                return {done: ITERATION_SUPPORT = true};
              }
            };
          };
          exec(object);
        } catch (error) { /* empty */ }
        return ITERATION_SUPPORT;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/classof-raw.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      const {toString} = {};

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/classof.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const classofRaw = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const TO_STRING_TAG = wellKnownSymbol('toStringTag');
      // ES3 wrong here
      const CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

      // fallback for IE11 Script Access Denied error
      const tryGet = function (it, key) {
        try {
          return it[key];
        } catch (error) { /* empty */ }
      };

      // getting tag from ES6+ `Object.prototype.toString`
      module.exports = function (it) {
        let O; let tag; let
          result;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
          : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) === 'string' ? tag
          // builtinTag case
            : CORRECT_ARGUMENTS ? classofRaw(O)
            // ES3 arguments fallback
              : (result = classofRaw(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : result;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/copy-constructor-properties.js':
    /*! ***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \********************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const ownKeys = __webpack_require__(/*! ../internals/own-keys */ './node_modules/core-js/internals/own-keys.js');
      const getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ './node_modules/core-js/internals/object-get-own-property-descriptor.js');
      const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js');

      module.exports = function (target, source) {
        const keys = ownKeys(source);
        const defineProperty = definePropertyModule.f;
        const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/correct-prototype-getter.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \******************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      module.exports = !fails(() => {
        function F() { /* empty */ }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/create-html.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');

      const quot = /"/g;

      // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
      // https://tc39.github.io/ecma262/#sec-createhtml
      module.exports = function (string, tag, attribute, value) {
        const S = String(requireObjectCoercible(string));
        let p1 = `<${tag}`;
        if (attribute !== '') p1 += ` ${attribute}="${String(value).replace(quot, '&quot;')}"`;
        return `${p1}>${S}</${tag}>`;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/create-iterator-constructor.js':
    /*! ***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \********************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const {IteratorPrototype} = __webpack_require__(/*! ../internals/iterators-core */ './node_modules/core-js/internals/iterators-core.js');
      const create = __webpack_require__(/*! ../internals/object-create */ './node_modules/core-js/internals/object-create.js');
      const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ './node_modules/core-js/internals/create-property-descriptor.js');
      const setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ './node_modules/core-js/internals/set-to-string-tag.js');
      const Iterators = __webpack_require__(/*! ../internals/iterators */ './node_modules/core-js/internals/iterators.js');

      const returnThis = function () { return this; };

      module.exports = function (IteratorConstructor, NAME, next) {
        const TO_STRING_TAG = `${NAME} Iterator`;
        IteratorConstructor.prototype = create(IteratorPrototype, {next: createPropertyDescriptor(1, next)});
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/create-property-descriptor.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \********************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/create-property.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ './node_modules/core-js/internals/to-primitive.js');
      const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js');
      const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ './node_modules/core-js/internals/create-property-descriptor.js');

      module.exports = function (object, key, value) {
        const propertyKey = toPrimitive(key);
        if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
        else object[propertyKey] = value;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/define-iterator.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ './node_modules/core-js/internals/create-iterator-constructor.js');
      const getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ './node_modules/core-js/internals/object-get-prototype-of.js');
      const setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ './node_modules/core-js/internals/object-set-prototype-of.js');
      const setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ './node_modules/core-js/internals/set-to-string-tag.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const IS_PURE = __webpack_require__(/*! ../internals/is-pure */ './node_modules/core-js/internals/is-pure.js');
      const Iterators = __webpack_require__(/*! ../internals/iterators */ './node_modules/core-js/internals/iterators.js');
      const IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ './node_modules/core-js/internals/iterators-core.js');

      const {IteratorPrototype} = IteratorsCore;
      const {BUGGY_SAFARI_ITERATORS} = IteratorsCore;
      const ITERATOR = wellKnownSymbol('iterator');
      const KEYS = 'keys';
      const VALUES = 'values';
      const ENTRIES = 'entries';

      const returnThis = function () { return this; };

      module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);

        const getIterationMethod = function (KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
            case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
            case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
          } return function () { return new IteratorConstructor(this); };
        };

        const TO_STRING_TAG = `${NAME} Iterator`;
        let INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        const nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        const anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
        let CurrentIteratorPrototype; let methods; let
          KEY;

        // fix native
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (typeof CurrentIteratorPrototype[ITERATOR] !== 'function') {
                hide(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            // Set @@toStringTag to native iterators
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
          }
        }

        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() { return nativeIterator.call(this); };
        }

        // define iterator
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          hide(IterablePrototype, ITERATOR, defaultIterator);
        }
        Iterators[NAME] = defaultIterator;

        // export additional methods
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) {
            for (KEY in methods) {
              if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                redefine(IterablePrototype, KEY, methods[KEY]);
              }
            }
          } else $({target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME}, methods);
        }

        return methods;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/descriptors.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      // Thank's IE8 for his funny defineProperty
      module.exports = !fails(() => {
        return Object.defineProperty({}, 'a', {get() { return 7; }}).a != 7;
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/document-create-element.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \****************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');

      const {document} = global;
      // typeof document.createElement is 'object' in old IE
      const exist = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return exist ? document.createElement(it) : {};
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/dom-iterables.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      // iterable DOM collections
      // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/enum-bug-keys.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      // IE8- don't enum bug keys
      module.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ];
      /***/ }),

    /***/ './node_modules/core-js/internals/export.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ './node_modules/core-js/internals/object-get-own-property-descriptor.js').f;
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const setGlobal = __webpack_require__(/*! ../internals/set-global */ './node_modules/core-js/internals/set-global.js');
      const copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ './node_modules/core-js/internals/copy-constructor-properties.js');
      const isForced = __webpack_require__(/*! ../internals/is-forced */ './node_modules/core-js/internals/is-forced.js');

      /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
      module.exports = function (options, source) {
        const TARGET = options.target;
        const GLOBAL = options.global;
        const STATIC = options.stat;
        let FORCED; let target; let key; let targetProperty; let sourceProperty; let
          descriptor;
        if (GLOBAL) {
          target = global;
        } else if (STATIC) {
          target = global[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global[TARGET] || {}).prototype;
        }
        if (target) {
          for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
              descriptor = getOwnPropertyDescriptor(target, key);
              targetProperty = descriptor && descriptor.value;
            } else targetProperty = target[key];
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
            // contained in target
            if (!FORCED && targetProperty !== undefined) {
              if (typeof sourceProperty === typeof targetProperty) continue;
              copyConstructorProperties(sourceProperty, targetProperty);
            }
            // add a flag to not completely full polyfills
            if (options.sham || (targetProperty && targetProperty.sham)) {
              hide(sourceProperty, 'sham', true);
            }
            // extend global
            redefine(target, key, sourceProperty, options);
          }
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/fails.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \************************************************ */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js':
    /*! ******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \***************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ './node_modules/core-js/internals/regexp-exec.js');

      const SPECIES = wellKnownSymbol('species');

      const REPLACE_SUPPORTS_NAMED_GROUPS = !fails(() => {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        const re = /./;
        re.exec = function () {
          const result = [];
          result.groups = {a: '7'};
          return result;
        };
        return ''.replace(re, '$<a>') !== '7';
      });

      // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper
      const SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(() => {
        const re = /(?:)/;
        const originalExec = re.exec;
        re.exec = function () { return originalExec.apply(this, arguments); };
        const result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      });

      module.exports = function (KEY, length, exec, sham) {
        const SYMBOL = wellKnownSymbol(KEY);

        const DELEGATES_TO_SYMBOL = !fails(() => {
          // String methods call symbol-named RegEp methods
          const O = {};
          O[SYMBOL] = function () { return 7; };
          return ''[KEY](O) != 7;
        });

        const DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(() => {
          // Symbol-named RegExp methods call .exec
          let execCalled = false;
          const re = /a/;
          re.exec = function () { execCalled = true; return null; };

          if (KEY === 'split') {
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES] = function () { return re; };
          }

          re[SYMBOL]('');
          return !execCalled;
        });

        if (
          !DELEGATES_TO_SYMBOL
    || !DELEGATES_TO_EXEC
    || (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS)
    || (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
        ) {
          const nativeRegExpMethod = /./[SYMBOL];
          const methods = exec(SYMBOL, ''[KEY], (nativeMethod, regexp, str, arg2, forceStringMethod) => {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {done: true, value: nativeRegExpMethod.call(regexp, str, arg2)};
              }
              return {done: true, value: nativeMethod.call(str, regexp, arg2)};
            }
            return {done: false};
          });
          const stringMethod = methods[0];
          const regexMethod = methods[1];

          redefine(String.prototype, KEY, stringMethod);
          redefine(RegExp.prototype, SYMBOL, length == 2
          // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
            ? function (string, arg) { return regexMethod.call(string, this, arg); }
          // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
            : function (string) { return regexMethod.call(string, this); });
          if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/flatten-into-array.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/internals/flatten-into-array.js ***!
  \************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isArray = __webpack_require__(/*! ../internals/is-array */ './node_modules/core-js/internals/is-array.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const bind = __webpack_require__(/*! ../internals/bind-context */ './node_modules/core-js/internals/bind-context.js');

      // `FlattenIntoArray` abstract operation
      // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
      var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
        let targetIndex = start;
        let sourceIndex = 0;
        const mapFn = mapper ? bind(mapper, thisArg, 3) : false;
        let element;

        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

            if (depth > 0 && isArray(element)) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
              target[targetIndex] = element;
            }

            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      };

      module.exports = flattenIntoArray;
      /***/ }),

    /***/ './node_modules/core-js/internals/forced-string-html-method.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-html-method.js ***!
  \******************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      // check the existence of a method, lowercase
      // of a tag and escaping quotes in arguments
      module.exports = function (METHOD_NAME) {
        return fails(() => {
          const test = ''[METHOD_NAME]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        });
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/forced-string-trim-method.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
  \******************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const whitespaces = __webpack_require__(/*! ../internals/whitespaces */ './node_modules/core-js/internals/whitespaces.js');

      const non = '\u200B\u0085\u180E';

      // check that a method works with the correct list
      // of whitespaces and has a correct name
      module.exports = function (METHOD_NAME) {
        return fails(() => {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
        });
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/function-to-string.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const shared = __webpack_require__(/*! ../internals/shared */ './node_modules/core-js/internals/shared.js');

      module.exports = shared('native-function-to-string', Function.toString);
      /***/ }),

    /***/ './node_modules/core-js/internals/get-built-in.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const path = __webpack_require__(/*! ../internals/path */ './node_modules/core-js/internals/path.js');
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');

      const aFunction = function (variable) {
        return typeof variable === 'function' ? variable : undefined;
      };

      module.exports = function (namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
          : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/get-iterator-method.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const classof = __webpack_require__(/*! ../internals/classof */ './node_modules/core-js/internals/classof.js');
      const Iterators = __webpack_require__(/*! ../internals/iterators */ './node_modules/core-js/internals/iterators.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const ITERATOR = wellKnownSymbol('iterator');

      module.exports = function (it) {
        if (it != undefined) {
          return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/get-iterator.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ './node_modules/core-js/internals/get-iterator-method.js');

      module.exports = function (it) {
        const iteratorMethod = getIteratorMethod(it);
        if (typeof iteratorMethod !== 'function') {
          throw TypeError(`${String(it)} is not iterable`);
        } return anObject(iteratorMethod.call(it));
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/global.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        const O = 'object';
        const check = function (it) {
          return it && it.Math == Math && it;
        };

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis === O && globalThis)
  || check(typeof window === O && window)
  || check(typeof self === O && self)
  || check(typeof global === O && global)
  // eslint-disable-next-line no-new-func
  || Function('return this')();
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js')));
      /***/ }),

    /***/ './node_modules/core-js/internals/has.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \********************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      const {hasOwnProperty} = {};

      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/hidden-keys.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = {};
      /***/ }),

    /***/ './node_modules/core-js/internals/hide.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \*********************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js');
      const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ './node_modules/core-js/internals/create-property-descriptor.js');

      module.exports = DESCRIPTORS ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/host-report-errors.js':
    /*! **************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');

      module.exports = function (a, b) {
        const {console} = global;
        if (console && console.error) {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/html.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \*********************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');

      const {document} = global;

      module.exports = document && document.documentElement;
      /***/ }),

    /***/ './node_modules/core-js/internals/ie8-dom-define.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const createElement = __webpack_require__(/*! ../internals/document-create-element */ './node_modules/core-js/internals/document-create-element.js');

      // Thank's IE8 for his funny defineProperty
      module.exports = !DESCRIPTORS && !fails(() => {
        return Object.defineProperty(createElement('div'), 'a', {
          get() { return 7; }
        }).a != 7;
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/indexed-object.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');

      const {split} = '';

      module.exports = fails(() => {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0);
      }) ? function (it) {
          return classof(it) == 'String' ? split.call(it, '') : Object(it);
        } : Object;
      /***/ }),

    /***/ './node_modules/core-js/internals/inherit-if-required.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ './node_modules/core-js/internals/object-set-prototype-of.js');

      module.exports = function (that, target, C) {
        const S = target.constructor;
        let P;
        if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
          setPrototypeOf(that, P);
        } return that;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/internal-state.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ './node_modules/core-js/internals/native-weak-map.js');
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const objectHas = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const sharedKey = __webpack_require__(/*! ../internals/shared-key */ './node_modules/core-js/internals/shared-key.js');
      const hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ './node_modules/core-js/internals/hidden-keys.js');

      const {WeakMap} = global;
      let set; let get; let
        has;

      const enforce = function (it) {
        return has(it) ? get(it) : set(it, {});
      };

      const getterFor = function (TYPE) {
        return function (it) {
          let state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError(`Incompatible receiver, ${TYPE} required`);
          } return state;
        };
      };

      if (NATIVE_WEAK_MAP) {
        const store = new WeakMap();
        const wmget = store.get;
        const wmhas = store.has;
        const wmset = store.set;
        set = function (it, metadata) {
          wmset.call(store, it, metadata);
          return metadata;
        };
        get = function (it) {
          return wmget.call(store, it) || {};
        };
        has = function (it) {
          return wmhas.call(store, it);
        };
      } else {
        const STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function (it, metadata) {
          hide(it, STATE, metadata);
          return metadata;
        };
        get = function (it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };
        has = function (it) {
          return objectHas(it, STATE);
        };
      }

      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/is-array-iterator-method.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \******************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const Iterators = __webpack_require__(/*! ../internals/iterators */ './node_modules/core-js/internals/iterators.js');

      const ITERATOR = wellKnownSymbol('iterator');
      const ArrayPrototype = Array.prototype;

      // check on default Array iterator
      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/is-array.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \*************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');

      // `IsArray` abstract operation
      // https://tc39.github.io/ecma262/#sec-isarray
      module.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == 'Array';
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/is-forced.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      const replacement = /#|\.prototype\./;

      const isForced = function (feature, detection) {
        const value = data[normalize(feature)];
        return value == POLYFILL ? true
          : value == NATIVE ? false
            : typeof detection === 'function' ? fails(detection)
              : !!detection;
      };

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };

      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';

      module.exports = isForced;
      /***/ }),

    /***/ './node_modules/core-js/internals/is-object.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/is-pure.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = false;
      /***/ }),

    /***/ './node_modules/core-js/internals/is-regexp.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const MATCH = wellKnownSymbol('match');

      // `IsRegExp` abstract operation
      // https://tc39.github.io/ecma262/#sec-isregexp
      module.exports = function (it) {
        let isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/iterate.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ './node_modules/core-js/internals/is-array-iterator-method.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const bind = __webpack_require__(/*! ../internals/bind-context */ './node_modules/core-js/internals/bind-context.js');
      const getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ './node_modules/core-js/internals/get-iterator-method.js');
      const callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ './node_modules/core-js/internals/call-with-safe-iteration-closing.js');

      const BREAK = {};

      var exports = module.exports = function (iterable, fn, that, ENTRIES, ITERATOR) {
        const boundFunction = bind(fn, that, ENTRIES ? 2 : 1);
        let iterator; let iterFn; let index; let length; let result; let
          step;

        if (ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (typeof iterFn !== 'function') throw TypeError('Target is not iterable');
          // optimisation for array iterators
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = toLength(iterable.length); length > index; index++) {
              result = ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
              if (result === BREAK) return BREAK;
            } return;
          }
          iterator = iterFn.call(iterable);
        }

        while (!(step = iterator.next()).done) {
          if (callWithSafeIterationClosing(iterator, boundFunction, step.value, ENTRIES) === BREAK) return BREAK;
        }
      };

      exports.BREAK = BREAK;
      /***/ }),

    /***/ './node_modules/core-js/internals/iterators-core.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ './node_modules/core-js/internals/object-get-prototype-of.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const IS_PURE = __webpack_require__(/*! ../internals/is-pure */ './node_modules/core-js/internals/is-pure.js');

      const ITERATOR = wellKnownSymbol('iterator');
      let BUGGY_SAFARI_ITERATORS = false;

      const returnThis = function () { return this; };

      // `%IteratorPrototype%` object
      // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
      let IteratorPrototype; let PrototypeOfArrayIteratorPrototype; let
        arrayIterator;

      if ([].keys) {
        arrayIterator = [].keys();
        // Safari 8 has buggy iterators w/o `next`
        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }

      if (IteratorPrototype == undefined) IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/iterators.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = {};
      /***/ }),

    /***/ './node_modules/core-js/internals/microtask.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ './node_modules/core-js/internals/object-get-own-property-descriptor.js').f;
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const macrotask = __webpack_require__(/*! ../internals/task */ './node_modules/core-js/internals/task.js').set;
      const userAgent = __webpack_require__(/*! ../internals/user-agent */ './node_modules/core-js/internals/user-agent.js');

      const MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
      const {process} = global;
      const {Promise} = global;
      const IS_NODE = classof(process) == 'process';
      // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
      const queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
      const queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

      let flush; let head; let last; let notify; let toggle; let node; let
        promise;

      // modern engines have queueMicrotask method
      if (!queueMicrotask) {
        flush = function () {
          let parent; let
            fn;
          if (IS_NODE && (parent = process.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (error) {
              if (head) notify();
              else last = undefined;
              throw error;
            }
          } last = undefined;
          if (parent) parent.enter();
        };

        // Node.js
        if (IS_NODE) {
          notify = function () {
            process.nextTick(flush);
          };
          // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
        } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
          toggle = true;
          node = document.createTextNode('');
          new MutationObserver(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
          notify = function () {
            node.data = toggle = !toggle;
          };
          // environments with maybe non-completely correct, but existent Promise
        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          promise = Promise.resolve(undefined);
          notify = function () {
            promise.then(flush);
          };
          // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout
        } else {
          notify = function () {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }
      }

      module.exports = queueMicrotask || function (fn) {
        const task = {fn, next: undefined};
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        } last = task;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/native-symbol.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      module.exports = !!Object.getOwnPropertySymbols && !fails(() => {
        // Chrome 38 Symbol has incorrect toString conversion
        // eslint-disable-next-line no-undef
        return !String(Symbol());
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/native-url.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const IS_PURE = __webpack_require__(/*! ../internals/is-pure */ './node_modules/core-js/internals/is-pure.js');

      const ITERATOR = wellKnownSymbol('iterator');

      module.exports = !fails(() => {
        const url = new URL('b?e=1', 'http://a');
        const {searchParams} = url;
        url.pathname = 'c%20d';
        return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?e=1'
    || searchParams.get('e') !== '1'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1';
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/native-weak-map.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ './node_modules/core-js/internals/function-to-string.js');

      const {WeakMap} = global;

      module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));
      /***/ }),

    /***/ './node_modules/core-js/internals/new-promise-capability.js':
    /*! ******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \***************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const aFunction = __webpack_require__(/*! ../internals/a-function */ './node_modules/core-js/internals/a-function.js');

      const PromiseCapability = function (C) {
        let resolve; let
          reject;
        this.promise = new C((($$resolve, $$reject) => {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        }));
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      };

      // 25.4.1.5 NewPromiseCapability(C)
      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-assign.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const objectKeys = __webpack_require__(/*! ../internals/object-keys */ './node_modules/core-js/internals/object-keys.js');
      const getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ './node_modules/core-js/internals/object-get-own-property-symbols.js');
      const propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ './node_modules/core-js/internals/object-property-is-enumerable.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ './node_modules/core-js/internals/indexed-object.js');

      const nativeAssign = Object.assign;

      // 19.1.2.1 Object.assign(target, source, ...)
      // should work with symbols and should have deterministic property order (V8 bug)
      module.exports = !nativeAssign || fails(() => {
        const A = {};
        const B = {};
        // eslint-disable-next-line no-undef
        const symbol = Symbol();
        const alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach((chr) => { B[chr] = chr; });
        return ({...A})[symbol] != 7 || objectKeys({...B}).join('') != alphabet;
      }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
          const T = toObject(target);
          const argumentsLength = arguments.length;
          let index = 1;
          const getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          const propertyIsEnumerable = propertyIsEnumerableModule.f;
          while (argumentsLength > index) {
            const S = IndexedObject(arguments[index++]);
            const keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
            const {length} = keys;
            let j = 0;
            var key;
            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
            }
          } return T;
        } : nativeAssign;
      /***/ }),

    /***/ './node_modules/core-js/internals/object-create.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ './node_modules/core-js/internals/object-define-properties.js');
      const enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ './node_modules/core-js/internals/enum-bug-keys.js');
      const hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ './node_modules/core-js/internals/hidden-keys.js');
      const html = __webpack_require__(/*! ../internals/html */ './node_modules/core-js/internals/html.js');
      const documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ './node_modules/core-js/internals/document-create-element.js');
      const sharedKey = __webpack_require__(/*! ../internals/shared-key */ './node_modules/core-js/internals/shared-key.js');
      const IE_PROTO = sharedKey('IE_PROTO');

      const PROTOTYPE = 'prototype';
      const Empty = function () { /* empty */ };

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        const iframe = documentCreateElement('iframe');
        let {length} = enumBugKeys;
        const lt = '<';
        const script = 'script';
        const gt = '>';
        const js = `java${script}:`;
        let iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        iframe.src = String(js);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(`${lt + script + gt}document.F=Object${lt}/${script}${gt}`);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
        return createDict();
      };

      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      module.exports = Object.create || function create(O, Properties) {
        let result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === undefined ? result : defineProperties(result, Properties);
      };

      hiddenKeys[IE_PROTO] = true;
      /***/ }),

    /***/ './node_modules/core-js/internals/object-define-properties.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \******************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const objectKeys = __webpack_require__(/*! ../internals/object-keys */ './node_modules/core-js/internals/object-keys.js');

      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        const keys = objectKeys(Properties);
        const {length} = keys;
        let i = 0;
        let key;
        while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
        return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-define-property.js':
    /*! ******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \***************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ './node_modules/core-js/internals/ie8-dom-define.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ './node_modules/core-js/internals/to-primitive.js');

      const nativeDefineProperty = Object.defineProperty;

      exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) {
          try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) { /* empty */ }
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-get-own-property-descriptor.js':
    /*! ******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \***************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ './node_modules/core-js/internals/object-property-is-enumerable.js');
      const createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ './node_modules/core-js/internals/create-property-descriptor.js');
      const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ './node_modules/core-js/internals/to-indexed-object.js');
      const toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ './node_modules/core-js/internals/to-primitive.js');
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ './node_modules/core-js/internals/ie8-dom-define.js');

      const nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

      exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) {
          try {
            return nativeGetOwnPropertyDescriptor(O, P);
          } catch (error) { /* empty */ }
        }
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-get-own-property-names.js':
    /*! *************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \************************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      const internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ './node_modules/core-js/internals/object-keys-internal.js');
      const enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ './node_modules/core-js/internals/enum-bug-keys.js');

      const hiddenKeys = enumBugKeys.concat('length', 'prototype');

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-get-own-property-symbols.js':
    /*! ***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      exports.f = Object.getOwnPropertySymbols;
      /***/ }),

    /***/ './node_modules/core-js/internals/object-get-prototype-of.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \****************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const sharedKey = __webpack_require__(/*! ../internals/shared-key */ './node_modules/core-js/internals/shared-key.js');
      const CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ './node_modules/core-js/internals/correct-prototype-getter.js');

      const IE_PROTO = sharedKey('IE_PROTO');
      const ObjectPrototype = Object.prototype;

      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor === 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        } return O instanceof Object ? ObjectPrototype : null;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-keys-internal.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \*************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ './node_modules/core-js/internals/to-indexed-object.js');
      const arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ './node_modules/core-js/internals/array-includes.js');
      const hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ './node_modules/core-js/internals/hidden-keys.js');

      const arrayIndexOf = arrayIncludes(false);

      module.exports = function (object, names) {
        const O = toIndexedObject(object);
        let i = 0;
        const result = [];
        let key;
        for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }
        return result;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-keys.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ './node_modules/core-js/internals/object-keys-internal.js');
      const enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ './node_modules/core-js/internals/enum-bug-keys.js');

      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/object-property-is-enumerable.js':
    /*! *************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \************************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      const {getOwnPropertyDescriptor} = Object;

      // Nashorn ~ JDK8 bug
      const NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({1: 2}, 1);

      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        const descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
      /***/ }),

    /***/ './node_modules/core-js/internals/object-set-prototype-of.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \****************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ './node_modules/core-js/internals/validate-set-prototype-of-arguments.js');

      // Works with __proto__ only. Old v8 can't work with null proto objects.
      /* eslint-disable no-proto */
      module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
        let correctSetter = false;
        const test = {};
        let setter;
        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          setter.call(test, []);
          correctSetter = test instanceof Array;
        } catch (error) { /* empty */ }
        return function setPrototypeOf(O, proto) {
          validateSetPrototypeOfArguments(O, proto);
          if (correctSetter) setter.call(O, proto);
          else O.__proto__ = proto;
          return O;
        };
      }()) : undefined);
      /***/ }),

    /***/ './node_modules/core-js/internals/object-to-string.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \*********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const classof = __webpack_require__(/*! ../internals/classof */ './node_modules/core-js/internals/classof.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const TO_STRING_TAG = wellKnownSymbol('toStringTag');
      const test = {};

      test[TO_STRING_TAG] = 'z';

      // `Object.prototype.toString` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
      module.exports = String(test) !== '[object z]' ? function toString() {
        return `[object ${classof(this)}]`;
      } : test.toString;
      /***/ }),

    /***/ './node_modules/core-js/internals/own-keys.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \*************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ './node_modules/core-js/internals/object-get-own-property-names.js');
      const getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ './node_modules/core-js/internals/object-get-own-property-symbols.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');

      const {Reflect} = global;

      // all object keys, includes non-enumerable and symbols
      module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
        const keys = getOwnPropertyNamesModule.f(anObject(it));
        const getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/path.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \*********************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      /***/ }),

    /***/ './node_modules/core-js/internals/perform.js':
    /*! ***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      module.exports = function (exec) {
        try {
          return {error: false, value: exec()};
        } catch (error) {
          return {error: true, value: error};
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/promise-resolve.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ './node_modules/core-js/internals/new-promise-capability.js');

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        const promiseCapability = newPromiseCapability.f(C);
        const {resolve} = promiseCapability;
        resolve(x);
        return promiseCapability.promise;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/punycode-to-ascii.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/internals/punycode-to-ascii.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
      const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
      const base = 36;
      const tMin = 1;
      const tMax = 26;
      const skew = 38;
      const damp = 700;
      const initialBias = 72;
      const initialN = 128; // 0x80
      const delimiter = '-'; // '\x2D'
      const regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
      const regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
      const OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
      const baseMinusTMin = base - tMin;
      const {floor} = Math;
      const stringFromCharCode = String.fromCharCode;

      /**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
      const ucs2decode = function (string) {
        const output = [];
        let counter = 0;
        const {length} = string;
        while (counter < length) {
          const value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            const extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // It's an unmatched surrogate; only append this code unit, in case the
              // next code unit is the high surrogate of a surrogate pair.
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      };

      /**
 * Converts a digit/integer into a basic code point.
 */
      const digitToBasic = function (digit) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26);
      };

      /**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
      const adapt = function (delta, numPoints, firstTime) {
        let k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };

      /**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
      // eslint-disable-next-line  max-statements
      const encode = function (input) {
        const output = [];

        // Convert the input in UCS-2 to an array of Unicode code points.
        input = ucs2decode(input);

        // Cache the length.
        const inputLength = input.length;

        // Initialize the state.
        let n = initialN;
        let delta = 0;
        let bias = initialBias;
        let i; let
          currentValue;

        // Handle the basic code points.
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }

        const basicLength = output.length; // number of basic code points.
        let handledCPCount = basicLength; // number of code points that have been handled;

        // Finish the basic string with a delimiter unless it's empty.
        if (basicLength) {
          output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {
          // All non-basic code points < n have been handled already. Find the next larger one:
          let m = maxInt;
          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }

          // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
          const handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            throw RangeError(OVERFLOW_ERROR);
          }

          delta += (m - n) * handledCPCountPlusOne;
          n = m;

          for (i = 0; i < input.length; i++) {
            currentValue = input[i];
            if (currentValue < n && ++delta > maxInt) {
              throw RangeError(OVERFLOW_ERROR);
            }
            if (currentValue == n) {
              // Represent delta as a generalized variable-length integer.
              let q = delta;
              for (let k = base; /* no condition */; k += base) {
                const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                if (q < t) {
                  break;
                }
                const qMinusT = q - t;
                const baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                q = floor(qMinusT / baseMinusT);
              }

              output.push(stringFromCharCode(digitToBasic(q)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }

          ++delta;
          ++n;
        }
        return output.join('');
      };

      module.exports = function (input) {
        const encoded = [];
        const labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
        let i; let
          label;
        for (i = 0; i < labels.length; i++) {
          label = labels[i];
          encoded.push(regexNonASCII.test(label) ? `xn--${encode(label)}` : label);
        }
        return encoded.join('.');
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/redefine-all.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');

      module.exports = function (target, src, options) {
        for (const key in src) redefine(target, key, src[key], options);
        return target;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/redefine.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \*************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const shared = __webpack_require__(/*! ../internals/shared */ './node_modules/core-js/internals/shared.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const setGlobal = __webpack_require__(/*! ../internals/set-global */ './node_modules/core-js/internals/set-global.js');
      const nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ './node_modules/core-js/internals/function-to-string.js');
      const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ './node_modules/core-js/internals/internal-state.js');

      const getInternalState = InternalStateModule.get;
      const enforceInternalState = InternalStateModule.enforce;
      const TEMPLATE = String(nativeFunctionToString).split('toString');

      shared('inspectSource', (it) => {
        return nativeFunctionToString.call(it);
      });

      (module.exports = function (O, key, value, options) {
        const unsafe = options ? !!options.unsafe : false;
        let simple = options ? !!options.enumerable : false;
        const noTargetGet = options ? !!options.noTargetGet : false;
        if (typeof value === 'function') {
          if (typeof key === 'string' && !has(value, 'name')) hide(value, 'name', key);
          enforceInternalState(value).source = TEMPLATE.join(typeof key === 'string' ? key : '');
        }
        if (O === global) {
          if (simple) O[key] = value;
          else setGlobal(key, value);
          return;
        } if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple) O[key] = value;
        else hide(O, key, value);
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString() {
        return typeof this === 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/regexp-exec-abstract.js':
    /*! ****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \*************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const classof = __webpack_require__(/*! ./classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const regexpExec = __webpack_require__(/*! ./regexp-exec */ './node_modules/core-js/internals/regexp-exec.js');

      // `RegExpExec` abstract operation
      // https://tc39.github.io/ecma262/#sec-regexpexec
      module.exports = function (R, S) {
        const {exec} = R;
        if (typeof exec === 'function') {
          const result = exec.call(R, S);
          if (typeof result !== 'object') {
            throw TypeError('RegExp exec method returned something other than an Object or null');
          }
          return result;
        }

        if (classof(R) !== 'RegExp') {
          throw TypeError('RegExp#exec called on incompatible receiver');
        }

        return regexpExec.call(R, S);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/regexp-exec.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const regexpFlags = __webpack_require__(/*! ./regexp-flags */ './node_modules/core-js/internals/regexp-flags.js');

      const nativeExec = RegExp.prototype.exec;
      // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.
      const nativeReplace = String.prototype.replace;

      let patchedExec = nativeExec;

      const UPDATES_LAST_INDEX_WRONG = (function () {
        const re1 = /a/;
        const re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      }());

      // nonparticipating capturing group, copied from es5-shim's String#split patch.
      const NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

      const PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

      if (PATCH) {
        patchedExec = function exec(str) {
          const re = this;
          let lastIndex; let reCopy; let match; let
            i;

          if (NPCG_INCLUDED) {
            reCopy = new RegExp(`^${re.source}$(?!\\s)`, regexpFlags.call(re));
          }
          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

          match = nativeExec.call(re, str);

          if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          return match;
        };
      }

      module.exports = patchedExec;
      /***/ }),

    /***/ './node_modules/core-js/internals/regexp-flags.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');

      // `RegExp.prototype.flags` getter implementation
      // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
      module.exports = function () {
        const that = anObject(this);
        let result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/require-object-coercible.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \******************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports) {
      // `RequireObjectCoercible` abstract operation
      // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
      module.exports = function (it) {
        if (it == undefined) throw TypeError(`Can't call method on ${it}`);
        return it;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/set-global.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');

      module.exports = function (key, value) {
        try {
          hide(global, key, value);
        } catch (error) {
          global[key] = value;
        } return value;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/set-species.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ './node_modules/core-js/internals/get-built-in.js');
      const definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');

      const SPECIES = wellKnownSymbol('species');

      module.exports = function (CONSTRUCTOR_NAME) {
        const C = getBuiltIn(CONSTRUCTOR_NAME);
        const defineProperty = definePropertyModule.f;
        if (DESCRIPTORS && C && !C[SPECIES]) {
          defineProperty(C, SPECIES, {
            configurable: true,
            get() { return this; }
          });
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/set-to-string-tag.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const defineProperty = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js').f;
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const TO_STRING_TAG = wellKnownSymbol('toStringTag');

      module.exports = function (it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, {configurable: true, value: TAG});
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/shared-key.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const shared = __webpack_require__(/*! ../internals/shared */ './node_modules/core-js/internals/shared.js');
      const uid = __webpack_require__(/*! ../internals/uid */ './node_modules/core-js/internals/uid.js');

      const keys = shared('keys');

      module.exports = function (key) {
        return keys[key] || (keys[key] = uid(key));
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/shared.js':
    /*! **************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const setGlobal = __webpack_require__(/*! ../internals/set-global */ './node_modules/core-js/internals/set-global.js');
      const IS_PURE = __webpack_require__(/*! ../internals/is-pure */ './node_modules/core-js/internals/is-pure.js');

      const SHARED = '__core-js_shared__';
      const store = global[SHARED] || setGlobal(SHARED, {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.1.3',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
      });
      /***/ }),

    /***/ './node_modules/core-js/internals/sloppy-array-method.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      module.exports = function (METHOD_NAME, argument) {
        const method = [][METHOD_NAME];
        return !method || !fails(() => {
          // eslint-disable-next-line no-useless-call,no-throw-literal
          method.call(null, argument || (() => { throw 1; }), 1);
        });
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/species-constructor.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const aFunction = __webpack_require__(/*! ../internals/a-function */ './node_modules/core-js/internals/a-function.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const SPECIES = wellKnownSymbol('species');

      // `SpeciesConstructor` abstract operation
      // https://tc39.github.io/ecma262/#sec-speciesconstructor
      module.exports = function (O, defaultConstructor) {
        const C = anObject(O).constructor;
        let S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/string-at.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js');
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');

      // CONVERT_TO_STRING: true  -> String#at
      // CONVERT_TO_STRING: false -> String#codePointAt
      module.exports = function (that, pos, CONVERT_TO_STRING) {
        const S = String(requireObjectCoercible(that));
        const position = toInteger(pos);
        const size = S.length;
        let first; let
          second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/string-trim.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');
      const whitespaces = __webpack_require__(/*! ../internals/whitespaces */ './node_modules/core-js/internals/whitespaces.js');

      const whitespace = `[${whitespaces}]`;
      const ltrim = RegExp(`^${whitespace}${whitespace}*`);
      const rtrim = RegExp(`${whitespace + whitespace}*$`);

      // 1 -> String#trimStart
      // 2 -> String#trimEnd
      // 3 -> String#trim
      module.exports = function (string, TYPE) {
        string = String(requireObjectCoercible(string));
        if (TYPE & 1) string = string.replace(ltrim, '');
        if (TYPE & 2) string = string.replace(rtrim, '');
        return string;
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/task.js':
    /*! ************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \*********************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const bind = __webpack_require__(/*! ../internals/bind-context */ './node_modules/core-js/internals/bind-context.js');
      const html = __webpack_require__(/*! ../internals/html */ './node_modules/core-js/internals/html.js');
      const createElement = __webpack_require__(/*! ../internals/document-create-element */ './node_modules/core-js/internals/document-create-element.js');

      const {location} = global;
      let set = global.setImmediate;
      let clear = global.clearImmediate;
      const {process} = global;
      const {MessageChannel} = global;
      const {Dispatch} = global;
      let counter = 0;
      const queue = {};
      const ONREADYSTATECHANGE = 'onreadystatechange';
      let defer; let channel; let
        port;

      const run = function (id) {
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          const fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      const runner = function (id) {
        return function () {
          run(id);
        };
      };

      const listener = function (event) {
        run(event.data);
      };

      const post = function (id) {
        // old engines have not location.origin
        global.postMessage(`${id}`, `${location.protocol}//${location.host}`);
      };

      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!set || !clear) {
        set = function setImmediate(fn) {
          const args = [];
          let i = 1;
          while (arguments.length > i) args.push(arguments[i++]);
          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            (typeof fn === 'function' ? fn : Function(fn)).apply(undefined, args);
          };
          defer(counter);
          return counter;
        };
        clear = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (classof(process) == 'process') {
          defer = function (id) {
            process.nextTick(runner(id));
          };
          // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
          defer = function (id) {
            Dispatch.now(runner(id));
          };
          // Browsers with MessageChannel, includes WebWorkers
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind(port.postMessage, port, 1);
          // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage === 'function' && !global.importScripts && !fails(post)) {
          defer = post;
          global.addEventListener('message', listener, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in createElement('script')) {
          defer = function (id) {
            html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run(id);
            };
          };
          // Rest old browsers
        } else {
          defer = function (id) {
            setTimeout(runner(id), 0);
          };
        }
      }

      module.exports = {
        set,
        clear
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/to-absolute-index.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js');

      const {max} = Math;
      const {min} = Math;

      // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
      module.exports = function (index, length) {
        const integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/to-indexed-object.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      // toObject with fallback for non-array-like ES3 strings
      const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ './node_modules/core-js/internals/indexed-object.js');
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');

      module.exports = function (it) {
        return IndexedObject(requireObjectCoercible(it));
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/to-integer.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      const {ceil} = Math;
      const {floor} = Math;

      // `ToInteger` abstract operation
      // https://tc39.github.io/ecma262/#sec-tointeger
      module.exports = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/to-length.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js');

      const {min} = Math;

      // `ToLength` abstract operation
      // https://tc39.github.io/ecma262/#sec-tolength
      module.exports = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/to-object.js':
    /*! *****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');

      // `ToObject` abstract operation
      // https://tc39.github.io/ecma262/#sec-toobject
      module.exports = function (argument) {
        return Object(requireObjectCoercible(argument));
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/to-primitive.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');

      // 7.1.1 ToPrimitive(input [, PreferredType])
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        let fn; let
          val;
        if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError('Can\'t convert object to primitive value');
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/uid.js':
    /*! ***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \********************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      let id = 0;
      const postfix = Math.random();

      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/user-agent.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');

      const {navigator} = global;

      module.exports = navigator && navigator.userAgent || '';
      /***/ }),

    /***/ './node_modules/core-js/internals/validate-set-prototype-of-arguments.js':
    /*! *******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \****************************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');

      module.exports = function (O, proto) {
        anObject(O);
        if (!isObject(proto) && proto !== null) {
          throw TypeError(`Can't set ${String(proto)} as a prototype`);
        }
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/well-known-symbol.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const shared = __webpack_require__(/*! ../internals/shared */ './node_modules/core-js/internals/shared.js');
      const uid = __webpack_require__(/*! ../internals/uid */ './node_modules/core-js/internals/uid.js');
      const NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ './node_modules/core-js/internals/native-symbol.js');

      const {Symbol} = global;
      const store = shared('wks');

      module.exports = function (name) {
        return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)(`Symbol.${name}`));
      };
      /***/ }),

    /***/ './node_modules/core-js/internals/whitespaces.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      // a string of all valid unicode whitespaces
      // eslint-disable-next-line max-len
      module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.concat.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const isArray = __webpack_require__(/*! ../internals/is-array */ './node_modules/core-js/internals/is-array.js');
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const createProperty = __webpack_require__(/*! ../internals/create-property */ './node_modules/core-js/internals/create-property.js');
      const arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ './node_modules/core-js/internals/array-species-create.js');
      const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ './node_modules/core-js/internals/array-method-has-species-support.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
      const MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      const MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

      const IS_CONCAT_SPREADABLE_SUPPORT = !fails(() => {
        const array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });

      const SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

      const isConcatSpreadable = function (O) {
        if (!isObject(O)) return false;
        const spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
      };

      const FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

      // `Array.prototype.concat` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.concat
      // with adding support of @@isConcatSpreadable and @@species
      $({target: 'Array', proto: true, forced: FORCED}, {
        concat: function concat(arg) { // eslint-disable-line no-unused-vars
          const O = toObject(this);
          const A = arraySpeciesCreate(O, 0);
          let n = 0;
          let i; let k; let length; let len; let
            E;
          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
              len = toLength(E.length);
              if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
            } else {
              if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }
          A.length = n;
          return A;
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.filter.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const arrayMethods = __webpack_require__(/*! ../internals/array-methods */ './node_modules/core-js/internals/array-methods.js');
      const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ './node_modules/core-js/internals/array-method-has-species-support.js');

      const internalFilter = arrayMethods(2);
      const SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

      // `Array.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      // with adding support of @@species
      $({target: 'Array', proto: true, forced: !SPECIES_SUPPORT}, {
        filter: function filter(callbackfn /* , thisArg */) {
          return internalFilter(this, callbackfn, arguments[1]);
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.find.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const arrayMethods = __webpack_require__(/*! ../internals/array-methods */ './node_modules/core-js/internals/array-methods.js');
      const addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ './node_modules/core-js/internals/add-to-unscopables.js');

      const internalFind = arrayMethods(5);
      const FIND = 'find';
      let SKIPS_HOLES = true;

      // Shouldn't skip holes
      if (FIND in []) Array(1)[FIND](() => { SKIPS_HOLES = false; });

      // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      $({target: 'Array', proto: true, forced: SKIPS_HOLES}, {
        find: function find(callbackfn /* , that = undefined */) {
          return internalFind(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables(FIND);
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.flat.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.flat.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ './node_modules/core-js/internals/flatten-into-array.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js');
      const arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ './node_modules/core-js/internals/array-species-create.js');

      // `Array.prototype.flat` method
      // https://github.com/tc39/proposal-flatMap
      $({target: 'Array', proto: true}, {
        flat: function flat(/* depthArg = 1 */) {
          const depthArg = arguments[0];
          const O = toObject(this);
          const sourceLen = toLength(O.length);
          const A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
          return A;
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.iterator.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ './node_modules/core-js/internals/to-indexed-object.js');
      const addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ './node_modules/core-js/internals/add-to-unscopables.js');
      const Iterators = __webpack_require__(/*! ../internals/iterators */ './node_modules/core-js/internals/iterators.js');
      const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ './node_modules/core-js/internals/internal-state.js');
      const defineIterator = __webpack_require__(/*! ../internals/define-iterator */ './node_modules/core-js/internals/define-iterator.js');

      const ARRAY_ITERATOR = 'Array Iterator';
      const setInternalState = InternalStateModule.set;
      const getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

      // `Array.prototype.entries` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.entries
      // `Array.prototype.keys` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.keys
      // `Array.prototype.values` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.values
      // `Array.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
      // `CreateArrayIterator` internal method
      // https://tc39.github.io/ecma262/#sec-createarrayiterator
      module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated), // target
          index: 0, // next index
          kind // kind
        });
        // `%ArrayIteratorPrototype%.next` method
        // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
      }, function () {
        const state = getInternalState(this);
        const {target} = state;
        const {kind} = state;
        const index = state.index++;
        if (!target || index >= target.length) {
          state.target = undefined;
          return {value: undefined, done: true};
        }
        if (kind == 'keys') return {value: index, done: false};
        if (kind == 'values') return {value: target[index], done: false};
        return {value: [index, target[index]], done: false};
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values%
      // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
      // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
      Iterators.Arguments = Iterators.Array;

      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.join.js':
    /*! *******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \****************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ './node_modules/core-js/internals/indexed-object.js');
      const toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ './node_modules/core-js/internals/to-indexed-object.js');
      const sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ './node_modules/core-js/internals/sloppy-array-method.js');

      const nativeJoin = [].join;

      const ES3_STRINGS = IndexedObject != Object;
      const SLOPPY_METHOD = sloppyArrayMethod('join', ',');

      // `Array.prototype.join` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.join
      $({target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD}, {
        join: function join(separator) {
          return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.map.js':
    /*! ******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \***************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const arrayMethods = __webpack_require__(/*! ../internals/array-methods */ './node_modules/core-js/internals/array-methods.js');
      const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ './node_modules/core-js/internals/array-method-has-species-support.js');

      const internalMap = arrayMethods(1);
      const SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

      // `Array.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      // with adding support of @@species
      $({target: 'Array', proto: true, forced: !SPECIES_SUPPORT}, {
        map: function map(callbackfn /* , thisArg */) {
          return internalMap(this, callbackfn, arguments[1]);
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.splice.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ './node_modules/core-js/internals/to-absolute-index.js');
      const toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ './node_modules/core-js/internals/array-species-create.js');
      const createProperty = __webpack_require__(/*! ../internals/create-property */ './node_modules/core-js/internals/create-property.js');
      const arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ './node_modules/core-js/internals/array-method-has-species-support.js');

      const {max} = Math;
      const {min} = Math;
      const MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      const MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

      const SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

      // `Array.prototype.splice` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.splice
      // with adding support of @@species
      $({target: 'Array', proto: true, forced: !SPECIES_SUPPORT}, {
        splice: function splice(start, deleteCount /* , ...items */) {
          const O = toObject(this);
          const len = toLength(O.length);
          const actualStart = toAbsoluteIndex(start, len);
          const argumentsLength = arguments.length;
          let insertCount; let actualDeleteCount; let A; let k; let from; let
            to;
          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
          }
          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
            throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }
          A = arraySpeciesCreate(O, actualDeleteCount);
          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
          }
          A.length = actualDeleteCount;
          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount;
              to = k + insertCount;
              if (from in O) O[to] = O[from];
              else delete O[to];
            }
            for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from in O) O[to] = O[from];
              else delete O[to];
            }
          }
          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }
          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.array.unscopables.flat.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unscopables.flat.js ***!
  \****************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      // this method was added to unscopables after implementation
      // in popular engines, so it's moved to a separate module
      const addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ './node_modules/core-js/internals/add-to-unscopables.js');

      addToUnscopables('flat');
      /***/ }),

    /***/ './node_modules/core-js/modules/es.function.name.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const defineProperty = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js').f;

      const FunctionPrototype = Function.prototype;
      const FunctionPrototypeToString = FunctionPrototype.toString;
      const nameRE = /^\s*function ([^ (]*)/;
      const NAME = 'name';

      // Function instances `.name` property
      // https://tc39.github.io/ecma262/#sec-function-instances-name
      if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
        defineProperty(FunctionPrototype, NAME, {
          configurable: true,
          get() {
            try {
              return FunctionPrototypeToString.call(this).match(nameRE)[1];
            } catch (error) {
              return '';
            }
          }
        });
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es.number.constructor.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const isForced = __webpack_require__(/*! ../internals/is-forced */ './node_modules/core-js/internals/is-forced.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ './node_modules/core-js/internals/inherit-if-required.js');
      const toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ './node_modules/core-js/internals/to-primitive.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const create = __webpack_require__(/*! ../internals/object-create */ './node_modules/core-js/internals/object-create.js');
      const getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ './node_modules/core-js/internals/object-get-own-property-names.js').f;
      const getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ './node_modules/core-js/internals/object-get-own-property-descriptor.js').f;
      const defineProperty = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js').f;
      const internalStringTrim = __webpack_require__(/*! ../internals/string-trim */ './node_modules/core-js/internals/string-trim.js');

      const NUMBER = 'Number';
      const NativeNumber = global[NUMBER];
      const NumberPrototype = NativeNumber.prototype;

      // Opera ~12 has broken Object#toString
      const BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;
      const NATIVE_TRIM = 'trim' in String.prototype;

      // `ToNumber` abstract operation
      // https://tc39.github.io/ecma262/#sec-tonumber
      const toNumber = function (argument) {
        let it = toPrimitive(argument, false);
        let first; let third; let radix; let maxCode; let digits; let length; let i; let
          code;
        if (typeof it === 'string' && it.length > 2) {
          it = NATIVE_TRIM ? it.trim() : internalStringTrim(it, 3);
          first = it.charCodeAt(0);
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
              case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
              default: return +it;
            }
            digits = it.slice(2);
            length = digits.length;
            for (i = 0; i < length; i++) {
              code = digits.charCodeAt(i);
              // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols
              if (code < 48 || code > maxCode) return NaN;
            } return parseInt(digits, radix);
          }
        } return +it;
      };

      // `Number` constructor
      // https://tc39.github.io/ecma262/#sec-number-constructor
      if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
        var NumberWrapper = function Number(value) {
          const it = arguments.length < 1 ? 0 : value;
          const that = this;
          return that instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(() => { NumberPrototype.valueOf.call(that); }) : classof(that) != NUMBER)
            ? inheritIfRequired(new NativeNumber(toNumber(it)), that, NumberWrapper) : toNumber(it);
        };
        for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
          // ES3:
            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    + 'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'
    + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
          ).split(','), j = 0, key; keys.length > j; j++) {
          if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
            defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
          }
        }
        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global, NUMBER, NumberWrapper);
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es.object.assign.js':
    /*! **********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \********************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const assign = __webpack_require__(/*! ../internals/object-assign */ './node_modules/core-js/internals/object-assign.js');

      // `Object.assign` method
      // https://tc39.github.io/ecma262/#sec-object.assign
      $({target: 'Object', stat: true, forced: Object.assign !== assign}, {
        assign
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.object.keys.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const nativeKeys = __webpack_require__(/*! ../internals/object-keys */ './node_modules/core-js/internals/object-keys.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      const FAILS_ON_PRIMITIVES = fails(() => { nativeKeys(1); });

      // `Object.keys` method
      // https://tc39.github.io/ecma262/#sec-object.keys
      $({target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES}, {
        keys: function keys(it) {
          return nativeKeys(toObject(it));
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.object.to-string.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const toString = __webpack_require__(/*! ../internals/object-to-string */ './node_modules/core-js/internals/object-to-string.js');

      const ObjectPrototype = Object.prototype;

      // `Object.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
      if (toString !== ObjectPrototype.toString) {
        redefine(ObjectPrototype, 'toString', toString, {unsafe: true});
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es.promise.finally.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \*********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ './node_modules/core-js/internals/get-built-in.js');
      const speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ './node_modules/core-js/internals/species-constructor.js');
      const promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ './node_modules/core-js/internals/promise-resolve.js');

      // `Promise.prototype.finally` method
      // https://tc39.github.io/ecma262/#sec-promise.prototype.finally
      $({target: 'Promise', proto: true, real: true}, {
        finally(onFinally) {
          const C = speciesConstructor(this, getBuiltIn('Promise'));
          const isFunction = typeof onFinally === 'function';
          return this.then(
            isFunction ? (x) => {
              return promiseResolve(C, onFinally()).then(() => { return x; });
            } : onFinally,
            isFunction ? (e) => {
              return promiseResolve(C, onFinally()).then(() => { throw e; });
            } : onFinally
          );
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.promise.js':
    /*! ****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \*************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const IS_PURE = __webpack_require__(/*! ../internals/is-pure */ './node_modules/core-js/internals/is-pure.js');
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const path = __webpack_require__(/*! ../internals/path */ './node_modules/core-js/internals/path.js');
      const redefineAll = __webpack_require__(/*! ../internals/redefine-all */ './node_modules/core-js/internals/redefine-all.js');
      const setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ './node_modules/core-js/internals/set-to-string-tag.js');
      const setSpecies = __webpack_require__(/*! ../internals/set-species */ './node_modules/core-js/internals/set-species.js');
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const aFunction = __webpack_require__(/*! ../internals/a-function */ './node_modules/core-js/internals/a-function.js');
      const anInstance = __webpack_require__(/*! ../internals/an-instance */ './node_modules/core-js/internals/an-instance.js');
      const classof = __webpack_require__(/*! ../internals/classof-raw */ './node_modules/core-js/internals/classof-raw.js');
      const iterate = __webpack_require__(/*! ../internals/iterate */ './node_modules/core-js/internals/iterate.js');
      const checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ './node_modules/core-js/internals/check-correctness-of-iteration.js');
      const speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ './node_modules/core-js/internals/species-constructor.js');
      const task = __webpack_require__(/*! ../internals/task */ './node_modules/core-js/internals/task.js').set;
      const microtask = __webpack_require__(/*! ../internals/microtask */ './node_modules/core-js/internals/microtask.js');
      const promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ './node_modules/core-js/internals/promise-resolve.js');
      const hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ './node_modules/core-js/internals/host-report-errors.js');
      const newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ './node_modules/core-js/internals/new-promise-capability.js');
      const perform = __webpack_require__(/*! ../internals/perform */ './node_modules/core-js/internals/perform.js');
      const userAgent = __webpack_require__(/*! ../internals/user-agent */ './node_modules/core-js/internals/user-agent.js');
      const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ './node_modules/core-js/internals/internal-state.js');
      const isForced = __webpack_require__(/*! ../internals/is-forced */ './node_modules/core-js/internals/is-forced.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const SPECIES = wellKnownSymbol('species');
      const PROMISE = 'Promise';
      const getInternalState = InternalStateModule.get;
      const setInternalState = InternalStateModule.set;
      const getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      let PromiseConstructor = global[PROMISE];
      const {TypeError} = global;
      const {document} = global;
      const {process} = global;
      const $fetch = global.fetch;
      const versions = process && process.versions;
      const v8 = versions && versions.v8 || '';
      let newPromiseCapability = newPromiseCapabilityModule.f;
      const newGenericPromiseCapability = newPromiseCapability;
      const IS_NODE = classof(process) == 'process';
      const DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
      const UNHANDLED_REJECTION = 'unhandledrejection';
      const REJECTION_HANDLED = 'rejectionhandled';
      const PENDING = 0;
      const FULFILLED = 1;
      const REJECTED = 2;
      const HANDLED = 1;
      const UNHANDLED = 2;
      let Internal; let OwnPromiseCapability; let
        PromiseWrapper;

      const FORCED = isForced(PROMISE, () => {
        // correct subclassing with @@species support
        const promise = PromiseConstructor.resolve(1);
        const empty = function () { /* empty */ };
        const FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
          exec(empty, empty);
        };
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return !((IS_NODE || typeof PromiseRejectionEvent === 'function')
    && (!IS_PURE || promise.finally)
    && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0
    && userAgent.indexOf('Chrome/66') === -1);
      });

      const INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration((iterable) => {
        PromiseConstructor.all(iterable).catch(() => { /* empty */ });
      });

      // helpers
      const isThenable = function (it) {
        let then;
        return isObject(it) && typeof (then = it.then) === 'function' ? then : false;
      };

      const notify = function (promise, state, isReject) {
        if (state.notified) return;
        state.notified = true;
        const chain = state.reactions;
        microtask(() => {
          const {value} = state;
          const ok = state.state == FULFILLED;
          let i = 0;
          const run = function (reaction) {
            const handler = ok ? reaction.ok : reaction.fail;
            const {resolve} = reaction;
            const {reject} = reaction;
            const {domain} = reaction;
            let result; let then; let
              exited;
            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
                  state.rejection = HANDLED;
                }
                if (handler === true) result = value;
                else {
                  if (domain) domain.enter();
                  result = handler(value); // may throw
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (error) {
              if (domain && !exited) domain.exit();
              reject(error);
            }
          };
          while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(promise, state);
        });
      };

      const dispatchEvent = function (name, promise, reason) {
        let event; let
          handler;
        if (DISPATCH_EVENT) {
          event = document.createEvent('Event');
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global.dispatchEvent(event);
        } else event = {promise, reason};
        if (handler = global[`on${name}`]) handler(event);
        else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
      };

      var onUnhandled = function (promise, state) {
        task.call(global, () => {
          const {value} = state;
          const IS_UNHANDLED = isUnhandled(state);
          let result;
          if (IS_UNHANDLED) {
            result = perform(() => {
              if (IS_NODE) {
                process.emit('unhandledRejection', value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };

      var isUnhandled = function (state) {
        return state.rejection !== HANDLED && !state.parent;
      };

      var onHandleUnhandled = function (promise, state) {
        task.call(global, () => {
          if (IS_NODE) {
            process.emit('rejectionHandled', promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };

      const bind = function (fn, promise, state, unwrap) {
        return function (value) {
          fn(promise, state, value, unwrap);
        };
      };

      const internalReject = function (promise, state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(promise, state, true);
      };

      var internalResolve = function (promise, state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        try {
          if (promise === value) throw TypeError('Promise can\'t be resolved itself');
          const then = isThenable(value);
          if (then) {
            microtask(() => {
              const wrapper = {done: false};
              try {
                then.call(value,
                  bind(internalResolve, promise, wrapper, state),
                  bind(internalReject, promise, wrapper, state));
              } catch (error) {
                internalReject(promise, wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(promise, state, false);
          }
        } catch (error) {
          internalReject(promise, {done: false}, error, state);
        }
      };

      // constructor polyfill
      if (FORCED) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
          anInstance(this, PromiseConstructor, PROMISE);
          aFunction(executor);
          Internal.call(this);
          const state = getInternalState(this);
          try {
            executor(bind(internalResolve, this, state), bind(internalReject, this, state));
          } catch (error) {
            internalReject(this, state, error);
          }
        };
        // eslint-disable-next-line no-unused-vars
        Internal = function Promise(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
          });
        };
        Internal.prototype = redefineAll(PromiseConstructor.prototype, {
          // `Promise.prototype.then` method
          // https://tc39.github.io/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            const state = getInternalPromiseState(this);
            const reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled === 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected === 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(this, state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
          catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });
        OwnPromiseCapability = function () {
          const promise = new Internal();
          const state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, promise, state);
          this.reject = bind(internalReject, promise, state);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
          return C === PromiseConstructor || C === PromiseWrapper
            ? new OwnPromiseCapability(C)
            : newGenericPromiseCapability(C);
        };

        // wrap fetch result
        if (!IS_PURE && typeof $fetch === 'function') {
          $({global: true, enumerable: true, forced: true}, {
          // eslint-disable-next-line no-unused-vars
            fetch: function fetch(input) {
              return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
            }
          });
        }
      }

      $({global: true, wrap: true, forced: FORCED}, {
        Promise: PromiseConstructor
      });

      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);

      PromiseWrapper = path[PROMISE];

      // statics
      $({target: PROMISE, stat: true, forced: FORCED}, {
        // `Promise.reject` method
        // https://tc39.github.io/ecma262/#sec-promise.reject
        reject: function reject(r) {
          const capability = newPromiseCapability(this);
          capability.reject.call(undefined, r);
          return capability.promise;
        }
      });

      $({target: PROMISE, stat: true, forced: IS_PURE || FORCED}, {
        // `Promise.resolve` method
        // https://tc39.github.io/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });

      $({target: PROMISE, stat: true, forced: INCORRECT_ITERATION}, {
        // `Promise.all` method
        // https://tc39.github.io/ecma262/#sec-promise.all
        all: function all(iterable) {
          const C = this;
          const capability = newPromiseCapability(C);
          const {resolve} = capability;
          const {reject} = capability;
          const result = perform(() => {
            const $promiseResolve = aFunction(C.resolve);
            const values = [];
            let counter = 0;
            let remaining = 1;
            iterate(iterable, (promise) => {
              const index = counter++;
              let alreadyCalled = false;
              values.push(undefined);
              remaining++;
              $promiseResolve.call(C, promise).then((value) => {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.github.io/ecma262/#sec-promise.race
        race: function race(iterable) {
          const C = this;
          const capability = newPromiseCapability(C);
          const {reject} = capability;
          const result = perform(() => {
            const $promiseResolve = aFunction(C.resolve);
            iterate(iterable, (promise) => {
              $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.regexp.constructor.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const isForced = __webpack_require__(/*! ../internals/is-forced */ './node_modules/core-js/internals/is-forced.js');
      const inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ './node_modules/core-js/internals/inherit-if-required.js');
      const defineProperty = __webpack_require__(/*! ../internals/object-define-property */ './node_modules/core-js/internals/object-define-property.js').f;
      const getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ './node_modules/core-js/internals/object-get-own-property-names.js').f;
      const isRegExp = __webpack_require__(/*! ../internals/is-regexp */ './node_modules/core-js/internals/is-regexp.js');
      const getFlags = __webpack_require__(/*! ../internals/regexp-flags */ './node_modules/core-js/internals/regexp-flags.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const setSpecies = __webpack_require__(/*! ../internals/set-species */ './node_modules/core-js/internals/set-species.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const MATCH = wellKnownSymbol('match');
      const NativeRegExp = global.RegExp;
      const RegExpPrototype = NativeRegExp.prototype;
      const re1 = /a/g;
      const re2 = /a/g;

      // "new" should create a new object, old webkit bug
      const CORRECT_NEW = new NativeRegExp(re1) !== re1;

      const FORCED = isForced('RegExp', DESCRIPTORS && (!CORRECT_NEW || fails(() => {
        re2[MATCH] = false;
        // RegExp constructor can alter flags and IsRegExp works correct with @@match
        return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
      })));

      // `RegExp` constructor
      // https://tc39.github.io/ecma262/#sec-regexp-constructor
      if (FORCED) {
        var RegExpWrapper = function RegExp(pattern, flags) {
          const thisIsRegExp = this instanceof RegExpWrapper;
          let patternIsRegExp = isRegExp(pattern);
          const flagsAreUndefined = flags === undefined;
          return !thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined ? pattern
            : inheritIfRequired(CORRECT_NEW
              ? new NativeRegExp(patternIsRegExp && !flagsAreUndefined ? pattern.source : pattern, flags)
              : NativeRegExp((patternIsRegExp = pattern instanceof RegExpWrapper)
                ? pattern.source
                : pattern, patternIsRegExp && flagsAreUndefined ? getFlags.call(pattern) : flags),
            thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);
        };
        const proxy = function (key) {
          key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
            configurable: true,
            get() { return NativeRegExp[key]; },
            set(it) { NativeRegExp[key] = it; }
          });
        };
        const keys = getOwnPropertyNames(NativeRegExp);
        let i = 0;
        while (i < keys.length) proxy(keys[i++]);
        RegExpPrototype.constructor = RegExpWrapper;
        RegExpWrapper.prototype = RegExpPrototype;
        redefine(global, 'RegExp', RegExpWrapper);
      }

      // https://tc39.github.io/ecma262/#sec-get-regexp-@@species
      setSpecies('RegExp');
      /***/ }),

    /***/ './node_modules/core-js/modules/es.regexp.to-string.js':
    /*! *************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \************************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');
      const flags = __webpack_require__(/*! ../internals/regexp-flags */ './node_modules/core-js/internals/regexp-flags.js');

      const TO_STRING = 'toString';
      const nativeToString = /./[TO_STRING];
      const RegExpPrototype = RegExp.prototype;

      const NOT_GENERIC = fails(() => { return nativeToString.call({source: 'a', flags: 'b'}) != '/a/b'; });
      // FF44- RegExp#toString has a wrong name
      const INCORRECT_NAME = nativeToString.name != TO_STRING;

      // `RegExp.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          const R = anObject(this);
          const p = String(R.source);
          const rf = R.flags;
          const f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
          return `/${p}/${f}`;
        }, {unsafe: true});
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/es.string.iterator.js':
    /*! ************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \*********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const codePointAt = __webpack_require__(/*! ../internals/string-at */ './node_modules/core-js/internals/string-at.js');
      const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ './node_modules/core-js/internals/internal-state.js');
      const defineIterator = __webpack_require__(/*! ../internals/define-iterator */ './node_modules/core-js/internals/define-iterator.js');

      const STRING_ITERATOR = 'String Iterator';
      const setInternalState = InternalStateModule.set;
      const getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

      // `String.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
      defineIterator(String, 'String', function (iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: String(iterated),
          index: 0
        });
        // `%StringIteratorPrototype%.next` method
        // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
      }, function next() {
        const state = getInternalState(this);
        const {string} = state;
        const {index} = state;
        let point;
        if (index >= string.length) return {value: undefined, done: true};
        point = codePointAt(string, index, true);
        state.index += point.length;
        return {value: point, done: false};
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.string.link.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const createHTML = __webpack_require__(/*! ../internals/create-html */ './node_modules/core-js/internals/create-html.js');
      const forcedStringHTMLMethod = __webpack_require__(/*! ../internals/forced-string-html-method */ './node_modules/core-js/internals/forced-string-html-method.js');

      // `String.prototype.link` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.link
      $({target: 'String', proto: true, forced: forcedStringHTMLMethod('link')}, {
        link: function link(url) {
          return createHTML(this, 'a', 'href', url);
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.string.match.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ './node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');
      const advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ './node_modules/core-js/internals/advance-string-index.js');
      const regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ './node_modules/core-js/internals/regexp-exec-abstract.js');

      // @@match logic
      fixRegExpWellKnownSymbolLogic('match', 1, (MATCH, nativeMatch, maybeCallNative) => {
        return [
          // `String.prototype.match` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.match
          function match(regexp) {
            const O = requireObjectCoercible(this);
            const matcher = regexp == undefined ? undefined : regexp[MATCH];
            return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          },
          // `RegExp.prototype[@@match]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
          function (regexp) {
            const res = maybeCallNative(nativeMatch, regexp, this);
            if (res.done) return res.value;

            const rx = anObject(regexp);
            const S = String(this);

            if (!rx.global) return regExpExec(rx, S);

            const fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            const A = [];
            let n = 0;
            let result;
            while ((result = regExpExec(rx, S)) !== null) {
              const matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }
            return n === 0 ? null : A;
          }
        ];
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.string.replace.js':
    /*! ***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \********************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ './node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const toObject = __webpack_require__(/*! ../internals/to-object */ './node_modules/core-js/internals/to-object.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const toInteger = __webpack_require__(/*! ../internals/to-integer */ './node_modules/core-js/internals/to-integer.js');
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');
      const advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ './node_modules/core-js/internals/advance-string-index.js');
      const regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ './node_modules/core-js/internals/regexp-exec-abstract.js');

      const {max} = Math;
      const {min} = Math;
      const {floor} = Math;
      const SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
      const SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

      const maybeToString = function (it) {
        return it === undefined ? it : String(it);
      };

      // @@replace logic
      fixRegExpWellKnownSymbolLogic('replace', 2, (REPLACE, nativeReplace, maybeCallNative) => {
        return [
          // `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            const O = requireObjectCoercible(this);
            const replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
            return replacer !== undefined
              ? replacer.call(searchValue, O, replaceValue)
              : nativeReplace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function (regexp, replaceValue) {
            const res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
            if (res.done) return res.value;

            const rx = anObject(regexp);
            const S = String(this);

            const functionalReplace = typeof replaceValue === 'function';
            if (!functionalReplace) replaceValue = String(replaceValue);

            const {global} = rx;
            if (global) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            const results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null) break;

              results.push(result);
              if (!global) break;

              const matchStr = String(result[0]);
              if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }

            let accumulatedResult = '';
            let nextSourcePosition = 0;
            for (let i = 0; i < results.length; i++) {
              result = results[i];

              const matched = String(result[0]);
              const position = max(min(toInteger(result.index), S.length), 0);
              const captures = [];
              // NOTE: This is equivalent to
              //   captures = result.slice(1).map(maybeToString)
              // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
              // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
              // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
              for (let j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
              const namedCaptures = result.groups;
              if (functionalReplace) {
                const replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }
        ];

        // https://tc39.github.io/ecma262/#sec-getsubstitution
        function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
          const tailPos = position + matched.length;
          const m = captures.length;
          let symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== undefined) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return nativeReplace.call(replacement, symbols, (match, ch) => {
            let capture;
            switch (ch.charAt(0)) {
              case '$': return '$';
              case '&': return matched;
              case '`': return str.slice(0, position);
              case '\'': return str.slice(tailPos);
              case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;
              default: // \d\d?
                var n = +ch;
                if (n === 0) return match;
                if (n > m) {
                  const f = floor(n / 10);
                  if (f === 0) return match;
                  if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === undefined ? '' : capture;
          });
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/es.string.split.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ './node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js');
      const isRegExp = __webpack_require__(/*! ../internals/is-regexp */ './node_modules/core-js/internals/is-regexp.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ './node_modules/core-js/internals/require-object-coercible.js');
      const speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ './node_modules/core-js/internals/species-constructor.js');
      const advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ './node_modules/core-js/internals/advance-string-index.js');
      const toLength = __webpack_require__(/*! ../internals/to-length */ './node_modules/core-js/internals/to-length.js');
      const callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ './node_modules/core-js/internals/regexp-exec-abstract.js');
      const regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ './node_modules/core-js/internals/regexp-exec.js');
      const fails = __webpack_require__(/*! ../internals/fails */ './node_modules/core-js/internals/fails.js');

      const arrayPush = [].push;
      const {min} = Math;
      const MAX_UINT32 = 0xFFFFFFFF;

      // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
      const SUPPORTS_Y = !fails(() => { return !RegExp(MAX_UINT32, 'y'); });

      // @@split logic
      fixRegExpWellKnownSymbolLogic('split', 2, (SPLIT, nativeSplit, maybeCallNative) => {
        let internalSplit;
        if (
          'abbc'.split(/(b)*/)[1] == 'c'
    || 'test'.split(/(?:)/, -1).length != 4
    || 'ab'.split(/(?:ab)*/).length != 2
    || '.'.split(/(.?)(.?)/).length != 4
    || '.'.split(/()()/).length > 1
    || ''.split(/.?/).length
        ) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function (separator, limit) {
            const string = String(requireObjectCoercible(this));
            const lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string];
            // If `separator` is not a regex, use native split
            if (!isRegExp(separator)) {
              return nativeSplit.call(string, separator, lim);
            }
            const output = [];
            const flags = (separator.ignoreCase ? 'i' : '')
                  + (separator.multiline ? 'm' : '')
                  + (separator.unicode ? 'u' : '')
                  + (separator.sticky ? 'y' : '');
            let lastLastIndex = 0;
            // Make `global` and avoid `lastIndex` issues by working with a copy
            const separatorCopy = new RegExp(separator.source, `${flags}g`);
            let match; let lastIndex; let
              lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }
              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }
            if (lastLastIndex === string.length) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));
            return output.length > lim ? output.slice(0, lim) : output;
          };
          // Chakra, V8
        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function (separator, limit) {
            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
          };
        } else internalSplit = nativeSplit;

        return [
          // `String.prototype.split` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            const O = requireObjectCoercible(this);
            const splitter = separator == undefined ? undefined : separator[SPLIT];
            return splitter !== undefined
              ? splitter.call(separator, O, limit)
              : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function (regexp, limit) {
            const res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) return res.value;

            const rx = anObject(regexp);
            const S = String(this);
            const C = speciesConstructor(rx, RegExp);

            const unicodeMatching = rx.unicode;
            const flags = (rx.ignoreCase ? 'i' : '')
                  + (rx.multiline ? 'm' : '')
                  + (rx.unicode ? 'u' : '')
                  + (SUPPORTS_Y ? 'y' : 'g');

            // ^(? + rx + ) is needed, in combination with some S slicing, to
            // simulate the 'y' flag.
            const splitter = new C(SUPPORTS_Y ? rx : `^(?:${rx.source})`, flags);
            const lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
            let p = 0;
            let q = 0;
            const A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              const z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (
                z === null
          || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
              ) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim) return A;
                for (let i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim) return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          }
        ];
      }, !SUPPORTS_Y);
      /***/ }),

    /***/ './node_modules/core-js/modules/es.string.trim.js':
    /*! ********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \******************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const internalStringTrim = __webpack_require__(/*! ../internals/string-trim */ './node_modules/core-js/internals/string-trim.js');
      const forcedStringTrimMethod = __webpack_require__(/*! ../internals/forced-string-trim-method */ './node_modules/core-js/internals/forced-string-trim-method.js');

      const FORCED = forcedStringTrimMethod('trim');

      // `String.prototype.trim` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.trim
      $({target: 'String', proto: true, forced: FORCED}, {
        trim: function trim() {
          return internalStringTrim(this, 3);
        }
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/web.dom-collections.for-each.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \********************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ './node_modules/core-js/internals/dom-iterables.js');
      const forEach = __webpack_require__(/*! ../internals/array-for-each */ './node_modules/core-js/internals/array-for-each.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');

      for (const COLLECTION_NAME in DOMIterables) {
        const Collection = global[COLLECTION_NAME];
        const CollectionPrototype = Collection && Collection.prototype;
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
          try {
            hide(CollectionPrototype, 'forEach', forEach);
          } catch (error) {
            CollectionPrototype.forEach = forEach;
          }
        }
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/web.dom-collections.iterator.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \********************************************************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ './node_modules/core-js/internals/dom-iterables.js');
      const ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js');
      const hide = __webpack_require__(/*! ../internals/hide */ './node_modules/core-js/internals/hide.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const ITERATOR = wellKnownSymbol('iterator');
      const TO_STRING_TAG = wellKnownSymbol('toStringTag');
      const ArrayValues = ArrayIteratorMethods.values;

      for (const COLLECTION_NAME in DOMIterables) {
        const Collection = global[COLLECTION_NAME];
        const CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[ITERATOR] !== ArrayValues) {
            try {
              hide(CollectionPrototype, ITERATOR, ArrayValues);
            } catch (error) {
              CollectionPrototype[ITERATOR] = ArrayValues;
            }
          }
          if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
          if (DOMIterables[COLLECTION_NAME]) {
            for (const METHOD_NAME in ArrayIteratorMethods) {
            // some Chrome versions have non-configurable methods on DOMTokenList
              if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) {
                try {
                  hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                } catch (error) {
                  CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                }
              }
            }
          }
        }
      }
      /***/ }),

    /***/ './node_modules/core-js/modules/web.url-search-params.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \************************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      __webpack_require__(/*! ../modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js');
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ './node_modules/core-js/internals/native-url.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const redefineAll = __webpack_require__(/*! ../internals/redefine-all */ './node_modules/core-js/internals/redefine-all.js');
      const setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ './node_modules/core-js/internals/set-to-string-tag.js');
      const createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ './node_modules/core-js/internals/create-iterator-constructor.js');
      const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ './node_modules/core-js/internals/internal-state.js');
      const anInstance = __webpack_require__(/*! ../internals/an-instance */ './node_modules/core-js/internals/an-instance.js');
      const hasOwn = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const bind = __webpack_require__(/*! ../internals/bind-context */ './node_modules/core-js/internals/bind-context.js');
      const anObject = __webpack_require__(/*! ../internals/an-object */ './node_modules/core-js/internals/an-object.js');
      const isObject = __webpack_require__(/*! ../internals/is-object */ './node_modules/core-js/internals/is-object.js');
      const getIterator = __webpack_require__(/*! ../internals/get-iterator */ './node_modules/core-js/internals/get-iterator.js');
      const getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ './node_modules/core-js/internals/get-iterator-method.js');
      const wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ './node_modules/core-js/internals/well-known-symbol.js');

      const ITERATOR = wellKnownSymbol('iterator');
      const URL_SEARCH_PARAMS = 'URLSearchParams';
      const URL_SEARCH_PARAMS_ITERATOR = `${URL_SEARCH_PARAMS}Iterator`;
      const setInternalState = InternalStateModule.set;
      const getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
      const getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

      const plus = /\+/g;
      const sequences = Array(4);

      const percentSequence = function (bytes) {
        return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp(`((?:%[\\da-f]{2}){${bytes}})`, 'gi'));
      };

      const percentDecode = function (sequence) {
        try {
          return decodeURIComponent(sequence);
        } catch (error) {
          return sequence;
        }
      };

      const deserialize = function (it) {
        let result = it.replace(plus, ' ');
        let bytes = 4;
        try {
          return decodeURIComponent(result);
        } catch (error) {
          while (bytes) {
            result = result.replace(percentSequence(bytes--), percentDecode);
          }
          return result;
        }
      };

      const find = /[!'()~]|%20/g;

      const replace = {
        '!': '%21',
        '\'': '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
      };

      const replacer = function (match) {
        return replace[match];
      };

      const serialize = function (it) {
        return encodeURIComponent(it).replace(find, replacer);
      };

      const parseSearchParams = function (result, query) {
        if (query) {
          const attributes = query.split('&');
          let i = 0;
          let attribute; let
            entry;
          while (i < attributes.length) {
            attribute = attributes[i++];
            if (attribute.length) {
              entry = attribute.split('=');
              result.push({
                key: deserialize(entry.shift()),
                value: deserialize(entry.join('='))
              });
            }
          }
        } return result;
      };

      const updateSearchParams = function (query) {
        this.entries.length = 0;
        parseSearchParams(this.entries, query);
      };

      const validateArgumentsLength = function (passed, required) {
        if (passed < required) throw TypeError('Not enough arguments');
      };

      const URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
        setInternalState(this, {
          type: URL_SEARCH_PARAMS_ITERATOR,
          iterator: getIterator(getInternalParamsState(params).entries),
          kind
        });
      }, 'Iterator', function next() {
        const state = getInternalIteratorState(this);
        const {kind} = state;
        const step = state.iterator.next();
        const entry = step.value;
        if (!step.done) {
          step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
        } return step;
      });

      // `URLSearchParams` constructor
      // https://url.spec.whatwg.org/#interface-urlsearchparams
      var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
        anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
        const init = arguments.length > 0 ? arguments[0] : undefined;
        const that = this;
        const entries = [];
        let iteratorMethod; let iterator; let step; let entryIterator; let first; let second; let
          key;

        setInternalState(that, {
          type: URL_SEARCH_PARAMS,
          entries,
          updateURL: null,
          updateSearchParams
        });

        if (init !== undefined) {
          if (isObject(init)) {
            iteratorMethod = getIteratorMethod(init);
            if (typeof iteratorMethod === 'function') {
              iterator = iteratorMethod.call(init);
              while (!(step = iterator.next()).done) {
                entryIterator = getIterator(anObject(step.value));
                if (
                  (first = entryIterator.next()).done
            || (second = entryIterator.next()).done
            || !entryIterator.next().done
                ) throw TypeError('Expected sequence with length 2');
                entries.push({key: `${first.value}`, value: `${second.value}`});
              }
            } else for (key in init) if (hasOwn(init, key)) entries.push({key, value: `${init[key]}`});
          } else {
            parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : `${init}`);
          }
        }
      };

      const URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

      redefineAll(URLSearchParamsPrototype, {
        // `URLSearchParams.prototype.appent` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-append
        append: function append(name, value) {
          validateArgumentsLength(arguments.length, 2);
          const state = getInternalParamsState(this);
          state.entries.push({key: `${name}`, value: `${value}`});
          if (state.updateURL) state.updateURL();
        },
        // `URLSearchParams.prototype.delete` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
        delete(name) {
          validateArgumentsLength(arguments.length, 1);
          const state = getInternalParamsState(this);
          const {entries} = state;
          const key = `${name}`;
          let i = 0;
          while (i < entries.length) {
            if (entries[i].key === key) entries.splice(i, 1);
            else i++;
          }
          if (state.updateURL) state.updateURL();
        },
        // `URLSearchParams.prototype.get` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-get
        get: function get(name) {
          validateArgumentsLength(arguments.length, 1);
          const {entries} = getInternalParamsState(this);
          const key = `${name}`;
          let i = 0;
          for (; i < entries.length; i++) if (entries[i].key === key) return entries[i].value;
          return null;
        },
        // `URLSearchParams.prototype.getAll` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
        getAll: function getAll(name) {
          validateArgumentsLength(arguments.length, 1);
          const {entries} = getInternalParamsState(this);
          const key = `${name}`;
          const result = [];
          let i = 0;
          for (; i < entries.length; i++) if (entries[i].key === key) result.push(entries[i].value);
          return result;
        },
        // `URLSearchParams.prototype.has` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-has
        has: function has(name) {
          validateArgumentsLength(arguments.length, 1);
          const {entries} = getInternalParamsState(this);
          const key = `${name}`;
          let i = 0;
          while (i < entries.length) if (entries[i++].key === key) return true;
          return false;
        },
        // `URLSearchParams.prototype.set` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-set
        set: function set(name, value) {
          validateArgumentsLength(arguments.length, 1);
          const state = getInternalParamsState(this);
          const {entries} = state;
          let found = false;
          const key = `${name}`;
          const val = `${value}`;
          let i = 0;
          let entry;
          for (; i < entries.length; i++) {
            entry = entries[i];
            if (entry.key === key) {
              if (found) entries.splice(i--, 1);
              else {
                found = true;
                entry.value = val;
              }
            }
          }
          if (!found) entries.push({key, value: val});
          if (state.updateURL) state.updateURL();
        },
        // `URLSearchParams.prototype.sort` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
        sort: function sort() {
          const state = getInternalParamsState(this);
          const {entries} = state;
          // Array#sort is not stable in some engines
          const slice = entries.slice();
          let entry; let i; let
            j;
          entries.length = 0;
          for (i = 0; i < slice.length; i++) {
            entry = slice[i];
            for (j = 0; j < i; j++) {
              if (entries[j].key > entry.key) {
                entries.splice(j, 0, entry);
                break;
              }
            }
            if (j === i) entries.push(entry);
          }
          if (state.updateURL) state.updateURL();
        },
        // `URLSearchParams.prototype.forEach` method
        forEach: function forEach(callback /* , thisArg */) {
          const {entries} = getInternalParamsState(this);
          const boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
          let i = 0;
          let entry;
          while (i < entries.length) {
            entry = entries[i++];
            boundFunction(entry.value, entry.key, this);
          }
        },
        // `URLSearchParams.prototype.keys` method
        keys: function keys() {
          return new URLSearchParamsIterator(this, 'keys');
        },
        // `URLSearchParams.prototype.values` method
        values: function values() {
          return new URLSearchParamsIterator(this, 'values');
        },
        // `URLSearchParams.prototype.entries` method
        entries: function entries() {
          return new URLSearchParamsIterator(this, 'entries');
        }
      }, {enumerable: true});

      // `URLSearchParams.prototype[@@iterator]` method
      redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

      // `URLSearchParams.prototype.toString` method
      // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
      redefine(URLSearchParamsPrototype, 'toString', function toString() {
        const {entries} = getInternalParamsState(this);
        const result = [];
        let i = 0;
        let entry;
        while (i < entries.length) {
          entry = entries[i++];
          result.push(`${serialize(entry.key)}=${serialize(entry.value)}`);
        } return result.join('&');
      }, {enumerable: true});

      setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

      $({global: true, forced: !USE_NATIVE_URL}, {
        URLSearchParams: URLSearchParamsConstructor
      });

      module.exports = {
        URLSearchParams: URLSearchParamsConstructor,
        getState: getInternalParamsState
      };
      /***/ }),

    /***/ './node_modules/core-js/modules/web.url.js':
    /*! *************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \************************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      __webpack_require__(/*! ../modules/es.string.iterator */ './node_modules/core-js/modules/es.string.iterator.js');
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');
      const DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ './node_modules/core-js/internals/descriptors.js');
      const USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ './node_modules/core-js/internals/native-url.js');
      const global = __webpack_require__(/*! ../internals/global */ './node_modules/core-js/internals/global.js');
      const defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ './node_modules/core-js/internals/object-define-properties.js');
      const redefine = __webpack_require__(/*! ../internals/redefine */ './node_modules/core-js/internals/redefine.js');
      const anInstance = __webpack_require__(/*! ../internals/an-instance */ './node_modules/core-js/internals/an-instance.js');
      const has = __webpack_require__(/*! ../internals/has */ './node_modules/core-js/internals/has.js');
      const assign = __webpack_require__(/*! ../internals/object-assign */ './node_modules/core-js/internals/object-assign.js');
      const arrayFrom = __webpack_require__(/*! ../internals/array-from */ './node_modules/core-js/internals/array-from.js');
      const codePointAt = __webpack_require__(/*! ../internals/string-at */ './node_modules/core-js/internals/string-at.js');
      const toASCII = __webpack_require__(/*! ../internals/punycode-to-ascii */ './node_modules/core-js/internals/punycode-to-ascii.js');
      const setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ './node_modules/core-js/internals/set-to-string-tag.js');
      const URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ './node_modules/core-js/modules/web.url-search-params.js');
      const InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ './node_modules/core-js/internals/internal-state.js');

      const NativeURL = global.URL;
      const {URLSearchParams} = URLSearchParamsModule;
      const getInternalSearchParamsState = URLSearchParamsModule.getState;
      const setInternalState = InternalStateModule.set;
      const getInternalURLState = InternalStateModule.getterFor('URL');
      const {pow} = Math;

      const INVALID_AUTHORITY = 'Invalid authority';
      const INVALID_SCHEME = 'Invalid scheme';
      const INVALID_HOST = 'Invalid host';
      const INVALID_PORT = 'Invalid port';

      const ALPHA = /[A-Za-z]/;
      const ALPHANUMERIC = /[\d+\-.A-Za-z]/;
      const DIGIT = /\d/;
      const HEX_START = /^(0x|0X)/;
      const OCT = /^[0-7]+$/;
      const DEC = /^\d+$/;
      const HEX = /^[\dA-Fa-f]+$/;
      // eslint-disable-next-line no-control-regex
      const FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
      // eslint-disable-next-line no-control-regex
      const FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
      // eslint-disable-next-line no-control-regex
      const LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
      // eslint-disable-next-line no-control-regex
      const TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
      let EOF;

      const parseHost = function (url, input) {
        let result; let codePoints; let
          i;
        if (input.charAt(0) == '[') {
          if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
          result = parseIPv6(input.slice(1, -1));
          if (!result) return INVALID_HOST;
          url.host = result;
          // opaque host
        } else if (!isSpecial(url)) {
          if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
          result = '';
          codePoints = arrayFrom(input);
          for (i = 0; i < codePoints.length; i++) result += percentEncode(codePoints[i], C0ControlPercentEncodeSet);
          url.host = result;
        } else {
          input = toASCII(input);
          if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
          result = parseIPv4(input);
          if (result === null) return INVALID_HOST;
          url.host = result;
        }
      };

      var parseIPv4 = function (input) {
        const parts = input.split('.');
        let partsLength; let numbers; let i; let part; let R; let n; let
          ipv4;
        if (parts[parts.length - 1] == '') {
          if (parts.length) parts.pop();
        }
        partsLength = parts.length;
        if (partsLength > 4) return input;
        numbers = [];
        for (i = 0; i < partsLength; i++) {
          part = parts[i];
          if (part == '') return input;
          R = 10;
          if (part.length > 1 && part.charAt(0) == '0') {
            R = HEX_START.test(part) ? 16 : 8;
            part = part.slice(R == 8 ? 1 : 2);
          }
          if (part === '') {
            n = 0;
          } else {
            if (!(R == 10 ? DEC : R == 8 ? OCT : HEX).test(part)) return input;
            n = parseInt(part, R);
          }
          numbers.push(n);
        }
        for (i = 0; i < partsLength; i++) {
          n = numbers[i];
          if (i == partsLength - 1) {
            if (n >= pow(256, 5 - partsLength)) return null;
          } else if (n > 255) return null;
        }
        ipv4 = numbers.pop();
        for (i = 0; i < numbers.length; i++) {
          ipv4 += numbers[i] * pow(256, 3 - i);
        }
        return ipv4;
      };

      // eslint-disable-next-line max-statements
      var parseIPv6 = function (input) {
        const address = [0, 0, 0, 0, 0, 0, 0, 0];
        let pieceIndex = 0;
        let compress = null;
        let pointer = 0;
        let value; let length; let numbersSeen; let ipv4Piece; let number; let swaps; let
          swap;

        const char = function () {
          return input.charAt(pointer);
        };

        if (char() == ':') {
          if (input.charAt(1) != ':') return;
          pointer += 2;
          pieceIndex++;
          compress = pieceIndex;
        }
        while (char()) {
          if (pieceIndex == 8) return;
          if (char() == ':') {
            if (compress !== null) return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
          }
          value = length = 0;
          while (length < 4 && HEX.test(char())) {
            value = value * 16 + parseInt(char(), 16);
            pointer++;
            length++;
          }
          if (char() == '.') {
            if (length == 0) return;
            pointer -= length;
            if (pieceIndex > 6) return;
            numbersSeen = 0;
            while (char()) {
              ipv4Piece = null;
              if (numbersSeen > 0) {
                if (char() == '.' && numbersSeen < 4) pointer++;
                else return;
              }
              if (!DIGIT.test(char())) return;
              while (DIGIT.test(char())) {
                number = parseInt(char(), 10);
                if (ipv4Piece === null) ipv4Piece = number;
                else if (ipv4Piece == 0) return;
                else ipv4Piece = ipv4Piece * 10 + number;
                if (ipv4Piece > 255) return;
                pointer++;
              }
              address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
              numbersSeen++;
              if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
            }
            if (numbersSeen != 4) return;
            break;
          } else if (char() == ':') {
            pointer++;
            if (!char()) return;
          } else if (char()) return;
          address[pieceIndex++] = value;
        }
        if (compress !== null) {
          swaps = pieceIndex - compress;
          pieceIndex = 7;
          while (pieceIndex != 0 && swaps > 0) {
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
          }
        } else if (pieceIndex != 8) return;
        return address;
      };

      const findLongestZeroSequence = function (ipv6) {
        let maxIndex = null;
        let maxLength = 1;
        let currStart = null;
        let currLength = 0;
        let i = 0;
        for (; i < 8; i++) {
          if (ipv6[i] !== 0) {
            if (currLength > maxLength) {
              maxIndex = currStart;
              maxLength = currLength;
            }
            currStart = null;
            currLength = 0;
          } else {
            if (currStart === null) currStart = i;
            ++currLength;
          }
        }
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }
        return maxIndex;
      };

      const serializeHost = function (host) {
        let result; let i; let compress; let
          ignore0;
        // ipv4
        if (typeof host === 'number') {
          result = [];
          for (i = 0; i < 4; i++) {
            result.unshift(host % 256);
            host = Math.floor(host / 256);
          } return result.join('.');
          // ipv6
        } if (typeof host === 'object') {
          result = '';
          compress = findLongestZeroSequence(host);
          for (i = 0; i < 8; i++) {
            if (ignore0 && host[i] === 0) continue;
            if (ignore0) ignore0 = false;
            if (compress === i) {
              result += i ? ':' : '::';
              ignore0 = true;
            } else {
              result += host[i].toString(16);
              if (i < 7) result += ':';
            }
          }
          return `[${result}]`;
        } return host;
      };

      var C0ControlPercentEncodeSet = {};
      const fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
        ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
      });
      const pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
        '#': 1, '?': 1, '{': 1, '}': 1
      });
      const userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
        '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
      });

      var percentEncode = function (char, set) {
        const code = codePointAt(char, 0);
        return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
      };

      const specialSchemes = {
        ftp: 21,
        file: null,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      };

      var isSpecial = function (url) {
        return has(specialSchemes, url.scheme);
      };

      const includesCredentials = function (url) {
        return url.username != '' || url.password != '';
      };

      const cannotHaveUsernamePasswordPort = function (url) {
        return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
      };

      const isWindowsDriveLetter = function (string, normalized) {
        let second;
        return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
      };

      const startsWithWindowsDriveLetter = function (string) {
        let third;
        return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
          string.length == 2
    || ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
        );
      };

      const shortenURLsPath = function (url) {
        const {path} = url;
        const pathSize = path.length;
        if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
          path.pop();
        }
      };

      const isSingleDot = function (segment) {
        return segment === '.' || segment.toLowerCase() === '%2e';
      };

      const isDoubleDot = function (segment) {
        segment = segment.toLowerCase();
        return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
      };

      // States:
      const SCHEME_START = {};
      const SCHEME = {};
      const NO_SCHEME = {};
      const SPECIAL_RELATIVE_OR_AUTHORITY = {};
      const PATH_OR_AUTHORITY = {};
      const RELATIVE = {};
      const RELATIVE_SLASH = {};
      const SPECIAL_AUTHORITY_SLASHES = {};
      const SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
      const AUTHORITY = {};
      const HOST = {};
      const HOSTNAME = {};
      const PORT = {};
      const FILE = {};
      const FILE_SLASH = {};
      const FILE_HOST = {};
      const PATH_START = {};
      const PATH = {};
      const CANNOT_BE_A_BASE_URL_PATH = {};
      const QUERY = {};
      const FRAGMENT = {};

      // eslint-disable-next-line max-statements
      const parseURL = function (url, input, stateOverride, base) {
        let state = stateOverride || SCHEME_START;
        let pointer = 0;
        let buffer = '';
        let seenAt = false;
        let seenBracket = false;
        let seenPasswordToken = false;
        let codePoints; let char; let bufferCodePoints; let
          failure;

        if (!stateOverride) {
          url.scheme = '';
          url.username = '';
          url.password = '';
          url.host = null;
          url.port = null;
          url.path = [];
          url.query = null;
          url.fragment = null;
          url.cannotBeABaseURL = false;
          input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
        }

        input = input.replace(TAB_AND_NEW_LINE, '');

        codePoints = arrayFrom(input);

        while (pointer <= codePoints.length) {
          char = codePoints[pointer];
          switch (state) {
            case SCHEME_START:
              if (char && ALPHA.test(char)) {
                buffer += char.toLowerCase();
                state = SCHEME;
              } else if (!stateOverride) {
                state = NO_SCHEME;
                continue;
              } else return INVALID_SCHEME;
              break;

            case SCHEME:
              if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
                buffer += char.toLowerCase();
              } else if (char == ':') {
                if (stateOverride) {
                  if (
                    (isSpecial(url) != has(specialSchemes, buffer))
              || (buffer == 'file' && (includesCredentials(url) || url.port !== null))
              || (url.scheme == 'file' && !url.host)
                  ) return;
                }
                url.scheme = buffer;
                if (stateOverride) {
                  if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                  return;
                }
                buffer = '';
                if (url.scheme == 'file') {
                  state = FILE;
                } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                  state = SPECIAL_RELATIVE_OR_AUTHORITY;
                } else if (isSpecial(url)) {
                  state = SPECIAL_AUTHORITY_SLASHES;
                } else if (codePoints[pointer + 1] == '/') {
                  state = PATH_OR_AUTHORITY;
                  pointer++;
                } else {
                  url.cannotBeABaseURL = true;
                  url.path.push('');
                  state = CANNOT_BE_A_BASE_URL_PATH;
                }
              } else if (!stateOverride) {
                buffer = '';
                state = NO_SCHEME;
                pointer = 0;
                continue;
              } else return INVALID_SCHEME;
              break;

            case NO_SCHEME:
              if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
              if (base.cannotBeABaseURL && char == '#') {
                url.scheme = base.scheme;
                url.path = base.path.slice();
                url.query = base.query;
                url.fragment = '';
                url.cannotBeABaseURL = true;
                state = FRAGMENT;
                break;
              }
              state = base.scheme == 'file' ? FILE : RELATIVE;
              continue;

            case SPECIAL_RELATIVE_OR_AUTHORITY:
              if (char == '/' && codePoints[pointer + 1] == '/') {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                pointer++;
              } else {
                state = RELATIVE;
                continue;
              } break;

            case PATH_OR_AUTHORITY:
              if (char == '/') {
                state = AUTHORITY;
                break;
              } else {
                state = PATH;
                continue;
              }

            case RELATIVE:
              url.scheme = base.scheme;
              if (char == EOF) {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = base.query;
              } else if (char == '/' || (char == '\\' && isSpecial(url))) {
                state = RELATIVE_SLASH;
              } else if (char == '?') {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = '';
                state = QUERY;
              } else if (char == '#') {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.path.pop();
                state = PATH;
                continue;
              } break;

            case RELATIVE_SLASH:
              if (isSpecial(url) && (char == '/' || char == '\\')) {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              } else if (char == '/') {
                state = AUTHORITY;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                state = PATH;
                continue;
              } break;

            case SPECIAL_AUTHORITY_SLASHES:
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
              pointer++;
              break;

            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
              if (char != '/' && char != '\\') {
                state = AUTHORITY;
                continue;
              } break;

            case AUTHORITY:
              if (char == '@') {
                if (seenAt) buffer = `%40${buffer}`;
                seenAt = true;
                bufferCodePoints = arrayFrom(buffer);
                for (let i = 0; i < bufferCodePoints.length; i++) {
                  const codePoint = bufferCodePoints[i];
                  if (codePoint == ':' && !seenPasswordToken) {
                    seenPasswordToken = true;
                    continue;
                  }
                  const encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                  if (seenPasswordToken) url.password += encodedCodePoints;
                  else url.username += encodedCodePoints;
                }
                buffer = '';
              } else if (
                char == EOF || char == '/' || char == '?' || char == '#'
          || (char == '\\' && isSpecial(url))
              ) {
                if (seenAt && buffer == '') return INVALID_AUTHORITY;
                pointer -= arrayFrom(buffer).length + 1;
                buffer = '';
                state = HOST;
              } else buffer += char;
              break;

            case HOST:
            case HOSTNAME:
              if (stateOverride && url.scheme == 'file') {
                state = FILE_HOST;
                continue;
              } else if (char == ':' && !seenBracket) {
                if (buffer == '') return INVALID_HOST;
                failure = parseHost(url, buffer);
                if (failure) return failure;
                buffer = '';
                state = PORT;
                if (stateOverride == HOSTNAME) return;
              } else if (
                char == EOF || char == '/' || char == '?' || char == '#'
          || (char == '\\' && isSpecial(url))
              ) {
                if (isSpecial(url) && buffer == '') return INVALID_HOST;
                if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
                failure = parseHost(url, buffer);
                if (failure) return failure;
                buffer = '';
                state = PATH_START;
                if (stateOverride) return;
                continue;
              } else {
                if (char == '[') seenBracket = true;
                else if (char == ']') seenBracket = false;
                buffer += char;
              } break;

            case PORT:
              if (DIGIT.test(char)) {
                buffer += char;
              } else if (
                char == EOF || char == '/' || char == '?' || char == '#'
          || (char == '\\' && isSpecial(url))
          || stateOverride
              ) {
                if (buffer != '') {
                  const port = parseInt(buffer, 10);
                  if (port > 0xFFFF) return INVALID_PORT;
                  url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
                  buffer = '';
                }
                if (stateOverride) return;
                state = PATH_START;
                continue;
              } else return INVALID_PORT;
              break;

            case FILE:
              url.scheme = 'file';
              if (char == '/' || char == '\\') state = FILE_SLASH;
              else if (base && base.scheme == 'file') {
                if (char == EOF) {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = base.query;
                } else if (char == '?') {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = '';
                  state = QUERY;
                } else if (char == '#') {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = base.query;
                  url.fragment = '';
                  state = FRAGMENT;
                } else {
                  if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                    url.host = base.host;
                    url.path = base.path.slice();
                    shortenURLsPath(url);
                  }
                  state = PATH;
                  continue;
                }
              } else {
                state = PATH;
                continue;
              } break;

            case FILE_SLASH:
              if (char == '/' || char == '\\') {
                state = FILE_HOST;
                break;
              }
              if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
                else url.host = base.host;
              }
              state = PATH;
              continue;

            case FILE_HOST:
              if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
                if (!stateOverride && isWindowsDriveLetter(buffer)) {
                  state = PATH;
                } else if (buffer == '') {
                  url.host = '';
                  if (stateOverride) return;
                  state = PATH_START;
                } else {
                  failure = parseHost(url, buffer);
                  if (failure) return failure;
                  if (url.host == 'localhost') url.host = '';
                  if (stateOverride) return;
                  buffer = '';
                  state = PATH_START;
                } continue;
              } else buffer += char;
              break;

            case PATH_START:
              if (isSpecial(url)) {
                state = PATH;
                if (char != '/' && char != '\\') continue;
              } else if (!stateOverride && char == '?') {
                url.query = '';
                state = QUERY;
              } else if (!stateOverride && char == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (char != EOF) {
                state = PATH;
                if (char != '/') continue;
              } break;

            case PATH:
              if (
                char == EOF || char == '/'
          || (char == '\\' && isSpecial(url))
          || (!stateOverride && (char == '?' || char == '#'))
              ) {
                if (isDoubleDot(buffer)) {
                  shortenURLsPath(url);
                  if (char != '/' && !(char == '\\' && isSpecial(url))) {
                    url.path.push('');
                  }
                } else if (isSingleDot(buffer)) {
                  if (char != '/' && !(char == '\\' && isSpecial(url))) {
                    url.path.push('');
                  }
                } else {
                  if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                    if (url.host) url.host = '';
                    buffer = `${buffer.charAt(0)}:`; // normalize windows drive letter
                  }
                  url.path.push(buffer);
                }
                buffer = '';
                if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
                  while (url.path.length > 1 && url.path[0] === '') {
                    url.path.shift();
                  }
                }
                if (char == '?') {
                  url.query = '';
                  state = QUERY;
                } else if (char == '#') {
                  url.fragment = '';
                  state = FRAGMENT;
                }
              } else {
                buffer += percentEncode(char, pathPercentEncodeSet);
              } break;

            case CANNOT_BE_A_BASE_URL_PATH:
              if (char == '?') {
                url.query = '';
                state = QUERY;
              } else if (char == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (char != EOF) {
                url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
              } break;

            case QUERY:
              if (!stateOverride && char == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (char != EOF) {
                if (char == '\'' && isSpecial(url)) url.query += '%27';
                else if (char == '#') url.query += '%23';
                else url.query += percentEncode(char, C0ControlPercentEncodeSet);
              } break;

            case FRAGMENT:
              if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
              break;
          }

          pointer++;
        }
      };

      // `URL` constructor
      // https://url.spec.whatwg.org/#url-class
      var URLConstructor = function URL(url /* , base */) {
        const that = anInstance(this, URLConstructor, 'URL');
        const base = arguments.length > 1 ? arguments[1] : undefined;
        const urlString = String(url);
        const state = setInternalState(that, {type: 'URL'});
        let baseState; let
          failure;
        if (base !== undefined) {
          if (base instanceof URLConstructor) baseState = getInternalURLState(base);
          else {
            failure = parseURL(baseState = {}, String(base));
            if (failure) throw TypeError(failure);
          }
        }
        failure = parseURL(state, urlString, null, baseState);
        if (failure) throw TypeError(failure);
        const searchParams = state.searchParams = new URLSearchParams();
        const searchParamsState = getInternalSearchParamsState(searchParams);
        searchParamsState.updateSearchParams(state.query);
        searchParamsState.updateURL = function () {
          state.query = String(searchParams) || null;
        };
        if (!DESCRIPTORS) {
          that.href = serializeURL.call(that);
          that.origin = getOrigin.call(that);
          that.protocol = getProtocol.call(that);
          that.username = getUsername.call(that);
          that.password = getPassword.call(that);
          that.host = getHost.call(that);
          that.hostname = getHostname.call(that);
          that.port = getPort.call(that);
          that.pathname = getPathname.call(that);
          that.search = getSearch.call(that);
          that.searchParams = getSearchParams.call(that);
          that.hash = getHash.call(that);
        }
      };

      const URLPrototype = URLConstructor.prototype;

      var serializeURL = function () {
        const url = getInternalURLState(this);
        const {scheme} = url;
        const {username} = url;
        const {password} = url;
        const {host} = url;
        const {port} = url;
        const {path} = url;
        const {query} = url;
        const {fragment} = url;
        let output = `${scheme}:`;
        if (host !== null) {
          output += '//';
          if (includesCredentials(url)) {
            output += `${username + (password ? `:${password}` : '')}@`;
          }
          output += serializeHost(host);
          if (port !== null) output += `:${port}`;
        } else if (scheme == 'file') output += '//';
        output += url.cannotBeABaseURL ? path[0] : path.length ? `/${path.join('/')}` : '';
        if (query !== null) output += `?${query}`;
        if (fragment !== null) output += `#${fragment}`;
        return output;
      };

      var getOrigin = function () {
        const url = getInternalURLState(this);
        const {scheme} = url;
        const {port} = url;
        if (scheme == 'blob') {
          try {
            return new URL(scheme.path[0]).origin;
          } catch (error) {
            return 'null';
          }
        }
        if (scheme == 'file' || !isSpecial(url)) return 'null';
        return `${scheme}://${serializeHost(url.host)}${port !== null ? `:${port}` : ''}`;
      };

      var getProtocol = function () {
        return `${getInternalURLState(this).scheme}:`;
      };

      var getUsername = function () {
        return getInternalURLState(this).username;
      };

      var getPassword = function () {
        return getInternalURLState(this).password;
      };

      var getHost = function () {
        const url = getInternalURLState(this);
        const {host} = url;
        const {port} = url;
        return host === null ? ''
          : port === null ? serializeHost(host)
            : `${serializeHost(host)}:${port}`;
      };

      var getHostname = function () {
        const {host} = getInternalURLState(this);
        return host === null ? '' : serializeHost(host);
      };

      var getPort = function () {
        const {port} = getInternalURLState(this);
        return port === null ? '' : String(port);
      };

      var getPathname = function () {
        const url = getInternalURLState(this);
        const {path} = url;
        return url.cannotBeABaseURL ? path[0] : path.length ? `/${path.join('/')}` : '';
      };

      var getSearch = function () {
        const {query} = getInternalURLState(this);
        return query ? `?${query}` : '';
      };

      var getSearchParams = function () {
        return getInternalURLState(this).searchParams;
      };

      var getHash = function () {
        const {fragment} = getInternalURLState(this);
        return fragment ? `#${fragment}` : '';
      };

      const accessorDescriptor = function (getter, setter) {
        return {
          get: getter, set: setter, configurable: true, enumerable: true
        };
      };

      if (DESCRIPTORS) {
        defineProperties(URLPrototype, {
          // `URL.prototype.href` accessors pair
          // https://url.spec.whatwg.org/#dom-url-href
          href: accessorDescriptor(serializeURL, function (href) {
            const url = getInternalURLState(this);
            const urlString = String(href);
            const failure = parseURL(url, urlString);
            if (failure) throw TypeError(failure);
            getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
          }),
          // `URL.prototype.origin` getter
          // https://url.spec.whatwg.org/#dom-url-origin
          origin: accessorDescriptor(getOrigin),
          // `URL.prototype.protocol` accessors pair
          // https://url.spec.whatwg.org/#dom-url-protocol
          protocol: accessorDescriptor(getProtocol, function (protocol) {
            const url = getInternalURLState(this);
            parseURL(url, `${String(protocol)}:`, SCHEME_START);
          }),
          // `URL.prototype.username` accessors pair
          // https://url.spec.whatwg.org/#dom-url-username
          username: accessorDescriptor(getUsername, function (username) {
            const url = getInternalURLState(this);
            const codePoints = arrayFrom(String(username));
            if (cannotHaveUsernamePasswordPort(url)) return;
            url.username = '';
            for (let i = 0; i < codePoints.length; i++) {
              url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
            }
          }),
          // `URL.prototype.password` accessors pair
          // https://url.spec.whatwg.org/#dom-url-password
          password: accessorDescriptor(getPassword, function (password) {
            const url = getInternalURLState(this);
            const codePoints = arrayFrom(String(password));
            if (cannotHaveUsernamePasswordPort(url)) return;
            url.password = '';
            for (let i = 0; i < codePoints.length; i++) {
              url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
            }
          }),
          // `URL.prototype.host` accessors pair
          // https://url.spec.whatwg.org/#dom-url-host
          host: accessorDescriptor(getHost, function (host) {
            const url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            parseURL(url, String(host), HOST);
          }),
          // `URL.prototype.hostname` accessors pair
          // https://url.spec.whatwg.org/#dom-url-hostname
          hostname: accessorDescriptor(getHostname, function (hostname) {
            const url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            parseURL(url, String(hostname), HOSTNAME);
          }),
          // `URL.prototype.port` accessors pair
          // https://url.spec.whatwg.org/#dom-url-port
          port: accessorDescriptor(getPort, function (port) {
            const url = getInternalURLState(this);
            if (cannotHaveUsernamePasswordPort(url)) return;
            port = String(port);
            if (port == '') url.port = null;
            else parseURL(url, port, PORT);
          }),
          // `URL.prototype.pathname` accessors pair
          // https://url.spec.whatwg.org/#dom-url-pathname
          pathname: accessorDescriptor(getPathname, function (pathname) {
            const url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            url.path = [];
            parseURL(url, `${pathname}`, PATH_START);
          }),
          // `URL.prototype.search` accessors pair
          // https://url.spec.whatwg.org/#dom-url-search
          search: accessorDescriptor(getSearch, function (search) {
            const url = getInternalURLState(this);
            search = String(search);
            if (search == '') {
              url.query = null;
            } else {
              if (search.charAt(0) == '?') search = search.slice(1);
              url.query = '';
              parseURL(url, search, QUERY);
            }
            getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
          }),
          // `URL.prototype.searchParams` getter
          // https://url.spec.whatwg.org/#dom-url-searchparams
          searchParams: accessorDescriptor(getSearchParams),
          // `URL.prototype.hash` accessors pair
          // https://url.spec.whatwg.org/#dom-url-hash
          hash: accessorDescriptor(getHash, function (hash) {
            const url = getInternalURLState(this);
            hash = String(hash);
            if (hash == '') {
              url.fragment = null;
              return;
            }
            if (hash.charAt(0) == '#') hash = hash.slice(1);
            url.fragment = '';
            parseURL(url, hash, FRAGMENT);
          })
        });
      }

      // `URL.prototype.toJSON` method
      // https://url.spec.whatwg.org/#dom-url-tojson
      redefine(URLPrototype, 'toJSON', function toJSON() {
        return serializeURL.call(this);
      }, {enumerable: true});

      // `URL.prototype.toString` method
      // https://url.spec.whatwg.org/#URL-stringification-behavior
      redefine(URLPrototype, 'toString', function toString() {
        return serializeURL.call(this);
      }, {enumerable: true});

      if (NativeURL) {
        const nativeCreateObjectURL = NativeURL.createObjectURL;
        const nativeRevokeObjectURL = NativeURL.revokeObjectURL;
        // `URL.createObjectURL` method
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        // eslint-disable-next-line no-unused-vars
        if (nativeCreateObjectURL) {
          redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
            return nativeCreateObjectURL.apply(NativeURL, arguments);
          });
        }
        // `URL.revokeObjectURL` method
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
        // eslint-disable-next-line no-unused-vars
        if (nativeRevokeObjectURL) {
          redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
            return nativeRevokeObjectURL.apply(NativeURL, arguments);
          });
        }
      }

      setToStringTag(URLConstructor, 'URL');

      $({global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS}, {
        URL: URLConstructor
      });
      /***/ }),

    /***/ './node_modules/core-js/modules/web.url.to-json.js':
    /*! *********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \******************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const $ = __webpack_require__(/*! ../internals/export */ './node_modules/core-js/internals/export.js');

      // `URL.prototype.toJSON` method
      // https://url.spec.whatwg.org/#dom-url-tojson
      $({target: 'URL', proto: true, enumerable: true}, {
        toJSON: function toJSON() {
          return URL.prototype.toString.call(this);
        }
      });
      /***/ }),

    /***/ './node_modules/debug/node_modules/ms/index.js':
    /*! *****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /**
 * Helpers.
 */
      const s = 1000;
      const m = s * 60;
      const h = m * 60;
      const d = h * 24;
      const w = d * 7;
      const y = d * 365.25;
      /**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

      module.exports = function (val, options) {
        options = options || {};
        const type = typeof val;

        if (type === 'string' && val.length > 0) {
          return parse(val);
        } if (type === 'number' && isNaN(val) === false) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }

        throw new Error(`val is not a non-empty string or a valid number. val=${JSON.stringify(val)}`);
      };
      /**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


      function parse(str) {
        str = String(str);

        if (str.length > 100) {
          return;
        }

        const match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

        if (!match) {
          return;
        }

        const n = parseFloat(match[1]);
        const type = (match[2] || 'ms').toLowerCase();

        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;

          case 'weeks':
          case 'week':
          case 'w':
            return n * w;

          case 'days':
          case 'day':
          case 'd':
            return n * d;

          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;

          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;

          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;

          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;

          default:
            return undefined;
        }
      }
      /**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


      function fmtShort(ms) {
        const msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return `${Math.round(ms / d)}d`;
        }

        if (msAbs >= h) {
          return `${Math.round(ms / h)}h`;
        }

        if (msAbs >= m) {
          return `${Math.round(ms / m)}m`;
        }

        if (msAbs >= s) {
          return `${Math.round(ms / s)}s`;
        }

        return `${ms}ms`;
      }
      /**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


      function fmtLong(ms) {
        const msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return plural(ms, msAbs, d, 'day');
        }

        if (msAbs >= h) {
          return plural(ms, msAbs, h, 'hour');
        }

        if (msAbs >= m) {
          return plural(ms, msAbs, m, 'minute');
        }

        if (msAbs >= s) {
          return plural(ms, msAbs, s, 'second');
        }

        return `${ms} ms`;
      }
      /**
 * Pluralization helper.
 */


      function plural(ms, msAbs, n, name) {
        const isPlural = msAbs >= n * 1.5;
        return `${Math.round(ms / n)} ${name}${isPlural ? 's' : ''}`;
      }
      /***/ }),

    /***/ './node_modules/debug/src/browser.js':
    /*! *******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \****************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (process) {
        __webpack_require__(/*! core-js/modules/es.array.splice */ './node_modules/core-js/modules/es.array.splice.js');

        __webpack_require__(/*! core-js/modules/es.regexp.constructor */ './node_modules/core-js/modules/es.regexp.constructor.js');

        __webpack_require__(/*! core-js/modules/es.regexp.to-string */ './node_modules/core-js/modules/es.regexp.to-string.js');

        __webpack_require__(/*! core-js/modules/es.string.match */ './node_modules/core-js/modules/es.string.match.js');

        __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js');

        /* eslint-env browser */

        /**
 * This is the web browser implementation of `debug()`.
 */
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        /**
 * Colors.
 */

        exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
        /**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
        // eslint-disable-next-line complexity

        function useColors() {
          // NB: In an Electron preload script, document will be defined but not fully
          // initialized. Since we know we're in Chrome, we'll just detect this case
          // explicitly
          if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
            return true;
          } // Internet Explorer and Edge do not support colors.


          if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
          } // Is webkit? http://stackoverflow.com/a/16459606/376773
          // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


          return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance // Is firebug? http://stackoverflow.com/a/398120/376773
  || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 // Double check webkit in userAgent just in case we are in a worker
  || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        /**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


        function formatArgs(args) {
          args[0] = `${(this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ')}+${module.exports.humanize(this.diff)}`;

          if (!this.useColors) {
            return;
          }

          const c = `color: ${this.color}`;
          args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
          // arguments passed either before or after the %c, so we need to
          // figure out the correct index to insert the CSS into

          let index = 0;
          let lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, (match) => {
            if (match === '%%') {
              return;
            }

            index++;

            if (match === '%c') {
              // We only are interested in the *last* %c
              // (the user may have provided their own)
              lastC = index;
            }
          });
          args.splice(lastC, 0, c);
        }
        /**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


        function log() {
          let _console;

          // This hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return typeof console === 'object' && console.log && (_console = console).log.apply(_console, arguments);
        }
        /**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


        function save(namespaces) {
          try {
            if (namespaces) {
              exports.storage.setItem('debug', namespaces);
            } else {
              exports.storage.removeItem('debug');
            }
          } catch (error) { // Swallow
            // XXX (@Qix-) should we be logging these?
          }
        }
        /**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


        function load() {
          let r;

          try {
            r = exports.storage.getItem('debug');
          } catch (error) {} // Swallow
          // XXX (@Qix-) should we be logging these?
          // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


          if (!r && typeof process !== 'undefined' && 'env' in process) {
            r = process.env.DEBUG;
          }

          return r;
        }
        /**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


        function localstorage() {
          try {
            // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
            // The Browser also has localStorage in the global context.
            return localStorage;
          } catch (error) { // Swallow
            // XXX (@Qix-) should we be logging these?
          }
        }

        module.exports = __webpack_require__(/*! ./common */ './node_modules/debug/src/common.js')(exports);
        const {formatters} = module.exports;
        /**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

        formatters.j = function (v) {
          try {
            return JSON.stringify(v);
          } catch (error) {
            return `[UnexpectedJSONParseError]: ${error.message}`;
          }
        };
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! ./../../process/browser.js */ './node_modules/process/browser.js')));
      /***/ }),

    /***/ './node_modules/debug/src/common.js':
    /*! ******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \***************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      __webpack_require__(/*! core-js/modules/es.array.concat */ './node_modules/core-js/modules/es.array.concat.js');

      __webpack_require__(/*! core-js/modules/es.array.join */ './node_modules/core-js/modules/es.array.join.js');

      __webpack_require__(/*! core-js/modules/es.array.map */ './node_modules/core-js/modules/es.array.map.js');

      __webpack_require__(/*! core-js/modules/es.array.splice */ './node_modules/core-js/modules/es.array.splice.js');

      __webpack_require__(/*! core-js/modules/es.number.constructor */ './node_modules/core-js/modules/es.number.constructor.js');

      __webpack_require__(/*! core-js/modules/es.object.keys */ './node_modules/core-js/modules/es.object.keys.js');

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

      __webpack_require__(/*! core-js/modules/es.regexp.constructor */ './node_modules/core-js/modules/es.regexp.constructor.js');

      __webpack_require__(/*! core-js/modules/es.regexp.to-string */ './node_modules/core-js/modules/es.regexp.to-string.js');

      __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js');

      __webpack_require__(/*! core-js/modules/es.string.split */ './node_modules/core-js/modules/es.string.split.js');

      __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ './node_modules/core-js/modules/web.dom-collections.for-each.js');

      /**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = __webpack_require__(/*! ms */ './node_modules/debug/node_modules/ms/index.js');
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        /**
  * Active `debug` instances.
  */

        createDebug.instances = [];
        /**
  * The currently active debug mode names, and names to skip.
  */

        createDebug.names = [];
        createDebug.skips = [];
        /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

        createDebug.formatters = {};
        /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

        function selectColor(namespace) {
          let hash = 0;

          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
          }

          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }

        createDebug.selectColor = selectColor;
        /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

        function createDebug(namespace) {
          let prevTime;

          function debug() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            // Disabled?
            if (!debug.enabled) {
              return;
            }

            const self = debug; // Set `diff` timestamp

            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);

            if (typeof args[0] !== 'string') {
              // Anything else let's inspect with %O
              args.unshift('%O');
            } // Apply any `formatters` transformations


            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              // If we encounter an escaped % then don't increase the array index
              if (match === '%%') {
                return match;
              }

              index++;
              const formatter = createDebug.formatters[format];

              if (typeof formatter === 'function') {
                const val = args[index];
                match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

                args.splice(index, 1);
                index--;
              }

              return match;
            }); // Apply env-specific formatting (colors, etc.)

            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }

          debug.namespace = namespace;
          debug.enabled = createDebug.enabled(namespace);
          debug.useColors = createDebug.useColors();
          debug.color = selectColor(namespace);
          debug.destroy = destroy;
          debug.extend = extend; // Debug.formatArgs = formatArgs;
          // debug.rawLog = rawLog;
          // env-specific initialization logic for debug instances

          if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
          }

          createDebug.instances.push(debug);
          return debug;
        }

        function destroy() {
          const index = createDebug.instances.indexOf(this);

          if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
          }

          return false;
        }

        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.names = [];
          createDebug.skips = [];
          let i;
          const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
          const len = split.length;

          for (i = 0; i < len; i++) {
            if (!split[i]) {
              // ignore empty strings
              continue;
            }

            namespaces = split[i].replace(/\*/g, '.*?');

            if (namespaces[0] === '-') {
              createDebug.skips.push(new RegExp(`^${namespaces.substr(1)}$`));
            } else {
              createDebug.names.push(new RegExp(`^${namespaces}$`));
            }
          }

          for (i = 0; i < createDebug.instances.length; i++) {
            const instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
          }
        }
        /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


        function disable() {
          const namespaces = [].concat(createDebug.names.map(toNamespace), createDebug.skips.map(toNamespace).map((namespace) => {
            return `-${namespace}`;
          })).join(',');
          createDebug.enable('');
          return namespaces;
        }
        /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


        function enabled(name) {
          if (name[name.length - 1] === '*') {
            return true;
          }

          let i;
          let len;

          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }

          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }

          return false;
        }
        /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


        function toNamespace(regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
        }
        /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }

          return val;
        }

        createDebug.enable(createDebug.load());
        return createDebug;
      }

      module.exports = setup;
      /***/ }),

    /***/ './node_modules/process/browser.js':
    /*! *****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \**************************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      // shim for using process in browser
      const process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      let cachedSetTimeout;
      let cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      }());
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
        // normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
        // normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      let queue = [];
      let draining = false;
      let currentQueue;
      let queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        const timeout = runTimeout(cleanUpNextTick);
        draining = true;

        let len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        const args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (let i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) { return []; };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () { return '/'; };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () { return 0; };
      /***/ }),

    /***/ './node_modules/regenerator-runtime/runtime.js':
    /*! *****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \**************************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) { /**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
        !(function (global) {
          const Op = Object.prototype;
          const hasOwn = Op.hasOwnProperty;
          let undefined; // More compressible than void 0.
          const $Symbol = typeof Symbol === 'function' ? Symbol : {};
          const iteratorSymbol = $Symbol.iterator || '@@iterator';
          const asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
          const toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

          const inModule = typeof module === 'object';
          let runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              // If regeneratorRuntime is defined globally and we're in a module,
              // make the exports object identical to regeneratorRuntime.
              module.exports = runtime;
            }
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
            return;
          }

          // Define the runtime globally (as expected by generated code) as either
          // module.exports (if we're in a module) or a new, empty object.
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            const protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            const generator = Object.create(protoGenerator.prototype);
            const context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          runtime.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return {type: 'normal', arg: fn.call(obj, arg)};
            } catch (err) {
              return {type: 'throw', arg: err};
            }
          }

          const GenStateSuspendedStart = 'suspendedStart';
          const GenStateSuspendedYield = 'suspendedYield';
          const GenStateExecuting = 'executing';
          const GenStateCompleted = 'completed';

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          const ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          let IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          const getProto = Object.getPrototypeOf;
          const NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype
      && NativeIteratorPrototype !== Op
      && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          const Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = 'GeneratorFunction';

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ['next', 'throw', 'return'].forEach((method) => {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          runtime.isGeneratorFunction = function (genFun) {
            const ctor = typeof genFun === 'function' && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        || (ctor.displayName || ctor.name) === 'GeneratorFunction'
              : false;
          };

          runtime.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = 'GeneratorFunction';
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          runtime.awrap = function (arg) {
            return {__await: arg};
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              const record = tryCatch(generator[method], generator, arg);
              if (record.type === 'throw') {
                reject(record.arg);
              } else {
                const result = record.arg;
                const {value} = result;
                if (value
            && typeof value === 'object'
            && hasOwn.call(value, '__await')) {
                  return Promise.resolve(value.__await).then((value) => {
                    invoke('next', value, resolve, reject);
                  }, (err) => {
                    invoke('throw', err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then((unwrapped) => {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration. If the Promise is rejected, however, the
                  // result for this iteration will be rejected with the same
                  // reason. Note that rejections of yielded Promises are not
                  // thrown back into the generator function, as is the case
                  // when an awaited Promise is rejected. This difference in
                  // behavior between yield and await is important, because it
                  // allows the consumer to decide what to do with the yielded
                  // rejection (swallow it and continue, manually .throw it back
                  // into the generator, abandon iteration, whatever). With
                  // await, by contrast, there is no opportunity to examine the
                  // rejection reason outside the generator function, so the
                  // only option is to throw it from the await expression, and
                  // let the generator function handle the exception.
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }

            if (typeof global.process === 'object' && global.process.domain) {
              invoke = global.process.domain.bind(invoke);
            }

            let previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(((resolve, reject) => {
                  invoke(method, arg, resolve, reject);
                }));
              }

              return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          runtime.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            const iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList)
            );

            return runtime.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then((result) => {
                return result.done ? result.value : iter.next();
              });
          };

          function makeInvokeMethod(innerFn, self, context) {
            let state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error('Generator is already running');
              }

              if (state === GenStateCompleted) {
                if (method === 'throw') {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                const {delegate} = context;
                if (delegate) {
                  const delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === 'next') {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === 'throw') {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === 'return') {
                  context.abrupt('return', context.arg);
                }

                state = GenStateExecuting;

                const record = tryCatch(innerFn, self, context);
                if (record.type === 'normal') {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };
                } if (record.type === 'throw') {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = 'throw';
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            const method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === 'throw') {
                if (delegate.iterator.return) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = 'return';
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === 'throw') {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = 'throw';
                context.arg = new TypeError(
                  'The iterator does not provide a \'throw\' method'
                );
              }

              return ContinueSentinel;
            }

            const record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === 'throw') {
              context.method = 'throw';
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            const info = record.arg;

            if (!info) {
              context.method = 'throw';
              context.arg = new TypeError('iterator result is not an object');
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== 'return') {
                context.method = 'next';
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = 'Generator';

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return '[object Generator]';
          };

          function pushTryEntry(locs) {
            const entry = {tryLoc: locs[0]};

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            const record = entry.completion || {};
            record.type = 'normal';
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{tryLoc: 'root'}];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          runtime.keys = function (object) {
            const keys = [];
            for (const key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                const key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              const iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === 'function') {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                let i = -1; const
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;

                    return next;
                  };

                return next.next = next;
              }
            }

            // Return an iterator with no values.
            return {next: doneResult};
          }
          runtime.values = values;

          function doneResult() {
            return {value: undefined, done: true};
          }

          Context.prototype = {
            constructor: Context,

            reset(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = 'next';
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (const name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === 't'
              && hasOwn.call(this, name)
              && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop() {
              this.done = true;

              const rootEntry = this.tryEntries[0];
              const rootRecord = rootEntry.completion;
              if (rootRecord.type === 'throw') {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              const context = this;
              function handle(loc, caught) {
                record.type = 'throw';
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = 'next';
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                const entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === 'root') {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle('end');
                }

                if (entry.tryLoc <= this.prev) {
                  const hasCatch = hasOwn.call(entry, 'catchLoc');
                  const hasFinally = hasOwn.call(entry, 'finallyLoc');

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error('try statement without catch or finally');
                  }
                }
              }
            },

            abrupt(type, arg) {
              for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                const entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev
            && hasOwn.call(entry, 'finallyLoc')
            && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry
          && (type === 'break'
           || type === 'continue')
          && finallyEntry.tryLoc <= arg
          && arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              const record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = 'next';
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete(record, afterLoc) {
              if (record.type === 'throw') {
                throw record.arg;
              }

              if (record.type === 'break'
          || record.type === 'continue') {
                this.next = record.arg;
              } else if (record.type === 'return') {
                this.rval = this.arg = record.arg;
                this.method = 'return';
                this.next = 'end';
              } else if (record.type === 'normal' && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish(finallyLoc) {
              for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                const entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            catch(tryLoc) {
              for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                const entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  const record = entry.completion;
                  if (record.type === 'throw') {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error('illegal catch attempt');
            },

            delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName,
                nextLoc
              };

              if (this.method === 'next') {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            }
          };
        }(
          // Among the various tricks for obtaining a reference to the global
          // object, this seems to be the most reliable technique that does not
          // use indirect eval (which violates Content Security Policy).
          typeof global === 'object' ? global
            : typeof window === 'object' ? window
              : typeof self === 'object' ? self : this
        ));
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js')));
      /***/ }),

    /***/ './node_modules/webpack/buildin/global.js':
    /*! ***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \********************************** */
    /*! all exports used */
    /***/ (function (module, exports) {
      let g;

      // This works in non-strict mode
      g = (function () {
        return this;
      }());

      try {
        // This works if eval is allowed (see CSP)
        g = g || new Function('return this')();
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') g = window;
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;
      /***/ }),

    /***/ './node_modules/whatwg-fetch/fetch.js':
    /*! ********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \******************************************* */
    /*! all exports used */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Headers', () => { return Headers; });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Request', () => { return Request; });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Response', () => { return Response; });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DOMException', () => { return DOMException; });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'fetch', () => { return fetch; });
      const support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob:
    'FileReader' in self
    && 'Blob' in self
    && (function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }()),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
      };

      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }

      if (support.arrayBuffer) {
        const viewClasses = [
          '[object Int8Array]',
          '[object Uint8Array]',
          '[object Uint8ClampedArray]',
          '[object Int16Array]',
          '[object Uint16Array]',
          '[object Int32Array]',
          '[object Uint32Array]',
          '[object Float32Array]',
          '[object Float64Array]'
        ];

        var isArrayBufferView = ArrayBuffer.isView
    || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
      }

      function normalizeName(name) {
        if (typeof name !== 'string') {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
      }

      function normalizeValue(value) {
        if (typeof value !== 'string') {
          value = String(value);
        }
        return value;
      }

      // Build a destructive iterator for the value list
      function iteratorFor(items) {
        const iterator = {
          next() {
            const value = items.shift();
            return {done: value === undefined, value};
          }
        };

        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
            return iterator;
          };
        }

        return iterator;
      }

      function Headers(headers) {
        this.map = {};

        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
            this.append(name, headers[name]);
          }, this);
        }
      }

      Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        const oldValue = this.map[name];
        this.map[name] = oldValue ? `${oldValue}, ${value}` : value;
      };

      Headers.prototype.delete = function (name) {
        delete this.map[normalizeName(name)];
      };

      Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };

      Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };

      Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };

      Headers.prototype.forEach = function (callback, thisArg) {
        for (const name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };

      Headers.prototype.keys = function () {
        const items = [];
        this.forEach((value, name) => {
          items.push(name);
        });
        return iteratorFor(items);
      };

      Headers.prototype.values = function () {
        const items = [];
        this.forEach((value) => {
          items.push(value);
        });
        return iteratorFor(items);
      };

      Headers.prototype.entries = function () {
        const items = [];
        this.forEach((value, name) => {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };

      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }

      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
      }

      function fileReaderReady(reader) {
        return new Promise(((resolve, reject) => {
          reader.onload = function () {
            resolve(reader.result);
          };
          reader.onerror = function () {
            reject(reader.error);
          };
        }));
      }

      function readBlobAsArrayBuffer(blob) {
        const reader = new FileReader();
        const promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }

      function readBlobAsText(blob) {
        const reader = new FileReader();
        const promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }

      function readArrayBufferAsText(buf) {
        const view = new Uint8Array(buf);
        const chars = new Array(view.length);

        for (let i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join('');
      }

      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        }
        const view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }

      function Body() {
        this.bodyUsed = false;

        this._initBody = function (body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = '';
          } else if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            // IE 10-11 can't handle a DataView body.
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }

          if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
              this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
          }
        };

        if (support.blob) {
          this.blob = function () {
            const rejected = consumed(this);
            if (rejected) {
              return rejected;
            }

            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } if (this._bodyFormData) {
              throw new Error('could not read FormData body as blob');
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };

          this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            }
            return this.blob().then(readBlobAsArrayBuffer);
          };
        }

        this.text = function () {
          const rejected = consumed(this);
          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };

        if (support.formData) {
          this.formData = function () {
            return this.text().then(decode);
          };
        }

        this.json = function () {
          return this.text().then(JSON.parse);
        };

        return this;
      }

      // HTTP methods whose capitalization should be normalized
      const methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

      function normalizeMethod(method) {
        const upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }

      function Request(input, options) {
        options = options || {};
        let {body} = options;

        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError('Already read');
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }

        this.credentials = options.credentials || this.credentials || 'same-origin';
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
          throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
      }

      Request.prototype.clone = function () {
        return new Request(this, {body: this._bodyInit});
      };

      function decode(body) {
        const form = new FormData();
        body
          .trim()
          .split('&')
          .forEach((bytes) => {
            if (bytes) {
              const split = bytes.split('=');
              const name = split.shift().replace(/\+/g, ' ');
              const value = split.join('=').replace(/\+/g, ' ');
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
        return form;
      }

      function parseHeaders(rawHeaders) {
        const headers = new Headers();
        // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
        // https://tools.ietf.org/html/rfc7230#section-3.2
        const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach((line) => {
          const parts = line.split(':');
          const key = parts.shift().trim();
          if (key) {
            const value = parts.join(':').trim();
            headers.append(key, value);
          }
        });
        return headers;
      }

      Body.call(Request.prototype);

      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }

        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in options ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
      }

      Body.call(Response.prototype);

      Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };

      Response.error = function () {
        const response = new Response(null, {status: 0, statusText: ''});
        response.type = 'error';
        return response;
      };

      const redirectStatuses = [301, 302, 303, 307, 308];

      Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError('Invalid status code');
        }

        return new Response(null, {status, headers: {location: url}});
      };

      var {DOMException} = self;
      try {
        new DOMException();
      } catch (err) {
        DOMException = function (message, name) {
          this.message = message;
          this.name = name;
          const error = Error(message);
          this.stack = error.stack;
        };
        DOMException.prototype = Object.create(Error.prototype);
        DOMException.prototype.constructor = DOMException;
      }

      function fetch(input, init) {
        return new Promise(((resolve, reject) => {
          const request = new Request(input, init);

          if (request.signal && request.signal.aborted) {
            return reject(new DOMException('Aborted', 'AbortError'));
          }

          const xhr = new XMLHttpRequest();

          function abortXhr() {
            xhr.abort();
          }

          xhr.onload = function () {
            const options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
            };
            options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
            const body = 'response' in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };

          xhr.onerror = function () {
            reject(new TypeError('Network request failed'));
          };

          xhr.ontimeout = function () {
            reject(new TypeError('Network request failed'));
          };

          xhr.onabort = function () {
            reject(new DOMException('Aborted', 'AbortError'));
          };

          xhr.open(request.method, request.url, true);

          if (request.credentials === 'include') {
            xhr.withCredentials = true;
          } else if (request.credentials === 'omit') {
            xhr.withCredentials = false;
          }

          if ('responseType' in xhr && support.blob) {
            xhr.responseType = 'blob';
          }

          request.headers.forEach((value, name) => {
            xhr.setRequestHeader(name, value);
          });

          if (request.signal) {
            request.signal.addEventListener('abort', abortXhr);

            xhr.onreadystatechange = function () {
              // DONE (success or failure)
              if (xhr.readyState === 4) {
                request.signal.removeEventListener('abort', abortXhr);
              }
            };
          }

          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        }));
      }

      fetch.polyfill = true;

      if (!self.fetch) {
        self.fetch = fetch;
        self.Headers = Headers;
        self.Request = Request;
        self.Response = Response;
      }
      /***/ }),

    /***/ './src/Client.js':
    /*! ***********************!*\
  !*** ./src/Client.js ***!
  \********************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js');

      __webpack_require__(/*! core-js/modules/es.array.concat */ './node_modules/core-js/modules/es.array.concat.js');

      __webpack_require__(/*! core-js/modules/es.array.filter */ './node_modules/core-js/modules/es.array.filter.js');

      __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js');

      __webpack_require__(/*! core-js/modules/es.array.flat */ './node_modules/core-js/modules/es.array.flat.js');

      __webpack_require__(/*! core-js/modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js');

      __webpack_require__(/*! core-js/modules/es.array.map */ './node_modules/core-js/modules/es.array.map.js');

      __webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ './node_modules/core-js/modules/es.array.unscopables.flat.js');

      __webpack_require__(/*! core-js/modules/es.object.assign */ './node_modules/core-js/modules/es.object.assign.js');

      __webpack_require__(/*! core-js/modules/es.object.keys */ './node_modules/core-js/modules/es.object.keys.js');

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

      __webpack_require__(/*! core-js/modules/es.promise */ './node_modules/core-js/modules/es.promise.js');

      __webpack_require__(/*! core-js/modules/es.promise.finally */ './node_modules/core-js/modules/es.promise.finally.js');

      __webpack_require__(/*! core-js/modules/es.string.iterator */ './node_modules/core-js/modules/es.string.iterator.js');

      __webpack_require__(/*! core-js/modules/es.string.match */ './node_modules/core-js/modules/es.string.match.js');

      __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js');

      __webpack_require__(/*! core-js/modules/es.string.split */ './node_modules/core-js/modules/es.string.split.js');

      __webpack_require__(/*! core-js/modules/es.string.trim */ './node_modules/core-js/modules/es.string.trim.js');

      __webpack_require__(/*! core-js/modules/es.string.link */ './node_modules/core-js/modules/es.string.link.js');

      __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ './node_modules/core-js/modules/web.dom-collections.for-each.js');

      __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ './node_modules/core-js/modules/web.dom-collections.iterator.js');

      __webpack_require__(/*! core-js/modules/web.url */ './node_modules/core-js/modules/web.url.js');

      const _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js'));

      __webpack_require__(/*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js');

      const _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ './node_modules/@babel/runtime/helpers/createClass.js'));

      const _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ './node_modules/@babel/runtime/helpers/asyncToGenerator.js'));

      // / <reference path="types.d.ts" />
      const _require = __webpack_require__(/*! ./lib */ './src/lib.js');
      const {absolute} = _require;
      const _debug = _require.debug;
      const _getPath = _require.getPath;
      const {setPath} = _require;
      const {jwtDecode} = _require;
      const {makeArray} = _require;
      const _request = _require.request;
      const {btoa} = _require;
      const _byCode = _require.byCode;
      const _byCodes = _require.byCodes;
      const {units} = _require;
      const {getPatientParam} = _require;

      const debug = _debug.extend('client');

      const str = __webpack_require__(/*! ./strings */ './src/strings.js');

      const _require2 = __webpack_require__(/*! ./smart */ './src/smart.js');
      const {fetchConformanceStatement} = _require2;
      const {fetchFhirVersion} = _require2;

      const _require3 = __webpack_require__(/*! ./settings */ './src/settings.js');
      const {SMART_KEY} = _require3;
      const {patientCompartment} = _require3;
      const {fhirVersions} = _require3;
      /**
 * Adds patient context to requestOptions object to be used with fhirclient.Client.request
 * @param {Object|String} requestOptions Can be a string URL (relative to
 *  the serviceUrl), or an object which will be passed to fetch()
 * @param {fhirclient.Client} client Current FHIR client object containing patient context
 * @return {Promise<Object|String>} requestOptions object contextualized to current patient
 */


      function contextualize(_x, _x2) {
        return _contextualize.apply(this, arguments);
      }
      /**
 * Gets single reference by id. Caches the result.
 * @param {String} refId
 * @param {Object} cache A map to store the resolved refs
 * @param {FhirClient} client The client instance
 * @returns {Promise<Object>} The resolved reference
 * @private
 */


      function _contextualize() {
        _contextualize = (0, _asyncToGenerator2.default)(
          /* #__PURE__ */
          _regenerator.default.mark(function _callee8(requestOptions, client) {
            let base; let contextualURL; let _contextualURL; let _url; let
              url;

            return _regenerator.default.wrap((_context8) => {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _contextualURL = function _ref6() {
                      _contextualURL = (0, _asyncToGenerator2.default)(
                        /* #__PURE__ */
                        _regenerator.default.mark(function _callee7(url) {
                          let resourceType; let conformance; let
                            searchParam;
                          return _regenerator.default.wrap((_context7) => {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  resourceType = url.pathname.split('/').pop();

                                  if (!(patientCompartment.indexOf(resourceType) == -1)) {
                                    _context7.next = 3;
                                    break;
                                  }

                                  throw new Error(`Cannot filter "${resourceType}" resources by patient`);

                                case 3:
                                  _context7.next = 5;
                                  return fetchConformanceStatement(client.state.serverUrl);

                                case 5:
                                  conformance = _context7.sent;
                                  searchParam = getPatientParam(conformance, resourceType);
                                  url.searchParams.set(searchParam, client.patient.id);
                                  return _context7.abrupt('return', url.href);

                                case 9:
                                case 'end':
                                  return _context7.stop();
                              }
                            }
                          }, _callee7);
                        })
                      );
                      return _contextualURL.apply(this, arguments);
                    };

                    contextualURL = function _ref5(_x9) {
                      return _contextualURL.apply(this, arguments);
                    };

                    // This code could be useful for implementing FHIR version awareness in the future:
                    //   const fhirVersionsMap = require("./data/fhir-versions");
                    //   const fetchFhirVersion = require("./smart").fetchFhirVersion;
                    //   const fhirVersion = client.state.fhirVersion || await fetchFhirVersion(client.state.serverUrl) || "";
                    //   const fhirRelease = fhirVersionsMap[fhirVersion];
                    base = absolute('/', client.state.serverUrl);

                    if (!(typeof requestOptions === 'string' || requestOptions instanceof URL)) {
                      _context8.next = 6;
                      break;
                    }

                    _url = new URL(`${requestOptions}`, base);
                    return _context8.abrupt('return', contextualURL(_url));

                  case 6:
                    url = new URL(requestOptions.url, base);
                    _context8.next = 9;
                    return contextualURL(url);

                  case 9:
                    requestOptions.url = _context8.sent;
                    return _context8.abrupt('return', requestOptions);

                  case 11:
                  case 'end':
                    return _context8.stop();
                }
              }
            }, _callee8);
          })
        );
        return _contextualize.apply(this, arguments);
      }

      function getRef(refId, cache, client) {
        const sub = cache[refId];

        if (!sub) {
          // Note that we set cache[refId] immediately! When the promise is settled
          // it will be updated. This is to avoid a ref being fetched twice because
          // some of these requests are executed in parallel.
          cache[refId] = client.request(refId).then((sub) => {
            cache[refId] = sub;
            return sub;
          }, (error) => {
            delete cache[refId];
            throw error;
          });
          return cache[refId];
        }

        return sub;
      }
      /**
 * Resolves a reference in the given resource.
 * @param {Object} obj FHIR Resource
 */


      function resolveRef(obj, path, graph, cache, client) {
        const node = _getPath(obj, path);

        if (node) {
          const isArray = Array.isArray(node);
          return Promise.all(makeArray(node).map((item, i) => {
            const ref = item.reference;

            if (ref) {
              return getRef(ref, cache, client).then((sub) => {
                if (graph) {
                  if (isArray) {
                    setPath(obj, `${path}.${i}`, sub);
                  } else {
                    setPath(obj, path, sub);
                  }
                }
              }).catch(() => {
                /* ignore */
              });
            }
          }));
        }
      }
      /**
 * Given a resource and a list of ref paths - resolves them all
 * @param {Object} obj FHIR Resource
 * @param {Object} fhirOptions The fhir options of the initiating request call
 * @param {Object} cache A map to store fetched refs
 * @param {FhirClient} client The client instance
 * @private
 */


      function resolveRefs(obj, fhirOptions, cache, client) {
        // 1. Sanitize paths, remove any invalid ones
        let paths = makeArray(fhirOptions.resolveReferences).filter(Boolean) // No false, 0, null, undefined or ""
          .map((path) => {
            return String(path).trim();
          }).filter(Boolean); // No space-only strings
        // 2. Remove duplicates

        paths = paths.filter((p, i) => {
          const index = paths.indexOf(p, i + 1);

          if (index > -1) {
            debug('Duplicated reference path "%s"', p);
            return false;
          }

          return true;
        }); // 3. Early exit if no valid paths are found

        if (!paths.length) {
          return Promise.resolve();
        } // 4. Group the paths by depth so that child refs are looked up
        // after their parents!


        const groups = {};
        paths.forEach((path) => {
          const len = path.split('.').length;

          if (!groups[len]) {
            groups[len] = [];
          }

          groups[len].push(path);
        }); // 5. Execute groups sequentially! Paths within same group are
        // fetched in parallel!

        /**
   * @type any
   */

        let task = Promise.resolve();
        Object.keys(groups).sort().forEach((len) => {
          const group = groups[len];
          task = task.then(() => {
            return Promise.all(group.map((path) => {
              return resolveRef(obj, path, fhirOptions.graph, cache, client);
            }));
          });
        });
        return task;
      }
      /**
 * @implements { fhirclient.Client }
 */


      const FhirClient =
/* #__PURE__ */
(function () {
  /**
   * @param {object} environment
   * @param {fhirclient.ClientState|string} state
   */
  function FhirClient(environment, state) {
    const _this = this;

    /**
     * @type fhirclient.ClientState
     */
    const _state = typeof state === 'string' ? {
      serverUrl: state
    } : state; // Valid serverUrl is required!


    if (!_state.serverUrl || !_state.serverUrl.match(/https?:\/\/.+/)) {
      throw new Error('A "serverUrl" option is required and must begin with "http(s)"');
    }

    this.state = _state;
    this.environment = environment;
    const client = this; // patient api ---------------------------------------------------------

    this.patient = {
      get id() {
        return client.getPatientId();
      },

      read: function read() {
        const {id} = _this.patient;
        return id ? _this.request(`Patient/${id}`) : Promise.reject(new Error('Patient is not available'));
      },
      request: function request(requestOptions, fhirOptions) {
        if (fhirOptions === void 0) {
          fhirOptions = {};
        }

        if (_this.patient.id) {
          return (0, _asyncToGenerator2.default)(
          /* #__PURE__ */
            _regenerator.default.mark(function _callee() {
              let options;
              return _regenerator.default.wrap((_context) => {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return contextualize(requestOptions, _this);

                    case 2:
                      options = _context.sent;
                      return _context.abrupt('return', _this.request(options, fhirOptions));

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          )();
        }
        return Promise.reject(new Error('Patient is not available'));
      }
    }; // encounter api -------------------------------------------------------

    this.encounter = {
      get id() {
        return client.getEncounterId();
      },

      read: function read() {
        const {id} = _this.encounter;
        return id ? _this.request(`Encounter/${id}`) : Promise.reject(new Error('Encounter is not available'));
      }
    }; // user api ------------------------------------------------------------

    this.user = {
      get fhirUser() {
        return client.getFhirUser();
      },

      get id() {
        return client.getUserId();
      },

      get resourceType() {
        return client.getUserType();
      },

      read: function read() {
        const {fhirUser} = _this.user;
        return fhirUser ? _this.request(fhirUser) : Promise.reject(new Error('User is not available'));
      }
    }; // fhir.js api (attached automatically in browser)
    // ---------------------------------------------------------------------

    if (environment.fhir) {
      this.connect(environment.fhir);
    }
  }

  const _proto = FhirClient.prototype;

  _proto.connect = function connect(fhirJs) {
    if (typeof fhirJs === 'function') {
      const options = {
        baseUrl: this.state.serverUrl.replace(/\/$/, '')
      };

      const accessToken = _getPath(this, 'state.tokenResponse.access_token');

      if (accessToken) {
        options.auth = {
          token: accessToken
        };
      } else {
        const _this$state = this.state;
        const {username} = _this$state;
        const {password} = _this$state;

        if (username && password) {
          options.auth = {
            user: username,
            pass: password
          };
        }
      }

      this.api = fhirJs(options);

      const patientId = _getPath(this, 'state.tokenResponse.patient');

      if (patientId) {
        this.patient.api = fhirJs({...options, patient: patientId});
      }
    }
  }
  /**
   * Returns the ID of the selected patient or null. You should have requested
   * "launch/patient" scope. Otherwise this will return null.
   */
  ;

  _proto.getPatientId = function getPatientId() {
    const {tokenResponse} = this.state;

    if (tokenResponse) {
      // We have been authorized against this server but we don't know
      // the patient. This should be a scope issue.
      if (!tokenResponse.patient) {
        if (!(this.state.scope || '').match(/\blaunch(\/patient)?\b/)) {
          debug(str.noScopeForId, 'patient', 'patient');
        } else {
          // The server should have returned the patient!
          debug('The ID of the selected patient is not available. Please check if your server supports that.');
        }

        return null;
      }

      return tokenResponse.patient;
    }

    if (this.state.authorizeUri) {
      debug(str.noIfNoAuth, 'the ID of the selected patient');
    } else {
      debug(str.noFreeContext, 'selected patient');
    }

    return null;
  }
  /**
   * Returns the ID of the selected encounter or null. You should have
   * requested "launch/encounter" scope. Otherwise this will return null.
   * Note that not all servers support the "launch/encounter" scope so this
   * will be null if they don't.
   */
  ;

  _proto.getEncounterId = function getEncounterId() {
    const {tokenResponse} = this.state;

    if (tokenResponse) {
      // We have been authorized against this server but we don't know
      // the encounter. This should be a scope issue.
      if (!tokenResponse.encounter) {
        if (!(this.state.scope || '').match(/\blaunch(\/encounter)?\b/)) {
          debug(str.noScopeForId, 'encounter', 'encounter');
        } else {
          // The server should have returned the encounter!
          debug('The ID of the selected encounter is not available. Please check if your server supports that, and that the selected patient has any recorded encounters.');
        }

        return null;
      }

      return tokenResponse.encounter;
    }

    if (this.state.authorizeUri) {
      debug(str.noIfNoAuth, 'the ID of the selected encounter');
    } else {
      debug(str.noFreeContext, 'selected encounter');
    }

    return null;
  }
  /**
   * Returns the (decoded) id_token if any. You need to request "openid" and
   * "profile" scopes if you need to receive an id_token (if you need to know
   * who the logged-in user is).
   */
  ;

  _proto.getIdToken = function getIdToken() {
    const {tokenResponse} = this.state;

    if (tokenResponse) {
      const idToken = tokenResponse.id_token;
      const scope = this.state.scope || ''; // We have been authorized against this server but we don't have
      // the id_token. This should be a scope issue.

      if (!idToken) {
        const hasOpenid = scope.match(/\bopenid\b/);
        const hasProfile = scope.match(/\bprofile\b/);
        const hasFhirUser = scope.match(/\bfhirUser\b/);

        if (!hasOpenid || !(hasFhirUser || hasProfile)) {
          debug('You are trying to get the id_token but you are not using the right scopes. Please add \'openid\' and \'fhirUser\' or \'profile\' to the scopes you are requesting.');
        } else {
          // The server should have returned the id_token!
          debug('The id_token is not available. Please check if your server supports that.');
        }

        return null;
      }

      return jwtDecode(idToken);
    }

    if (this.state.authorizeUri) {
      debug(str.noIfNoAuth, 'the id_token');
    } else {
      debug(str.noFreeContext, 'id_token');
    }

    return null;
  }
  /**
   * Returns the profile of the logged_in user (if any). This is a string
   * having the following shape "{user type}/{user id}". For example:
   * "Practitioner/abc" or "Patient/xyz".
   */
  ;

  _proto.getFhirUser = function getFhirUser() {
    const idToken = this.getIdToken();

    if (idToken) {
      return idToken.profile;
    }

    return null;
  }
  /**
   * Returns the user ID or null.
   */
  ;

  _proto.getUserId = function getUserId() {
    const profile = this.getFhirUser();

    if (profile) {
      return profile.split('/')[1];
    }

    return null;
  }
  /**
   * Returns the type of the logged-in user or null. The result can be
   * "Practitioner", "Patient" or "RelatedPerson".
   */
  ;

  _proto.getUserType = function getUserType() {
    const profile = this.getFhirUser();

    if (profile) {
      return profile.split('/')[0];
    }

    return null;
  };

  _proto.getAuthorizationHeader = function getAuthorizationHeader() {
    const accessToken = _getPath(this, 'state.tokenResponse.access_token');

    if (accessToken) {
      return `Bearer ${accessToken}`;
    }

    const _this$state2 = this.state;
    const {username} = _this$state2;
    const {password} = _this$state2;

    if (username && password) {
      return `Basic ${btoa(`${username}:${password}`)}`;
    }

    return null;
  };

  _proto._clearState =
  /* #__PURE__ */
  (function () {
    const _clearState2 = (0, _asyncToGenerator2.default)(
    /* #__PURE__ */
      _regenerator.default.mark(function _callee2() {
        let storage; let
          key;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                storage = this.environment.getStorage();
                _context2.next = 3;
                return storage.get(SMART_KEY);

              case 3:
                key = _context2.sent;

                if (!key) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return storage.unset(key);

              case 7:
                _context2.next = 9;
                return storage.unset(SMART_KEY);

              case 9:
                this.state.tokenResponse = {};

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })
    );

    function _clearState() {
      return _clearState2.apply(this, arguments);
    }

    return _clearState;
  }())
  /**
   * @param {Object} resource A FHIR resource to be created
   */
  ;

  _proto.create = function create(resource) {
    return this.request({
      url: `${resource.resourceType}`,
      method: 'POST',
      body: JSON.stringify(resource),
      headers: {
        'Content-Type': 'application/fhir+json'
      }
    });
  }
  /**
   * @param {Object} resource A FHIR resource to be updated
   */
  ;

  _proto.update = function update(resource) {
    return this.request({
      url: `${resource.resourceType}/${resource.id}`,
      method: 'PUT',
      body: JSON.stringify(resource),
      headers: {
        'Content-Type': 'application/fhir+json'
      }
    });
  }
  /**
   * @param {String} url Relative URI of the FHIR resource to be deleted
   * (format: `resourceType/id`)
   */
  ;

  _proto.delete = function _delete(url) {
    return this.request({
      url,
      method: 'DELETE'
    });
  }
  /**
   * @param {Object|String} requestOptions Can be a string URL (relative to
   *  the serviceUrl), or an object which will be passed to fetch()
   * @param {fhirclient.FhirOptions} fhirOptions Additional options to control the behavior
   * @param {object} _resolvedRefs DO NOT USE! Used internally.
   */
  ;

  _proto.request =
  /* #__PURE__ */
  (function () {
    const _request2 = (0, _asyncToGenerator2.default)(
    /* #__PURE__ */
      _regenerator.default.mark(function _callee6(requestOptions, fhirOptions, _resolvedRefs) {
        const _this2 = this;

        let debug; let url; let authHeader; let
          hasPageCallback;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (fhirOptions === void 0) {
                  fhirOptions = {};
                }

                if (_resolvedRefs === void 0) {
                  _resolvedRefs = {};
                }

                debug = _debug.extend('client:request');

                if (requestOptions) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('request requires an url or request options as argument');

              case 5:
                if (typeof requestOptions === 'string' || requestOptions instanceof URL) {
                  url = String(requestOptions);
                  requestOptions = {};
                } else {
                  url = String(requestOptions.url);
                }

                url = absolute(url, this.state.serverUrl); // authentication ------------------------------------------------------

                authHeader = this.getAuthorizationHeader();

                if (authHeader) {
                  requestOptions.headers = {...requestOptions.headers, Authorization: authHeader};
                } // fhirOptions.graph ---------------------------------------------------


                fhirOptions.graph = fhirOptions.graph !== false; // fhirOptions.flat ----------------------------------------------------

                fhirOptions.flat = !!fhirOptions.flat; // fhirOptions.pageLimit -----------------------------------------------

                if (!fhirOptions.pageLimit && fhirOptions.pageLimit !== 0) {
                  fhirOptions.pageLimit = 1;
                }

                hasPageCallback = typeof fhirOptions.onPage === 'function';
                debug('%s, options: %O, fhirOptions: %O', url, requestOptions, fhirOptions);
                return _context6.abrupt('return', _request(url, requestOptions) // Automatic re-auth via refresh token -----------------------------
                  .catch((error) => {
                    debug('%o', error);

                    if (error.status == 401 && fhirOptions.useRefreshToken !== false) {
                      const hasRefreshToken = _getPath(_this2, 'state.tokenResponse.refresh_token');

                      if (hasRefreshToken) {
                        return _this2.refresh().then(() => {
                          return _this2.request({...requestOptions, url}, fhirOptions, _resolvedRefs);
                        });
                      }
                    }

                    throw error;
                  }) // Handle 401 ------------------------------------------------------
                  .catch(
                    /* #__PURE__ */
                    function () {
                      const _ref2 = (0, _asyncToGenerator2.default)(
                        /* #__PURE__ */
                        _regenerator.default.mark(function _callee3(error) {
                          return _regenerator.default.wrap((_context3) => {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!(error.status == 401)) {
                                    _context3.next = 12;
                                    break;
                                  }

                                  if (_getPath(_this2, 'state.tokenResponse.access_token')) {
                                    _context3.next = 3;
                                    break;
                                  }

                                  throw new Error('This app cannot be accessed directly. Please launch it as SMART app!');

                                case 3:
                                  if (!(fhirOptions.useRefreshToken === false)) {
                                    _context3.next = 8;
                                    break;
                                  }

                                  debug('Your session has expired and the useRefreshToken option is set to false. Please re-launch the app.');
                                  _context3.next = 7;
                                  return _this2._clearState();

                                case 7:
                                  throw new Error(str.expired);

                                case 8:
                                  // otherwise -> auto-refresh failed. Session expired.
                                  // Need to re-launch. Clear state to start over!
                                  debug('Auto-refresh failed! Please re-launch the app.');
                                  _context3.next = 11;
                                  return _this2._clearState();

                                case 11:
                                  throw new Error(str.expired);

                                case 12:
                                  throw error;

                                case 13:
                                case 'end':
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        })
                      );

                      return function (_x6) {
                        return _ref2.apply(this, arguments);
                      };
                    }()
                  ) // Handle 403 ------------------------------------------------------
                  .catch((error) => {
                    if (error.status == 403) {
                      debug('Permission denied! Please make sure that you have requested the proper scopes.');
                    }

                    throw error;
                  }) // Handle raw requests (anything other than json) ------------------
                  .then((data) => {
                    if (!data) return data;
                    if (typeof data === 'string') return data;
                    if (typeof data === 'object' && data instanceof Response) return data; // Resolve References ----------------------------------------------

                    return (function () {
                      const _ref3 = (0, _asyncToGenerator2.default)(
                        /* #__PURE__ */
                        _regenerator.default.mark(function _callee4(data) {
                          return _regenerator.default.wrap((_context4) => {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  if (!data) {
                                    _context4.next = 8;
                                    break;
                                  }

                                  if (!(data.resourceType == 'Bundle')) {
                                    _context4.next = 6;
                                    break;
                                  }

                                  _context4.next = 4;
                                  return Promise.all((data.entry || []).map((item) => {
                                    return resolveRefs(item.resource, fhirOptions, _resolvedRefs, _this2);
                                  }));

                                case 4:
                                  _context4.next = 8;
                                  break;

                                case 6:
                                  _context4.next = 8;
                                  return resolveRefs(data, fhirOptions, _resolvedRefs, _this2);

                                case 8:
                                  return _context4.abrupt('return', data);

                                case 9:
                                case 'end':
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        })
                      );

                      return function (_x7) {
                        return _ref3.apply(this, arguments);
                      };
                    }())(data) // Pagination ------------------------------------------------------
                      .then(
                        /* #__PURE__ */
                        function () {
                          const _ref4 = (0, _asyncToGenerator2.default)(
                            /* #__PURE__ */
                            _regenerator.default.mark(function _callee5(data) {
                              let links; let next; let
                                nextPage;
                              return _regenerator.default.wrap((_context5) => {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      if (!(data && data.resourceType == 'Bundle')) {
                                        _context5.next = 19;
                                        break;
                                      }

                                      links = data.link || [];

                                      if (fhirOptions.flat) {
                                        data = (data.entry || []).map((entry) => {
                                          return entry.resource;
                                        });
                                      }

                                      if (!hasPageCallback) {
                                        _context5.next = 6;
                                        break;
                                      }

                                      _context5.next = 6;
                                      return fhirOptions.onPage(data, {..._resolvedRefs});

                                    case 6:
                                      if (!--fhirOptions.pageLimit) {
                                        _context5.next = 19;
                                        break;
                                      }

                                      next = links.find((l) => {
                                        return l.relation == 'next';
                                      });
                                      data = makeArray(data);

                                      if (!(next && next.url)) {
                                        _context5.next = 19;
                                        break;
                                      }

                                      _context5.next = 12;
                                      return _this2.request(next.url, fhirOptions, _resolvedRefs);

                                    case 12:
                                      nextPage = _context5.sent;

                                      if (!hasPageCallback) {
                                        _context5.next = 15;
                                        break;
                                      }

                                      return _context5.abrupt('return', null);

                                    case 15:
                                      if (!(fhirOptions.resolveReferences && fhirOptions.resolveReferences.length)) {
                                        _context5.next = 18;
                                        break;
                                      }

                                      Object.assign(_resolvedRefs, nextPage.references);
                                      return _context5.abrupt('return', data.concat(makeArray(nextPage.data || nextPage)));

                                    case 18:
                                      return _context5.abrupt('return', data.concat(makeArray(nextPage)));

                                    case 19:
                                      return _context5.abrupt('return', data);

                                    case 20:
                                    case 'end':
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5);
                            })
                          );

                          return function (_x8) {
                            return _ref4.apply(this, arguments);
                          };
                        }()
                      ) // Finalize --------------------------------------------------------
                      .then((data) => {
                        if (fhirOptions.graph) {
                          _resolvedRefs = {};
                        } else if (!hasPageCallback && fhirOptions.resolveReferences.length) {
                          return {
                            data,
                            references: _resolvedRefs
                          };
                        }

                        return data;
                      });
                  }));

              case 15:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })
    );

    function request(_x3, _x4, _x5) {
      return _request2.apply(this, arguments);
    }

    return request;
  }())
  /**
   * Use the refresh token to obtain new access token. If the refresh token is
   * expired (or this fails for any other reason) it will be deleted from the
   * state, so that we don't enter into loops trying to re-authorize.
   */
  ;

  _proto.refresh = function refresh() {
    const _this3 = this;

    const debug = _debug.extend('client:refresh');

    debug('Attempting to refresh with refresh_token...');

    const refreshToken = _getPath(this, 'state.tokenResponse.refresh_token');

    if (!refreshToken) {
      throw new Error('Unable to refresh. No refresh_token found.');
    }

    const {tokenUri} = this.state;

    if (!tokenUri) {
      throw new Error('Unable to refresh. No tokenUri found.');
    }

    const scopes = _getPath(this, 'state.tokenResponse.scope') || '';

    if (scopes.indexOf('offline_access') == -1) {
      throw new Error('Unable to refresh. No offline_access scope found.');
    } // This method is typically called internally from `request` if certain
    // request fails with 401. However, clients will often run multiple
    // requests in parallel which may result in multiple refresh calls.
    // To avoid that, we keep a to the current refresh task (if any).


    if (!this._refreshTask) {
      this._refreshTask = _request(tokenUri, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(refreshToken)}`
      }).then((data) => {
        if (!data.access_token) {
          throw new Error('No access token received');
        }

        return data;
      }).then((data) => {
        debug('Received new access token %O', data);
        Object.assign(_this3.state.tokenResponse, data);
        return _this3.state;
      }).catch((error) => {
        debug('Deleting the expired or invalid refresh token.');
        delete _this3.state.tokenResponse.refresh_token;
        throw error;
      })
        .finally(() => {
          _this3._refreshTask = null;

          _this3.environment.getStorage().set(_this3.state.key, _this3.state);
        });
    }

    return this._refreshTask;
  } // utils -------------------------------------------------------------------

  /**
   * @param {object|object[]} observations
   * @param {string} property
   */
  ;

  _proto.byCode = function byCode(observations, property) {
    return _byCode(observations, property);
  }
  /**
   * @param {object|object[]} observations
   * @param {string} property
   * @returns {(codes: string[]) => object[]}
   */
  ;

  _proto.byCodes = function byCodes(observations, property) {
    return _byCodes(observations, property);
  };

  _proto.getPath = function getPath(object, path) {
    return _getPath(object, path);
  }
  /**
   * Returns a promise that will be resolved with the fhir version as defined
   * in the conformance statement.
   */
  ;

  _proto.getFhirVersion = function getFhirVersion() {
    return fetchFhirVersion(this.state.serverUrl);
  }
  /**
   * Returns a promise that will be resolved with the numeric fhir version
   * - 2 for DSTU2
   * - 3 for STU3
   * - 4 for R4
   * - 0 if the version is not known
   */
  ;

  _proto.getFhirRelease = function getFhirRelease() {
    return this.getFhirVersion().then((v) => {
      return fhirVersions[v || ''] || 0;
    });
  };

  (0, _createClass2.default)(FhirClient, [{
    key: 'units',
    get: function get() {
      return units;
    }
  }]);
  return FhirClient;
}());

      module.exports = FhirClient;
      /***/ }),

    /***/ './src/HttpError.js':
    /*! **************************!*\
  !*** ./src/HttpError.js ***!
  \************************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js');

      __webpack_require__(/*! core-js/modules/es.function.name */ './node_modules/core-js/modules/es.function.name.js');

      __webpack_require__(/*! core-js/modules/web.url.to-json */ './node_modules/core-js/modules/web.url.to-json.js');

      const _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ './node_modules/@babel/runtime/helpers/inheritsLoose.js'));

      const _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ './node_modules/@babel/runtime/helpers/wrapNativeSuper.js'));

      const HttpError =
/* #__PURE__ */
(function (_Error) {
  (0, _inheritsLoose2.default)(HttpError, _Error);

  function HttpError(message, statusCode, statusText) {
    let _this;

    _this = _Error.call(this, message) || this;
    _this.message = message;
    _this.name = 'HttpError';
    _this.statusCode = statusCode;
    _this.status = statusCode;
    _this.statusText = statusText;
    return _this;
  }

  const _proto = HttpError.prototype;

  _proto.toJSON = function toJSON() {
    return {
      name: this.name,
      statusCode: this.statusCode,
      status: this.status,
      statusText: this.statusText,
      message: this.message
    };
  };

  HttpError.create = function create(failure) {
    // start with generic values
    let status = 0;
    let statusText = 'Error';
    let message = 'Unknown error';

    if (failure) {
      if (typeof failure === 'object') {
        if (failure instanceof Error) {
          message = failure.message;
        } else if (failure.error) {
          status = failure.error.status || 0;
          statusText = failure.error.statusText || 'Error';

          if (failure.error.responseText) {
            message = failure.error.responseText;
          }
        }
      } else if (typeof failure === 'string') {
        message = failure;
      }
    }

    return new HttpError(message, status, statusText);
  };

  return HttpError;
}((0, _wrapNativeSuper2.default)(Error)));

      module.exports = HttpError;
      /***/ }),

    /***/ './src/adapters/BaseAdapter.js':
    /*! *************************************!*\
  !*** ./src/adapters/BaseAdapter.js ***!
  \************************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      __webpack_require__(/*! core-js/modules/es.array.concat */ './node_modules/core-js/modules/es.array.concat.js');

      __webpack_require__(/*! core-js/modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js');

      __webpack_require__(/*! core-js/modules/es.object.assign */ './node_modules/core-js/modules/es.object.assign.js');

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

      __webpack_require__(/*! core-js/modules/es.string.iterator */ './node_modules/core-js/modules/es.string.iterator.js');

      __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ './node_modules/core-js/modules/web.dom-collections.iterator.js');

      __webpack_require__(/*! core-js/modules/web.url */ './node_modules/core-js/modules/web.url.js');

      const smart = __webpack_require__(/*! ../smart */ './src/smart.js');

      const Client = __webpack_require__(/*! ../Client */ './src/Client.js');
      /**
 * This is the abstract base class that adapters must inherit. It just a
 * collection of environment-specific methods that subclasses have to implement.
 * @type { fhirclient.Adapter }
 */


      const BaseAdapter =
/* #__PURE__ */
(function () {
  /**
   * @param {Object} options Environment-specific options
   */
  function BaseAdapter(options) {
    if (options === void 0) {
      options = {};
    }

    this.options = {// Replaces the browser's current URL
      // using window.history.replaceState API or by reloading.
      replaceBrowserHistory: true,
      // When set to true, this variable will fully utilize
      // HTML5 sessionStorage API.
      // This variable can be overridden to false by setting
      // FHIR.oauth2.settings.fullSessionStorageSupport = false.
      // When set to false, the sessionStorage will be keyed
      // by a state variable. This is to allow the embedded IE browser
      // instances instantiated on a single thread to continue to
      // function without having sessionStorage data shared
      // across the embedded IE instances.
      fullSessionStorageSupport: true,
      ...options
    };
  }

  const _proto = BaseAdapter.prototype;

  _proto.getUrl = function getUrl() {
    return new URL('');
  };

  _proto.getStorage = function getStorage() {}
  /**
   * @param {String} path
   */
  ;

  _proto.relative = function relative(path) {
    return new URL(path, this.getUrl().href).href;
  }
  /**
   * Creates and returns adapter-aware SMART api. Not that while the shape of
   * the returned object is well known, the arguments to this function are not.
   * Those who override this method are free to require any environment-specific
   * arguments. For example in node we will need a request, a response and
   * optionally a storage or storage factory function.
   * @returns { fhirclient.SMART }
   */
  ;

  _proto.getSmartApi = function getSmartApi() {
    const _this = this;

    return {
      ready: function ready() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return smart.ready.apply(smart, [_this].concat(args));
      },
      authorize: function authorize(options) {
        return smart.authorize(_this, options);
      },
      init: function init() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return smart.init.apply(smart, [_this].concat(args));
      },
      client: function client(state) {
        return new Client(_this, state);
      },
      options: this.options
    };
  };

  return BaseAdapter;
}());

      module.exports = BaseAdapter;
      /***/ }),

    /***/ './src/adapters/BrowserAdapter.js':
    /*! ****************************************!*\
  !*** ./src/adapters/BrowserAdapter.js ***!
  \*************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js');

      __webpack_require__(/*! core-js/modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js');

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

      __webpack_require__(/*! core-js/modules/es.string.iterator */ './node_modules/core-js/modules/es.string.iterator.js');

      __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ './node_modules/core-js/modules/web.dom-collections.iterator.js');

      __webpack_require__(/*! core-js/modules/web.url */ './node_modules/core-js/modules/web.url.js');

      const _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ './node_modules/@babel/runtime/helpers/createClass.js'));

      const _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ './node_modules/@babel/runtime/helpers/inheritsLoose.js'));

      /* global fhir */
      const BrowserStorage = __webpack_require__(/*! ../storage/BrowserStorage */ './src/storage/BrowserStorage.js');

      const BaseAdapter = __webpack_require__(/*! ./BaseAdapter */ './src/adapters/BaseAdapter.js');
      /**
 * Browser Adapter
 * @type {fhirclient.Adapter}
 */


      const BrowserAdapter =
/* #__PURE__ */
(function (_BaseAdapter) {
  (0, _inheritsLoose2.default)(BrowserAdapter, _BaseAdapter);

  function BrowserAdapter() {
    return _BaseAdapter.apply(this, arguments) || this;
  }

  const _proto = BrowserAdapter.prototype;

  /**
   * Given the current environment, this method must return the current url
   * as URL instance
   * @returns {URL}
   */
  _proto.getUrl = function getUrl() {
    if (!this._url) {
      this._url = new URL(`${location}`);
    }

    return this._url;
  }
  /**
   * Given the current environment, this method must redirect to the given
   * path
   * @param {String} to The path to redirect to
   * @returns {void}
   */
  ;

  _proto.redirect = function redirect(to) {
    location.href = to;
  }
  /**
   * Returns a BrowserStorage object which is just a wrapper around
   * sessionStorage
   * @returns {BrowserStorage}
   */
  ;

  _proto.getStorage = function getStorage() {
    if (!this._storage) {
      this._storage = new BrowserStorage();
    }

    return this._storage;
  };

  BrowserAdapter.smart = function smart(options) {
    return new BrowserAdapter(options).getSmartApi();
  };

  (0, _createClass2.default)(BrowserAdapter, [{
    key: 'fhir',

    /**
     * In browsers we need to be able to (dynamically) check if fhir.js is
     * included in the page. If it is, it should have created a "fhir" variable
     * in the global scope.
     */
    get: function get() {
      // @ts-ignore
      return typeof fhir === 'function' ? fhir : null;
    }
  }]);
  return BrowserAdapter;
}(BaseAdapter));

      module.exports = BrowserAdapter.smart;
      module.exports.Adapter = BrowserAdapter;
      /***/ }),

    /***/ './src/browser.js':
    /*! ************************!*\
  !*** ./src/browser.js ***!
  \*********************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

      __webpack_require__(/*! core-js/modules/es.promise */ './node_modules/core-js/modules/es.promise.js');

      /* global HAS_FETCH */
      // HAS_FETCH is a constant defined in our webpack config. It helps us exclude
      // the fetch polyfill from the library build if the targets do not include IE.
      // However, when the code is used as module it becomes part of a project, that
      // gets built with another build tool and the fetch polyfill might not be excluded!
      // @ts-ignore
      if (false || true && typeof window.fetch !== 'function') {
        __webpack_require__(/*! whatwg-fetch */ './node_modules/whatwg-fetch/fetch.js');
      } // In Browsers we create an adapter, get the SMART api from it and build the
      // global FHIR object


      const smart = __webpack_require__(/*! ./adapters/BrowserAdapter */ './src/adapters/BrowserAdapter.js');

      const _smart = smart();
      const {ready} = _smart;
      const {authorize} = _smart;
      const {init} = _smart;
      const {client} = _smart;
      const {options} = _smart; // $lab:coverage:off$


      module.exports = {
        client,
        oauth2: {
          settings: options,
          ready,
          authorize,
          init
        }
      }; // $lab:coverage:on$
      /***/ }),

    /***/ './src/lib.js':
    /*! ********************!*\
  !*** ./src/lib.js ***!
  \******************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (global) {
        const _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js');

        __webpack_require__(/*! core-js/modules/es.array.concat */ './node_modules/core-js/modules/es.array.concat.js');

        __webpack_require__(/*! core-js/modules/es.array.filter */ './node_modules/core-js/modules/es.array.filter.js');

        __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js');

        __webpack_require__(/*! core-js/modules/es.array.join */ './node_modules/core-js/modules/es.array.join.js');

        __webpack_require__(/*! core-js/modules/es.function.name */ './node_modules/core-js/modules/es.function.name.js');

        __webpack_require__(/*! core-js/modules/es.object.assign */ './node_modules/core-js/modules/es.object.assign.js');

        __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

        __webpack_require__(/*! core-js/modules/es.promise */ './node_modules/core-js/modules/es.promise.js');

        __webpack_require__(/*! core-js/modules/es.regexp.to-string */ './node_modules/core-js/modules/es.regexp.to-string.js');

        __webpack_require__(/*! core-js/modules/es.string.match */ './node_modules/core-js/modules/es.string.match.js');

        __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js');

        __webpack_require__(/*! core-js/modules/es.string.split */ './node_modules/core-js/modules/es.string.split.js');

        __webpack_require__(/*! core-js/modules/es.string.trim */ './node_modules/core-js/modules/es.string.trim.js');

        __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ './node_modules/core-js/modules/web.dom-collections.for-each.js');

        const _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js'));

        __webpack_require__(/*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js');

        const _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ './node_modules/@babel/runtime/helpers/asyncToGenerator.js'));

        /*
 * This file contains some shared functions. The are used by other modules, but
 * are defined here so that tests can import this library and test them.
 */
        const HttpError = __webpack_require__(/*! ./HttpError */ './src/HttpError.js');

        const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('FHIR');

        const _require = __webpack_require__(/*! ./settings */ './src/settings.js');
        const {patientParams} = _require;

        function isBrowser() {
          return typeof window === 'object';
        }
        /**
 * Used in fetch Promise chains to reject if the "ok" property is not true
 */


        function checkResponse(_x) {
          return _checkResponse.apply(this, arguments);
        }
        /**
 * Used in fetch Promise chains to return the JSON version of the response.
 * Note that `resp.json()` will throw on empty body so we use resp.text()
 * instead.
 * @param {Response} resp
 * @returns {Promise<object|string>}
 */


        function _checkResponse() {
          _checkResponse = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee(resp) {
              return _regenerator.default.wrap((_context) => {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (resp.ok) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 3;
                      return humanizeError(resp);

                    case 3:
                      throw _context.sent;

                    case 4:
                      return _context.abrupt('return', resp);

                    case 5:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );
          return _checkResponse.apply(this, arguments);
        }

        function responseToJSON(resp) {
          return resp.text().then((text) => {
            return text.length ? JSON.parse(text) : '';
          });
        }
        /**
 * This is our built-in request function. It does a few things by default
 * (unless told otherwise):
 * - Makes CORS requests
 * - Sets accept header to "application/json"
 * - Handles errors
 * - If the response is json return the json object
 * - If the response is text return the result text
 * - Otherwise return the response object on which we call stuff like `.blob()`
 * @param {String|Request} url
 * @param {Object} options
 */


        function request(url, options) {
          if (options === void 0) {
            options = {};
          }

          return fetch(url, {
            mode: 'cors',
            ...options,
            headers: {accept: 'application/json', ...options.headers}
          }).then(checkResponse).then((res) => {
            const type = `${res.headers.get('Content-Type')}`;

            if (type.match(/\bjson\b/i)) {
              return responseToJSON(res);
            }

            if (type.match(/^text\//i)) {
              return res.text();
            }

            return res;
          });
        }

        const getAndCache = (function () {
          const cache = {};
          return function (url, force) {
            if (force === void 0) {
              force = 'development' === 'test';
            }

            if (force || !cache[url]) {
              cache[url] = request(url);
            }

            return cache[url];
          };
        }());

        function humanizeError(_x2) {
          return _humanizeError.apply(this, arguments);
        }

        function _humanizeError() {
          _humanizeError = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee2(resp) {
              let msg; let type; let json; let
                text;
              return _regenerator.default.wrap((_context2) => {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      msg = `${resp.status} ${resp.statusText}\nURL: ${resp.url}`;
                      _context2.prev = 1;
                      type = resp.headers.get('Content-Type') || 'text/plain';

                      if (!type.match(/\bjson\b/i)) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 6;
                      return resp.json();

                    case 6:
                      json = _context2.sent;

                      if (json.error) {
                        msg += `\n${json.error}`;

                        if (json.error_description) {
                          msg += `: ${json.error_description}`;
                        }
                      } else {
                        msg += `\n\n${JSON.stringify(json, null, 4)}`;
                      }

                    case 8:
                      if (!type.match(/^text\//i)) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.next = 11;
                      return resp.text();

                    case 11:
                      text = _context2.sent;

                      if (text) {
                        msg += `\n\n${text}`;
                      }

                    case 13:
                      _context2.next = 17;
                      break;

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2.catch(1);

                    case 17:
                      throw new HttpError(msg, resp.status, resp.statusText);

                    case 18:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, null, [[1, 15]]);
            })
          );
          return _humanizeError.apply(this, arguments);
        }

        function stripTrailingSlash(str) {
          return String(str || '').replace(/\/+$/, '');
        }
        /**
 * Walks through an object (or array) and returns the value found at the
 * provided path. This function is very simple so it intentionally does not
 * support any argument polymorphism, meaning that the path can only be a
 * dot-separated string. If the path is invalid returns undefined.
 * @param {Object} obj The object (or Array) to walk through
 * @param {String} path The path (eg. "a.b.4.c")
 * @returns {*} Whatever is found in the path or undefined
 */


        function getPath(obj, path) {
          if (path === void 0) {
            path = '';
          }

          path = path.trim();

          if (!path) {
            return obj;
          }

          return path.split('.').reduce((out, key) => {
            return out ? out[key] : undefined;
          }, obj);
        }
        /**
 * Like getPath, but if the node is found, its value is set to @value
 * @param {Object} obj The object (or Array) to walk through
 * @param {String} path The path (eg. "a.b.4.c")
 * @param {*} value The value to set
 * @returns {Object} The modified object
 */


        function setPath(obj, path, value) {
          path.trim().split('.').reduce((out, key, idx, arr) => {
            if (out && idx === arr.length - 1) {
              out[key] = value;
            } else {
              return out ? out[key] : undefined;
            }
          }, obj);
          return obj;
        }

        function makeArray(arg) {
          if (Array.isArray(arg)) {
            return arg;
          }

          return [arg];
        }

        function absolute(path, baseUrl) {
          if (path.match(/^http/)) return path;
          if (path.match(/^urn/)) return path;
          return `${baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
        }
        /**
 * Generates random strings. By default this returns random 8 characters long
 * alphanumeric strings.
 * @param {Number} strLength The length of the output string. Defaults to 8.
 * @param {String} charSet A string containing all the possible characters.
 *     Defaults to all the upper and lower-case letters plus digits.
 */


        function randomString(strLength, charSet) {
          if (strLength === void 0) {
            strLength = 8;
          }

          if (charSet === void 0) {
            charSet = null;
          }

          const result = [];
          charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
          const len = charSet.length;

          while (strLength--) {
            result.push(charSet.charAt(Math.floor(Math.random() * len)));
          }

          return result.join('');
        }

        function atob(str) {
          if (isBrowser()) {
            return window.atob(str);
          } // The "global." makes Webpack understand that it doesn't have to include
          // the Buffer code in the bundle


          return global.Buffer.from(str, 'base64').toString('ascii');
        }

        function btoa(str) {
          if (isBrowser()) {
            return window.btoa(str);
          } // The "global." makes Webpack understand that it doesn't have to include
          // the Buffer code in the bundle


          return global.Buffer.from(str).toString('base64');
        }

        function jwtDecode(token) {
          const payload = token.split('.')[1];
          return JSON.parse(atob(payload));
        }
        /**
 * Groups the observations by code. Returns a map that will look like:
 * {
 *   "55284-4": [ observation1, observation2 ],
 *   "6082-2" : [ observation3 ]
 * }
 * @param {Object|Object[]} observations Array of observations
 * @param {String} property The name of a CodeableConcept property to group by
 * @returns {Object}
 */


        function byCode(observations, property) {
          const ret = {};

          function handleCodeableConcept(concept, observation) {
            if (concept && Array.isArray(concept.coding)) {
              concept.coding.forEach((_ref) => {
                const {code} = _ref;
                ret[code] = ret[code] || [];
                ret[code].push(observation);
              });
            }
          }

          makeArray(observations).forEach((o) => {
            if (o.resourceType === 'Observation' && o[property]) {
              if (Array.isArray(o[property])) {
                o[property].forEach((concept) => {
                  return handleCodeableConcept(concept, o);
                });
              } else {
                handleCodeableConcept(o[property], o);
              }
            }
          });
          return ret;
        }
        /**
 * First groups the observations by code using `byCode`. Then returns a function
 * that accepts codes as arguments and will return a flat array of observations
 * having that codes
 * @param {Object|Object[]} observations Array of observations
 * @param {String} property The name of a CodeableConcept property to group by
 * @returns {(codes: string[]) => object[]}
 */


        function byCodes(observations, property) {
          const bank = byCode(observations, property);
          return function () {
            for (var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++) {
              codes[_key] = arguments[_key];
            }

            return codes.filter((code) => {
              return `${code}` in bank;
            }).reduce((prev, code) => {
              return [].concat(prev, bank[`${code}`]);
            }, []);
          };
        }

        function ensureNumerical(_ref2) {
          const {value} = _ref2;
          const {code} = _ref2;

          if (typeof value !== 'number') {
            throw new Error(`Found a non-numerical unit: ${value} ${code}`);
          }
        }

        const units = {
          cm: function cm(_ref3) {
            const {code} = _ref3;
            const {value} = _ref3;
            ensureNumerical({
              code,
              value
            });
            if (code == 'cm') return value;
            if (code == 'm') return value * 100;
            if (code == 'in') return value * 2.54;
            if (code == '[in_us]') return value * 2.54;
            if (code == '[in_i]') return value * 2.54;
            if (code == 'ft') return value * 30.48;
            if (code == '[ft_us]') return value * 30.48;
            throw new Error(`Unrecognized length unit: ${code}`);
          },
          kg: function kg(_ref4) {
            const {code} = _ref4;
            const {value} = _ref4;
            ensureNumerical({
              code,
              value
            });
            if (code == 'kg') return value;
            if (code == 'g') return value / 1000;
            if (code.match(/lb/)) return value / 2.20462;
            if (code.match(/oz/)) return value / 35.274;
            throw new Error(`Unrecognized weight unit: ${code}`);
          },
          any: function any(pq) {
            ensureNumerical(pq);
            return pq.value;
          }
        };
        /**
 * Given a conformance statement and a resource type, returns the name of the
 * URL parameter that can be used to scope the resource type by patient ID.
 * @param {fhirclient.JsonObject} conformance
 * @param {string} resourceType
 */

        function getPatientParam(conformance, resourceType) {
          // Find what resources are supported by this server
          const resources = getPath(conformance, 'rest.0.resource') || []; // Check if this resource is supported

          const meta = resources.find((r) => {
            return r.type === resourceType;
          });
          if (!meta) throw new Error('Resource not supported'); // Check if any search parameters are available for this resource

          if (!Array.isArray(meta.searchParam)) throw new Error(`No search parameters supported for "${resourceType}" on this FHIR server`); // This is a rare case vut could happen in generic workflows

          if (resourceType == 'Patient' && meta.searchParam.find((x) => {
            return x.name == '_id';
          })) return '_id'; // Now find the first possible parameter name

          const out = patientParams.find((p) => {
            return meta.searchParam.find((x) => {
              return x.name == p;
            });
          }); // If there is no match

          if (!out) throw new Error(`I don't know what param to use for ${resourceType}`);
          return out;
        }

        module.exports = {
          stripTrailingSlash,
          absolute,
          getPath,
          setPath,
          makeArray,
          randomString,
          isBrowser,
          debug,
          checkResponse,
          responseToJSON,
          humanizeError,
          jwtDecode,
          request,
          atob,
          btoa,
          byCode,
          byCodes,
          units,
          getPatientParam,
          getAndCache
        };
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js')));
      /***/ }),

    /***/ './src/settings.js':
    /*! *************************!*\
  !*** ./src/settings.js ***!
  \************************ */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      /**
 * Combined list of FHIR resource types accepting patient parameter in FHIR R2-R4
 */
      const patientCompartment = ['Account', 'AdverseEvent', 'AllergyIntolerance', 'Appointment', 'AppointmentResponse', 'AuditEvent', 'Basic', 'BodySite', 'BodyStructure', 'CarePlan', 'CareTeam', 'ChargeItem', 'Claim', 'ClaimResponse', 'ClinicalImpression', 'Communication', 'CommunicationRequest', 'Composition', 'Condition', 'Consent', 'Coverage', 'CoverageEligibilityRequest', 'CoverageEligibilityResponse', 'DetectedIssue', 'DeviceRequest', 'DeviceUseRequest', 'DeviceUseStatement', 'DiagnosticOrder', 'DiagnosticReport', 'DocumentManifest', 'DocumentReference', 'EligibilityRequest', 'Encounter', 'EnrollmentRequest', 'EpisodeOfCare', 'ExplanationOfBenefit', 'FamilyMemberHistory', 'Flag', 'Goal', 'Group', 'ImagingManifest', 'ImagingObjectSelection', 'ImagingStudy', 'Immunization', 'ImmunizationEvaluation', 'ImmunizationRecommendation', 'Invoice', 'List', 'MeasureReport', 'Media', 'MedicationAdministration', 'MedicationDispense', 'MedicationOrder', 'MedicationRequest', 'MedicationStatement', 'MolecularSequence', 'NutritionOrder', 'Observation', 'Order', 'Patient', 'Person', 'Procedure', 'ProcedureRequest', 'Provenance', 'QuestionnaireResponse', 'ReferralRequest', 'RelatedPerson', 'RequestGroup', 'ResearchSubject', 'RiskAssessment', 'Schedule', 'ServiceRequest', 'Specimen', 'SupplyDelivery', 'SupplyRequest', 'VisionPrescription'];
      /**
 * Map of FHIR releases and their abstract version as number
 */

      const fhirVersions = {
        '0.4.0': 2,
        '0.5.0': 2,
        '1.0.0': 2,
        '1.0.1': 2,
        '1.0.2': 2,
        '1.1.0': 3,
        '1.4.0': 3,
        '1.6.0': 3,
        '1.8.0': 3,
        '3.0.0': 3,
        '3.0.1': 3,
        '3.3.0': 4,
        '3.5.0': 4,
        '4.0.0': 4
      };
      /**
 * Combined (FHIR R2-R4) list of search parameters that can be used to scope
 * a request by patient ID.
 */

      const patientParams = ['requester', 'patient', 'subject', 'member', 'actor', 'beneficiary'];
      /**
 * The name of the sessionStorage entry that contains the current key
 */

      const SMART_KEY = 'SMART_KEY';
      module.exports = {
        SMART_KEY,
        patientParams,
        fhirVersions,
        patientCompartment
      };
      /***/ }),

    /***/ './src/smart.js':
    /*! **********************!*\
  !*** ./src/smart.js ***!
  \********************* */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js');

      __webpack_require__(/*! core-js/modules/es.array.filter */ './node_modules/core-js/modules/es.array.filter.js');

      __webpack_require__(/*! core-js/modules/es.array.join */ './node_modules/core-js/modules/es.array.join.js');

      __webpack_require__(/*! core-js/modules/es.array.map */ './node_modules/core-js/modules/es.array.map.js');

      __webpack_require__(/*! core-js/modules/es.object.assign */ './node_modules/core-js/modules/es.object.assign.js');

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js');

      __webpack_require__(/*! core-js/modules/es.promise */ './node_modules/core-js/modules/es.promise.js');

      __webpack_require__(/*! core-js/modules/es.string.match */ './node_modules/core-js/modules/es.string.match.js');

      __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js');

      __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ './node_modules/core-js/modules/web.dom-collections.for-each.js');

      const _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js'));

      __webpack_require__(/*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js');

      const _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ './node_modules/@babel/runtime/helpers/asyncToGenerator.js'));

      const _require = __webpack_require__(/*! ./lib */ './src/lib.js');
      const {isBrowser} = _require;
      const _debug = _require.debug;
      const {request} = _require;
      const {getPath} = _require;
      const {randomString} = _require;
      const {btoa} = _require;
      const {getAndCache} = _require;

      const debug = _debug.extend('oauth2');

      const _require2 = __webpack_require__(/*! ./settings */ './src/settings.js');
      const {SMART_KEY} = _require2;
      /**
 * Creates and returns a Client instance.
 * Note that this is done within a function to postpone the "./Client" import
 * and avoid cyclic dependency.
 * @param {fhirclient.JsonObject} env The adapter
 * @param {string | fhirclient.ClientState} state The client state or baseUrl
 * @returns {fhirclient.Client}
 */


      function createClient(env, state) {
        const Client = __webpack_require__(/*! ./Client */ './src/Client.js');

        return new Client(env, state);
      }
      /**
 * Fetches the conformance statement from the given base URL.
 * Note that the result is cached in memory (until the page is reloaded in the
 * browser) because it might have to be re-used by the client
 * @param {String} baseUrl The base URL of the FHIR server
 * @returns {Promise<fhirclient.JsonObject>}
 */


      function fetchConformanceStatement(baseUrl) {
        if (baseUrl === void 0) {
          baseUrl = '/';
        }

        const url = `${String(baseUrl).replace(/\/*$/, '/')}metadata`;
        return getAndCache(url).catch((ex) => {
          throw new Error(`Failed to fetch the conformance statement from "${url}". ${ex}`);
        });
      }

      function fetchWellKnownJson(baseUrl) {
        if (baseUrl === void 0) {
          baseUrl = '/';
        }

        const url = `${String(baseUrl).replace(/\/*$/, '/')}.well-known/smart-configuration`;
        return getAndCache(url).catch((ex) => {
          throw new Error(`Failed to fetch the well-known json "${url}". ${ex.message}`);
        });
      }

      function fetchFhirVersion(baseUrl) {
        if (baseUrl === void 0) {
          baseUrl = '/';
        }

        return fetchConformanceStatement(baseUrl).then((metadata) => {
          return metadata.fhirVersion;
        });
      }
      /**
 * Given a fhir server returns an object with it's Oauth security endpoints that
 * we are interested in
 * @param {String} baseUrl Fhir server base URL
 * @returns { Promise<fhirclient.OAuthSecurityExtensions> }
 */


      function getSecurityExtensions(baseUrl) {
        if (baseUrl === void 0) {
          baseUrl = '/';
        }

        return fetchWellKnownJson(baseUrl).then((meta) => {
          if (!meta.authorization_endpoint || !meta.token_endpoint) {
            throw new Error('Invalid wellKnownJson');
          }

          return {
            registrationUri: meta.registration_endpoint || '',
            authorizeUri: meta.authorization_endpoint,
            tokenUri: meta.token_endpoint
          };
        }).catch(() => {
          return fetchConformanceStatement(baseUrl).then((metadata) => {
            const nsUri = 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris';
            const extensions = (getPath(metadata || {}, 'rest.0.security.extension') || []).filter((e) => {
              return e.url === nsUri;
            }).map((o) => {
              return o.extension;
            })[0];
            const out = {
              registrationUri: '',
              authorizeUri: '',
              tokenUri: ''
            };

            if (extensions) {
              extensions.forEach((ext) => {
                if (ext.url === 'register') {
                  out.registrationUri = ext.valueUri;
                }

                if (ext.url === 'authorize') {
                  out.authorizeUri = ext.valueUri;
                }

                if (ext.url === 'token') {
                  out.tokenUri = ext.valueUri;
                }
              });
            }

            return out;
          });
        });
      }
      /**
 * @param {Object} env
 * @param {fhirclient.AuthorizeParams} params
 * @param {Boolean} [_noRedirect = false] If true, resolve with the redirect url
 * without trying to redirect to it
 * @returns { Promise<never|string> }
 */


      function authorize(_x, _x2, _x3) {
        return _authorize.apply(this, arguments);
      }
      /**
 * The completeAuth function should only be called on the page that represents
 * the redirectUri. We typically land there after a redirect from the
 * authorization server..
 * @returns { Promise<fhirclient.Client> }
 */


      function _authorize() {
        _authorize = (0, _asyncToGenerator2.default)(
          /* #__PURE__ */
          _regenerator.default.mark(function _callee(env, params, _noRedirect) {
            let _params; let iss; let launch; let fhirServiceUrl; let redirect_uri; let redirectUri; let _params$scope; let scope; let clientSecret; let fakeTokenResponse; let patientId; let encounterId; let client_id; let clientId; let url; let storage; let serverUrl; let stateKey; let state; let redirectUrl; let extensions; let
              redirectParams;

            return _regenerator.default.wrap((_context) => {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (params === void 0) {
                      params = {};
                    }

                    if (_noRedirect === void 0) {
                      _noRedirect = false;
                    }

                    // Obtain input
                    _params = params, iss = _params.iss, launch = _params.launch, fhirServiceUrl = _params.fhirServiceUrl, redirect_uri = _params.redirect_uri, redirectUri = _params.redirectUri, _params$scope = _params.scope, scope = _params$scope === void 0 ? '' : _params$scope, clientSecret = _params.clientSecret, fakeTokenResponse = _params.fakeTokenResponse, patientId = _params.patientId, encounterId = _params.encounterId, client_id = _params.client_id, clientId = _params.clientId;
                    url = env.getUrl();
                    storage = env.getStorage(); // For these three an url param takes precedence over inline option

                    iss = url.searchParams.get('iss') || iss;
                    fhirServiceUrl = url.searchParams.get('fhirServiceUrl') || fhirServiceUrl;
                    launch = url.searchParams.get('launch') || launch;

                    if (!clientId) {
                      clientId = client_id;
                    }

                    if (!redirectUri) {
                      redirectUri = redirect_uri;
                    }

                    if (!redirectUri) {
                      redirectUri = env.relative('.');
                    } else {
                      redirectUri = env.relative(redirectUri);
                    }

                    serverUrl = String(iss || fhirServiceUrl || ''); // Validate input

                    if (serverUrl) {
                      _context.next = 14;
                      break;
                    }

                    throw new Error('No server url found. It must be specified as `iss` or as ' + '`fhirServiceUrl` parameter');

                  case 14:
                    if (iss) {
                      debug('Making %s launch...', launch ? 'EHR' : 'standalone');
                    } // append launch scope if needed


                    if (launch && !scope.match(/launch/)) {
                      scope += ' launch';
                    } // prevent inheritance of tokenResponse from parent window


                    _context.next = 18;
                    return storage.unset(SMART_KEY);

                  case 18:
                    // create initial state
                    stateKey = randomString(16);
                    state = {
                      clientId,
                      scope,
                      redirectUri,
                      serverUrl,
                      clientSecret,
                      tokenResponse: {},
                      key: stateKey
                    }; // fakeTokenResponse to override stuff (useful in development)

                    if (fakeTokenResponse) {
                      Object.assign(state.tokenResponse, fakeTokenResponse);
                    } // Fixed patientId (useful in development)


                    if (patientId) {
                      Object.assign(state.tokenResponse, {
                        patient: patientId
                      });
                    } // Fixed encounterId (useful in development)


                    if (encounterId) {
                      Object.assign(state.tokenResponse, {
                        encounter: encounterId
                      });
                    }

                    redirectUrl = `${redirectUri}?state=${encodeURIComponent(stateKey)}`; // bypass oauth if fhirServiceUrl is used (but iss takes precedence)

                    if (!(fhirServiceUrl && !iss)) {
                      _context.next = 33;
                      break;
                    }

                    debug('Making fake launch...'); // Storage.set(stateKey, state);

                    _context.next = 28;
                    return storage.set(stateKey, state);

                  case 28:
                    if (!_noRedirect) {
                      _context.next = 30;
                      break;
                    }

                    return _context.abrupt('return', redirectUrl);

                  case 30:
                    _context.next = 32;
                    return env.redirect(redirectUrl);

                  case 32:
                    return _context.abrupt('return', _context.sent);

                  case 33:
                    _context.next = 35;
                    return getSecurityExtensions(serverUrl);

                  case 35:
                    extensions = _context.sent;
                    Object.assign(state, extensions);
                    _context.next = 39;
                    return storage.set(stateKey, state);

                  case 39:
                    if (state.authorizeUri) {
                      _context.next = 45;
                      break;
                    }

                    if (!_noRedirect) {
                      _context.next = 42;
                      break;
                    }

                    return _context.abrupt('return', redirectUrl);

                  case 42:
                    _context.next = 44;
                    return env.redirect(redirectUrl);

                  case 44:
                    return _context.abrupt('return', _context.sent);

                  case 45:
                    // build the redirect uri
                    redirectParams = ['response_type=code', `client_id=${encodeURIComponent(clientId)}`, `scope=${encodeURIComponent(scope)}`, `redirect_uri=${encodeURIComponent(redirectUri)}`, `aud=${encodeURIComponent(serverUrl)}`, `state=${encodeURIComponent(stateKey)}`]; // also pass this in case of EHR launch

                    if (launch) {
                      redirectParams.push(`launch=${encodeURIComponent(launch)}`);
                    }

                    redirectUrl = `${state.authorizeUri}?${redirectParams.join('&')}`;

                    if (!_noRedirect) {
                      _context.next = 50;
                      break;
                    }

                    return _context.abrupt('return', redirectUrl);

                  case 50:
                    _context.next = 52;
                    return env.redirect(redirectUrl);

                  case 52:
                    return _context.abrupt('return', _context.sent);

                  case 53:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return _authorize.apply(this, arguments);
      }

      function completeAuth(_x4) {
        return _completeAuth.apply(this, arguments);
      }
      /**
 * Builds the token request options. Does not make the request, just
 * creates it's configuration and returns it in a Promise.
 */


      function _completeAuth() {
        _completeAuth = (0, _asyncToGenerator2.default)(
          /* #__PURE__ */
          _regenerator.default.mark(function _callee2(env) {
            let url; let Storage; let params; let key; let code; let authError; let authErrorDescription; let msg; let state; let fullSessionStorageSupport; let hasState; let authorized; let requestOptions; let tokenResponse; let
              client;
            return _regenerator.default.wrap((_context2) => {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    url = env.getUrl();
                    Storage = env.getStorage();
                    params = url.searchParams;
                    key = params.get('state');
                    code = params.get('code');
                    authError = params.get('error');
                    authErrorDescription = params.get('error_description');

                    if (key) {
                      _context2.next = 11;
                      break;
                    }

                    _context2.next = 10;
                    return Storage.get(SMART_KEY);

                  case 10:
                    key = _context2.sent;

                  case 11:
                    if (!(authError || authErrorDescription)) {
                      _context2.next = 14;
                      break;
                    }

                    msg = [authError, authErrorDescription].filter(Boolean).join(': ');
                    throw new Error(msg);

                  case 14:
                    debug('key: %s, code: %O', key, code); // key might be coming from the page url so it might be empty or missing

                    if (key) {
                      _context2.next = 17;
                      break;
                    }

                    throw new Error('No \'state\' parameter found. Please (re)launch the app.');

                  case 17:
                    _context2.next = 19;
                    return Storage.get(key);

                  case 19:
                    state = _context2.sent;
                    fullSessionStorageSupport = isBrowser() ? getPath(env, 'options.fullSessionStorageSupport') : true; // Do we have to remove the `code` and `state` params from the URL?

                    hasState = params.has('state');

                    if (isBrowser() && getPath(env, 'options.replaceBrowserHistory') && (code || hasState)) {
                      // `code` is the flag that tell us to request an access token.
                      // We have to remove it, otherwise the page will authorize on
                      // every load!
                      if (code) {
                        params.delete('code');
                        debug('Removed code parameter from the url.');
                      } // If we have `fullSessionStorageSupport` it means we no longer
                      // need the `state` key. It will be stored to a well know
                      // location - sessionStorage[SMART_KEY]. However, no
                      // fullSessionStorageSupport means that this "well know location"
                      // might be shared between windows and tabs. In this case we
                      // MUST keep the `state` url parameter.


                      if (hasState && fullSessionStorageSupport) {
                        params.delete('state');
                        debug('Removed state parameter from the url.');
                      } // If the browser does not support the replaceState method for the
                      // History Web API, the "code" parameter cannot be removed. As a
                      // consequence, the page will (re)authorize on every load. The
                      // workaround is to reload the page to new location without those
                      // parameters. If that is not acceptable replaceBrowserHistory
                      // should be set to false.


                      if (window.history.replaceState) {
                        window.history.replaceState({}, '', url.href);
                      }
                    } // If the state does not exist, it means the page has been loaded directly.


                    if (state) {
                      _context2.next = 25;
                      break;
                    }

                    throw new Error('No state found! Please (re)launch the app.');

                  case 25:
                    // Assume the client has already completed a token exchange when
                    // there is no code (but we have a state) or access token is found in state
                    authorized = !code || state.tokenResponse.access_token; // If we are authorized already, then this is just a reload.
                    // Otherwise, we have to complete the code flow

                    if (authorized) {
                      _context2.next = 44;
                      break;
                    }

                    debug('Preparing to exchange the code for access token...');
                    _context2.next = 30;
                    return buildTokenRequest(code, state);

                  case 30:
                    requestOptions = _context2.sent;
                    debug('Token request options: %O', requestOptions); // The EHR authorization server SHALL return a JSON structure that
                    // includes an access token or a message indicating that the
                    // authorization request has been denied.

                    _context2.next = 34;
                    return request(state.tokenUri, requestOptions);

                  case 34:
                    tokenResponse = _context2.sent;
                    debug('Token response: %O', tokenResponse);

                    if (tokenResponse.access_token) {
                      _context2.next = 38;
                      break;
                    }

                    throw new Error('Failed to obtain access token.');

                  case 38:
                    // save the tokenResponse so that we don't have to re-authorize on
                    // every page reload
                    state = {...state, tokenResponse};
                    _context2.next = 41;
                    return Storage.set(key, state);

                  case 41:
                    debug('Authorization successful!');
                    _context2.next = 45;
                    break;

                  case 44:
                    debug(state.tokenResponse.access_token ? 'Already authorized' : 'No authorization needed');

                  case 45:
                    if (!fullSessionStorageSupport) {
                      _context2.next = 48;
                      break;
                    }

                    _context2.next = 48;
                    return Storage.set(SMART_KEY, key);

                  case 48:
                    client = createClient(env, state);
                    debug('Created client instance: %O', client);
                    return _context2.abrupt('return', client);

                  case 51:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2);
          })
        );
        return _completeAuth.apply(this, arguments);
      }

      function buildTokenRequest(code, state) {
        const {redirectUri} = state;
        const {clientSecret} = state;
        const {tokenUri} = state;
        const {clientId} = state;

        if (!redirectUri) {
          throw new Error('Missing state.redirectUri');
        }

        if (!tokenUri) {
          throw new Error('Missing state.tokenUri');
        }

        if (!clientId) {
          throw new Error('Missing state.clientId');
        }

        const requestOptions = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          body: `code=${code}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(redirectUri)}`
        }; // For public apps, authentication is not possible (and thus not required),
        // since a client with no secret cannot prove its identity when it issues a
        // call. (The end-to-end system can still be secure because the client comes
        // from a known, https protected endpoint specified and enforced by the
        // redirect uri.) For confidential apps, an Authorization header using HTTP
        // Basic authentication is required, where the username is the app’s
        // client_id and the password is the app’s client_secret (see example).

        if (clientSecret) {
          requestOptions.headers.Authorization = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
          debug('Using state.clientSecret to construct the authorization header: %s', requestOptions.headers.Authorization);
        } else {
          debug('No clientSecret found in state. Adding the clientId to the POST body');
          requestOptions.body += `&client_id=${encodeURIComponent(clientId)}`;
        }

        return requestOptions;
      }
      /**
 * @param {Object} env
 * @param {() => Promise<fhirclient.Client>} [onSuccess]
 * @param {() => never} [onError]
 * @returns { Promise<fhirclient.Client> }
 */


      function ready(_x5, _x6, _x7) {
        return _ready.apply(this, arguments);
      }

      function _ready() {
        _ready = (0, _asyncToGenerator2.default)(
          /* #__PURE__ */
          _regenerator.default.mark(function _callee3(env, onSuccess, onError) {
            let task;
            return _regenerator.default.wrap((_context3) => {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    task = completeAuth(env);

                    if (onSuccess) {
                      task = task.then(onSuccess);
                    }

                    if (onError) {
                      task = task.catch(onError);
                    }

                    return _context3.abrupt('return', task);

                  case 4:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3);
          })
        );
        return _ready.apply(this, arguments);
      }

      function init(_x8, _x9) {
        return _init.apply(this, arguments);
      }

      function _init() {
        _init = (0, _asyncToGenerator2.default)(
          /* #__PURE__ */
          _regenerator.default.mark(function _callee4(env, options) {
            let url; let code; let state; let storage; let key; let
              cached;
            return _regenerator.default.wrap((_context4) => {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    url = env.getUrl();
                    code = url.searchParams.get('code');
                    state = url.searchParams.get('state'); // if `code` and `state` params are present we need to complete the auth flow

                    if (!(code && state)) {
                      _context4.next = 5;
                      break;
                    }

                    return _context4.abrupt('return', completeAuth(env));

                  case 5:
                    // Check for existing client state. If state is found, it means a client
                    // instance have already been created in this session and we should try to
                    // "revive" it.
                    storage = env.getStorage();
                    _context4.t0 = state;

                    if (_context4.t0) {
                      _context4.next = 11;
                      break;
                    }

                    _context4.next = 10;
                    return storage.get(SMART_KEY);

                  case 10:
                    _context4.t0 = _context4.sent;

                  case 11:
                    key = _context4.t0;
                    _context4.next = 14;
                    return storage.get(key);

                  case 14:
                    cached = _context4.sent;

                    if (!cached) {
                      _context4.next = 17;
                      break;
                    }

                    return _context4.abrupt('return', Promise.resolve(createClient(env, cached)));

                  case 17:
                    return _context4.abrupt('return', authorize(env, options).then(() => {
                      // `init` promises a Client but that cannot happen in this case. The
                      // browser will be redirected (unload the page and be redirected back
                      // to it later and the same init function will be called again). On
                      // success, authorize will resolve with the redirect url but we don't
                      // want to return that from this promise chain because it is not a
                      // Client instance. At the same time, if authorize fails, we do want to
                      // pass the error to those waiting for a client instance.
                      return new Promise((() => {
                        /* leave it pending!!! */
                      }));
                    }));

                  case 18:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4);
          })
        );
        return _init.apply(this, arguments);
      }

      module.exports = {
        fetchConformanceStatement,
        fetchWellKnownJson,
        getSecurityExtensions,
        buildTokenRequest,
        fetchFhirVersion,
        authorize,
        completeAuth,
        ready,
        init,
        KEY: SMART_KEY
      };
      /***/ }),

    /***/ './src/storage/BrowserStorage.js':
    /*! ***************************************!*\
  !*** ./src/storage/BrowserStorage.js ***!
  \************************************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      const _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js');

      const _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js'));

      __webpack_require__(/*! regenerator-runtime/runtime */ './node_modules/regenerator-runtime/runtime.js');

      const _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ './node_modules/@babel/runtime/helpers/asyncToGenerator.js'));

      const Storage =
/* #__PURE__ */
(function () {
  function Storage() {}

  const _proto = Storage.prototype;

  /**
   * Gets the value at `key`. Returns a promise that will be resolved
   * with that value (or undefined for missing keys).
   * @param {String} key
   * @returns {Promise<any>}
   */
  _proto.get =
  /* #__PURE__ */
  (function () {
    const _get = (0, _asyncToGenerator2.default)(
    /* #__PURE__ */
      _regenerator.default.mark(function _callee(key) {
        let value;
        return _regenerator.default.wrap((_context) => {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = sessionStorage[key];

                if (!value) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return', JSON.parse(value));

              case 3:
                return _context.abrupt('return', null);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );

    function get(_x) {
      return _get.apply(this, arguments);
    }

    return get;
  }())
  /**
   * Sets the `value` on `key` and returns a promise that will be resolved
   * with the value that was set.
   * @param {String} key
   * @param {any} value
   * @returns {Promise<any>}
   */
  ;

  _proto.set =
  /* #__PURE__ */
  (function () {
    const _set = (0, _asyncToGenerator2.default)(
    /* #__PURE__ */
      _regenerator.default.mark(function _callee2(key, value) {
        return _regenerator.default.wrap((_context2) => {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sessionStorage[key] = JSON.stringify(value);
                return _context2.abrupt('return', value);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );

    function set(_x2, _x3) {
      return _set.apply(this, arguments);
    }

    return set;
  }())
  /**
   * Deletes the value at `key`. Returns a promise that will be resolved
   * with true if the key was deleted or with false if it was not (eg. if
   * did not exist).
   * @param {String} key
   * @returns {Promise<Boolean>}
   */
  ;

  _proto.unset =
  /* #__PURE__ */
  (function () {
    const _unset = (0, _asyncToGenerator2.default)(
    /* #__PURE__ */
      _regenerator.default.mark(function _callee3(key) {
        return _regenerator.default.wrap((_context3) => {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(key in sessionStorage)) {
                  _context3.next = 3;
                  break;
                }

                delete sessionStorage[key];
                return _context3.abrupt('return', true);

              case 3:
                return _context3.abrupt('return', false);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    );

    function unset(_x4) {
      return _unset.apply(this, arguments);
    }

    return unset;
  }());

  return Storage;
}());

      module.exports = Storage;
      /***/ }),

    /***/ './src/strings.js':
    /*! ************************!*\
  !*** ./src/strings.js ***!
  \*********************** */
    /*! all exports used */
    /***/ (function (module, exports, __webpack_require__) {
      // This map contains reusable debug messages (only those used in multiple places)
      module.exports = {
        expired: 'Session expired! Please re-launch the app',
        noScopeForId: 'Trying to get the ID of the selected %s. Please add \'launch\' or \'launch/%s\' to the requested scopes and try again.',
        noIfNoAuth: 'You are trying to get %s but the app is not authorized yet.',
        noFreeContext: 'Please don\'t use open fhir servers if you need to access launch context items like the %S.'
      };
      /***/ })

    /** *** */}));
// # sourceMappingURL=fhir-client.js.map
