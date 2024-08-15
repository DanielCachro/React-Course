'use strict';

var React4 = require('react');
require('@million/lint/devtools');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React4__namespace = /*#__PURE__*/_interopNamespace(React4);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var _null, isSSR, useIsomorphicLayoutEffect, _window, _document, _addEventListener, _Map, _WeakMap, _Set, _Object, _Array, _isArray, _setTimeout, _performance, mapProto, _mapHas, _mapGet, _mapSet, weakMapProto, _weakMapHas, _weakMapSet, _weakMapGet, _weakMapDelete, setProto, _setHas, _setAdd, objectPrototype, _objectHasOwnProperty, _objectToString, UNKNOWN, VERSION, PAYLOAD_VERSION, FLAG, MAX_QUEUE_SIZE, FLUSH_TIMEOUT, SESSION_EXPIRE_TIMEOUT, GZIP_MIN_LEN, GZIP_MAX_LEN, MAX_PENDING_REQUESTS, REACT_PREFIX, ELEMENT_SYMBOL_STRING, FRAGMENT_SYMBOL_STRING, PORTAL_SYMBOL_STRING, PROFILER_SYMBOL_STRING, FORWARD_REF_SYMBOL_STRING, STRICT_MODE_SYMBOL_STRING, SUSPENSE_SYMBOL_STRING, SUSPENSE_LIST_SYMBOL_STRING, PROFILER_DISPLAY_NAME;
var init_constants = __esm({
  "runtime/src/core/utils/constants.ts"() {
    _null = null;
    isSSR = typeof window === "undefined" || !React4__namespace.useRef;
    useIsomorphicLayoutEffect = isSSR ? React4__namespace.useEffect : React4__namespace.useLayoutEffect;
    _window = isSSR ? _null : window;
    _document = isSSR ? _null : document;
    _addEventListener = isSSR ? _null : addEventListener;
    _Map = Map;
    _WeakMap = WeakMap;
    _Set = Set;
    _Object = Object;
    _Array = Array;
    _isArray = _Array.isArray;
    _setTimeout = setTimeout;
    _performance = isSSR ? _null : performance;
    mapProto = _Map.prototype;
    _mapHas = mapProto.has;
    _mapGet = mapProto.get;
    _mapSet = mapProto.set;
    weakMapProto = _WeakMap.prototype;
    _weakMapHas = weakMapProto.has;
    _weakMapSet = weakMapProto.set;
    _weakMapGet = weakMapProto.get;
    _weakMapDelete = weakMapProto.delete;
    setProto = _Set.prototype;
    _setHas = setProto.has;
    _setAdd = setProto.add;
    objectPrototype = _Object.prototype;
    _objectHasOwnProperty = objectPrototype.hasOwnProperty;
    _objectToString = objectPrototype.toString;
    UNKNOWN = "<unknown>";
    VERSION = "1.0.0-rc.84";
    PAYLOAD_VERSION = 0;
    FLAG = "_ANYA_";
    MAX_QUEUE_SIZE = 300;
    FLUSH_TIMEOUT = 1e3;
    SESSION_EXPIRE_TIMEOUT = FLUSH_TIMEOUT * 60;
    GZIP_MIN_LEN = 1e3;
    GZIP_MAX_LEN = 6e4;
    MAX_PENDING_REQUESTS = 15;
    REACT_PREFIX = "Symbol(react.";
    ELEMENT_SYMBOL_STRING = REACT_PREFIX + "element)";
    FRAGMENT_SYMBOL_STRING = REACT_PREFIX + "fragment)";
    PORTAL_SYMBOL_STRING = REACT_PREFIX + "portal)";
    PROFILER_SYMBOL_STRING = REACT_PREFIX + "profiler)";
    FORWARD_REF_SYMBOL_STRING = REACT_PREFIX + "forward_ref)";
    STRICT_MODE_SYMBOL_STRING = REACT_PREFIX + "strict_mode)";
    SUSPENSE_SYMBOL_STRING = REACT_PREFIX + "suspense)";
    SUSPENSE_LIST_SYMBOL_STRING = REACT_PREFIX + "suspense_list)";
    PROFILER_DISPLAY_NAME = "Million(Profiler)";
  }
});

// runtime/src/core/utils/helpers.ts
var debounce, onIdle, onHidden, generateId, getRenderBatchIndexKey;
var init_helpers = __esm({
  "runtime/src/core/utils/helpers.ts"() {
    init_constants();
    debounce = (callback, timeout = 1e3) => {
      let timeoutId;
      return function() {
        if (timeoutId !== void 0) {
          clearTimeout(timeoutId);
        }
        timeoutId = _setTimeout(() => {
          callback.apply(this, arguments);
          timeoutId = void 0;
        }, timeout);
      };
    };
    onIdle = (callback) => {
      if ("scheduler" in globalThis) {
        return _window.scheduler.postTask(callback, { priority: "background" });
      }
      if ("requestIdleCallback" in _window) {
        return requestIdleCallback(callback);
      }
      return _setTimeout(callback, 0);
    };
    onHidden = (callback) => {
      let handler = (event) => {
        if (event.type === "pagehide" || _document.visibilityState === "hidden") {
          callback();
        }
      };
      _addEventListener?.("visibilitychange", handler, true);
      _addEventListener?.("pagehide", handler, true);
      _addEventListener?.("prerenderingchange", handler, true);
    };
    generateId = () => {
      let a = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
      let t = "", r = crypto.getRandomValues(new Uint8Array(21));
      for (let n = 0; n < 21; n++)
        t += a[63 & r[n]];
      return t;
    };
    getRenderBatchIndexKey = (key, kind, loc, owner, error, eventId2, commit) => {
      return (
        // eslint-disable-next-line prefer-template
        key + "." + kind + "." + loc + (owner || "") + (error || "") + (eventId2 || "") + commit
      );
    };
  }
});

// runtime/src/core/session.ts
var getGpuRenderer, getSession;
var init_session = __esm({
  "runtime/src/core/session.ts"() {
    init_constants();
    init_helpers();
    getGpuRenderer = () => {
      if (!("chrome" in _window))
        return "";
      let gl = document.createElement("canvas").getContext("webgl", { powerPreference: "high-performance" });
      if (!gl)
        return "";
      let ext = gl.getExtension("WEBGL_debug_renderer_info");
      return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "";
    };
    getSession = () => {
      if (isSSR)
        return _null;
      let id = generateId();
      let url2 = _window.location.toString();
      let wifi = navigator.connection?.effectiveType || UNKNOWN;
      let cpu = navigator.hardwareConcurrency;
      let mem = navigator.deviceMemory;
      let session2 = {
        id,
        url: url2,
        wifi,
        cpu,
        mem,
        gpu: UNKNOWN
      };
      onIdle(() => {
        session2.gpu = getGpuRenderer();
      });
      return session2;
    };
  }
});

// runtime/src/core/transport.ts
var contentType, supportsCompression, compress, transport;
var init_transport = __esm({
  "runtime/src/core/transport.ts"() {
    init_constants();
    contentType = "application/json";
    supportsCompression = typeof CompressionStream === "function";
    compress = async (payload) => {
      let stream = new Blob([payload], { type: contentType }).stream().pipeThrough(new CompressionStream("gzip"));
      return new Response(stream).arrayBuffer();
    };
    transport = async (url2, payload, pendingRequests2, proxySessionId) => {
      let fail = { ok: false };
      if (isSSR)
        return fail;
      let apiKey2 = payload.apiKey;
      let buildId2 = payload.buildId;
      let commitHash2 = payload.commitHash;
      payload.apiKey = void 0;
      payload.buildId = void 0;
      payload.commitHash = void 0;
      let json = JSON.stringify(payload, (key, value) => {
        if (
          // eslint-disable-next-line eqeqeq
          value != _null && value !== false && // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
          key[0] !== "_" || _isArray(value) && value.length
        ) {
          return value;
        }
      });
      let shouldCompress = json.length > GZIP_MIN_LEN;
      let body = shouldCompress && supportsCompression ? await compress(json) : json;
      let prod;
      if (prod = false) {
        if (!navigator.onLine)
          return fail;
      }
      let headers = {
        "Content-Type": contentType,
        "Content-Encoding": shouldCompress ? "gzip" : void 0
      };
      if (shouldCompress)
        url2 += "?z=1";
      if (prod) {
        headers["X-API-KEY"] = apiKey2;
        headers["X-BUILD-ID"] = buildId2;
        headers["X-COMMIT-HASH"] = commitHash2;
      } else if (proxySessionId) {
        headers["X-SESSION-ID"] = proxySessionId;
      }
      let size = typeof body === "string" ? body.length : body.byteLength;
      return fetch(url2, {
        body,
        method: "POST",
        referrerPolicy: "origin",
        // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
        // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
        // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
        // frequently sending events right before the user is switching pages (eg. whenfinishing navigation transactions).
        // Gotchas:
        // - `keepalive` isn't supported by Firefox
        // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
        //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
        //   We will therefore only activate the flag when we're below that limit.
        // There is also a limit of requests that can be open at the same time, so we also limit this to 15
        // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
        keepalive: GZIP_MAX_LEN > size && MAX_PENDING_REQUESTS > pendingRequests2,
        priority: "low",
        mode: proxySessionId || prod ? void 0 : "no-cors",
        headers
      });
    };
  }
});
var FiberContext, FiberProvider, useFiber, traverseFiber, useNearestChild, PerformedWork, didFiberRender, getTimings, SECRET_INTERNALS, CLIENT_INTERNALS, getFiberDEV, invalidHookErrFunctions, canRunHooks, getOwner, truncateString, serialize, types, isSpecialElement, usesIntrospection, setRef, mergeProps, getElementRef;
var init_react_internals = __esm({
  "runtime/src/core/utils/react-internals.ts"() {
    init_core();
    init_src();
    init_constants();
    FiberContext = React4__namespace.createContext(_null);
    FiberProvider = class extends React4__namespace.Component {
      constructor(props) {
        super(props);
        exports.init(props);
      }
      render() {
        if (SIGKILL)
          return this.props.children;
        return React4__namespace.createElement(
          FiberContext.Provider,
          { value: this._reactInternals },
          this.props.children
        );
      }
    };
    useFiber = () => {
      return getFiberDEV();
    };
    traverseFiber = (fiber, ascending, selector) => {
      if (!fiber)
        return _null;
      if (selector(fiber) === true)
        return fiber;
      let child = ascending ? fiber.return : fiber.child;
      while (child) {
        let match = traverseFiber(child, ascending, selector);
        if (match)
          return match;
        child = ascending ? _null : child.sibling;
      }
      return _null;
    };
    useNearestChild = (fiber) => {
      let childRef = React4__namespace.useRef();
      useIsomorphicLayoutEffect(() => {
        if (!fiber)
          return;
        childRef.current = traverseFiber(
          fiber,
          false,
          (node) => typeof node.type === "string"
        )?.stateNode;
      }, [fiber]);
      return childRef;
    };
    PerformedWork = 1;
    didFiberRender = (fiber) => {
      if (!fiber?.alternate)
        return true;
      switch (fiber.tag) {
        case 0:
        case 1:
        case 9:
        case 14:
        case 15:
          let flags = (fiber.flags !== void 0 ? fiber.flags : fiber.effectTag) ?? 0;
          return (flags & PerformedWork) === PerformedWork;
        default:
          let { alternate } = fiber;
          return alternate.memoizedProps !== fiber.memoizedProps || alternate.memoizedState !== fiber.memoizedState || alternate.ref !== fiber.ref;
      }
    };
    getTimings = (fiber) => {
      let totalTime = fiber?.actualDuration ?? 0;
      let selfTime = totalTime;
      let child = fiber?.child;
      while (totalTime > 0 && child != _null) {
        selfTime -= child?.actualDuration || 0;
        child = child.sibling;
      }
      return {
        /**
         * totalTime
         */
        t: totalTime,
        /**
         * selfTime
         */
        s: selfTime
      };
    };
    SECRET_INTERNALS = React4__namespace?.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    CLIENT_INTERNALS = React4__namespace?.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    getFiberDEV = () => {
      return IS_REACT_19 ? CLIENT_INTERNALS?.A?.getOwner?.() : SECRET_INTERNALS?.ReactCurrentOwner?.current;
    };
    invalidHookErrFunctions = new _WeakMap();
    canRunHooks = (dispatcher) => {
      dispatcher ||= IS_REACT_19 ? CLIENT_INTERNALS?.H : SECRET_INTERNALS?.ReactCurrentDispatcher?.current;
      let hook = dispatcher?.useRef;
      if (typeof hook !== "function" || _weakMapHas.call(invalidHookErrFunctions, hook)) {
        return false;
      }
      let str = hook.toString();
      if (str.includes("Error")) {
        _weakMapSet.call(invalidHookErrFunctions, hook, true);
        return false;
      }
      return true;
    };
    getOwner = (fiber) => {
      let owner = fiber || getFiberDEV();
      let curr = owner?.return;
      while (curr) {
        let type = curr.type;
        if (typeof type === "function" && type[FLAG]) {
          return type[FLAG];
        }
        curr = curr.return;
      }
      return _null;
    };
    truncateString = (value, length) => {
      return value.length > length ? value.slice(0, length) + "\u2026" : value;
    };
    serialize = (value) => {
      switch (typeof value) {
        case "function":
          return truncateString(value.toString(), 20);
        case "string":
          return truncateString(value, 20);
        case "object":
          if (value === _null) {
            return "null";
          }
          if (_Array.isArray(value)) {
            return value.length > 0 ? "[\u2026]" : "[]";
          }
          if (typeof value.$$typeof === "symbol" && String(value.$$typeof) === ELEMENT_SYMBOL_STRING) {
            return (
              // eslint-disable-next-line prefer-template
              "<" + (value.type.displayName || value.type.name || "") + (_Object.keys(value.props).length > 0 ? " \u2026" : "") + ">"
            );
          }
          if (typeof value === "object" && value !== _null && value.constructor === _Object) {
            for (let key in value) {
              if (_objectHasOwnProperty.call(value, key)) {
                return "{\u2026}";
              }
            }
            return "{}";
          }
          let tagString = _objectToString.call(value).slice(8, -1);
          if (tagString === "Object") {
            let constructor = _Object.getPrototypeOf(value)?.constructor;
            if (typeof constructor === "function") {
              return (constructor.displayName || constructor.name || "") + "{\u2026}";
            }
          }
          return tagString + "{\u2026}";
        default:
          return String(value);
      }
    };
    types = [
      STRICT_MODE_SYMBOL_STRING,
      FRAGMENT_SYMBOL_STRING,
      PROFILER_SYMBOL_STRING,
      SUSPENSE_SYMBOL_STRING,
      SUSPENSE_LIST_SYMBOL_STRING
    ];
    isSpecialElement = (element) => {
      return (
        // is class
        typeof element.type === "function" && element.type.prototype?.isReactComponent || String(element.$$typeof) === PORTAL_SYMBOL_STRING || types.includes(String(element.type))
      );
    };
    usesIntrospection = (element) => typeof element.type === "object" && element.type?.muiName || typeof element.type === "function" && element.type.muiName || // FIXME: Hack to ignore react-router-dom
    element.props.Component || element.props.component;
    setRef = (ref, value) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref !== null && ref !== void 0) {
        ref.current = value;
      }
    };
    mergeProps = (nextProps, prevProps) => {
      let overrideProps = _Object.assign({}, nextProps);
      for (let propName in nextProps) {
        let nextPropValue = nextProps[propName];
        let prevPropValue = prevProps[propName];
        if (propName.startsWith("on")) {
          if (nextPropValue && prevPropValue) {
            overrideProps[propName] = function() {
              prevPropValue.apply(this, arguments);
              nextPropValue.apply(this, arguments);
            };
          } else if (nextPropValue) {
            overrideProps[propName] = nextPropValue;
          }
        } else if (propName === "style") {
          overrideProps[propName] = _Object.assign(
            {},
            prevPropValue,
            nextPropValue
          );
        } else if (propName === "className") {
          overrideProps[propName] = [nextPropValue, prevPropValue].filter(Boolean).join(" ");
        }
      }
      return _Object.assign({}, prevProps, overrideProps);
    };
    getElementRef = (element) => {
      {
        let getter = _Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
        let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
        if (mayWarn) {
          return element.ref;
        }
        getter = _Object.getOwnPropertyDescriptor(element, "ref")?.get;
        mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
        if (mayWarn) {
          return element.props.ref;
        }
      }
      return element.props.ref || element.ref;
    };
  }
});

