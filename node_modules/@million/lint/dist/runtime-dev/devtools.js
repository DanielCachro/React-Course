'use strict';

var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// runtime/src/devtools.ts
var require_devtools = __commonJS({
  "runtime/src/devtools.ts"() {
    (() => {
      let renderers = /* @__PURE__ */ new Map();
      let id = 0;
      let noop = () => {
      };
      try {
        if (typeof window !== "undefined") {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
            checkDCE: noop,
            supportsFiber: true,
            renderers,
            onScheduleFiberRoot: noop,
            onCommitFiberRoot: noop,
            onCommitFiberUnmount: noop,
            inject(internals) {
              let nextID = ++id;
              renderers.set(nextID, internals);
              return nextID;
            }
          };
        }
      } catch (_) {
      }
    })();
  }
});
var devtools = require_devtools();

module.exports = devtools;