// runtime/src/core/utils/is-equal.ts
var equal, isEqual;
var init_is_equal = __esm({
  "runtime/src/core/utils/is-equal.ts"() {
    init_constants();
    equal = (a, b) => {
      if (a === b)
        return true;
      if (a && b && typeof a === "object" && typeof b === "object") {
        if (a.constructor !== b.constructor)
          return false;
        let length, i, keys;
        if (_isArray(a) && _isArray(b)) {
          length = a.length;
          if (length !== b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        let it;
        if (a instanceof _Map && b instanceof _Map) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0])))
              return false;
          return true;
        }
        if (a instanceof Set && b instanceof Set) {
          if (a.size !== b.size)
            return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0]))
              return false;
          return true;
        }
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        if (a instanceof Element)
          return false;
        for (i = length; i-- !== 0; ) {
          if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys[i]], b[keys[i]]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
    isEqual = (a, b) => {
      try {
        return equal(a, b);
      } catch (error) {
        return false;
      }
    };
  }
});

// ../../node_modules/.pnpm/@gaearon+lag-radar@0.1.0/node_modules/@gaearon/lag-radar/lag-radar.js
function lagRadar(config = {}) {
  const {
    frames = 50,
    // number of frames to draw, more = worse performance
    speed = 17e-4,
    // how fast the sweep moves (rads per ms)
    size = 300,
    // outer frame px
    inset = 3,
    // circle inset px
    parent = document.body
    // DOM node to attach to
  } = config;
  const svgns = "http://www.w3.org/2000/svg";
  const styles = document.createTextNode(`
    .lagRadar-sweep > * {
      shape-rendering: crispEdges;
    }
    .lagRadar-face {
      fill: transparent;
    }
    .lagRadar-hand {
      stroke-width: 4px;
      stroke-linecap: round;
    }
  `);
  function $svg(tag, props = {}, children = []) {
    const el = document.createElementNS(svgns, tag);
    Object.keys(props).forEach((prop) => el.setAttribute(prop, props[prop]));
    children.forEach((child) => el.appendChild(child));
    return el;
  }
  const PI2 = Math.PI * 2;
  const middle = size / 2;
  const radius = middle - inset;
  const $hand = $svg("path", { class: "lagRadar-hand" });
  const $arcs = new Array(frames).fill("path").map((t) => $svg(t));
  const $root = $svg("svg", { class: "lagRadar", height: size, width: size }, [
    $svg("style", { type: "text/css" }, [styles]),
    $svg("g", { class: "lagRadar-sweep" }, $arcs),
    $hand,
    $svg("circle", { class: "lagRadar-face", cx: middle, cy: middle, r: radius })
  ]);
  parent.appendChild($root);
  let frame;
  let framePtr = 0;
  let last = {
    rotation: 0,
    now: Date.now(),
    tx: middle + radius,
    ty: middle
  };
  const calcHue = (() => {
    const max_hue = 120;
    const max_ms = 1e3;
    const log_f = 10;
    const mult = max_hue / Math.log(max_ms / log_f);
    return function(ms_delta) {
      return max_hue - Math.max(0, Math.min(mult * Math.log(ms_delta / log_f), max_hue));
    };
  })();
  function animate() {
    const now = Date.now();
    const rdelta = Math.min(PI2 - speed, speed * (now - last.now));
    const rotation = (last.rotation + rdelta) % PI2;
    const tx = middle + radius * Math.cos(rotation);
    const ty = middle + radius * Math.sin(rotation);
    const bigArc = rdelta < Math.PI ? "0" : "1";
    const path = `M${tx} ${ty}A${radius} ${radius} 0 ${bigArc} 0 ${last.tx} ${last.ty}L${middle} ${middle}`;
    const hue = calcHue(rdelta / speed);
    $arcs[framePtr % frames].setAttribute("d", path);
    $arcs[framePtr % frames].setAttribute("fill", `hsl(${hue}, 80%, 40%)`);
    $hand.setAttribute("d", `M${middle} ${middle}L${tx} ${ty}`);
    $hand.setAttribute("stroke", `hsl(${hue}, 80%, 60%)`);
    for (let i = 0; i < frames; i++) {
      $arcs[(frames + framePtr - i) % frames].style.fillOpacity = 1 - i / frames;
    }
    framePtr++;
    last = { now, rotation, tx, ty };
    frame = window.requestAnimationFrame(animate);
  }
  animate();
  return function destroy() {
    if (frame) {
      window.cancelAnimationFrame(frame);
    }
    $root.remove();
  };
}
var init_lag_radar = __esm({
  "../../node_modules/.pnpm/@gaearon+lag-radar@0.1.0/node_modules/@gaearon/lag-radar/lag-radar.js"() {
  }
});
var Radar_default;
var init_Radar = __esm({
  "../../node_modules/.pnpm/react-lag-radar@1.0.0_react@18.3.1/node_modules/react-lag-radar/Radar.js"() {
    init_lag_radar();
    Radar_default = React4.memo(function Radar(props) {
      let frames = props.frames || 20;
      let size = props.size || 100;
      let options = Object.assign({}, props, {
        frames,
        size
      });
      let ref = React4.useRef();
      React4.useLayoutEffect(() => {
        let destroy = lagRadar(Object.assign({}, options, {
          parent: ref.current
        }));
        return destroy;
      }, [options, ref]);
      return React4.createElement("div", { ref });
    });
  }
});
var require_use_ses_shim = __commonJS({
  "runtime/src/core/dev/use-ses-shim.js"(exports) {
    {
      (function() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactSharedInternals = React4__namespace.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED || {
          ReactDebugCurrentFrame: {
            getStackAddendum: () => ""
          }
        };
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState3 = React4__namespace.default.useState, useEffect3 = React4__namespace.default.useEffect, useLayoutEffect3 = React4__namespace.default.useLayoutEffect, useDebugValue = React4__namespace.default.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React4__namespace.default.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error(
                  "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
                );
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error(
                  "The result of getSnapshot should be cached to avoid an infinite loop"
                );
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState3({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect3(
            function() {
              inst.value = value;
              inst.getSnapshot = getSnapshot;
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            },
            [subscribe, value, getSnapshot]
          );
          useEffect3(
            function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
              var handleStoreChange = function() {
                if (checkIfSnapshotChanged(inst)) {
                  forceUpdate({
                    inst
                  });
                }
              };
              return subscribe(handleStoreChange);
            },
            [subscribe]
          );
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React4__namespace.default.useSyncExternalStore !== void 0 ? React4__namespace.default.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// runtime/src/core/dev/select.ts
var getFiberFromElement, getParentComponentFiber, getChildComponentFiber, getDisplayName, destroySelections, _selection, _selectionLite, _indicator, isPending, pendingSelections, acquirableSelectionElements, createSelectionAreaElement, startSelection;
var init_select = __esm({
  "runtime/src/core/dev/select.ts"() {
    init_helpers();
    init_constants();
    init_core();
    getFiberFromElement = (element) => {
      if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in _window) {
        const { renderers } = _window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        for (const renderer of renderers.values()) {
          try {
            const fiber = renderer.findFiberByHostInstance(element);
            if (fiber) {
              return fiber;
            }
          } catch (e) {
          }
        }
      }
      if ("_reactRootContainer" in element) {
        return element._reactRootContainer._internalRoot.current.child;
      }
      for (const key in element) {
        if (key.startsWith("__reactInternalInstance$") || key.startsWith("__reactFiber")) {
          return element[key];
        }
      }
      return _null;
    };
    getParentComponentFiber = (fiber) => {
      if (!fiber)
        return _null;
      if (typeof fiber.type === "function" && fiber.type[FLAG]) {
        return fiber;
      }
      return getParentComponentFiber(fiber._debugOwner);
    };
    getChildComponentFiber = (fiber) => {
      if (!fiber)
        return _null;
      if (typeof fiber.type === "function" || typeof fiber.type === "object") {
        return fiber;
      }
      return getChildComponentFiber(fiber._debugOwner);
    };
    getDisplayName = (fiber) => {
      if (!fiber)
        return void 0;
      const { elementType, type } = fiber;
      if (typeof type === "string") {
        return type;
      }
      return type.displayName || type.name || elementType.displayName || elementType.name;
    };
    destroySelections = () => {
      acquirableSelectionElements.forEach((selection) => selection.remove());
      pendingSelections.clear();
      const selections = document.getElementsByClassName("million-select");
      for (const selection of selections) {
        selection.remove();
      }
    };
    _selection = _document.createElement("div");
    _selection.className = "million-select";
    _selection.style.cssText = `
  position: fixed;
  border-radius: 4px;
  background-color: #8048de5e;
  z-index: 2147483647;
  border: 1px dashed #8048de;
  pointer-events: none;
  opacity: 1;
  transition: all 750ms ease-in-out;
`;
    _selectionLite = _selection.cloneNode(true);
    _selectionLite.style.backgroundColor = "transparent";
    _selectionLite.style.border = "1px solid #8048de5e";
    _selectionLite.style.boxShadow = "0px 0px 1.5px 1.5px rgba(128, 72, 222, 0.1)";
    _indicator = _document.createElement("div");
    _indicator.style.cssText = `
  position: absolute;
  left: 4px;
  color: white;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 10px;
  padding: 2px 4px;
  background-color: #8048de;
  border-radius: 2px;
  z-index: 2147483646;
  top: -16px;
  pointer-events: none;
`;
    isPending = false;
    pendingSelections = /* @__PURE__ */ new Set();
    acquirableSelectionElements = [];
    createSelectionAreaElement = (element, name, translucent = false, lite = false, _color = _null) => {
      const fail = { selection: _null, indicator: _null, fadeOut: _null };
      if (isPending)
        return fail;
      isPending = true;
      const selection = lite ? acquirableSelectionElements.length ? acquirableSelectionElements.pop() : _selectionLite.cloneNode() : _selection.cloneNode();
      const rect = element.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        isPending = false;
        return fail;
      }
      const { top, left } = rect;
      const { offsetWidth, offsetHeight } = element;
      const key = `${top}-${left}-${offsetWidth}-${offsetHeight}-${name}`;
      if (pendingSelections.has(key) && lite) {
        isPending = false;
        return fail;
      }
      pendingSelections.add(key);
      selection.style.top = `${top - 2}px`;
      selection.style.left = `${left - 4}px`;
      selection.style.width = `${offsetWidth + 8}px`;
      selection.style.height = `${offsetHeight + 4}px`;
      selection.style.opacity = translucent ? "0.5" : "1";
      const indicator = _indicator.cloneNode();
      indicator.textContent = name;
      selection.appendChild(indicator);
      const fadeOut = () => {
        requestAnimationFrame(() => {
          selection.style.opacity = "0";
          setTimeout(() => {
            acquirableSelectionElements.push(selection);
            setTimeout(() => {
              pendingSelections.delete(key);
            }, 16);
            setTimeout(() => {
              acquirableSelectionElements.pop()?.remove();
            }, 500);
          }, 750);
        });
      };
      isPending = false;
      return { selection, indicator, fadeOut };
    };
    startSelection = (onChange) => {
      destroySelections();
      let destroyHovered = _null;
      let currentSelection = _null;
      let currentFiber = _null;
      let freeze = false;
      const createSelection = (element, name, translucent = false) => {
        if (freeze)
          return _null;
        const { selection, indicator } = createSelectionAreaElement(
          element,
          name,
          translucent
        );
        if (!selection)
          return _null;
        _document.body.appendChild(selection);
        currentSelection = selection;
        try {
          const destroy2 = () => {
            if (_document.body.contains(selection)) {
              _document.body.removeChild(selection);
            }
          };
          return destroy2;
        } finally {
          const selectionRect = selection.getBoundingClientRect();
          const indicatorRect = indicator.getBoundingClientRect();
          if (indicatorRect.top < 0 || indicatorRect.bottom > window.innerHeight) {
            indicator.style.top = "0";
          }
          if (selectionRect.height < indicatorRect.height) {
            indicator.style.top = `-${selectionRect.top - indicatorRect.bottom + 16}px`;
          }
        }
      };
      const resetHovered = () => {
        if (destroyHovered) {
          destroyHovered();
          destroyHovered = _null;
          currentSelection = _null;
        }
      };
      resetHovered();
      onChange({
        selector: _null,
        destroy: _null
      });
      _document.addEventListener("mouseleave", resetHovered);
      const hoverSelection = debounce((event) => {
        if (freeze || !event)
          return;
        requestAnimationFrame(() => {
          const element = _document.elementFromPoint(event.clientX, event.clientY);
          if (!element || freeze)
            return;
          resetHovered();
          const fiber = getFiberFromElement(element);
          if (!fiber)
            return;
          let parentComponentFiber = getParentComponentFiber(fiber);
          let needsTranslucent = false;
          if (!parentComponentFiber) {
            parentComponentFiber = fiber?._debugOwner || fiber?.return || fiber;
            needsTranslucent = true;
          }
          let childComponentFiber = getChildComponentFiber(fiber) || fiber;
          childComponentFiber = fiber;
          if (!parentComponentFiber)
            return;
          currentFiber = parentComponentFiber;
          const metadata = metadataLookup.get(parentComponentFiber.type[FLAG]);
          const type = parentComponentFiber.type;
          if (destroyHovered)
            resetHovered();
          const parentName = getDisplayName(parentComponentFiber);
          const childName = getDisplayName(childComponentFiber);
          destroyHovered = createSelection(
            element,
            `${metadata?._ ? metadata._.componentName : parentName} > ${!childName || parentName === childName ? getDisplayName(fiber) : childName}`,
            needsTranslucent
          );
          onChange({
            selector: type[FLAG]
          });
        });
      }, 1);
      _document.addEventListener("mousemove", hoverSelection);
      const clickSelection = (event) => {
        if (event.target === currentSelection) {
          event.stopPropagation();
          event.stopImmediatePropagation();
          event.preventDefault();
        }
        if (!currentSelection)
          return;
        if (freeze) {
          freeze = false;
          currentSelection.style.border = "1px dashed #8048de";
          resetHovered();
          return;
        }
        currentSelection.style.border = "2px dashed #8048de";
        if (!currentFiber)
          return;
        const metadata = metadataLookup.get(currentFiber.type[FLAG]);
        if (!metadata?._)
          return;
        freeze = true;
        if (confirm(`Do you want to open ${metadata._.componentName}?`)) {
          _window.location.assign(`vscode://file/${metadata._.filename}`);
        }
      };
      _document.addEventListener("click", clickSelection);
      const destroy = () => {
        freeze = true;
        onChange({
          selector: _null,
          destroy: _null
        });
        _document.removeEventListener("mousemove", hoverSelection);
        _document.removeEventListener("click", clickSelection);
        _document.removeEventListener("mouseleave", resetHovered);
        _document.removeEventListener("keydown", handleEscape);
        resetHovered();
        destroySelections();
      };
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          if (freeze) {
            freeze = false;
            if (currentSelection) {
              currentSelection.style.border = "1px dashed #8048de";
            }
            resetHovered();
            return;
          }
          destroy();
        }
      };
      _document.addEventListener("keydown", handleEscape);
      return destroy;
    };
  }
});

// runtime/src/core/dev/replay.ts
var rrweb, Player, ACTIVE_SOURCES, style, playerEl, recording, stopFn, events, togglePlayer;
var init_replay = __esm({
  "runtime/src/core/dev/replay.ts"() {
    init_constants();
    ACTIVE_SOURCES = [];
    {
      void (async () => {
        const rrwebModule = await import('rrweb');
        const rrwebPlayerModule = await import('rrweb-player');
        const types2 = await import('@rrweb/types');
        rrweb = rrwebModule;
        Player = rrwebPlayerModule.default;
        ACTIVE_SOURCES = [
          types2.IncrementalSource.MouseMove,
          types2.IncrementalSource.MouseInteraction,
          types2.IncrementalSource.Scroll,
          types2.IncrementalSource.ViewportResize,
          types2.IncrementalSource.Input,
          types2.IncrementalSource.TouchMove,
          types2.IncrementalSource.MediaInteraction,
          types2.IncrementalSource.Drag
        ];
      })();
    }
    style = _document.createElement("style");
    style.innerHTML = `.replayer-wrapper{position:relative}.replayer-mouse{position:absolute;width:20px;height:20px;transition:left .05s linear,top .05s linear;background-size:contain;background-position:50%;background-repeat:no-repeat;background-image:url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMwMCIgd2lkdGg9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTQ4LjcxIDQyLjkxTDM0LjA4IDI4LjI5IDQ0LjMzIDE4YTEgMSAwIDAwLS4zMy0xLjYxTDIuMzUgMS4wNmExIDEgMCAwMC0xLjI5IDEuMjlMMTYuMzkgNDRhMSAxIDAgMDAxLjY1LjM2bDEwLjI1LTEwLjI4IDE0LjYyIDE0LjYzYTEgMSAwIDAwMS40MSAwbDQuMzgtNC4zOGExIDEgMCAwMC4wMS0xLjQyem0tNS4wOSAzLjY3TDI5IDMyYTEgMSAwIDAwLTEuNDEgMGwtOS44NSA5Ljg1TDMuNjkgMy42OWwzOC4xMiAxNEwzMiAyNy41OEExIDEgMCAwMDMyIDI5bDE0LjU5IDE0LjYyeiIvPjwvc3ZnPg==");border-color:transparent}.replayer-mouse:after{content:"";display:inline-block;width:20px;height:20px;background:rgb(177, 142, 235);border-radius:100%;transform:translate(-50%,-50%);opacity:.3}.replayer-mouse.active:after{animation:click .2s ease-in-out 1}.replayer-mouse.touch-device{background-image:none;width:70px;height:70px;border-radius:100%;margin-left:-37px;margin-top:-37px;border:4px solid rgba(73,80,246,0);transition:left 0s linear,top 0s linear,border-color .2s ease-in-out}.replayer-mouse.touch-device.touch-active{border-color:rgb(177, 142, 235);transition:left .25s linear,top .25s linear,border-color .2s ease-in-out}.replayer-mouse.touch-device:after{opacity:0}.replayer-mouse.touch-device.active:after{animation:touch-click .2s ease-in-out 1}.replayer-mouse-tail{position:absolute;pointer-events:none}@keyframes click{0%{opacity:.3;width:20px;height:20px}50%{opacity:.5;width:10px;height:10px}}@keyframes touch-click{0%{opacity:0;width:20px;height:20px}50%{opacity:.5;width:10px;height:10px}}.rr-player{position:relative;background:white;float:left;border-radius:5px;box-shadow:0 24px 48px rgba(17, 16, 62, 0.12)}.rr-player__frame{overflow:hidden}.replayer-wrapper{float:left;clear:both;transform-origin:top left;left:50%;top:50%}.replayer-wrapper>iframe{border:none}.rr-controller.svelte-19ke1iv.svelte-19ke1iv{width:100%;height:80px;background:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:center;border-radius:0 0 5px 5px}.rr-timeline.svelte-19ke1iv.svelte-19ke1iv{width:80%;display:flex;align-items:center}.rr-timeline__time.svelte-19ke1iv.svelte-19ke1iv{display:inline-block;width:100px;text-align:center;color:#11103e}.rr-progress.svelte-19ke1iv.svelte-19ke1iv{flex:1;height:12px;background:#eee;position:relative;border-radius:3px;cursor:pointer;box-sizing:border-box;border-top:solid 4px #fff;border-bottom:solid 4px #fff}.rr-progress.disabled.svelte-19ke1iv.svelte-19ke1iv{cursor:not-allowed}.rr-progress__step.svelte-19ke1iv.svelte-19ke1iv{height:100%;position:absolute;left:0;top:0;background:#e0e1fe}.rr-progress__handler.svelte-19ke1iv.svelte-19ke1iv{width:20px;height:20px;border-radius:10px;position:absolute;top:2px;transform:translate(-50%, -50%);background:rgb(177, 142, 235)}.rr-controller__btns.svelte-19ke1iv.svelte-19ke1iv{display:flex;align-items:center;justify-content:center;font-size:13px}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv{width:32px;height:32px;display:flex;padding:0;align-items:center;justify-content:center;background:none;border:none;border-radius:50%;cursor:pointer}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:active{background:#e0e1fe}.rr-controller__btns.svelte-19ke1iv button.active.svelte-19ke1iv{color:#fff;background:rgb(177, 142, 235)}.rr-controller__btns.svelte-19ke1iv button.svelte-19ke1iv:disabled{cursor:not-allowed}.switch.svelte-9brlez.svelte-9brlez.svelte-9brlez{height:1em;display:flex;align-items:center}.switch.disabled.svelte-9brlez.svelte-9brlez.svelte-9brlez{opacity:0.5}.label.svelte-9brlez.svelte-9brlez.svelte-9brlez{margin:0 8px}.switch.svelte-9brlez input[type='checkbox'].svelte-9brlez.svelte-9brlez{position:absolute;opacity:0}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez{width:2em;height:1em;position:relative;cursor:pointer;display:block}.switch.disabled.svelte-9brlez label.svelte-9brlez.svelte-9brlez{cursor:not-allowed}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez:before{content:'';position:absolute;width:2em;height:1em;left:0.1em;transition:background 0.1s ease;background:rgba(177, 142, 235, 0.5);border-radius:50px}.switch.svelte-9brlez label.svelte-9brlez.svelte-9brlez:after{content:'';position:absolute;width:1em;height:1em;border-radius:50px;left:0;transition:all 0.2s ease;box-shadow:0px 2px 5px 0px rgba(0, 0, 0, 0.3);background:#fcfff4;animation:switch-off 0.2s ease-out;z-index:2}.switch.svelte-9brlez input[type='checkbox'].svelte-9brlez:checked+label.svelte-9brlez:before{background:rgb(177, 142, 235)}.switch.svelte-9brlez input[type='checkbox'].svelte-9brlez:checked+label.svelte-9brlez:after{animation:switch-on 0.2s ease-out;left:1.1em}
`;
    document.head.appendChild(style);
    playerEl = null;
    recording = false;
    stopFn = null;
    events = [];
    _window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && (recording || playerEl)) {
        const DEV = _window[`${FLAG}DEV_`];
        DEV.toolbarStore.setData({
          replay: togglePlayer()
        });
      }
    });
    togglePlayer = () => {
      if (!recording) {
        if (playerEl) {
          if (stopFn)
            stopFn();
          stopFn = null;
          events = [];
          playerEl.remove();
          playerEl = null;
          return false;
        }
        recording = true;
        if (rrweb) {
          stopFn = rrweb.record({
            emit(event) {
              if (ACTIVE_SOURCES.includes(event.type)) {
                events.push(event);
              }
            },
            sampling: {
              // set the interval of scrolling event
              scroll: 150,
              // set the interval of media interaction event
              media: 800,
              // set the timing of record input
              input: "last"
              // When input mulitple characters, only record the final input
            },
            blockClass: "rr-ignore"
          });
        }
        return "recording";
      }
      if (stopFn)
        stopFn();
      stopFn = null;
      recording = false;
      playerEl = document.createElement("rrweb-player");
      playerEl.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  `;
      if (Player) {
        new Player({
          target: playerEl,
          props: {
            events,
            width: window.innerWidth,
            height: window.innerHeight - 100
          }
        });
      }
      document.body.appendChild(playerEl);
      events = [];
      return "playing";
    };
  }
});

// runtime/src/core/dev/toolbar.tsx
var toolbar_exports = {};
__export(toolbar_exports, {
  getCWV: () => getCWV
});
var import_use_ses_shim, prettyBytes, prettyMs, withTimeout, Score, getCWV;
var init_toolbar = __esm({
  "runtime/src/core/dev/toolbar.tsx"() {
    init_Radar();
    init_constants();
    init_core();
    import_use_ses_shim = __toESM(require_use_ses_shim());
    init_select();
    init_replay();
    prettyBytes = (number) => {
      const BYTE_UNITS = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (number < 1) {
        const numberString2 = number.toLocaleString("en-US");
        return numberString2 + BYTE_UNITS[0];
      }
      const exponent = Math.min(
        Math.floor(Math.log(number) / Math.log(1024)),
        BYTE_UNITS.length - 1
      );
      number /= 1024 ** exponent;
      const result = number.toPrecision(3);
      const numberString = Number(result).toLocaleString("en-US");
      const unit = BYTE_UNITS[exponent];
      return numberString + unit;
    };
    prettyMs = (ms) => {
      if (ms < 0)
        ms = -ms;
      const time = {
        d: Math.floor(ms / 864e5),
        h: Math.floor(ms / 36e5) % 24,
        m: Math.floor(ms / 6e4) % 60,
        s: Math.floor(ms / 1e3) % 60,
        ms: Math.floor(ms) % 1e3
      };
      return _Object.entries(time).filter((val) => val[1] !== 0).map(([key, val]) => `${val}${key}`).join(" ") || "0ms";
    };
    withTimeout = (promise, timeout) => {
      return Promise.race([
        promise,
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Timeout")), timeout);
        })
      ]);
    };
    Score = {
      Unknown: {
        color: "#ffffff2e",
        backgroundColor: "#111",
        severity: -1
      },
      Good: {
        color: "#0ace6b2e",
        backgroundColor: "#185929",
        severity: 0
      },
      NeedsImprovement: {
        color: "#fcba032e",
        backgroundColor: "#9c7200",
        severity: 1
      },
      Poor: {
        color: "#ff575e2e",
        backgroundColor: "#440c13",
        severity: 2
      }
    };
    getCWV = (event) => {
      if (!event)
        return Score.Unknown;
      const { n: name, t: value } = event;
      if (name === "CLS") {
        if (value > 0.25)
          return Score.Poor;
        if (value > 0.1)
          return Score.NeedsImprovement;
        return Score.Good;
      }
      if (name === "FCP") {
        if (value > 3e3)
          return Score.Poor;
        if (value > 1800)
          return Score.NeedsImprovement;
        return Score.Good;
      }
      if (name === "LCP") {
        if (value < 4e3)
          return Score.Good;
        if (value < 2500)
          return Score.NeedsImprovement;
        return Score.Poor;
      }
      if (value > 500)
        return Score.Poor;
      if (value > 200)
        return Score.NeedsImprovement;
      return Score.Good;
    };
    try {
      void (async () => {
        const DEV = _window[`${FLAG}DEV_`];
        const toolbarStore = {
          listeners: [],
          batch: [],
          events: [],
          data: {
            bytes: 0,
            items: 0,
            pending: false,
            state: "hidden",
            destroy: _null,
            selector: _null,
            selectedName: _null,
            healthCheckPending: false,
            scan: Boolean(_window.localStorage.getItem("MILLION_SCAN")),
            replay: false
          },
          pushBatch: (batch2, events3) => {
            const len = batch2.length;
            const newBatch = new _Array(len);
            const initialEventsIndex = toolbarStore.events.length;
            for (let i = 0; i < len; i++) {
              const item = _Object.assign({}, batch2[i]);
              const render2 = _Object.assign({}, item.r);
              if (render2.x !== -1 && render2.x != _null) {
                render2.x += initialEventsIndex;
              }
              item.r = render2;
              newBatch[i] = item;
            }
            toolbarStore.events.push(...events3);
            toolbarStore.batch.push(...newBatch);
            toolbarStore.emit();
          },
          setData(data) {
            toolbarStore.data = {
              ...toolbarStore.data,
              ...data
            };
            toolbarStore.emit();
          },
          subscribe(listener) {
            toolbarStore.listeners.push(listener);
            return () => {
              toolbarStore.listeners = toolbarStore.listeners.filter(
                (l) => l !== listener
              );
            };
          },
          getSnapshot() {
            return toolbarStore.data;
          },
          emit() {
            for (const listener of toolbarStore.listeners) {
              listener();
            }
          },
          getCWV,
          createSelectionAreaElement,
          healthCheck: async () => {
            if (toolbarStore.data.healthCheckPending)
              return;
            toolbarStore.data.healthCheckPending = true;
            try {
              withTimeout(
                fetch(`${DEV.url}/healthcheck`, {
                  headers: { "X-Session-Id": DEV.proxySessionId }
                }),
                1e4
              ).then((req) => {
                toolbarStore.data.healthCheckPending = false;
                return req.json();
              }).then((data) => {
                if (!data.ok) {
                  if (toolbarStore.data.state === "error")
                    return;
                  toolbarStore.setData({
                    state: "error",
                    error: "Failed to connect to VSCode",
                    cause: "!data.ok"
                  });
                  return;
                }
                toolbarStore.setData({
                  state: "data",
                  error: void 0,
                  sessions: data.sessions
                });
              }).catch((err) => {
                toolbarStore.data.healthCheckPending = false;
                if (["error"].includes(toolbarStore.data.state))
                  return;
                if (err instanceof Error) {
                  if (err.name === "TypeError" && err.message.includes("CORS")) {
                    toolbarStore.setData({
                      state: "error",
                      error: `Failed to ingest events (Add ${DEV.url.replace("/ingest", "")} to your CORS allow list)`,
                      cause: err?.message
                    });
                  } else if (err.name === "SecurityError") {
                    toolbarStore.setData({
                      state: "error",
                      error: `Failed to ingest events (Add ${DEV.url.replace("/ingest", "")} to your CSP config)`,
                      cause: err?.message
                    });
                  } else {
                    toolbarStore.setData({
                      state: "error",
                      error: `Failed to ingest events`,
                      cause: `.catch() ${err?.message}`
                    });
                  }
                }
              });
            } catch (e) {
              toolbarStore.setData({
                state: "error",
                error: `Failed to ingest events`,
                cause: `try-catch ${e?.message}`
              });
            }
          }
        };
        DEV.toolbarStore = toolbarStore;
        const Select = ({ isDragging }) => {
          const data = (0, import_use_ses_shim.useSyncExternalStore)(
            toolbarStore.subscribe,
            toolbarStore.getSnapshot
          );
          const [isHovered, setIsHovered] = React4__namespace.default.useState(false);
          if (!data.destroy)
            destroySelections();
          return /* @__PURE__ */ React4__namespace.default.createElement(
            "button",
            {
              style: {
                color: data.destroy ? "black" : "white",
                background: data.destroy ? "#b18feb" : isHovered ? "#b18feb49" : "transparent",
                borderRadius: "1rem",
                marginLeft: "0.5rem",
                padding: "0.25rem 0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                outline: "none",
                border: `1px solid ${data.destroy ? "#b18feb49" : "#ffffff49"}`
              },
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setTimeout(() => setIsHovered(false), 200),
              className: "util-button",
              onClick: () => {
                if (data.destroy) {
                  data.destroy();
                  destroySelections();
                } else {
                  toolbarStore.setData({
                    destroy: startSelection((data2) => toolbarStore.setData(data2))
                  });
                }
              }
            },
            /* @__PURE__ */ React4__namespace.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M5 3a2 2 0 0 0-2 2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M19 3a2 2 0 0 1 2 2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "m12 12 4 10 1.7-4.3L22 16Z" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M5 21a2 2 0 0 1-2-2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M9 3h1" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M9 21h2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M14 3h1" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M3 9v1" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M21 9v2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M3 14v1" })
            ),
            isHovered && !isDragging ? "Select" : null
          );
        };
        const Scan = ({ isDragging }) => {
          const data = (0, import_use_ses_shim.useSyncExternalStore)(
            toolbarStore.subscribe,
            toolbarStore.getSnapshot
          );
          const [isHovered, setIsHovered] = React4__namespace.default.useState(false);
          return /* @__PURE__ */ React4__namespace.default.createElement(
            "button",
            {
              style: {
                color: data.scan ? "black" : "white",
                background: data.scan ? "#b18feb" : isHovered ? "#b18feb49" : "transparent",
                borderRadius: "1rem",
                marginLeft: "0.25rem",
                padding: "0.25rem 0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                outline: "none",
                border: `1px solid ${data.scan ? "#b18feb49" : "#ffffff49"}`
              },
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setTimeout(() => setIsHovered(false), 200),
              className: "util-button",
              onClick: () => {
                toolbarStore.setData({
                  scan: !data.scan
                });
                _window.localStorage.setItem("MILLION_SCAN", !data.scan ? "1" : "");
              }
            },
            /* @__PURE__ */ React4__namespace.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }),
              /* @__PURE__ */ React4__namespace.default.createElement("circle", { cx: "12", cy: "12", r: "1" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5" })
            ),
            isHovered && !isDragging ? "Scan" : ""
          );
        };
        const Replay = ({ isDragging }) => {
          const data = (0, import_use_ses_shim.useSyncExternalStore)(
            toolbarStore.subscribe,
            toolbarStore.getSnapshot
          );
          const [isHovered, setIsHovered] = React4__namespace.default.useState(false);
          return /* @__PURE__ */ React4__namespace.default.createElement(
            "button",
            {
              style: {
                color: data.replay ? "black" : "white",
                background: data.replay ? "#b18feb" : isHovered ? "#b18feb49" : "transparent",
                borderRadius: "1rem",
                marginLeft: "0.25rem",
                padding: "0.25rem 0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "3px",
                outline: "none",
                border: `1px solid ${data.replay ? "#b18feb49" : "#ffffff49"}`
              },
              onMouseEnter: () => setIsHovered(true),
              onMouseLeave: () => setTimeout(() => setIsHovered(false), 200),
              className: `util-button ${data.replay === "recording" ? "pulse" : ""}`,
              onClick: () => {
                toolbarStore.setData({
                  replay: togglePlayer()
                });
              }
            },
            data.replay === "recording" ? /* @__PURE__ */ React4__namespace.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              /* @__PURE__ */ React4__namespace.default.createElement("rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }),
              /* @__PURE__ */ React4__namespace.default.createElement("rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" })
            ) : data.replay === "playing" ? /* @__PURE__ */ React4__namespace.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "M18 6 6 18" }),
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "m6 6 12 12" })
            ) : /* @__PURE__ */ React4__namespace.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              /* @__PURE__ */ React4__namespace.default.createElement("path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
              /* @__PURE__ */ React4__namespace.default.createElement("rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" })
            ),
            isHovered && !isDragging ? data.replay === "recording" ? "Stop recording" : data.replay === "playing" ? "Exit recording" : "Record" : ""
          );
        };
        const App = () => {
          const [isDragging, setIsDragging] = React4__namespace.default.useState(false);
          const [position, setPosition] = React4__namespace.default.useState(() => {
            const storedPosition = localStorage.getItem("MILLION_TOOLBAR_POSITION");
            if (storedPosition) {
              try {
                return JSON.parse(storedPosition);
              } catch (e) {
              }
            }
            return _null;
          });
          const ref = React4__namespace.default.useRef(null);
          const prevItems = React4__namespace.default.useRef(0);
          const data = (0, import_use_ses_shim.useSyncExternalStore)(
            toolbarStore.subscribe,
            toolbarStore.getSnapshot
          );
          const dragTimeoutRef = React4__namespace.default.useRef(null);
          const dragStyles = {
            left: isDragging ? 0 : position?.x,
            top: isDragging ? 0 : position?.y,
            bottom: position ? void 0 : 15,
            right: position ? void 0 : 15,
            transform: isDragging ? `translate(${position?.x || 0}px, ${position?.y || 0}px) scale(0.75)` : void 0
          };
          const onMouseDown = (event) => {
            data.prevPosition = position;
            if (!data.prevUserSelect) {
              data.prevUserSelect = _document.body.style.userSelect || "auto";
            }
            _document.body.style.userSelect = "none";
            dragTimeoutRef.current = window.setTimeout(() => {
              setIsDragging(true);
              const x = event.clientX - (ref.current?.clientWidth || 0) / 2;
              const y = event.clientY - (ref.current?.clientHeight || 0) / 2;
              setPosition({
                x,
                y
              });
            }, 400);
          };
          const onMouseMove = (event) => {
            if (isDragging && event.buttons === 1) {
              setPosition({
                x: event.clientX - (ref.current?.clientWidth || 0) / 2,
                y: event.clientY - (ref.current?.clientHeight || 0) / 2
              });
            }
          };
          const snap = (targetPosition) => {
            const padding = 15;
            const toolbarWidth = ref.current?.clientWidth || 0;
            const toolbarHeight = ref.current?.clientHeight || 0;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            let newX;
            let newY;
            const distToTop = targetPosition.y;
            const distToBottom = viewportHeight - (targetPosition.y + toolbarHeight);
            const minDist = Math.min(distToTop, distToBottom);
            if (minDist === distToTop) {
              newX = Math.max(
                padding,
                Math.min(targetPosition.x, viewportWidth - toolbarWidth - padding)
              );
              newY = padding;
            } else {
              newX = Math.max(
                padding,
                Math.min(targetPosition.x, viewportWidth - toolbarWidth - padding)
              );
              newY = viewportHeight - toolbarHeight - padding;
            }
            const adjustedPosition = { x: newX, y: newY };
            ref.current?.animate(
              [
                {
                  transform: `translate(${targetPosition?.x || 0}px, ${targetPosition?.y || 0}px) scale(0.9)`
                },
                { transform: `translate(${newX}px, ${newY}px) scale(1)` }
              ],
              {
                duration: 200,
                easing: "ease-in-out"
              }
            );
            return adjustedPosition;
          };
          if (dragTimeoutRef.current) {
            clearTimeout(dragTimeoutRef.current);
            dragTimeoutRef.current = null;
          }
          const onMouseUp = () => {
            if (!position)
              return;
            if (dragTimeoutRef.current) {
              clearTimeout(dragTimeoutRef.current);
              dragTimeoutRef.current = null;
            }
            data.lastMouseDown = void 0;
            if (!isDragging)
              return;
            if (data.prevUserSelect) {
              _document.body.style.userSelect = data.prevUserSelect;
              data.prevUserSelect = void 0;
            }
            const adjustedPosition = snap(position);
            setTimeout(() => {
              localStorage.setItem(
                "MILLION_TOOLBAR_POSITION",
                JSON.stringify(adjustedPosition)
              );
              setPosition(adjustedPosition);
              setIsDragging(false);
            }, 200);
          };
          const onWindowResize = React4__namespace.default.useCallback(() => {
            if (!position || !ref.current)
              return;
            const { innerWidth, innerHeight } = window;
            const { width, height } = ref.current.getBoundingClientRect();
            const newX = position.x / (innerWidth - width) * (innerWidth - width);
            const newY = position.y / (innerHeight - height) * (innerHeight - height);
            const newPosition = snap({ x: newX, y: newY });
            setPosition(newPosition);
            localStorage.setItem(
              "MILLION_TOOLBAR_POSITION",
              JSON.stringify(newPosition)
            );
          }, [position]);
          React4__namespace.default.useEffect(() => {
            if (position)
              snap(position);
          }, [Boolean(ref.current)]);
          React4__namespace.default.useEffect(() => {
            _window.addEventListener("mousemove", onMouseMove);
            _window.addEventListener("mouseup", onMouseUp);
            _window.addEventListener("resize", onWindowResize);
            return () => {
              _window.removeEventListener("mousemove", onMouseMove);
              _window.removeEventListener("mouseup", onMouseUp);
              _window.removeEventListener("resize", onWindowResize);
            };
          }, [isDragging, position, onWindowResize]);
          if (data.state === "connecting" || data.state === "hidden") {
            return /* @__PURE__ */ React4__namespace.default.createElement(
              "div",
              {
                onMouseDown,
                className: `toolbar connecting ${data.state === "hidden" ? "hidden" : ""} ${isDragging ? "dragging" : ""}`,
                ref,
                style: dragStyles,
                onDoubleClick: () => {
                  toolbarStore.setData({
                    state: "hidden"
                  });
                }
              },
              /* @__PURE__ */ React4__namespace.default.createElement(
                "svg",
                {
                  className: "animate-spin spinner",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24"
                },
                /* @__PURE__ */ React4__namespace.default.createElement(
                  "circle",
                  {
                    style: { opacity: 0.25 },
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ React4__namespace.default.createElement(
                  "path",
                  {
                    style: { opacity: 0.75 },
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ),
              "Connecting..."
            );
          }
          if (data.state === "error") {
            return /* @__PURE__ */ React4__namespace.default.createElement(
              "div",
              {
                className: `toolbar error ${isDragging ? "dragging" : ""}`,
                style: dragStyles,
                onMouseDown,
                ref
              },
              /* @__PURE__ */ React4__namespace.default.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                    display: "flex",
                    alignItems: "center"
                  }
                },
                /* @__PURE__ */ React4__namespace.default.createElement(
                  "div",
                  {
                    style: { position: "absolute" },
                    className: "animate-ping error-circle"
                  }
                ),
                /* @__PURE__ */ React4__namespace.default.createElement("div", { className: "error-circle" })
              ),
              /* @__PURE__ */ React4__namespace.default.createElement(
                "a",
                {
                  href: `https://github.com/aidenybai/million/issues/new?title=${encodeURIComponent(data.error)}&body=${encodeURIComponent(
                    `# ${data.error} ${data.cause}

Machine ID: \`${DEV.buildId}\`

> [!NOTE]
> [Book a call](https://cal.com/aiden)

| key | value |
| --- | ----- |
${Object.entries(
                      {
                        ...DEV.session,
                        url: window.location.href,
                        time: Date.now(),
                        items: toolbarStore.data.items,
                        bytes: toolbarStore.data.bytes
                      }
                    ).map(([key, value]) => `| ${key} | ${String(value)} |`).join("\n")}

${(DEV.toolbarStore.data.sessions || []).map(
                      (session2) => `- ${session2.id} (${session2.host}:${session2.port} - ${session2.match})`
                    ).join("\n")}`
                  )}&labels=bug,million-lint`,
                  target: "_blank"
                },
                "Call us for help! "
              ),
              /* @__PURE__ */ React4__namespace.default.createElement("div", { className: "div" }),
              " ",
              /* @__PURE__ */ React4__namespace.default.createElement(
                "div",
                {
                  onDoubleClick: () => {
                    toolbarStore.setData({
                      state: "hidden"
                    });
                  }
                },
                data.error
              )
            );
          }
          let { items, bytes } = toolbarStore.data;
          const dirty = prevItems.current !== items;
          if (dirty) {
            prevItems.current = items;
          }
          let maxScore = Score.Unknown;
          let prefix = "";
          let instances = 1;
          if (metadataLookup.has(data.selector)) {
            const { _, i } = metadataLookup.get(data.selector);
            instances = i[i.length - 1] || 1;
            if (_)
              prefix = `${_.componentName} \u2022 `;
          }
          if (data.selector && items) {
            let count = 0;
            let selfTime = 0;
            let totalTime = 0;
            for (let i = 0, len = toolbarStore.batch.length; i < len; i++) {
              const item = toolbarStore.batch[i];
              if (item.k === data.selector) {
                count += item.r.c;
                selfTime += item.r.s;
                totalTime += item.r.t;
                const score = getCWV(toolbarStore.events[item.r.x]);
                if (maxScore == _null || score.severity > maxScore.severity) {
                  maxScore = score;
                }
              }
            }
            items = Math.ceil(count / instances);
            bytes = `${prettyMs(selfTime / instances)}, total: ${prettyMs(totalTime / instances)}`;
          }
          return /* @__PURE__ */ React4__namespace.default.createElement(
            "div",
            {
              className: `toolbar data ${dirty ? "ping-once" : ""} ${isDragging ? "dragging" : ""}`,
              ref,
              style: {
                borderColor: maxScore.color,
                backgroundColor: maxScore.backgroundColor,
                ...dragStyles
              },
              onMouseDown
            },
            /* @__PURE__ */ React4__namespace.default.createElement(Radar_default, { frames: 30, speed: 17e-4, size: 20, inset: 3 }),
            /* @__PURE__ */ React4__namespace.default.createElement(
              "span",
              {
                onDoubleClick: () => {
                  setPosition(null);
                  localStorage.removeItem("MILLION_TOOLBAR_POSITION");
                },
                style: {
                  userSelect: "none",
                  transition: "font-size 0.2s ease-in-out",
                  fontSize: isDragging ? 0 : "inherit"
                },
                className: !items ? "pulse" : ""
              },
              prefix,
              items ? `\xD7${items} (${data.selector ? bytes : prettyBytes(bytes)})` : "Interact with the page to start"
            ),
            /* @__PURE__ */ React4__namespace.default.createElement(Select, { isDragging }),
            /* @__PURE__ */ React4__namespace.default.createElement(Scan, { isDragging }),
            /* @__PURE__ */ React4__namespace.default.createElement(Replay, { isDragging })
          );
        };
        const render = async (node) => {
          const elementName = "million-dev-toolbar";
          const root = _document.createElement(elementName);
          root.classList.add("rr-ignore");
          root.attachShadow({ mode: "open" });
          const style2 = _document.createElement("style");
          style2.innerHTML = `
      .toolbar {
        position: fixed;
        z-index: 2147483647;
        opacity: 0;
        display: flex;
        height: 26px;
        justify-content: center;
        align-items: center;
        gap: 3px;
        border-radius: 50px;
        padding: 4px 12px;
        background-color: #111;
        color: #fff;
        font-size: 12px;
        font-variant-numeric: tabular-nums;
        transition: opacity 0.2s ease-in-out, transform 0s ease-in;
        border: 1px solid #ffffff2e;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 30px 0px;
        cursor: grab;
        white-space: nowrap;
      }

      .dragging {
        cursor: grabbing;
        opacity: 0.5 !important;
      }

      .hidden {
        pointer-events: none;
        opacity: 0;
      }

      .spinner {
        height: 0.85rem;
        width: 0.85rem;
        color: white;
      }

      .error {
        background: #440c13;
        animation: none;
        color: #ff575e;
        opacity: 1;
        align-items: center;
        gap: 6px;
        border: 1px solid #ff575e2e;
      }

      .error a {
        color: #ff575e;
        font-weight: bold;
        text-decoration: underline dotted;
      }

      .error a:hover {
        text-decoration: underline;
      }

      .error .div {
        height: 100%;
        width: 1px;
        background-color: #ff575e2e;
      }

      .connecting {
        display: flex;
        gap: 6px;
        font-weight: normal;
        animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
      }

      .util-button {
        transition: font-size 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;
        font-size: 0px;
      }

      .util-button:hover {
        font-size: 12px;
      }

      .pulse {
        animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite;
      }

      .data {
        opacity: 1;
      }

      .error-circle {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ff575e;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: .5;
        }
      }

      .animate-spin {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .animate-ping {
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
      }

      @keyframes ping {
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      .ping-once {
        animation: subtle-ping 0.3s ease-in-out;
      }

      @keyframes subtle-ping {
        10% {
          filter: brightness(3);
        }
        100% {
          filter: brightness(1);
        }
      }
    `;
          root.shadowRoot.appendChild(style2);
          root.shadowRoot[`${FLAG}DEV_`] = true;
          const prevMountedElement = _document.querySelector(elementName);
          if (prevMountedElement) {
            if (root._interval) {
              clearInterval(root._interval);
            }
            prevMountedElement.replaceWith(root);
          } else {
            document.body.appendChild(root);
          }
          root._interval = setInterval(() => {
            DEV.toolbarStore.healthCheck();
          }, 3e3);
          const deprecatedRender = async () => {
            const ReactDOM = (await import('react-dom')).default;
            ReactDOM.render(node, root.shadowRoot);
          };
          const createRootRender = async () => {
            const ReactDOMClient = (await import('react-dom/client')).default;
            ReactDOMClient.createRoot(root.shadowRoot).render(node);
          };
          const majorVersion = Number(React4__namespace.default.version.split(".")[0]);
          try {
            if (majorVersion >= 18) {
              await createRootRender();
              return;
            }
          } catch (_e) {
          }
          await deprecatedRender();
        };
        await render(/* @__PURE__ */ React4__namespace.default.createElement(App, null));
      })();
    } catch (_) {
    }
  }
});
var noop, onCommitFiberRoot, dispatcherRefs, DEVTOOLS_HOOK, patchRenderer, SIGKILL, IS_REACT_19; exports.MillionLintProvider = void 0; var batchIndexLookup, metadataLookup, batch, inited, session, url, apiKey, buildId, commitHash, onRender, events2, eventId, eventIndex, commitIndex, commits, pendingRequests, _proxySessionId, getMetadata, UNSTABLE_TYPES, getChange, captureDeps, captureProps, captureValue, captureFunction, MillionProfiler, captureJSX, captureHook, componentIds, captureBaseline; exports.$$ = void 0; exports.useCapture = void 0; exports.useCount = void 0; var mergeChange, reportRender, flush, debouncedFlush; exports.reset = void 0; exports.registerMetadata = void 0; var getNavigationEntry, getActivationStart, getNavigationType, observe, getKeyFromEl, initWebVitals; exports.init = void 0;
var init_core = __esm({
  "runtime/src/core/index.ts"() {
    init_session();
    init_transport();
    init_constants();
    init_helpers();
    init_react_internals();
    init_is_equal();
    noop = () => {
    };
    onCommitFiberRoot = noop;
    dispatcherRefs = new _Set();
    DEVTOOLS_HOOK = "__REACT_DEVTOOLS_GLOBAL_HOOK__";
    patchRenderer = () => {
      let devtools = _window[DEVTOOLS_HOOK];
      if (!devtools.renderers.size)
        return;
      for (let renderer of devtools.renderers.values()) {
        let ref = renderer.currentDispatcherRef;
        if (ref && !_setHas.call(dispatcherRefs, ref)) {
          _setAdd.call(dispatcherRefs, ref);
        }
      }
    };
    try {
      if (!isSSR && _objectHasOwnProperty.call(_window, DEVTOOLS_HOOK)) {
        let devtools = _window[DEVTOOLS_HOOK];
        let prevOnCommitFiberRoot = devtools.onCommitFiberRoot;
        devtools.onCommitFiberRoot = (_rendererID, root) => {
          patchRenderer();
          if (prevOnCommitFiberRoot)
            prevOnCommitFiberRoot(_rendererID, root);
          onCommitFiberRoot(root);
        };
      }
    } catch (err) {
      {
        console.error("Million instrumentation encountered an error: %s", err);
      }
    }
    SIGKILL = _window?.[FLAG + "SIGKILL_"];
    IS_REACT_19 = React4__namespace.version.startsWith("19");
    exports.MillionLintProvider = FiberProvider;
    batchIndexLookup = /* @__PURE__ */ new _Map();
    metadataLookup = /* @__PURE__ */ new _Map();
    batch = [];
    inited = false;
    session = /* @__PURE__ */ getSession();
    url = _null;
    onRender = _null;
    events2 = [];
    eventId = _null;
    eventIndex = -1;
    commitIndex = -1;
    commits = [];
    pendingRequests = 0;
    getMetadata = (key) => {
      return _mapGet.call(metadataLookup, key);
    };
    UNSTABLE_TYPES = ["object", "function"];
    getChange = (prevValue, nextValue, shallow) => {
      if (shallow) {
        if (_Object.is(prevValue, nextValue))
          return _null;
      }
      if (!shallow || React4__namespace.isValidElement(nextValue)) {
        if (isEqual(prevValue, nextValue))
          return _null;
      }
      let isDispatcher = typeof prevValue === "function" && prevValue[FLAG];
      if (isDispatcher)
        return _null;
      let prev = serialize(prevValue);
      let next = serialize(nextValue);
      let stringEq = prev === next;
      let type = nextValue ? typeof nextValue : typeof prevValue;
      let unstable = stringEq && UNSTABLE_TYPES.includes(type);
      return {
        // unstable
        u: unstable,
        // type
        t: type,
        // count
        c: 1,
        // index: (if it's a change of the deps array, this will be the index of the dep)
        i: _null,
        // name: used to help identify the change
        // prop change postfixes this with the name of the prop
        n: stringEq ? prev : prev + "~" + next,
        d: _null
      };
    };
    captureDeps = (key, deps, instancesIndex, loc, locs, index, noisy, cache) => {
      if (!_isArray(deps))
        return deps;
      let fiber = useFiber();
      if (noisy)
        return deps;
      let owner = getOwner(fiber);
      let prev = cache?.[index];
      let changes = [];
      if (prev) {
        for (let i = 0, len = deps.length; i < len; i++) {
          let prevDepValue = prev[i];
          let nextDepValue = deps[i];
          let change = getChange(prevDepValue, nextDepValue, true);
          if (!change)
            continue;
          change.n = `${i}`;
          change.i = i;
          changes.push(change);
        }
      }
      if (!prev || changes.length) {
        reportRender(
          // key: encode(filename).encoded(componentName)
          // (e.g. "/some/file/path/index.jsx.App")
          key,
          1 /* Deps */,
          // CaptureKind
          // loc: encode(SourceLocation)
          // e.g. `[foo, bar, baz]` -> encode([1, 2, 3, 4])
          loc,
          _null,
          // secondaryLoc
          // locs: encode([Dep1SourceLocation, Dep2SourceLocation, ...])
          // e.g. `[foo, bar, baz]` -> encode([[1, 2, 3, 4], [5, 6, 7, 8], ...])
          locs,
          0,
          // selfTime
          0,
          // totalTime
          1,
          // count
          _null,
          // self
          owner,
          // owner
          _null,
          // message
          instancesIndex,
          // instancesIndex
          changes
          // changes
        );
      }
      if (cache)
        cache[index] = deps;
      return deps;
    };
    captureProps = (key, props, instancesIndex, loc, index, noisy, cache) => {
      if (typeof props !== "object")
        return props;
      let fiber = useFiber();
      let owner = getOwner(fiber);
      let memoizedProps = fiber?.memoizedProps;
      let prevMemoizedProps = fiber?.alternate?.memoizedProps;
      if (memoizedProps)
        props ||= memoizedProps;
      let prev = cache?.[index] || prevMemoizedProps;
      React4__namespace.useEffect(() => {
        if (didFiberRender(fiber) && !noisy) {
          let changes = [];
          if (prev) {
            for (let name in props) {
              if (name === "children")
                continue;
              let change = getChange(prev[name], props[name], true);
              if (!change)
                continue;
              change.n = name;
              changes.push(change);
            }
          }
          if (!prev || changes.length) {
            reportRender(
              // key: encode(filename).encoded(componentName)
              // e.g. "/some/file/path/index.jsx.App"
              key,
              2 /* Props */,
              // CaptureKind
              loc,
              // loc: encode(SourceLocation)
              _null,
              // secondaryLoc
              _null,
              // locs
              0,
              // selfTime
              0,
              // totalTime
              1,
              // count
              _null,
              // self
              owner,
              // owner
              _null,
              // message
              instancesIndex,
              // instancesIndex
              changes
              // changes
            );
          }
          if (cache)
            cache[index] = props;
        }
      });
      return props;
    };
    captureValue = (key, value, instancesIndex, loc, locs, index, noisy, cache) => {
      let fiber = useFiber();
      let targetValue = value;
      if (fiber && typeof value === "object" && value?.current) {
        targetValue = value.current;
      }
      let owner = getOwner(fiber);
      if (fiber && _isArray(value) && value.length === 2 && typeof value[1] === "function") {
        let dispatcher = value[1];
        let hijackedDispatcher = function(nextValue) {
          let prevValue2 = cache ? cache[index][0] : value[0];
          dispatcher(nextValue);
          let change = getChange(prevValue2, nextValue, false);
          if (!change || noisy)
            return;
          reportRender(
            // key: encode(filename).encoded(componentName)
            // e.g. "/some/file/path/index.jsx.App"
            key,
            4 /* Value */,
            // CaptureKind
            loc,
            // loc: encode(SourceLocation)
            _null,
            // secondaryLoc
            _null,
            // locs
            0,
            // selfTime
            0,
            // totalTime
            1,
            // count
            _null,
            // self
            owner,
            // owner
            _null,
            // message
            instancesIndex,
            // instancesIndex
            [change]
            // changes
          );
        };
        hijackedDispatcher[FLAG] = true;
        dispatcher[FLAG] = key + "." + loc;
        if (cache) {
          let prevValue2 = cache[index];
          if (prevValue2) {
            value[1] = prevValue2[1];
            prevValue2[0] = value[0];
          } else {
            cache[index] = [value[0], hijackedDispatcher];
          }
        }
        return value;
      }
      if (noisy)
        return value;
      let prevValue = cache?.[index];
      if (cache)
        cache[index] = targetValue;
      if (prevValue) {
        let changes = [];
        if (typeof targetValue === "object" && locs) {
          if (_isArray(targetValue)) {
            for (let i = 0, len = targetValue.length; i < len; i++) {
              let change = getChange(prevValue[i], targetValue[i], false);
              if (!change)
                continue;
              change.n = `${i}`;
              change.i = i;
              changes.push(change);
            }
          } else {
            for (let prop in targetValue) {
              let change = getChange(prevValue[prop], targetValue[prop], false);
              if (!change)
                continue;
              change.n = prop;
              changes.push(change);
            }
          }
        } else {
          let change = getChange(prevValue, targetValue, false);
          if (!change)
            return value;
          changes.push(change);
        }
        reportRender(
          // key: encode(filename).encoded(componentName)
          // e.g. "/some/file/path/index.jsx.App"
          key,
          // CaptureKind
          4 /* Value */,
          // loc: encode(SourceLocation)
          loc,
          // loc: encode(SourceLocation)
          _null,
          // secondaryLoc
          locs,
          // locs
          0,
          // selfTime
          0,
          // totalTime
          locs ? 0 : 1,
          // count
          _null,
          // self
          owner,
          // owner
          _null,
          // message
          instancesIndex,
          // instancesIndex
          changes
          // changes
        );
      }
      return value;
    };
    captureFunction = (key, fn, instancesIndex, loc, noisy) => {
      if (typeof fn !== "function" || FLAG in fn || noisy)
        return fn;
      let capturedFn = function() {
        let startTime = _performance.now();
        try {
          let maybeEvent = arguments[0];
          if (maybeEvent && typeof maybeEvent === "object") {
            let target = maybeEvent.currentTarget;
            if (target && typeof target === "object" && !target[FLAG] && target !== _window && target !== _document) {
              target[FLAG] = key + "." + loc;
            }
          }
          let ret = fn.apply(this, arguments);
          if (noisy)
            return ret;
          let time = _performance.now() - startTime;
          reportRender(
            // key: encode(filename).encoded(componentName)
            // e.g. "/some/file/path/index.jsx.App"
            key,
            128 /* Function */,
            loc,
            // loc
            null,
            // secondaryLoc
            _null,
            // locs
            time,
            // selfTime
            time,
            // totalTime
            1,
            // count
            null,
            // self
            null,
            // owner
            null,
            // message
            instancesIndex,
            // instancesIndex
            []
            // changes
          );
          return ret;
        } catch (error) {
          reportRender(
            // key: encode(filename).encoded(componentName)
            // e.g. "/some/file/path/index.jsx.App"
            key,
            256 /* Error */,
            loc,
            // loc
            null,
            // secondaryLoc
            _null,
            // locs
            0,
            // selfTime
            0,
            // totalTime
            1,
            // count
            null,
            // self
            null,
            // owner
            error.message.trim(),
            // message
            instancesIndex,
            // instancesIndex
            []
            // changes
          );
          throw error;
        }
      };
      capturedFn[FLAG] = true;
      return capturedFn;
    };
    MillionProfiler = React4__namespace.forwardRef(
      (_props, forwardedRef) => {
        let { children, _k, _l, _i, _l2, ...parentProps } = _props;
        let prevRef = React4__namespace.useRef();
        let childProps = children.props;
        let childrenRef = getElementRef(children);
        let isChildrenForwardRef = typeof children === "object" && "$$typeof" in children && String(children.$$typeof) === FORWARD_REF_SYMBOL_STRING;
        let element = (forwardedRef || childrenRef) && isChildrenForwardRef ? React4__namespace.cloneElement(
          children,
          _Object.assign(mergeProps(parentProps, childProps), {
            ref: forwardedRef ? (ref) => {
              setRef(forwardedRef, ref);
              setRef(childrenRef, ref);
            } : childrenRef
          })
        ) : children;
        let fiber = useFiber();
        let dom = useNearestChild(fiber);
        let prev = prevRef.current;
        React4__namespace.useEffect(() => {
          if (!fiber)
            return;
          if (fiber.type === MillionProfiler) {
            fiber = fiber.child;
            {
              dom = traverseFiber(
                fiber,
                false,
                (node) => typeof node.type === "string"
              )?.stateNode;
            }
          }
          let {
            s,
            t
            /* totalTime */
          } = getTimings(fiber);
          let reference = fiber?.type;
          let self2 = _null;
          let owner = _null;
          if (getMetadata(_k)?.v) {
            self2 = reference?.[FLAG];
            owner = getOwner(fiber);
          }
          let changes = [];
          for (let name in childProps) {
            if (name === "children")
              continue;
            let change = getChange(prev?.[name], childProps[name], true);
            if (!change)
              continue;
            change.n = name;
            changes.push(change);
          }
          {
            let DEV = _window[`${FLAG}DEV_`];
            let toolbarStore = DEV?.toolbarStore;
            if (toolbarStore?.data?.scan && dom) {
              let data = _mapGet.call(metadataLookup, self2);
              let color = _null;
              if (events2.length && eventIndex != null) {
                color = toolbarStore.getCWV(events2[eventIndex]).color;
              }
              let componentName = data?._.componentName;
              if (typeof fiber?.type === "function" && !componentName) {
                componentName = fiber.type.displayName || fiber.type.name;
              }
              if (typeof children?.type === "function" && !componentName) {
                componentName = children.type.displayName || children.type.name;
              }
              let { selection, fadeOut } = toolbarStore.createSelectionAreaElement(
                dom,
                componentName,
                true,
                color
              );
              if (selection) {
                _document.body.appendChild(selection);
                requestAnimationFrame(fadeOut);
              }
            }
          }
          let isFiberMounted = fiber && (!fiber.alternate || (fiber.flags & (2 | 4096)) !== 0);
          reportRender(
            // key: encode(filename).encoded(componentName)
            // e.g. "/some/file/path/index.jsx.App"
            _k,
            // JSXMount = 'mount' | 'unmount'
            // JSXUpdate = 'update'
            isFiberMounted || !prev ? 32 /* JSXMount */ : 64 /* JSXUpdate */,
            // loc = scoped source location of the JSX element,
            // or the location of the JSX element
            _l,
            _l2,
            // secondaryLoc = location of the JSX element
            _null,
            // locs
            s,
            // selfTime
            t,
            // totalTime
            1,
            // count
            self2,
            // self
            owner,
            // owner
            _null,
            // message
            _i,
            // instancesIndex
            changes
            // changes
          );
          prevRef.current = childProps;
        });
        return element;
      }
    );
    MillionProfiler.displayName = PROFILER_DISPLAY_NAME;
    captureJSX = (key, element, instancesIndex, loc, secondaryLoc) => {
      if ([MillionProfiler, FiberProvider].includes(element.type) || typeof element.type === "object" && element.type?.componentStyle && typeof element.type?.target === "string" || isSpecialElement(element) || usesIntrospection(element)) {
        return element;
      }
      return /* @__PURE__ */ React4__namespace.createElement(MillionProfiler, {
        key: element.key || void 0,
        children: element,
        /**
         * key
         */
        _k: key,
        /**
         * instancesIndex
         */
        _i: instancesIndex,
        /**
         * loc
         */
        _l: loc,
        /**
         * secondaryLoc
         */
        _l2: secondaryLoc
      });
    };
    captureHook = (key, hook, instancesIndex, loc) => {
      if (typeof hook === "function") {
        let self2 = hook[FLAG];
        reportRender(
          // key: encode(filename).encoded(componentName)
          // e.g. "/some/file/path/index.jsx.App"
          key,
          1024 /* Hooks */,
          // loc = scoped source location of the JSX element,
          // or the location of the JSX element
          loc,
          _null,
          // secondaryLoc = location of the JSX element
          _null,
          // locs
          0,
          // selfTime
          0,
          // totalTime
          0,
          // count
          self2,
          // self
          _null,
          // owner
          _null,
          // message
          instancesIndex,
          // instancesIndex
          []
          // changes
        );
      }
      return hook;
    };
    componentIds = new _WeakMap();
    captureBaseline = (key, canRunHooks2, reference, data, loc) => {
      let noisy = false;
      let cache = [];
      if (reference && UNSTABLE_TYPES.includes(typeof reference) && !(FLAG in reference)) {
        reference[FLAG] = key;
      }
      if (canRunHooks2) {
        cache = React4__namespace.useState(() => new _Array(data.c))[0];
        let fiber = useFiber();
        if (fiber && data.v) {
          if (!(FLAG in fiber.type)) {
            fiber.type[FLAG] = key;
          }
          if (fiber.updateQueue?.memoCache) {
            data.$ = true;
          }
        }
        {
          let ref = React4__namespace.useRef(_null);
          let fiber2 = useFiber();
          if (ref.current === _null) {
            ref.current = true;
            if (fiber2) {
              let prevMemoizedState = _weakMapGet.call(componentIds, fiber2);
              if (_weakMapHas.call(componentIds, fiber2)) {
                _weakMapSet.call(componentIds, fiber2, fiber2.memoizedState);
              } else if (fiber2.memoizedState !== prevMemoizedState) {
                _weakMapDelete.call(componentIds, fiber2);
                noisy = true;
              }
            }
          }
        }
        React4__namespace.useEffect(() => {
          if (didFiberRender(fiber) && !noisy) {
            let {
              s,
              t
              /* totalTime */
            } = getTimings(fiber);
            reportRender(
              // key: encode(filename).encoded(componentName)
              // e.g. "/some/file/path/index.jsx.App"
              key,
              512 /* Baseline */,
              loc,
              // loc
              _null,
              // secondaryLoc
              _null,
              // locs
              data.v ? s : 0,
              // selfTime
              data.v ? t : 0,
              // totalTime
              1,
              // count
              _null,
              // self
              _null,
              // owner
              _null,
              // message
              data.i.length - 1,
              // instancesIndex
              []
              // changes
            );
          }
        });
        let child = useNearestChild(fiber);
        let current = child?.current;
        if (current && !(FLAG in current)) {
          current[FLAG] = key;
        }
        let scheduleInstanceUpdate = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (data._i !== data.i[data.i.length - 1]) {
                data.i.push(data._i);
              }
            });
          });
        };
        React4__namespace.useEffect(() => {
          noisy = false;
          data._i++;
          scheduleInstanceUpdate();
          return () => {
            data._i--;
            scheduleInstanceUpdate();
          };
        }, []);
      }
      return { n: noisy, c: cache };
    };
    exports.$$ = (value, kind, key, loc, secondaryLoc, locs, index, mountInfo) => {
      if (isSSR || SIGKILL)
        return value;
      let data = getMetadata(key);
      if (!data)
        return value;
      let noisy = mountInfo?.n || false;
      let cache = mountInfo?.c || _null;
      let instancesIndex = data.i.length - 1;
      if (data.i.length === 1 && !data.i[0]) {
        data.i[0] = 1;
      }
      let isInComponent = canRunHooks(_null);
      if (isInComponent) {
        for (let dispatcherRef of dispatcherRefs) {
          if (!canRunHooks(dispatcherRef?.current)) {
            isInComponent = false;
            break;
          }
        }
      }
      if (kind & 512 /* Baseline */) {
        return captureBaseline(key, isInComponent, value, data, loc);
      } else if (isInComponent && kind & 2 /* Props */) {
        return captureProps(key, value, instancesIndex, loc, index, noisy, cache);
      } else if (isInComponent && kind & 4 /* Value */) {
        return captureValue(
          key,
          value,
          instancesIndex,
          loc,
          locs,
          index,
          noisy,
          cache
        );
      } else if (isInComponent && kind & 1 /* Deps */) {
        return captureDeps(
          key,
          value,
          instancesIndex,
          loc,
          locs,
          index,
          noisy,
          cache
        );
      } else if (kind & 16 /* JSX */) {
        return captureJSX(key, value, instancesIndex, loc, secondaryLoc);
      } else if (kind & 128 /* Function */) {
        return captureFunction(key, value, instancesIndex, loc, noisy);
      } else if (kind & 1024 /* Hooks */) {
        return captureHook(key, value, instancesIndex, loc);
      } else if (kind & 2048 /* Note */) {
        reportRender(
          // key: encode(filename).encoded(componentName)
          // e.g. "/some/file/path/index.jsx.App"
          key,
          2048 /* Note */,
          // CaptureKind
          // loc: encode(SourceLocation)
          // e.g. `this.setState(newVal)` -> encode([1, 2, 3, 4])
          loc,
          _null,
          // secondaryLoc
          _null,
          // locs
          0,
          // selfTime
          0,
          // totalTime
          1,
          // count
          _null,
          // self
          _null,
          // owner
          value,
          // message
          instancesIndex,
          // instancesIndex
          []
          // changes
        );
      }
      return value;
    };
    exports.useCapture = (value, key, loc, index, mountInfo) => {
      if (SIGKILL || !key || loc == _null || index == _null || mountInfo == _null) {
        return value;
      }
      return exports.$$(
        value,
        // value
        value && typeof value === "object" && "$$typeof" in value ? 16 /* JSX */ : 4 /* Value */,
        key,
        // key
        loc,
        // loc
        _null,
        // secondaryLoc
        _null,
        // locs
        index,
        // index
        mountInfo || _null
        // mountInfo
      );
    };
    exports.useCount = (message, key, loc, index, mountInfo) => {
      if (SIGKILL || !key || loc == _null || index == _null || message == _null || mountInfo == _null) {
        return message;
      }
      {
        console.count(message);
      }
      return exports.$$(
        message,
        // value
        2048 /* Note */,
        // CaptureKind
        key,
        // key
        loc,
        // loc
        _null,
        // secondaryLoc
        _null,
        // locs
        index,
        // index
        mountInfo || _null
        // mountInfo
      );
    };
    mergeChange = (prev, next) => {
      if (!prev && !next)
        return [];
      if (!prev?.length)
        return next;
      if (!next?.length)
        return prev;
      let prevHead = 0;
      let nextHead = 0;
      let prevTail = prev.length - 1;
      let nextTail = next.length - 1;
      while (prevHead <= prevTail && nextHead <= nextTail) {
        let prevHeadChange = prev[prevHead];
        let nextHeadChange = next[nextHead];
        let prevTailChange = prev[prevTail];
        let nextTailChange = next[nextTail];
        if (prevHeadChange.n === nextHeadChange.n) {
          prevHeadChange.c += nextHeadChange.c;
          prevHeadChange.u = nextHeadChange.u;
          prevHead++;
          nextHead++;
        } else if (prevTailChange.n === nextTailChange.n) {
          prevTailChange.c += nextTailChange.c;
          prevTailChange.u = nextTailChange.u;
          prevTail--;
          nextTail--;
        } else {
          break;
        }
      }
      let changeIndexLookup = new _Map();
      for (; prevHead <= prevTail; prevHead++) {
        _mapSet.call(changeIndexLookup, prev[prevHead].n, prevHead);
      }
      for (; nextHead <= nextTail; nextHead++) {
        let nextChange = next[nextHead];
        let head = _mapGet.call(changeIndexLookup, nextChange.n);
        if (head == _null) {
          let index = prev.push(nextChange);
          _mapSet.call(changeIndexLookup, nextChange.n, index - 1);
          continue;
        }
        let prevChange = prev[head];
        prevChange.c += nextChange.c;
        prevChange.u = nextChange.u;
      }
      return prev;
    };
    reportRender = (key, kind, loc, secondaryLoc, locs, selfTime, totalTime, count, self2, owner, message, instancesIndex, changes) => {
      let render = {
        k: kind,
        l: loc,
        l2: secondaryLoc,
        ls: locs,
        s: selfTime,
        t: totalTime,
        c: count,
        i: self2,
        o: owner,
        m: message,
        d: changes,
        x: eventIndex,
        u: commitIndex,
        n: instancesIndex
      };
      let batchKey = getRenderBatchIndexKey(
        key,
        kind,
        loc,
        owner,
        message,
        eventIndex,
        commitIndex
      );
      if (_mapHas.call(batchIndexLookup, batchKey)) {
        let prevIndex = _mapGet.call(batchIndexLookup, batchKey);
        let prevRender = batch[prevIndex].r;
        prevRender.c += count;
        prevRender.t += totalTime;
        prevRender.s += selfTime;
        prevRender.d = mergeChange(prevRender.d, changes);
        return;
      }
      _mapSet.call(batchIndexLookup, batchKey, batch.length);
      let renderItem = {
        k: key,
        r: render
      };
      batch.push(renderItem);
      onRender?.();
      if (batch.length >= MAX_QUEUE_SIZE) {
        debouncedFlush();
      }
    };
    flush = () => {
      let renderItems = batch.length;
      if (!url || !renderItems || !apiKey)
        return;
      {
        let DEV = _window[`${FLAG}DEV_`];
        let toolbarStore = DEV?.toolbarStore;
        if (toolbarStore?.data.state === "error") {
          return;
        }
      }
      try {
        let components = new _Array(metadataLookup.size);
        let i = 0;
        metadataLookup.forEach((value, key) => {
          components[i++] = {
            k: key,
            i: value.i,
            $: value.$,
            v: value.v
          };
          value.i = [value.i[value.i.length - 1] || 0];
        });
        let date = Date.now();
        let newEvents = [];
        for (let i2 = 0, len = events2.length; i2 < len; i2++) {
          let event = events2[i2];
          let loc = _null;
          let key = event.k;
          if (key) {
            let parts = key.split(".");
            loc = parts[2] || _null;
            if (loc)
              key = parts[0] + "." + parts[1];
          }
          newEvents.push({
            n: event.n,
            t: event.t,
            l: Number(loc),
            d: event.d,
            k: event.k,
            a: event.a
          });
        }
        let payload = {
          batch,
          events: newEvents,
          commits,
          components,
          session,
          buildId,
          apiKey,
          commitHash,
          version: VERSION,
          pv: PAYLOAD_VERSION,
          react: React4__namespace.version || UNKNOWN,
          geo: void 0,
          date
        };
        events2 = [];
        eventId = _null;
        eventIndex = -1;
        commits = [];
        commitIndex = -1;
        let _batch = false ? [] : [...batch];
        if (true) {
          let DEV = _window[`${FLAG}DEV_`];
          let toolbarStore = DEV?.toolbarStore;
          if (toolbarStore) {
            toolbarStore.setData({
              pending: true
            });
            toolbarStore.pushBatch(_batch, newEvents);
          }
        }
        pendingRequests++;
        transport(url, payload, pendingRequests, _proxySessionId).then(() => {
          pendingRequests--;
          if (true) {
            let DEV = _window[`${FLAG}DEV_`];
            let toolbarStore = DEV?.toolbarStore;
            if (toolbarStore) {
              toolbarStore.setData({
                pending: false
              });
              void compress(
                JSON.stringify(payload, (_key, value) => {
                  if (value != null && value !== false) {
                    return value;
                  }
                })
              ).then((compressed) => {
                let { bytes, items } = DEV.toolbarStore.data;
                if (["error", "dormant"].includes(toolbarStore.data.state)) {
                  return;
                }
                toolbarStore.setData({
                  bytes: compressed.byteLength + bytes,
                  items: renderItems + items,
                  state: "data"
                });
              });
            }
          }
        }).catch(() => {
          if (true) {
            let DEV = _window[`${FLAG}DEV_`];
            let toolbarStore = DEV?.toolbarStore;
            if (toolbarStore) {
              toolbarStore.setData({
                pending: false,
                error: "Failed to ingest events"
              });
            }
            batch = _batch.concat(batch);
          }
        });
      } catch (_err) {
      }
      _setTimeout(exports.reset, 0);
    };
    debouncedFlush = debounce(flush, 300);
    exports.reset = () => {
      if (SIGKILL)
        return;
      batch.length = 0;
      batchIndexLookup.clear();
    };
    exports.registerMetadata = (key, size, isComponent, _DEV) => {
      if (isSSR || SIGKILL)
        return;
      if (_mapHas.call(metadataLookup, key))
        return;
      _mapSet.call(metadataLookup, key, {
        i: [0],
        _i: 0,
        c: size,
        n: false,
        v: isComponent,
        _: _DEV
      });
    };
    getNavigationEntry = () => {
      let navigationEntry = _performance.getEntriesByType?.(
        "navigation"
      )[0];
      if (navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < _performance.now()) {
        return navigationEntry;
      }
      return _null;
    };
    getActivationStart = () => {
      return getNavigationEntry()?.activationStart || 0;
    };
    getNavigationType = () => {
      let navEntry = getNavigationEntry();
      if (navEntry) {
        if (_document.prerendering || (navEntry?.activationStart || 0) > 0) {
          return "prerender";
        } else if (_document.wasDiscarded) {
          return "restore";
        } else if (navEntry.type) {
          return navEntry.type;
        }
      }
      return "navigate";
    };
    observe = (type, callback, durationThreshold) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(type)) {
          let po = new PerformanceObserver((list) => {
            void Promise.resolve().then(() => {
              callback(list.getEntries());
            });
          });
          po.observe({
            type,
            durationThreshold,
            buffered: true
          });
          return po;
        }
      } catch (e) {
      }
      return _null;
    };
    getKeyFromEl = (el) => {
      let key = _null;
      let target = el;
      while (target) {
        if (target[FLAG]) {
          key = target[FLAG];
          if (!target[FLAG]) {
            target[FLAG] = key;
          }
          break;
        }
        target = target.parentNode;
      }
      return key;
    };
    initWebVitals = () => {
      eventIndex = events2.push({
        n: getNavigationType(),
        t: -1,
        d: Date.now(),
        k: _null,
        a: _null
      }) - 1;
      let fcp = observe(
        "paint",
        (entries) => {
          for (let i = 0, len = entries.length; i < len; i++) {
            let entry = entries[i];
            if (entry.name === "first-contentful-paint") {
              fcp.disconnect();
              let value = Math.max(entry.startTime - getActivationStart(), 0);
              events2.push({
                n: "FCP",
                t: ~~value,
                d: Date.now(),
                k: _null,
                a: _null
              });
            }
          }
        },
        _null
      );
      let lcp = observe(
        "largest-contentful-paint",
        (entries) => {
          for (let i = 0, len = entries.length; i < len; i++) {
            let entry = entries[i];
            lcp.disconnect();
            let value = Math.max(entry.startTime - getActivationStart(), 0);
            events2.push({
              n: "LCP",
              t: ~~value,
              d: Date.now(),
              k: _null,
              a: _null
            });
          }
        },
        _null
      );
      let sessionValue = 0;
      let sessionEntries = [];
      let maxValue = 0;
      observe(
        "layout-shift",
        (entries) => {
          let diff = [];
          for (let i = 0, len = entries.length; i < len; i++) {
            let entry = entries[i];
            let firstSessionEntry = sessionEntries[0];
            let lastSessionEntry = sessionEntries[sessionEntries.length - 1];
            if (entry.hadRecentInput)
              continue;
            let sources = entry.sources;
            for (let j = 0, len2 = sources.length; j < len2; j++) {
              let attribution = sources[j];
              let { currentRect, previousRect } = attribution;
              diff.push({
                h: currentRect.height - previousRect.height,
                w: currentRect.width - previousRect.width,
                l: currentRect.left - previousRect.left,
                t: currentRect.top - previousRect.top,
                k: getKeyFromEl(entry.target)
              });
            }
            if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
              sessionValue += entry.value;
              sessionEntries.push(entry);
            } else {
              sessionValue = entry.value;
              sessionEntries = [entry];
            }
          }
          if (sessionValue > maxValue) {
            maxValue = sessionValue;
            events2.push({
              n: "CLS",
              t: sessionValue,
              d: Date.now(),
              k: _null,
              a: diff
            });
          }
        },
        _null
      );
      let inp = observe(
        "event",
        (entries) => {
          let maxEntry = _null;
          for (let i = 0, len = entries.length; i < len; i++) {
            let entry = entries[i];
            if (!maxEntry || entry.duration >= maxEntry.duration) {
              maxEntry = entry;
            }
          }
          if (!maxEntry)
            return;
          let id = maxEntry.interactionId;
          if (eventId !== id) {
            let key = getKeyFromEl(maxEntry.target);
            eventId = id;
            eventIndex = events2.push({
              n: maxEntry.name,
              t: maxEntry.duration,
              d: Date.now(),
              k: key,
              a: _null
            }) - 1;
          }
        },
        16 
      );
      if (inp && "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype) {
        inp.observe({ type: "first-input", buffered: true });
      }
    };
    exports.init = (options) => {
      if (isSSR || SIGKILL)
        return;
      _window[FLAG] = { flush };
      url = options?.url || url;
      buildId ||= options?.buildId;
      commitHash ||= options?.commitHash;
      apiKey = "dev";
      _proxySessionId = options?.sessionId;
      if (inited)
        return;
      inited = true;
      {
        try {
          void fetch(`${url}/reset`, {
            mode: _proxySessionId ? void 0 : "no-cors",
            method: _proxySessionId ? "POST" : "GET",
            headers: {
              "X-Session-Id": _proxySessionId || ""
            }
          }).then(() => {
          }).catch(() => {
          });
        } catch (_err) {
        }
        console.log(`[Million Lint] Initialized with ${url}`);
      }
      onCommitFiberRoot = (root) => {
        {
          let containerInfo = root.containerInfo;
          if (containerInfo && typeof containerInfo === "object" && containerInfo[`${FLAG}DEV_`]) {
            return;
          }
        }
        patchRenderer();
        let dispatchKeys = new _Set();
        for (let updaterFiber of root.memoizedUpdaters) {
          if (typeof updaterFiber?.type === "function") {
            let key = updaterFiber.type[FLAG];
            if (key) {
              let alternate = updaterFiber.alternate;
              let prevState = alternate?.memoizedState;
              let nextState = updaterFiber?.memoizedState;
              while (nextState) {
                let dispatch = nextState.queue?.dispatch || nextState.queue?.getSnapshot;
                if (typeof dispatch === "function") {
                  let dispatchKey = dispatch[FLAG];
                  if (dispatchKey && getChange(
                    prevState?.memoizedState,
                    nextState?.memoizedState,
                    true
                  )) {
                    _setAdd.call(dispatchKeys, dispatchKey);
                  }
                }
                nextState = nextState.next;
                prevState = prevState?.next;
              }
            }
          }
        }
        if (commits[commitIndex]?.u.length || dispatchKeys.size) {
          const updaters = new Array(dispatchKeys.size);
          let index = 0;
          dispatchKeys.forEach((key) => {
            updaters[index++] = { k: key };
          });
          commits.push({ u: updaters });
          commitIndex++;
        }
      };
      if (_document.prerendering) {
        _addEventListener?.("prerenderingchange", initWebVitals, true);
      } else {
        initWebVitals();
      }
      let lazyFlush = () => onIdle(flush);
      onHidden(lazyFlush);
      let debouncedLazyFlush = debounce(lazyFlush, FLUSH_TIMEOUT);
      let checkExpiry = debounce(() => {
        session = getSession();
      }, SESSION_EXPIRE_TIMEOUT);
      onRender = () => {
        debouncedLazyFlush();
        checkExpiry();
        {
          let DEV = _window[`${FLAG}DEV_`];
          let toolbarStore = DEV?.toolbarStore;
          if (!toolbarStore)
            return;
          if (toolbarStore.data.state === "hidden") {
            toolbarStore.setData({
              state: "connecting"
            });
          }
          DEV.inited = true;
          DEV.url = url;
          DEV.buildId = buildId;
          DEV.apiKey = apiKey;
          DEV.commitHash = commitHash;
          DEV.proxySessionId = _proxySessionId;
        }
      };
    };
    {
      if (!isSSR) {
        let DEV = {
          batch,
          flush,
          metadataLookup,
          session,
          inited,
          buildId,
          apiKey,
          url,
          FLAG
        };
        _window[`${FLAG}DEV_`] = DEV;
        if (!localStorage.getItem("DISABLE_MILLION_TOOLBAR") && // @ts-expect-error jest is a global in test
        typeof jest === "undefined") {
          try {
            void Promise.resolve().then(() => (init_toolbar(), toolbar_exports));
          } catch (_) {
          }
        }
      }
    }
  }
});

// runtime/src/index.ts
var init_src = __esm({
  "runtime/src/index.ts"() {
    init_core();
  }
});
init_src();
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
