"use strict";
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/tsup@8.0.2_postcss@8.4.38_typescript@5.4.5/node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "../../node_modules/.pnpm/tsup@8.0.2_postcss@8.4.38_typescript@5.4.5/node_modules/tsup/assets/cjs_shims.js"() {
    "use strict";
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/debug.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/constants.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/re.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var t11 = exports2.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t11[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t11.NUMERICIDENTIFIER]})\\.(${src[t11.NUMERICIDENTIFIER]})\\.(${src[t11.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t11.NUMERICIDENTIFIERLOOSE]})\\.(${src[t11.NUMERICIDENTIFIERLOOSE]})\\.(${src[t11.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t11.NUMERICIDENTIFIER]}|${src[t11.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t11.NUMERICIDENTIFIERLOOSE]}|${src[t11.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t11.PRERELEASEIDENTIFIER]}(?:\\.${src[t11.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t11.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t11.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t11.BUILDIDENTIFIER]}(?:\\.${src[t11.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t11.MAINVERSION]}${src[t11.PRERELEASE]}?${src[t11.BUILD]}?`);
    createToken("FULL", `^${src[t11.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t11.MAINVERSIONLOOSE]}${src[t11.PRERELEASELOOSE]}?${src[t11.BUILD]}?`);
    createToken("LOOSE", `^${src[t11.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t11.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t11.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t11.XRANGEIDENTIFIER]})(?:\\.(${src[t11.XRANGEIDENTIFIER]})(?:\\.(${src[t11.XRANGEIDENTIFIER]})(?:${src[t11.PRERELEASE]})?${src[t11.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t11.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t11.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t11.XRANGEIDENTIFIERLOOSE]})(?:${src[t11.PRERELEASELOOSE]})?${src[t11.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t11.GTLT]}\\s*${src[t11.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t11.GTLT]}\\s*${src[t11.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t11.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t11.COERCEPLAIN] + `(?:${src[t11.PRERELEASE]})?(?:${src[t11.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t11.COERCE], true);
    createToken("COERCERTLFULL", src[t11.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t11.LONETILDE]}\\s+`, true);
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t11.LONETILDE]}${src[t11.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t11.LONETILDE]}${src[t11.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t11.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t11.LONECARET]}${src[t11.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t11.LONECARET]}${src[t11.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t11.GTLT]}\\s*(${src[t11.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t11.GTLT]}\\s*(${src[t11.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t11.GTLT]}\\s*(${src[t11.LOOSEPLAIN]}|${src[t11.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t11.XRANGEPLAIN]})\\s+-\\s+(${src[t11.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t11.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t11.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/parse-options.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/internal/identifiers.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/classes/semver.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t: t11 } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t11.LOOSE] : re[t11.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier7, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier7, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier7, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier7, identifierBase);
            this.inc("pre", identifier7, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier7, identifierBase);
            }
            this.inc("pre", identifier7, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier7 && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier7 === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier7) {
              let prerelease = [identifier7, base];
              if (identifierBase === false) {
                prerelease = [identifier7];
              }
              if (compareIdentifiers(this.prerelease[0], identifier7) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/functions/compare.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare;
  }
});

// ../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "../../node_modules/.pnpm/semver@7.6.2/node_modules/semver/functions/gte.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module2.exports = gte;
  }
});

// package.json
var require_package = __commonJS({
  "package.json"(exports2, module2) {
    module2.exports = {
      name: "@million/lint",
      version: "1.0.0-rc.84",
      description: "Make your React app fast",
      keywords: [],
      license: "UNLICENSED",
      type: "commonjs",
      exports: {
        "./package.json": "./package.json",
        ".": {
          import: {
            types: "./dist/compiler/index.d.mts",
            default: "./dist/compiler/index.mjs"
          },
          require: {
            types: "./dist/compiler/index.d.ts",
            default: "./dist/compiler/index.js"
          }
        },
        "./compiler": {
          import: {
            types: "./dist/compiler/index.d.mts",
            default: "./dist/compiler/index.mjs"
          },
          require: {
            types: "./dist/compiler/index.d.ts",
            default: "./dist/compiler/index.js"
          }
        },
        "./loader": {
          import: {
            types: "./dist/compiler/loader.d.mts",
            default: "./dist/compiler/loader.mjs"
          },
          require: {
            types: "./dist/compiler/loader.d.ts",
            default: "./dist/compiler/loader.js"
          }
        },
        "./runtime": {
          production: {
            import: {
              types: "./dist/runtime/index.d.mts",
              "react-server": "./dist/runtime/rsc-shim.mjs",
              default: "./dist/runtime/index.mjs"
            },
            require: {
              types: "./dist/runtime/index.d.ts",
              "react-server": "./dist/runtime/rsc-shim.js",
              default: "./dist/runtime/index.js"
            }
          },
          development: {
            import: {
              types: "./dist/runtime-dev/index.d.mts",
              "react-server": "./dist/runtime-dev/rsc-shim.mjs",
              default: "./dist/runtime-dev/index.mjs"
            },
            require: {
              types: "./dist/runtime-dev/index.d.ts",
              "react-server": "./dist/runtime-dev/rsc-shim.js",
              default: "./dist/runtime-dev/index.js"
            }
          },
          default: {
            import: {
              types: "./dist/runtime-dev/index.d.mts",
              "react-server": "./dist/runtime-dev/rsc-shim.mjs",
              default: "./dist/runtime-dev/index.mjs"
            },
            require: {
              types: "./dist/runtime-dev/index.d.ts",
              "react-server": "./dist/runtime-dev/rsc-shim.js",
              default: "./dist/runtime-dev/index.js"
            }
          }
        },
        "./runtime-dev": {
          import: {
            types: "./dist/runtime-dev/index.d.mts",
            "react-server": "./dist/runtime-dev/rsc-shim.js",
            default: "./dist/runtime-dev/index.mjs"
          },
          require: {
            types: "./dist/runtime-dev/index.d.ts",
            "react-server": "./dist/runtime-dev/rsc-shim.js",
            default: "./dist/runtime-dev/index.js"
          }
        },
        "./devtools": {
          import: {
            types: "./dist/runtime/devtools.d.mts",
            "react-server": "./dist/runtime/rsc-shim.mjs",
            default: "./dist/runtime/devtools.mjs"
          },
          require: {
            types: "./dist/runtime/devtools.d.ts",
            "react-server": "./dist/runtime/rsc-shim.js",
            default: "./dist/runtime/devtools.js"
          }
        },
        "./dist/*": "./dist/*.js",
        "./dist/*.js": "./dist/*.js",
        "./dist/*.mjs": "./dist/*.mjs"
      },
      main: "dist/compiler/index.js",
      module: "dist/compiler/index.mjs",
      types: "dist/compiler/index.d.ts",
      bin: "./cli.js",
      files: [
        "dist",
        "package.json",
        "compiler.d.ts",
        "runtime.d.ts",
        "cli.js"
      ],
      scripts: {
        build: "tsup",
        bump: "tsup && npx bumpp && tsup",
        dev: "tsup --watch",
        lint: "eslint '**/*.{ts,tsx}'",
        pack: "node ./local-update.cjs && npm run build && rm -rf ./dist/wizard && npm pack",
        "pack:faire": "pnpm run pack",
        test: "vitest"
      },
      dependencies: {
        "@axiomhq/js": "1.0.0-rc.3",
        "@babel/core": "7.24.6",
        "@babel/types": "7.24.6",
        "@hono/node-server": "^1.11.1",
        "@million/install": "latest",
        "@rollup/pluginutils": "^5.1.0",
        "@rrweb/types": "2.0.0-alpha.16",
        "babel-plugin-syntax-hermes-parser": "^0.21.1",
        "ci-info": "^4.0.0",
        esbuild: "^0.20.1",
        hono: "^4.3.2",
        "isomorphic-fetch": "^3.0.0",
        nanoid: "^5.0.7",
        pako: "^2.1.0",
        pathe: "^1.1.2",
        piscina: "^4.4.0",
        "pretty-ms": "8.0.0",
        rrweb: "2.0.0-alpha.4",
        "rrweb-player": "1.0.0-alpha.4",
        semver: "^7.6.2",
        "socket.io-client": "^4.7.5",
        tmp: "^0.2.3",
        unplugin: "^1.6.0",
        "update-notifier-cjs": "^5.1.6"
      },
      devDependencies: {
        "@million/shared": "workspace:^",
        "@types/babel__core": "^7.20.5",
        "@types/isomorphic-fetch": "^0.0.39",
        "@types/node": "^20.11.13",
        "@types/react": "^18.2.48",
        "@types/react-dom": "^18.2.18",
        "@types/react-reconciler": "^0.28.8",
        "@types/tmp": "^0.2.6",
        "@types/web": "^0.0.136",
        "async-mutex": "^0.4.1",
        bumpp: "^9.2.0",
        kleur: "^4.1.5",
        lodash: "^4.17.21",
        next: "14.1.0",
        "react-lag-radar": "^1.0.0",
        "react-reconciler": "^0.29.2",
        terser: "^5.29.2",
        tslib: "^2.6.2",
        tsup: "^8.0.2",
        typescript: "^5.4.2",
        "use-sync-external-store": "^1.2.2",
        vite: "^5.2.11",
        vitest: "^1.5.2"
      },
      publishConfig: {
        access: "public"
      }
    };
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js
var require_now = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module2.exports = now;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module2.exports = trimmedEndIndex;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module2.exports = baseTrim;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = toNumber;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module2.exports = debounce2;
  }
});

// ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js"(exports2, module2) {
    "use strict";
    init_cjs_shims();
    var debounce2 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module2.exports = throttle2;
  }
});

// compiler/loader.ts
var loader_exports = {};
__export(loader_exports, {
  default: () => MillionLintLoader
});
module.exports = __toCommonJS(loader_exports);
init_cjs_shims();

// compiler/src/index.ts
init_cjs_shims();
var import_node_path3 = __toESM(require("path"));
var import_pluginutils = require("@rollup/pluginutils");
var import_unplugin = require("unplugin");

// compiler/src/axiom.ts
init_cjs_shims();
var import_js = require("@axiomhq/js");

// compiler/src/core/utils/machine-id.ts
init_cjs_shims();
var import_node_os = __toESM(require("os"));
var import_node_path = __toESM(require("path"));
var import_node_fs = __toESM(require("fs"));
var import_node_crypto = require("crypto");
var getConfigDir = (name) => {
  const homedir = import_node_os.default.homedir();
  const macos = () => import_node_path.default.join(homedir, "Library", "Preferences", name);
  const win = () => {
    const { APPDATA = import_node_path.default.join(homedir, "AppData", "Roaming") } = process.env;
    return import_node_path.default.join(APPDATA, name, "Config");
  };
  const linux = () => {
    const { XDG_CONFIG_HOME = import_node_path.default.join(homedir, ".config") } = process.env;
    return import_node_path.default.join(XDG_CONFIG_HOME, name);
  };
  switch (process.platform) {
    case "darwin":
      return macos();
    case "win32":
      return win();
    default:
      return linux();
  }
};
var configDir = getConfigDir("million-lint");
var machineId = (0, import_node_crypto.randomUUID)();
var getMachineIdAsync = async () => {
  if (!machineId) {
    try {
      const stat = import_node_fs.default.statSync(import_node_path.default.join(configDir, "machineId.txt"));
      if (stat.isFile()) {
        machineId = import_node_fs.default.readFileSync(import_node_path.default.join(configDir, "machineId.txt"), "utf8") || machineId;
      }
    } catch (err) {
      if (err instanceof Error) {
        void saveLog("error", {
          origin: "Failed to read machine-id",
          message: err.message,
          stack: err.stack,
          configDir
        });
      }
    }
  }
  return machineId;
};
var getMachineId = () => {
  return machineId;
};

// compiler/src/axiom.ts
var axiom = new import_js.Axiom({
  // compiler token on axiom
  token: "xaat-877a8a63-1f7a-405a-8670-c88f5dd2b102"
});
var trunc = (str, length) => {
  if (str.length <= length)
    return str;
  return `${str.slice(0, length)}...`;
};
var saveLog = async (level, message) => {
  const machineId2 = await getMachineIdAsync();
  for (const key in message) {
    if (typeof message[key] === "string") {
      message[key] = trunc(message[key], 2 ** 14);
    }
  }
  try {
    axiom.ingest("compiler", {
      level,
      machineId: machineId2,
      message: JSON.stringify(
        // eslint-disable-next-line prefer-object-spread
        Object.assign({}, message, {
          NODE_ENV: process.env.NODE_ENV,
          VERSION: "1.0.0-rc.84"
        })
      )
    });
  } catch (_err) {
  }
};

// compiler/src/core/bridge.ts
init_cjs_shims();
var import_pathe = require("pathe");
var import_gte = __toESM(require_gte());
var import_update_notifier_cjs = __toESM(require("update-notifier-cjs"));
var import_package = __toESM(require_package());

// compiler/src/core/utils/log.ts
init_cjs_shims();

// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
init_cjs_shims();
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);

// compiler/src/core/utils/log.ts
var isDisplayed = false;
var createSessionBlock = (sessionId) => {
  const title = "Join session ";
  const width = sessionId.length;
  return `

 ${magenta("\u25C7")}  ${title}${dim("\u2500".repeat(width - title.length))}${dim("\u2500\u2500\u256E")}
 ${dim("\u2502")}  ${" ".repeat(width)}  ${dim("\u2502")}
 ${dim("\u2502")}  ${cyan(sessionId)}  ${dim("\u2502")}
 ${dim("\u2502")}  ${" ".repeat(width)}  ${dim("\u2502")}
 ${dim("\u2514\u2500\u2500")}${dim("\u2500".repeat(width))}${dim("\u2500\u2500\u256F")}
`;
};
var displayIntro = (port, sessionId) => {
  if (isDisplayed)
    return;
  const initialTime = performance.now();
  isDisplayed = true;
  console.log(
    `
 ${bold(magenta(`\u26A1 Million Lint v${"1.0.0-rc.84"}`))}
 - Ingest server: ${port ? cyan(`http://localhost:${port}`) : "failed to start"}${sessionId ? createSessionBlock(sessionId) : ""}
`
  );
  console.log(
    ` ${green("\u2713")} Ready in ${(performance.now() - initialTime).toFixed(2)}ms`
  );
};
var displayProductionIntro = (buildId, commitHash, apiKey) => {
  if (isDisplayed)
    return;
  isDisplayed = true;
  if (!buildId || !commitHash || !apiKey || buildId === "dev" || commitHash === "dev") {
    console.error(
      ` ${red("\u2716")} ${bold(
        "Please provide a build ID, commit hash, and API key for production"
      )}`
    );
    process.exit(1);
  }
  console.log(
    `
 ${bold(magenta(`\u26A1 Million Lint (Production) v${"1.0.0-rc.84"}`))}
     - Build ID: ${cyan(buildId)}
     - Commit Hash: ${cyan(commitHash)}
     - API Key: ${cyan(apiKey)}
`
  );
};
var moduleCount = 0;
var cumulativeTime = 0;
var numberOfTimes = 0;
var prettyMs = (time) => {
  return `${time.toFixed(0)}ms`;
};
void (async () => {
  prettyMs = (await import("pretty-ms")).default;
})();
var logStart = (filename) => {
  console.log(` ${gray("\u25CB")} ${filename} \u2026`);
  return performance.now();
};
var logEnd = (filename, initialTime, stats) => {
  if (initialTime === null)
    return 0;
  const diff = performance.now() - initialTime;
  let color = white;
  const average = cumulativeTime / numberOfTimes;
  if (average !== 0) {
    if (average * 3 < diff) {
      color = magenta;
    } else if (average * 2 < diff) {
      color = red;
    } else if (average * 1.5 < diff) {
      color = yellow;
    }
  }
  cumulativeTime += diff;
  numberOfTimes++;
  moduleCount++;
  console.log(` ${green("\u2714")} ${filename} in ${color(prettyMs(diff))}`);
  if ((stats == null ? void 0 : stats.components) && (stats == null ? void 0 : stats.captures)) {
    console.log(gray(`  - ${stats.components} components`));
    console.log(gray(`  - ${stats.captures} captures`));
  }
  return diff;
};
var logFinish = (totalTime, stats) => {
  if (totalTime === 0)
    return;
  console.log(
    ` ${magenta("\u2726")} Completed in ${prettyMs(totalTime)} (${moduleCount} modules)`
  );
  void saveLog("log", {
    origin: "Completed compile",
    moduleCount,
    totalTime,
    ...stats
  });
};
var logError = (message) => {
  console.error(` ${yellow("\u26A0")} ${message}`);
};

// compiler/src/core/bridge.ts
(0, import_update_notifier_cjs.default)({
  pkg: import_package.default,
  updateCheckInterval: 1e3 * 60 * 5
}).notify();
var DEFAULT_PORT = 52921;
var minVscodeCompatible = "0.1.12";
var isSameCwd = (thisCwd, otherCwd = "") => {
  thisCwd = (0, import_pathe.normalize)(thisCwd);
  otherCwd = (0, import_pathe.normalize)(otherCwd);
  return thisCwd === otherCwd || thisCwd.includes(otherCwd) || otherCwd.includes(thisCwd);
};
async function* getPossibleConnections(port = DEFAULT_PORT) {
  for (const host of ["localhost", "0.0.0.0"]) {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(
        fetch(`http://${host}:${port + i}/this`).then(async (response) => {
          if (!response.ok)
            return void 0;
          const windows2 = await response.json();
          return windows2;
        }).catch(() => void 0)
      );
    }
    const windows = await Promise.all(promises);
    for (const window of windows.flat()) {
      if (!window)
        continue;
      yield {
        id: window.id,
        host,
        port: window.port,
        vscode_cwd: window.cwd,
        vscode_version: window.vscode,
        cwd: process.cwd(),
        match: isSameCwd(process.cwd(), window.cwd),
        normalized: {
          v: (0, import_pathe.normalize)(window.cwd),
          p: (0, import_pathe.normalize)(process.cwd())
        }
      };
    }
  }
}
var hasAlertedOutdated = false;
async function* getSessions(port = DEFAULT_PORT) {
  const sessions = /* @__PURE__ */ new Set();
  let versionMismatchFlag = false;
  for await (const connection of getPossibleConnections(port)) {
    if (!connection)
      return;
    if (connection.match && !sessions.has(connection.id)) {
      if (connection.vscode_version && !(0, import_gte.default)(connection.vscode_version, minVscodeCompatible)) {
        versionMismatchFlag = true;
      }
      sessions.add(connection.id);
      yield {
        host: connection.host,
        port: connection.port
      };
    }
  }
  if (versionMismatchFlag && !hasAlertedOutdated) {
    hasAlertedOutdated = true;
    logError(
      `VSCode Extension is out of date. Run \`npx @million/lint\` to update.`
    );
  }
}
var reset2 = async () => {
  if (store.sessionId) {
    await fetch(`${store.proxyUrl}/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Session-Id": store.sessionId
      }
    }).catch((err) => {
      void saveLog("error", {
        origin: "Failed to reset data",
        message: err.message,
        stack: err.stack
      });
    });
  } else {
    const ports = [];
    try {
      for await (const { port, host } of getSessions()) {
        void fetch(`http://${host}:${port}/reset`).catch(() => null);
        ports.push(port);
      }
    } catch (err) {
      if (err instanceof Error) {
        void saveLog("error", {
          origin: "Failed to reset data",
          message: err.message,
          stack: err.stack,
          ports
        });
      }
    }
  }
};
var report = async (payload) => {
  payload.cwd = process.cwd();
  let version = "unknown";
  try {
    version = require_package().version;
  } catch (e) {
  }
  let react = "unknown";
  try {
    react = require("react/package.json").version;
  } catch (e) {
  }
  payload.compiler.metadata = {
    ci: "dev",
    version,
    react,
    commitHash: "dev",
    buildId: "dev",
    url: "dev"
  };
  if (store.sessionId) {
    await fetch(`${store.proxyUrl}/compiler`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Session-Id": store.sessionId
      },
      body: JSON.stringify(payload.compiler)
    }).catch((err) => {
      void saveLog("error", {
        origin: "Failed to send compiler data to ingest server (proxy)",
        message: err.message,
        stack: err.stack
      });
    });
    return;
  }
  const ports = [];
  try {
    for await (const { port, host } of getSessions()) {
      void fetch(`http://${host}:${port}/ingest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).catch((err) => {
        void saveLog("error", {
          origin: "Failed to send data to ingest server",
          message: err.message,
          stack: err.stack,
          ports
        });
      });
      ports.push(port);
    }
  } catch (err) {
    logError(
      "Failed to send data to ingest server, please restart your dev server."
    );
    if (err instanceof Error) {
      void saveLog("error", {
        origin: "Failed to send data to ingest server",
        message: err.message,
        stack: err.stack,
        ports
      });
    }
  }
};

// compiler/src/core/compile.ts
init_cjs_shims();
var import_core = require("@babel/core");
var import_babel_plugin_syntax_hermes_parser = __toESM(require("babel-plugin-syntax-hermes-parser"));

// compiler/src/core/plugin.ts
init_cjs_shims();
var t10 = __toESM(require("@babel/types"));

// compiler/src/core/capture/metadata.ts
init_cjs_shims();
var t7 = __toESM(require("@babel/types"));

// compiler/src/core/constants.ts
init_cjs_shims();
var ANYA_IGNORE = "million ignore";
var RUNTIME_SOURCE = `${"@million/lint/runtime"}${process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test" || typeof jest !== "undefined" ? "" : "-dev"}`;
var ANYA_CAPTURE = {
  kind: "named",
  name: "$$",
  source: RUNTIME_SOURCE
};
var ANYA_REGISTER_METADATA = {
  kind: "named",
  name: "registerMetadata",
  source: RUNTIME_SOURCE
};
var BANNED_COMPONENTS = [
  "Route",
  "Routes",
  "Router",
  "Switch",
  "SwitchBase",
  "Redirect",
  "Navigate",
  "Outlet",
  "Suspense",
  "ScrollRestoration",
  "Fragment",
  "Link",
  "Layout",
  "Select"
];

// compiler/src/core/utils/get-descriptive-name.ts
init_cjs_shims();
var t2 = __toESM(require("@babel/types"));

// compiler/src/core/utils/checks.ts
init_cjs_shims();
var t = __toESM(require("@babel/types"));
var getImportSpecifierName = (specifier) => {
  if (t.isIdentifier(specifier.imported)) {
    return specifier.imported.name;
  }
  return specifier.imported.value;
};
var isComponent = (node) => {
  switch (node.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
    case "FunctionDeclaration":
      return true;
    default:
      return false;
  }
};
var isCapitalized = (str) => {
  return Boolean(str.length) && str[0] >= "A" && str[0] <= "Z";
};
var isHookName = (ctx, id) => {
  return Boolean(ctx.filters.hook) && ctx.filters.hook.test(id.name);
};
var hasJSX = (path4) => {
  let jsx = false;
  path4.traverse({
    JSXElement(childPath) {
      jsx = true;
      childPath.stop();
    },
    JSXFragment(childPath) {
      jsx = true;
      childPath.stop();
    }
  });
  return jsx;
};
var getComponentType = (ctx, path4) => {
  if (!path4)
    return void 0;
  if (path4.node.type === "ArrowFunctionExpression") {
    return "function";
  }
  if (!path4.node.id) {
    return void 0;
  }
  return getTypeFromComponentName(ctx, path4, path4.node.id);
};
var getTypeFromComponentName = (ctx, path4, id) => {
  if (ctx.filters.component.test(id.name)) {
    return hasJSX(path4) ? "component" : "function";
  }
  if (isHookName(ctx, id)) {
    return "hook";
  }
  if (hasJSX(path4)) {
    return "function";
  }
  return void 0;
};
var isPathValid = (path4, key) => {
  return key(path4.node);
};
var isNestedExpression = (node) => {
  switch (node.type) {
    case "ParenthesizedExpression":
    case "TypeCastExpression":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSNonNullExpression":
    case "TSTypeAssertion":
    case "TSInstantiationExpression":
      return true;
    default:
      return false;
  }
};

// compiler/src/core/utils/get-descriptive-name.ts
var getDescriptiveNamePath = (path4) => {
  let current = path4;
  while (current) {
    switch (current.node.type) {
      case "FunctionDeclaration":
      case "FunctionExpression": {
        const id = current.get("id");
        if (isPathValid(id, t2.isIdentifier))
          return id;
        break;
      }
      case "VariableDeclarator": {
        const id = current.get("id");
        return isPathValid(id, t2.isIdentifier) ? id : void 0;
      }
      case "ClassPrivateMethod":
      case "ClassMethod":
      case "ObjectMethod": {
        const key = current.get("key");
        if (isPathValid(key, t2.isIdentifier)) {
          return key;
        }
        if (isPathValid(key, t2.isPrivateName)) {
          return key.get("id");
        }
        return void 0;
      }
      default:
        break;
    }
    current = current.parentPath;
  }
  return void 0;
};
var getDescriptiveName = (path4, defaultName) => {
  let current = path4;
  while (current) {
    switch (current.node.type) {
      case "FunctionDeclaration":
      case "FunctionExpression": {
        if (t2.isIdentifier(current.node.id)) {
          return current.node.id.name;
        }
        break;
      }
      case "VariableDeclarator":
        return t2.isIdentifier(current.node.id) ? current.node.id.name : defaultName;
      case "ClassPrivateMethod":
      case "ClassMethod":
      case "ObjectMethod": {
        switch (current.node.key.type) {
          case "Identifier":
            return current.node.key.name;
          case "PrivateName":
            return current.node.key.id.name;
          default:
            return defaultName;
        }
      }
      default:
        break;
    }
    current = current.parentPath;
  }
  return defaultName;
};

// compiler/src/core/utils/get-import-identifier.ts
init_cjs_shims();
var t4 = __toESM(require("@babel/types"));

// compiler/src/core/utils/generate-unique-name.ts
init_cjs_shims();
var t3 = __toESM(require("@babel/types"));
var generateUniqueName = (path4, name) => {
  let uid;
  let i = 1;
  do {
    uid = `${name}_${i}`;
    i++;
  } while (path4.scope.hasLabel(uid) || path4.scope.hasBinding(uid) || path4.scope.hasGlobal(uid) || path4.scope.hasReference(uid));
  const program = path4.scope.getProgramParent();
  program.references[uid] = true;
  program.uids[uid] = true;
  return t3.identifier(uid);
};

// compiler/src/core/utils/get-import-identifier.ts
var getImportIdentifier = (ctx, path4, registration) => {
  const name = registration.kind === "named" ? registration.name : "default";
  const target = `${registration.source}[${name}]`;
  const current = ctx.imports.get(target);
  if (current) {
    return current;
  }
  const programParent = path4.scope.getProgramParent();
  const uid = generateUniqueName(programParent.path, name);
  programParent.registerDeclaration(
    programParent.path.unshiftContainer(
      "body",
      t4.importDeclaration(
        [
          registration.kind === "named" ? t4.importSpecifier(uid, t4.identifier(registration.name)) : t4.importDefaultSpecifier(uid)
        ],
        t4.stringLiteral(registration.source)
      )
    )[0]
  );
  ctx.imports.set(target, uid);
  return uid;
};

// compiler/src/core/utils/unwrap.ts
init_cjs_shims();
var t5 = __toESM(require("@babel/types"));
var unwrapNode = (node, key) => {
  if (key(node)) {
    return node;
  }
  if (isNestedExpression(node)) {
    return unwrapNode(node.expression, key);
  }
  return void 0;
};
var unwrapPath = (path4, key) => {
  if (isPathValid(path4, key)) {
    return path4;
  }
  if (isPathValid(path4, isNestedExpression)) {
    return unwrapPath(path4.get("expression"), key);
  }
  return void 0;
};
var unwrapBody = (path4) => {
  if (path4.isFunctionDeclaration() || path4.isFunctionExpression() || path4.isArrowFunctionExpression() || path4.isProgram()) {
    if (Array.isArray(path4.node.body)) {
      return path4.node.body;
    }
    if (t5.isBlockStatement(path4.node.body)) {
      return path4.node.body.body;
    }
  }
  return null;
};
var unwrapLoc = (loc) => {
  return [
    (loc == null ? void 0 : loc.start.line) ?? 0,
    (loc == null ? void 0 : loc.start.column) ?? 0,
    (loc == null ? void 0 : loc.end.line) ?? 0,
    (loc == null ? void 0 : loc.end.column) ?? 0
  ];
};

// compiler/src/core/utils/wrap-hmr.ts
init_cjs_shims();
var t6 = __toESM(require("@babel/types"));
var importMetaHot = t6.memberExpression(
  t6.memberExpression(t6.identifier("import"), t6.identifier("meta")),
  t6.identifier("hot")
);
var importMetaWebpackHot = t6.memberExpression(
  t6.memberExpression(t6.identifier("import"), t6.identifier("meta")),
  t6.identifier("webpackHot")
);
var moduleHotAccept = t6.memberExpression(
  t6.identifier("module"),
  t6.identifier("hot")
);
var isCJS = t6.binaryExpression(
  "===",
  t6.unaryExpression("typeof", t6.identifier("module")),
  t6.stringLiteral("undefined")
);
var wrapHMR = (ctx, path4, expression) => {
  var _a, _b;
  const reset3 = getImportIdentifier(ctx, path4, {
    kind: "named",
    name: "reset",
    source: RUNTIME_SOURCE
  });
  const init3 = getImportIdentifier(ctx, path4, {
    kind: "named",
    name: "init",
    source: RUNTIME_SOURCE
  });
  const importHot = ctx.options.framework === "webpack" ? importMetaWebpackHot : importMetaHot;
  const statements = [];
  statements.push(t6.expressionStatement(t6.callExpression(reset3, [])));
  const ingest = ctx.options.ingest;
  const url = store.proxyUrl ? `${store.proxyUrl}/ingest` : ((_a = ctx.options.ingest) == null ? void 0 : _a.runtimeURL) || // Use runtime url if available
  `http://${(ingest == null ? void 0 : ingest.host) || "localhost"}:${store.port}/ingest`;
  statements.push(
    t6.expressionStatement(
      t6.callExpression(init3, [
        t6.objectExpression([
          t6.objectProperty(t6.identifier("url"), t6.stringLiteral(url)),
          t6.objectProperty(
            t6.identifier("buildId"),
            t6.stringLiteral(getMachineId())
          ),
          t6.objectProperty(
            t6.identifier("apiKey"),
            t6.stringLiteral(
              process.env.NODE_ENV === "production" ? ((_b = ctx.options.production) == null ? void 0 : _b.apiKey) || "" : "dev"
            )
          ),
          t6.objectProperty(
            t6.identifier("sessionId"),
            store.sessionId ? t6.stringLiteral(store.sessionId) : ctx.addGlobal(null)
          )
        ])
      ])
    )
  );
  statements.push(t6.expressionStatement(expression));
  const callbackId = path4.scope.generateUidIdentifier("c");
  const callback = t6.variableDeclaration("let", [
    t6.variableDeclarator(
      callbackId,
      t6.arrowFunctionExpression([], t6.blockStatement(statements))
    )
  ]);
  const acceptCallback = t6.arrowFunctionExpression(
    [],
    t6.blockStatement([t6.expressionStatement(t6.callExpression(callbackId, []))])
  );
  const legacyHmr = t6.ifStatement(
    moduleHotAccept,
    t6.blockStatement([
      t6.expressionStatement(
        t6.callExpression(
          t6.memberExpression(moduleHotAccept, t6.identifier("accept")),
          [t6.stringLiteral(ctx.options.absoluteFilename), acceptCallback]
        )
      )
    ])
  );
  const hmr = ctx.options.legacyHmr ? legacyHmr : t6.ifStatement(
    isCJS,
    t6.blockStatement([
      t6.ifStatement(
        importHot,
        t6.blockStatement([
          t6.expressionStatement(
            t6.callExpression(
              t6.memberExpression(importHot, t6.identifier("accept")),
              [
                t6.stringLiteral(ctx.options.absoluteFilename),
                acceptCallback
              ]
            )
          )
        ])
      )
    ]),
    legacyHmr
  );
  return [
    callback,
    t6.tryStatement(
      t6.blockStatement([hmr]),
      t6.catchClause(t6.identifier("_"), t6.blockStatement([]))
    ),
    t6.expressionStatement(t6.callExpression(callbackId, []))
  ];
};

// compiler/src/core/capture/metadata.ts
var registerMetadata = (ctx, path4, key, index, componentName, checkScope = true, captures = []) => {
  var _a;
  const registerMetadata2 = getImportIdentifier(
    ctx,
    path4,
    ANYA_REGISTER_METADATA
  );
  const scope = path4.scope.getBlockParent().parent;
  if (checkScope && (!scope || ![
    "Program",
    "BlockStatement",
    "FunctionDeclaration",
    "FunctionExpression"
  ].includes(scope.path.type))) {
    return;
  }
  if (!t7.isArrowFunctionExpression(path4.node) && t7.isIdentifier(path4.node.id) && !(scope == null ? void 0 : scope.path.scope.hasBinding(path4.node.id.name))) {
    return;
  }
  ctx.queue.push(() => {
    const register = t7.callExpression(registerMetadata2, [
      ctx.addGlobal(key),
      t7.numericLiteral(index),
      t7.booleanLiteral(isCapitalized(componentName)),
      process.env.NODE_ENV === "production" ? ctx.addGlobal(null) : t7.objectExpression([
        t7.objectProperty(
          t7.identifier("filename"),
          t7.stringLiteral(ctx.options.absoluteFilename || "<unknown>")
        ),
        t7.objectProperty(
          t7.identifier("componentName"),
          t7.stringLiteral(componentName)
        )
      ])
    ]);
    const body = unwrapBody(checkScope ? scope.path : path4);
    if (!body)
      return;
    if (process.env.NODE_ENV === "production") {
      body.push(t7.expressionStatement(register));
    } else {
      body.push(...wrapHMR(ctx, checkScope ? scope.path : path4, register));
    }
  });
  const filename = ctx.options.filename;
  const loc = unwrapLoc(path4.node.loc);
  const descriptiveNamePath = getDescriptiveNamePath(path4);
  const nameLoc = descriptiveNamePath ? unwrapLoc(descriptiveNamePath.node.loc) : null;
  if (!store.reactData[filename]) {
    store.reactData[filename] = {
      components: /* @__PURE__ */ Object.create(null),
      externals: []
    };
  }
  const file = store.reactData[filename];
  const prev = file.components[componentName];
  const externals = [];
  (_a = path4.find((p) => p.isProgram())) == null ? void 0 : _a.traverse({
    ImportDeclaration(path5) {
      if (!path5.node.loc)
        return;
      externals.push({
        kind: "import",
        loc: unwrapLoc(path5.node.loc)
      });
    },
    ExportDeclaration(path5) {
      if (!path5.node.loc)
        return;
      externals.push({
        kind: "export",
        loc: unwrapLoc(path5.node.loc)
      });
    }
  });
  file.externals = externals;
  file.components[componentName] = {
    loc: loc || (prev == null ? void 0 : prev.loc),
    nameLoc: nameLoc || (prev == null ? void 0 : prev.nameLoc),
    captures: captures || (prev == null ? void 0 : prev.captures)
  };
  if (!ctx.options.test) {
    store.report();
  }
};

// compiler/src/core/capture/transform.ts
init_cjs_shims();
var t9 = __toESM(require("@babel/types"));

// ../shared/types/raw-api/compiler.ts
init_cjs_shims();

// compiler/src/core/utils/get-definition.ts
init_cjs_shims();
var t8 = __toESM(require("@babel/types"));
var getDefinitionFromExpression = (ctx, path4, registration) => {
  const id = unwrapNode(path4.node, t8.isIdentifier);
  if (id) {
    const binding = path4.scope.getBindingIdentifier(id.name);
    if (binding) {
      return ctx.registrations[registration].identifiers.get(binding);
    }
    return void 0;
  }
  const memberExpr = unwrapNode(path4.node, t8.isMemberExpression);
  if (memberExpr && !memberExpr.computed && t8.isIdentifier(memberExpr.property)) {
    const object = unwrapNode(memberExpr.object, t8.isIdentifier);
    const property = unwrapNode(memberExpr.property, t8.isIdentifier);
    if (object) {
      const binding = path4.scope.getBindingIdentifier(object.name);
      if (property && (binding == null ? void 0 : binding.name) === "React") {
        return ctx.preset.imports[registration].filter((r) => {
          return r.kind === "named" && r.name === property.name;
        })[0];
      }
    }
  }
  return void 0;
};
var getDefinitionFromCallee = (ctx, path4, registration) => {
  const callee = path4.get("callee");
  if (!callee.isExpression()) {
    return void 0;
  }
  return getDefinitionFromExpression(ctx, callee, registration);
};

// compiler/src/core/capture/transform.ts
var getDefaultHookDefinition = (ctx, id, object) => {
  var _a;
  let source = RUNTIME_SOURCE;
  if (object && ((_a = ctx.registrations.React) == null ? void 0 : _a.local) === object.name) {
    source = ctx.registrations.React.source;
  }
  if (isHookName(ctx, id)) {
    for (let i = 0, len = ctx.preset.imports.hooks.length; i < len; i++) {
      const hook = ctx.preset.imports.hooks[i];
      if (hook.import.kind === "named" && hook.import.name === id.name) {
        return hook;
      }
    }
    return {
      type: 4 /* Value */,
      import: {
        kind: "named",
        name: id.name,
        source
      }
    };
  }
  return isHookName(ctx, id) ? {
    type: 4 /* Value */,
    import: {
      kind: "named",
      name: id.name,
      source
    }
  } : void 0;
};
var getHookImportDefinitionFromIdentifier = (ctx, identifier7) => {
  const binding = identifier7.scope.getBindingIdentifier(identifier7.node.name);
  if (binding) {
    return ctx.registrations.hooks.identifiers.get(binding) || getDefaultHookDefinition(ctx, identifier7.node);
  }
  return getDefaultHookDefinition(ctx, identifier7.node);
};
var getHookImportDefinitionFromPropName = (def, propName) => {
  if (def.import.kind === "default" && propName === "default") {
    return def;
  }
  if (def.import.kind === "named" && propName === def.import.name) {
    return def;
  }
  return void 0;
};
var getHookImportDefinitionFromMemberExpression = (ctx, member) => {
  if (member.node.computed || !t9.isIdentifier(member.node.property)) {
    return void 0;
  }
  const object = unwrapPath(member.get("object"), t9.isIdentifier);
  if (object) {
    const binding = object.scope.getBindingIdentifier(object.node.name);
    if (binding) {
      const def = ctx.registrations.hooks.identifiers.get(member.node.property);
      if (def) {
        return getHookImportDefinitionFromPropName(
          def,
          member.node.property.name
        );
      }
      return getDefaultHookDefinition(ctx, member.node.property, binding);
    }
  }
  return getDefaultHookDefinition(ctx, member.node.property);
};
var getHookImportDefinition = (ctx, path4) => {
  const callee = path4.get("callee");
  const identifier7 = unwrapPath(callee, t9.isIdentifier);
  if (identifier7) {
    return getHookImportDefinitionFromIdentifier(ctx, identifier7);
  }
  const member = unwrapPath(callee, t9.isMemberExpression);
  if (member) {
    return getHookImportDefinitionFromMemberExpression(ctx, member);
  }
  return void 0;
};
var transformCustomCaptureCall = (ctx, key, path4, index, mountInfo) => {
  const callee = path4.get("callee");
  if (!callee.isExpression()) {
    return false;
  }
  const definition = getDefinitionFromExpression(ctx, callee, "million");
  if (!definition || definition.kind !== "named" || definition.name !== "useCapture" && definition.name !== "useCount") {
    return false;
  }
  const args = path4.node.arguments;
  if (args.length !== 1) {
    return false;
  }
  args[1] = ctx.addGlobal(key);
  args[2] = t9.numericLiteral(encode(unwrapLoc(path4.node.loc)));
  args[3] = t9.numericLiteral(index++);
  args[4] = mountInfo || ctx.addGlobal(null);
  return true;
};
var getCaptureCallExpression = (ctx, capture, args) => {
  const nullId = ctx.addGlobal(null);
  ctx.options.stats.captures++;
  return t9.callExpression(capture, [
    args.value ?? nullId,
    t9.numericLiteral(args.kind),
    ctx.addGlobal(args.key),
    args.loc ? t9.numericLiteral(args.loc) : nullId,
    args.secondaryLoc ? t9.numericLiteral(args.secondaryLoc) : nullId,
    args.locs ? t9.arrayExpression(args.locs.map((loc) => t9.numericLiteral(loc))) : nullId,
    args.index !== null ? t9.numericLiteral(args.index) : nullId,
    args.mountInfo || nullId
  ]);
};
var getCaptureProps = (ctx, path4, capture, key, mountInfo, seen, captures) => {
  if (!path4.node.params.length) {
    return [];
  }
  let target = path4.node.params[0];
  const loc = unwrapLoc(target.loc);
  const encodedLoc = encode(loc);
  if (t9.isAssignmentPattern(target)) {
    target = target.left;
  }
  if (t9.isIdentifier(target)) {
    const captureProps2 = getCaptureCallExpression(ctx, capture, {
      kind: 2 /* Props */,
      key,
      value: target,
      loc: encodedLoc,
      secondaryLoc: null,
      locs: null,
      index: 0,
      mountInfo
    });
    captures.push({
      loc,
      kind: 2 /* Props */
    });
    seen.add(captureProps2);
    return [
      t9.expressionStatement(t9.assignmentExpression("=", target, captureProps2))
    ];
  }
  if (t9.isObjectPattern(target)) {
    if (target.properties.length > 0) {
      const propsID2 = generateUniqueName(path4, "props");
      const captureProps2 = getCaptureCallExpression(ctx, capture, {
        kind: 2 /* Props */,
        key,
        value: propsID2,
        loc: encodedLoc,
        secondaryLoc: null,
        locs: null,
        index: 0,
        mountInfo
      });
      captures.push({
        loc,
        kind: 2 /* Props */
      });
      seen.add(captureProps2);
      path4.node.params[0] = propsID2;
      return [
        t9.variableDeclaration("let", [
          t9.variableDeclarator(target, captureProps2)
        ])
      ];
    }
    return [];
  }
  if (t9.isRestElement(target)) {
    const identifier7 = unwrapNode(target.argument, t9.isIdentifier);
    if (identifier7) {
      const captureProps2 = getCaptureCallExpression(ctx, capture, {
        kind: 2 /* Props */,
        key,
        value: t9.memberExpression(identifier7, t9.numericLiteral(0), true),
        loc: encodedLoc,
        secondaryLoc: null,
        locs: null,
        index: 0,
        mountInfo
      });
      captures.push({
        loc,
        kind: 2 /* Props */
      });
      seen.add(captureProps2);
      return [t9.expressionStatement(captureProps2)];
    }
  }
  const propsID = generateUniqueName(path4, "props");
  const restID = generateUniqueName(path4, "rest");
  const captureProps = getCaptureCallExpression(ctx, capture, {
    kind: 2 /* Props */,
    key,
    value: propsID,
    loc: encodedLoc,
    secondaryLoc: null,
    locs: null,
    index: 0,
    mountInfo
  });
  captures.push({
    loc,
    kind: 2 /* Props */
  });
  seen.add(captureProps);
  const currentParams = path4.node.params;
  path4.node.params = [propsID, t9.restElement(restID)];
  return [
    t9.variableDeclaration("let", [
      t9.variableDeclarator(
        t9.arrayPattern(currentParams),
        t9.arrayExpression([captureProps, t9.spreadElement(restID)])
      )
    ])
  ];
};
var isCurrentlyInJSX = (path4) => {
  let parent = path4.parentPath;
  while (parent) {
    if (parent.isJSXSpreadAttribute()) {
      return false;
    }
    if (parent.isJSXSpreadChild()) {
      return false;
    }
    if (parent.isJSXExpressionContainer()) {
      return false;
    }
    if (parent.isJSXElement()) {
      return true;
    }
    if (parent.isJSXFragment()) {
      return true;
    }
    parent = parent.parentPath;
  }
  return false;
};
var transformComponent = (ctx, path4, type) => {
  var _a;
  const componentName = getDescriptiveName(path4);
  if (!componentName || BANNED_COMPONENTS.includes(componentName) || // FIXME: Hack to ignore react-router-dom
  componentName.includes("Route") || t9.isBlockStatement(path4.node.body) && ((_a = path4.node.body.directives) == null ? void 0 : _a.some(
    (c) => t9.isDirectiveLiteral(c.value) && c.value.value.includes(ANYA_IGNORE)
  ))) {
    return;
  }
  const seen = /* @__PURE__ */ new WeakSet();
  const capture = getImportIdentifier(ctx, path4, ANYA_CAPTURE);
  ctx.options.stats.components++;
  const captures = [];
  const encodedFilename = encode(ctx.options.filename);
  const encodedComponentName = encode(componentName);
  const key = `${encodedFilename}.${encodedComponentName}`;
  ctx.componentKeys[componentName] = key;
  const loc = unwrapLoc(path4.node.loc);
  const encodedLoc = encode(loc);
  let mountInfo = null;
  if (type !== "function") {
    const componentNameId = t9.identifier(componentName);
    mountInfo = generateUniqueName(path4, "_$");
    const captureMount = getCaptureCallExpression(ctx, capture, {
      kind: 512 /* Baseline */,
      key,
      value: componentNameId,
      loc: encodedLoc,
      secondaryLoc: null,
      locs: null,
      index: null,
      mountInfo: null
    });
    captures.push({
      loc,
      kind: 512 /* Baseline */
    });
    seen.add(captureMount);
    const replacements = [
      t9.variableDeclaration("let", [
        t9.variableDeclarator(mountInfo, captureMount)
      ])
    ];
    replacements.push(
      ...getCaptureProps(ctx, path4, capture, key, mountInfo, seen, captures)
    );
    if (isPathValid(path4, t9.isArrowFunctionExpression)) {
      const body = path4.get("body");
      if (isPathValid(body, t9.isExpression)) {
        body.replaceWith(
          t9.blockStatement([...replacements, t9.returnStatement(body.node)])
        );
      } else if (isPathValid(body, t9.isBlockStatement)) {
        body.unshiftContainer("body", replacements);
      }
    } else if (isPathValid(path4, t9.isFunctionExpression) || isPathValid(path4, t9.isFunctionDeclaration)) {
      path4.get("body").unshiftContainer("body", replacements);
    }
  }
  let index = 1;
  path4.traverse({
    CallExpression(childPath) {
      if (seen.has(childPath.node)) {
        return;
      }
      seen.add(childPath.node);
      const functionParent = childPath.getFunctionParent();
      if (!(functionParent && functionParent === path4)) {
        return;
      }
      if (transformCustomCaptureCall(ctx, key, childPath, index, mountInfo))
        return;
      const definition = getHookImportDefinition(ctx, childPath);
      if (!definition) {
        return;
      }
      const loc2 = unwrapLoc(childPath.node.loc);
      const encodedLoc2 = encode(loc2);
      switch (definition.type) {
        case 1 /* Deps */: {
          if (t9.isExpression(childPath.node.arguments[0]) && type !== "function") {
            const captured = getCaptureCallExpression(ctx, capture, {
              kind: 128 /* Function */,
              key,
              value: childPath.node.arguments[0],
              loc: encodedLoc2,
              secondaryLoc: null,
              locs: null,
              index: null,
              mountInfo
            });
            captures.push({
              loc: loc2,
              kind: 128 /* Function */
            });
            seen.add(captured);
            childPath.node.arguments[0] = captured;
          }
          const targetArgument = childPath.node.arguments[definition.argument];
          if (t9.isExpression(targetArgument)) {
            let locs = null;
            if (t9.isArrayExpression(targetArgument)) {
              locs = new Array(targetArgument.elements.length);
              for (let i = 0; i < targetArgument.elements.length; i++) {
                locs[i] = encode(unwrapLoc(targetArgument.elements[i].loc));
              }
            }
            const captured = getCaptureCallExpression(ctx, capture, {
              kind: definition.type,
              key,
              value: targetArgument,
              loc: encodedLoc2,
              secondaryLoc: null,
              locs,
              index: index++,
              mountInfo
            });
            captures.push({
              loc: loc2,
              kind: definition.type
            });
            seen.add(captured);
            childPath.node.arguments[definition.argument] = captured;
          }
          childPath.skip();
          break;
        }
        case 4 /* Value */: {
          const locs = [];
          if (type === "function")
            break;
          if (definition.import.source !== "react" || definition.import.kind === "named" && definition.import.name === "useContext") {
            if (t9.isIdentifier(childPath.node.callee)) {
              childPath.node.callee = getCaptureCallExpression(ctx, capture, {
                kind: 1024 /* Hooks */,
                key,
                value: childPath.node.callee,
                loc: encodedLoc2,
                secondaryLoc: null,
                locs: null,
                index: null,
                mountInfo
              });
            }
            if (childPath.parentPath.isVariableDeclarator()) {
              const id = childPath.parentPath.get("id");
              if (!Array.isArray(id)) {
                if (id.isObjectPattern()) {
                  const properties = id.node.properties;
                  for (let i = 0, len = properties.length; i < len; i++) {
                    const prop = properties[i];
                    if (t9.isObjectProperty(prop) && t9.isIdentifier(prop.key)) {
                      locs.push(encode(unwrapLoc(prop.loc)));
                    }
                  }
                }
                if (id.isArrayPattern()) {
                  for (let i = 0, len = id.node.elements.length; i < len; i++) {
                    const element = id.node.elements[i];
                    if (!element)
                      continue;
                    if (t9.isIdentifier(element)) {
                      locs.push(encode(unwrapLoc(element.loc)));
                    }
                  }
                }
              }
            }
          }
          const captured = getCaptureCallExpression(ctx, capture, {
            kind: definition.type,
            key,
            value: childPath.node,
            loc: encodedLoc2,
            secondaryLoc: null,
            locs: locs.length ? locs : null,
            index: index++,
            mountInfo
          });
          captures.push({
            loc: loc2,
            kind: definition.type
          });
          seen.add(captured);
          childPath.replaceWith(captured)[0].skip();
          break;
        }
      }
    },
    // captureError (ErrorBoundary)
    // ReturnStatement() {
    //   path.traverse({
    //     JSXElement(childPath) {
    //       if (seen.has(childPath.node)) {
    //         return;
    //       }
    //       seen.add(childPath.node);
    //       const currentlyInJSX = isCurrentlyInJSX(childPath);
    //       const captured = getCaptureCallExpression(ctx, capture, {
    //         kind: Compiler.CaptureKind.Error,
    //         key,
    //         value: childPath.node,
    //         loc,
    //         secondaryLoc: null,
    //         locs: null,
    //         index: index++,
    //         profilerType: null,
    //         mountInfo,
    //       });
    //       seen.add(captured);
    //       // DO NOT SKIP
    //       childPath.replaceWith(
    //         currentlyInJSX ? t.jsxExpressionContainer(captured) : captured,
    //       );
    //       childPath.skip();
    //     },
    //   });
    // },
    JSXElement(childPath) {
      if (seen.has(childPath.node) || ctx.options.lite) {
        return;
      }
      seen.add(childPath.node);
      const currentlyInJSX = isCurrentlyInJSX(childPath);
      const openingElement = childPath.get("openingElement");
      const name = openingElement.get("name");
      const identifier7 = unwrapPath(name, t9.isJSXIdentifier);
      const loc2 = unwrapLoc(childPath.node.loc);
      const encodedLoc2 = encode(loc2);
      const containerPath = path4.find((p) => p.isJSXExpressionContainer());
      let secondaryLoc = null;
      if (containerPath) {
        secondaryLoc = encode(unwrapLoc(containerPath.node.loc));
      }
      if (identifier7) {
        if (isCapitalized(identifier7.node.name) && !BANNED_COMPONENTS.includes(identifier7.node.name)) {
          const captured = getCaptureCallExpression(ctx, capture, {
            kind: 16 /* JSX */,
            key,
            value: childPath.node,
            loc: encodedLoc2,
            secondaryLoc,
            locs: null,
            // useRef internally
            index: null,
            mountInfo
          });
          captures.push({
            loc: loc2,
            kind: 16 /* JSX */
          });
          seen.add(captured);
          childPath.replaceWith(
            currentlyInJSX ? t9.jsxExpressionContainer(captured) : captured
          );
        }
        return;
      }
      const member = unwrapPath(name, t9.isJSXMemberExpression);
      if (member) {
        const captured = getCaptureCallExpression(ctx, capture, {
          kind: 16 /* JSX */,
          key,
          value: childPath.node,
          loc: encodedLoc2,
          secondaryLoc,
          locs: null,
          index: index++,
          mountInfo
        });
        captures.push({
          loc: loc2,
          kind: 16 /* JSX */
        });
        seen.add(captured);
        childPath.replaceWith(
          currentlyInJSX ? t9.jsxExpressionContainer(captured) : captured
        );
      }
    },
    JSXAttribute(childPath) {
      if (seen.has(childPath.node)) {
        return;
      }
      const jsxId = childPath.node.name;
      if (!t9.isJSXIdentifier(jsxId))
        return;
      if (!jsxId.name.startsWith("on"))
        return;
      if (!t9.isJSXExpressionContainer(childPath.node.value))
        return;
      if (t9.isJSXEmptyExpression(childPath.node.value.expression))
        return;
      const elementId = unwrapPath(
        childPath.parentPath.get("name"),
        t9.isJSXIdentifier
      );
      if (!elementId)
        return;
      if (isCapitalized(elementId.node.name))
        return;
      seen.add(childPath.node);
      const expressionContainer = childPath.get(
        "value.expression"
      );
      const loc2 = unwrapLoc(expressionContainer.node.loc);
      const encodedLoc2 = encode(loc2);
      const captured = getCaptureCallExpression(ctx, capture, {
        kind: 128 /* Function */,
        key,
        value: childPath.node.value.expression,
        loc: encodedLoc2,
        secondaryLoc: null,
        locs: null,
        index: null,
        mountInfo
      });
      captures.push({
        loc: loc2,
        kind: 128 /* Function */
      });
      seen.add(captured);
      childPath.node.value.expression = captured;
      childPath.skip();
    }
  });
  registerMetadata(ctx, path4, key, index, componentName, true, captures);
};

// compiler/src/core/presets.ts
init_cjs_shims();
var createPreset = (preset) => {
  return preset;
};
var PRESETS = {
  react: createPreset({
    filters: {
      component: {
        source: "^[A-Z]",
        flags: ""
      },
      hook: {
        source: "^use[A-Z]",
        flags: ""
      }
    },
    imports: {
      React: void 0,
      hooks: [
        // React hooks
        {
          type: 1 /* Deps */,
          import: {
            kind: "named",
            source: "react",
            name: "useEffect"
          },
          argument: 1
        },
        {
          type: 1 /* Deps */,
          import: {
            kind: "named",
            source: "react",
            name: "useLayoutEffect"
          },
          argument: 1
        },
        {
          type: 1 /* Deps */,
          import: {
            kind: "named",
            source: "react",
            name: "useMemo"
          },
          argument: 1
        },
        {
          type: 1 /* Deps */,
          import: {
            kind: "named",
            source: "react",
            name: "useCallback"
          },
          argument: 1
        },
        {
          type: 1 /* Deps */,
          import: {
            kind: "named",
            source: "react",
            name: "useInsertionEffect"
          },
          argument: 1
        },
        {
          type: 4 /* Value */,
          import: {
            kind: "named",
            source: "react",
            name: "useState"
          }
        },
        {
          type: 4 /* Value */,
          import: {
            kind: "named",
            source: "react",
            name: "useReducer"
          }
        },
        {
          type: 4 /* Value */,
          import: {
            kind: "named",
            source: "react",
            name: "useContext"
          }
        }
      ],
      hocs: [
        {
          name: "forwardRef",
          source: "react",
          kind: "named"
        },
        {
          name: "memo",
          source: "react",
          kind: "named"
        }
      ],
      million: [
        {
          name: "init",
          source: "@million/lint/runtime",
          kind: "named"
        },
        {
          name: "useCapture",
          source: "@million/lint/runtime",
          kind: "named"
        },
        {
          name: "useCount",
          source: "@million/lint/runtime",
          kind: "named"
        },
        {
          name: "init",
          source: "@million/lint/runtime-dev",
          kind: "named"
        },
        {
          name: "useCapture",
          source: "@million/lint/runtime-dev",
          kind: "named"
        },
        {
          name: "useCount",
          source: "@million/lint/runtime-dev",
          kind: "named"
        }
      ],
      classes: [
        {
          name: "Component",
          source: "react",
          kind: "named"
        },
        {
          name: "PureComponent",
          source: "react",
          kind: "named"
        }
      ]
    }
  })
};

// compiler/src/core/plugin.ts
var registerHookSpecifiers = (ctx, path4, hook) => {
  let specifier;
  for (let i = 0, len = path4.node.specifiers.length; i < len; i++) {
    specifier = path4.node.specifiers[i];
    switch (specifier.type) {
      case "ImportDefaultSpecifier": {
        if (hook.import.kind === "default") {
          ctx.registrations.hooks.identifiers.set(specifier.local, hook);
        }
        break;
      }
      case "ImportNamespaceSpecifier": {
        let current = ctx.registrations.hooks.namespaces.get(specifier.local);
        if (!current) {
          current = [];
        }
        current.push(hook);
        ctx.registrations.hooks.namespaces.set(specifier.local, current);
        break;
      }
      case "ImportSpecifier": {
        if (hook.import.kind === "named" && getImportSpecifierName(specifier) === hook.import.name || hook.import.kind === "default" && getImportSpecifierName(specifier) === "default") {
          ctx.registrations.hooks.identifiers.set(specifier.local, hook);
        }
        break;
      }
    }
  }
};
var registerSpecifiers = (ctx, path4, hoc, registration) => {
  let specifier;
  for (let i = 0, len = path4.node.specifiers.length; i < len; i++) {
    specifier = path4.node.specifiers[i];
    switch (specifier.type) {
      case "ImportDefaultSpecifier": {
        if (hoc.kind === "default") {
          ctx.registrations[registration].identifiers.set(specifier.local, hoc);
        }
        break;
      }
      case "ImportNamespaceSpecifier": {
        let current = ctx.registrations[registration].namespaces.get(
          specifier.local
        );
        if (!current) {
          current = [];
        }
        current.push(hoc);
        ctx.registrations[registration].namespaces.set(
          specifier.local,
          current
        );
        break;
      }
      case "ImportSpecifier": {
        if (hoc.kind === "named" && getImportSpecifierName(specifier) === hoc.name || hoc.kind === "default" && getImportSpecifierName(specifier) === "default") {
          ctx.registrations[registration].identifiers.set(specifier.local, hoc);
        }
        break;
      }
    }
  }
};
var extractImportIdentifiers = (ctx, path4) => {
  const mod = path4.node.source.value;
  if (mod.includes("@million/lint/runtime") && mod !== RUNTIME_SOURCE) {
    path4.node.source.value = RUNTIME_SOURCE;
  }
  const { imports } = ctx.preset;
  const specifiers = path4.node.specifiers;
  if (mod === "react") {
    for (let i = 0, len = specifiers.length; i < len; i++) {
      const specifier = specifiers[i];
      if (specifier.type === "ImportDefaultSpecifier") {
        ctx.registrations.React = {
          local: specifier.local.name,
          kind: "default",
          source: mod
        };
      }
    }
  }
  let hook;
  for (let i = 0, len = imports.hooks.length; i < len; i++) {
    hook = imports.hooks[i];
    if (mod === hook.import.source) {
      registerHookSpecifiers(ctx, path4, hook);
    }
  }
  let hoc;
  for (let i = 0, len = imports.hocs.length; i < len; i++) {
    hoc = imports.hocs[i];
    if (mod === hoc.source) {
      registerSpecifiers(ctx, path4, hoc, "hocs");
    }
  }
  let million;
  for (let i = 0, len = imports.million.length; i < len; i++) {
    million = imports.million[i];
    if (mod === million.source) {
      registerSpecifiers(ctx, path4, million, "million");
    }
  }
  let currentClass;
  for (let i = 0, len = imports.classes.length; i < len; i++) {
    currentClass = imports.classes[i];
    if (mod === currentClass.source) {
      registerSpecifiers(ctx, path4, currentClass, "classes");
    }
  }
};
var transformFunction = (ctx, path4, type) => {
  const unwrapped = unwrapPath(path4, isComponent);
  if (unwrapped && type) {
    if (unwrapped.node.async || unwrapped.node.generator) {
      return;
    }
    transformComponent(ctx, unwrapped, type);
  }
};
var transformInit = (ctx, path4) => {
  var _a;
  const definition = getDefinitionFromCallee(ctx, path4, "million");
  if (definition && definition.kind === "named" && definition.name === "init") {
    path4.node.arguments[0] = t10.objectExpression([
      t10.objectProperty(
        t10.identifier("url"),
        // TEMPORARY DISABLED
        // ctx.options.framework === "next" &&
        //   process.env.NODE_ENV === "production" &&
        //   !ctx.options.production?.flags?.disableNextRewrites
        //   ? t.stringLiteral("/__anya") // Proxied endpoint
        //   :
        t10.stringLiteral(
          `${((_a = ctx.options.production) == null ? void 0 : _a.url) ?? "https://lint.million.dev"}/api/v1/ingest/ingest`
        )
      ),
      t10.objectProperty(
        t10.identifier("buildId"),
        t10.stringLiteral(store.buildId ?? "dev")
      ),
      // Build Id -> Uniquely generated everytime the build is run
      t10.objectProperty(
        t10.identifier("commitHash"),
        t10.stringLiteral(store.commitHash ?? "dev")
      ),
      // Commit Hash -> The commit hash of the current git branch
      t10.objectProperty(
        t10.identifier("apiKey"),
        t10.stringLiteral(store.apiKey ?? "")
        // API Key -> The API key for the current project
      )
    ]);
  }
};
var transformHOC = (ctx, path4) => {
  if (path4.node.arguments.length === 0) {
    return;
  }
  const definition = getDefinitionFromCallee(ctx, path4, "hocs");
  if (definition) {
    const argument = path4.get("arguments")[0];
    transformFunction(ctx, argument, "component");
  }
};
var transformVariableDeclarator = (ctx, path4) => {
  if (path4.node.init && t10.isIdentifier(path4.node.id)) {
    const componentNode = path4.get("init");
    const type = getTypeFromComponentName(ctx, componentNode, path4.node.id);
    if (!type)
      return;
    transformFunction(ctx, componentNode, type);
    const id = path4.node.id;
    path4.get("init").traverse({
      Identifier(childPath) {
        const key = ctx.componentKeys[childPath.node.name];
        if (key) {
          registerMetadata(ctx, path4, key, -1, id.name, false);
          childPath.stop();
        }
      }
    });
  }
};
var babelPlugin = (_, options = {}) => {
  return {
    name: "anya",
    visitor: {
      Program(programPath) {
        var _a, _b;
        const comments = programPath.node.leadingComments;
        if (comments) {
          for (let i = 0, len = comments.length; i < len; i++) {
            if (comments[i].value === ANYA_IGNORE) {
              return;
            }
          }
        }
        let hasUseClientDirective = false;
        for (let i = 0, len = (_a = programPath.node.directives) == null ? void 0 : _a.length; i < len; i++) {
          const directive = programPath.node.directives[i];
          const directiveValue = directive.value.value;
          if (directiveValue === "use server") {
            options.rsc = true;
            return;
          }
          if (directiveValue === "use client") {
            hasUseClientDirective = true;
            break;
          }
        }
        const preset = ((_b = options.PRESETS) == null ? void 0 : _b.react) || PRESETS.react;
        const globals = /* @__PURE__ */ new Map();
        const ctx = {
          imports: /* @__PURE__ */ new Map(),
          registrations: {
            React: void 0,
            hooks: {
              identifiers: /* @__PURE__ */ new Map(),
              namespaces: /* @__PURE__ */ new Map()
            },
            hocs: {
              identifiers: /* @__PURE__ */ new Map(),
              namespaces: /* @__PURE__ */ new Map()
            },
            million: {
              identifiers: /* @__PURE__ */ new Map(),
              namespaces: /* @__PURE__ */ new Map()
            },
            classes: {
              identifiers: /* @__PURE__ */ new Map(),
              namespaces: /* @__PURE__ */ new Map()
            }
          },
          options,
          queue: [],
          preset,
          addGlobal(value) {
            if (globals.has(value))
              return globals.get(value);
            const id = generateUniqueName(programPath, "");
            globals.set(value, id);
            return id;
          },
          componentKeys: /* @__PURE__ */ Object.create(null),
          filters: {
            component: new RegExp(
              preset.filters.component.source,
              preset.filters.component.flags
            ),
            hook: preset.filters.hook ? new RegExp(
              preset.filters.hook.source,
              preset.filters.hook.flags
            ) : void 0
          }
        };
        programPath.traverse({
          ImportDeclaration(path4) {
            extractImportIdentifiers(ctx, path4);
          }
        });
        if (options.rsc && !hasUseClientDirective && !ctx.registrations.hooks.identifiers.size && !ctx.registrations.hocs.identifiers.size) {
          return;
        }
        programPath.traverse({
          CallExpression(path4) {
            if (process.env.NODE_ENV === "production") {
              transformInit(ctx, path4);
            }
            transformHOC(ctx, path4);
          },
          FunctionDeclaration(path4) {
            transformFunction(ctx, path4, getComponentType(ctx, path4));
          },
          FunctionExpression(path4) {
            transformFunction(ctx, path4, getComponentType(ctx, path4));
          },
          VariableDeclarator(path4) {
            transformVariableDeclarator(ctx, path4);
          }
          // ClassExpression(path) {
          //   transformClassComponent(ctx, path);
          // },
          // ClassDeclaration(path) {
          //   transformClassComponent(ctx, path);
          // },
        });
        if (ctx.queue.length) {
          for (let i = 0, len = ctx.queue.length; i < len; i++) {
            ctx.queue[i]();
          }
        }
        if (globals.size) {
          const declarators = new Array(globals.size);
          let i = 0;
          for (const [value, id] of globals) {
            declarators[i] = t10.variableDeclarator(
              id,
              typeof value === "string" ? t10.stringLiteral(value) : typeof value === "number" ? t10.numericLiteral(value) : t10.nullLiteral()
            );
            i++;
          }
          programPath.unshiftContainer(
            "body",
            t10.variableDeclaration("let", declarators)
          );
        }
      }
    }
  };
};

// compiler/src/core/compile.ts
var compile = async (id, code, options) => {
  var _a;
  const parserPlugins = [
    // import { example } from 'example' with { example: true };
    [
      "importAttributes",
      {
        deprecatedAssertSyntax: false
      }
    ],
    // () => throw example
    "throwExpressions",
    // You know what this is
    "decorators",
    // const { #example: example } = this;
    "destructuringPrivate",
    // using example = myExample()
    "explicitResourceManagement",
    // import.meta
    "importMeta"
  ];
  const buildPlugins = [];
  const overridePlugins = (_a = options.babel) == null ? void 0 : _a.plugins;
  if (overridePlugins) {
    for (let i = 0, len = overridePlugins.length; i < len; i++) {
      const plugin = overridePlugins[i];
      buildPlugins.unshift(plugin);
    }
  }
  buildPlugins.push([babelPlugin, options]);
  const isJSXLike = /\.[mc]?[jt]sx?$/i.test(id);
  if (isJSXLike) {
    parserPlugins.unshift("jsx");
  }
  const isTSX = isJSXLike && /\.[mc]?tsx?$/i.test(id);
  if (isTSX) {
    parserPlugins.push("typescript");
  } else {
    buildPlugins.unshift(import_babel_plugin_syntax_hermes_parser.default);
  }
  const result = await (0, import_core.transformAsync)(code, {
    plugins: buildPlugins,
    ignore: [/\/(?<c>build|node_modules)\//],
    parserOpts: { plugins: parserPlugins },
    cloneInputAst: false,
    generatorOpts: {
      // https://github.com/facebook/react/issues/29120
      // TODO: remove once React Compiler has provided their workaround
      jsescOption: {
        minimal: true
      }
    },
    filename: id,
    ast: false,
    sourceFileName: id,
    sourceMaps: true,
    configFile: false,
    babelrc: false
  });
  return result ? { code: result.code || "", map: result.map } : null;
};

// compiler/src/server/index.ts
init_cjs_shims();
var import_node_server = require("@hono/node-server");

// compiler/src/server/apm.ts
init_cjs_shims();

// compiler/src/core/utils/get-commit-hash.ts
init_cjs_shims();
var import_node_child_process = require("child_process");

// ../../node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/index.js
init_cjs_shims();
var import_node_crypto2 = require("crypto");

// ../../node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/url-alphabet/index.js
init_cjs_shims();
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// ../../node_modules/.pnpm/nanoid@5.0.7/node_modules/nanoid/index.js
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
function fillPool(bytes) {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    import_node_crypto2.webcrypto.getRandomValues(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    import_node_crypto2.webcrypto.getRandomValues(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
}
function nanoid(size = 21) {
  fillPool(size -= 0);
  let id = "";
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63];
  }
  return id;
}

// compiler/src/core/utils/get-commit-hash.ts
var COMMIT_HASH_REGEX = new RegExp(/^[a-f0-9]{40}$/i, "g");
var testCommitHash = (str) => {
  return typeof str === "string" && COMMIT_HASH_REGEX.test(str) ? str : void 0;
};
var getCommitHash = () => {
  const hash = (
    // testCommitHash(process.env.MILLION_COMMIT_SHA) ??
    // testCommitHash(process.env.VERCEL_GIT_COMMIT_SHA) ??
    // testCommitHash(process.env.GITHUB_SHA) ??
    // testCommitHash(process.env.COMMIT_REF) ??
    // testCommitHash(process.env.HEROKU_SLUG_COMMIT) ??
    // testCommitHash(process.env.SOURCE_VERSION) ??
    testCommitHash(
      (0, import_node_child_process.execSync)("git rev-parse HEAD", {
        stdio: ["ignore", "pipe", "ignore"]
      }).toString().trim()
    )
  );
  if (!hash) {
    throw new Error(
      // TODO make the message a constant
      "Could not find a commit hash to identify your build! In your CI/CD .env. Please email aiden@million.dev for support.",
      {
        cause: "No git commit hash found"
      }
    );
  }
  return hash;
};
var getBuildId = () => {
  return nanoid();
};

// compiler/src/server/apm.ts
var init2 = async (url, apiKey) => {
  var _a, _b;
  store.url = url ?? "";
  store.apiKey = apiKey ?? "";
  (_a = store).buildId ?? (_a.buildId = getBuildId());
  (_b = store).commitHash ?? (_b.commitHash = getCommitHash());
  displayProductionIntro(store.buildId, store.commitHash, store.apiKey);
};
var reportCompiler = async () => {
  const url = store.url;
  const payload = store.get();
  const { default: ciInfo } = await import("ci-info");
  let version = "unknown";
  try {
    version = require_package().version;
  } catch (e) {
  }
  let react = "unknown";
  try {
    react = require("react/package.json").version;
  } catch (e) {
  }
  payload.metadata = {
    ci: ciInfo.name ?? "unknown",
    version,
    react,
    commitHash: store.commitHash,
    buildId: store.buildId,
    url: store.url
  };
  const response = await fetch(`${url}/api/v1/ingest/compiler`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": store.apiKey,
      "X-BUILD-ID": store.buildId,
      "X-COMMIT-HASH": store.commitHash
    },
    body: JSON.stringify(payload)
  });
  void saveLog("log", {
    url,
    origin: "APM reported compiler",
    status: response.status,
    metadata: payload.metadata
  });
};

// compiler/src/server/ingest.ts
init_cjs_shims();
var import_hono = require("hono");
var import_cors = require("hono/cors");

// compiler/src/server/middleware/decompress.ts
init_cjs_shims();
var import_pako = require("pako");
var ENCODING_TYPES = ["gzip", "deflate", "snappy"];
var decompress = () => {
  return async function decompress2(ctx, next) {
    const content = ctx.req.header("Content-Encoding") ?? (ctx.req.query("z") ? "gzip" : void 0);
    const encoding = ENCODING_TYPES.find(
      (encoding2) => content == null ? void 0 : content.includes(encoding2)
    );
    if (!encoding)
      return next();
    let rawBodyString;
    if (encoding === "gzip") {
      const buffer = await ctx.req.arrayBuffer();
      rawBodyString = (0, import_pako.ungzip)(buffer, { to: "string" });
    }
    if (rawBodyString) {
      try {
        ctx.req.bodyCache.json = JSON.parse(rawBodyString);
        ctx.req.bodyCache.text = rawBodyString;
      } catch (e) {
        console.error(e);
        return ctx.json({ ok: false });
      }
    }
    await next();
  };
};

// compiler/src/server/ingest.ts
var ingestServer = new import_hono.Hono();
ingestServer.use((0, import_cors.cors)()).use(decompress()).post("/ingest", async (c) => {
  const body = await c.req.json();
  if (!body)
    return c.json({ status: "Body invalid. Please try again!" });
  if (store.sessionId)
    return c.json({ status: "Using Sessions" });
  await report({
    runtime: body,
    compiler: store.get()
  });
  return c.json({ ok: true });
}).get("/ingest/reset", async (c) => {
  void reset2();
  return c.json({ ok: true });
}).get("/ingest/healthcheck", async (c) => {
  const sessions = [];
  for await (const session of getPossibleConnections()) {
    sessions.push(session);
  }
  return c.json({ ok: sessions.length, sessions });
}).get("/data", (c) => {
  return c.json(store.get());
}).get("/shutdown", (c) => {
  shutdown();
  return c.json({ status: "Server shutdown" });
}).get("/test-connection", async (c) => {
  const sessions = [];
  const connections = [];
  for await (const connection of getPossibleConnections()) {
    connections.push(connection);
  }
  for await (const session of getSessions()) {
    sessions.push(session);
  }
  return c.json({ sessions, connections });
}).all("*", (c) => c.text(c.req.url));

// compiler/src/server/session.ts
init_cjs_shims();
var import_socket = __toESM(require("socket.io-client"));
var import_throttle = __toESM(require_throttle());
var debouncedReport = (0, import_throttle.default)(
  () => report({ compiler: store.get() }),
  1e3
);
var startProxySession = async (proxy) => {
  if (!(proxy == null ? void 0 : proxy.enabled)) {
    void saveLog("info", { origin: "Proxy session disabled" });
    return;
  }
  void saveLog("info", { origin: "Proxy session enabled" });
  try {
    const url = `${(proxy == null ? void 0 : proxy.url) ?? "https://lint.million.dev"}/api/v1/proxy`;
    const session = await fetch(`${url}/session`, {
      method: "POST",
      body: JSON.stringify({ password: proxy == null ? void 0 : proxy.password }),
      headers: { "Content-Type": "application/json" }
    });
    if (!session.ok) {
      throw new Error(
        `Failed to start proxy session: ${session.status} ${session.statusText}`
      );
    }
    const data = await session.json();
    store.sessionId = data.sessionId;
    store.proxyUrl = url;
    const socket = (0, import_socket.default)("wss://socket.million.dev", {
      auth: { roomId: store.sessionId },
      transports: ["websocket"]
    });
    socket.on("connect", async () => {
      socket.on("need-compiler", async () => {
        await debouncedReport();
      });
      void saveLog("info", {
        origin: "Proxy session connected",
        sessionId: store.sessionId
      });
      const connect = async () => {
        for await (const { port, host } of getSessions()) {
          void fetch(`http://${host}:${port}/session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: store.sessionId })
          }).catch((err) => {
            void saveLog("error", {
              origin: "Failed to send data to ingest server",
              message: err.message,
              stack: err.stack
            });
          });
        }
      };
      await connect();
      setInterval(async () => {
        await connect();
      }, 5e3);
    });
    void saveLog("info", {
      origin: "Proxy session started",
      sessionId: store.sessionId
    });
  } catch (err) {
    if (err instanceof Error) {
      void saveLog("error", {
        origin: "Failed to start proxy session",
        message: err.message,
        stack: err.stack,
        proxy: proxy ?? {}
      });
    }
  }
};

// compiler/src/server/index.ts
var INITIAL_PORT = 42423;
var server;
var numberOfTries = 5;
var alreadyNotified = false;
var initServer;
var createBuildInstance = (options) => {
  var _a, _b;
  options.ingest ?? (options.ingest = {
    host: "localhost",
    port: INITIAL_PORT
  });
  options.test ?? (options.test = process.env.NODE_ENV === "test");
  if (process.env.NODE_ENV === "production" && ((_a = options.production) == null ? void 0 : _a.enabled)) {
    initServer = (async () => {
      var _a2, _b2;
      await init2((_a2 = options.production) == null ? void 0 : _a2.url, (_b2 = options.production) == null ? void 0 : _b2.apiKey);
    })();
  } else if (!options.test) {
    store.apiKey = ((_b = options.production) == null ? void 0 : _b.apiKey) ?? "";
    store.buildId = "dev";
    store.commitHash = "dev";
    initServer = (async () => {
      var _a2;
      await startIngestServer(options.ingest);
      await startProxySession(options.proxy);
      await reset2();
      displayIntro((_a2 = options.ingest) == null ? void 0 : _a2.port, store.sessionId);
    })();
  }
  const stats = {
    components: 0,
    captures: 0
  };
  return {
    meta: {
      stats,
      time: null,
      totalTime: 0
    },
    initServer
  };
};
var shutdown = () => {
  if (server) {
    server.close();
  }
};
var startIngestServer = async (ingest) => {
  ingest ?? (ingest = {});
  if (server)
    return server;
  const host = (ingest == null ? void 0 : ingest.host) || "localhost";
  let port = (ingest == null ? void 0 : ingest.port) || INITIAL_PORT;
  while (!server && numberOfTries > 0) {
    try {
      server = await _startIngestServer(host, port);
    } catch (err) {
      if (err instanceof Error) {
        void saveLog("error", {
          origin: "Failed to start ingest server",
          message: err.message,
          stack: err.stack,
          numberOfTries,
          host: (ingest == null ? void 0 : ingest.host) || "localhost",
          port
        });
      }
    }
    if (server) {
      store.port = port;
      return server;
    }
    port++;
    numberOfTries--;
  }
  if (!server) {
    if (!alreadyNotified) {
      alreadyNotified = true;
      logError("Could not connect to VSCode.");
      void saveLog("error", {
        origin: "Could not connect to VSCode",
        port
      });
    }
  }
  if (ingest) {
    ingest.port = port;
    ingest.host = host;
  }
  return server;
};
var _startIngestServer = async (host, port) => {
  const url = `http://${host}:${port}`;
  try {
    await fetch(`${url}/shutdown`, { method: "GET", mode: "no-cors" });
  } catch (err) {
    if (err instanceof Error) {
      void saveLog("error", {
        origin: "Failed to shutdown ingest server",
        message: err.message,
        stack: err.stack,
        port
      });
    }
  }
  return new Promise((resolve) => {
    const $server = (0, import_node_server.serve)({
      fetch: ingestServer.fetch,
      hostname: host,
      port,
      serverOptions: {}
    });
    const server2 = $server.listen(port);
    server2.on("listening", () => resolve(server2));
    server2.on("error", (err) => {
      resolve(void 0);
      void saveLog("error", {
        origin: "Failed to start ingest server",
        message: err.message,
        stack: err.stack,
        port
      });
    });
  }).catch((err) => {
    void saveLog("error", {
      origin: "Failed to start ingest server",
      message: err.message,
      stack: err.stack,
      port
    });
    return void 0;
  });
};

// compiler/src/store.ts
init_cjs_shims();
var import_node_fs2 = __toESM(require("fs"));
var import_node_path2 = __toESM(require("path"));
var import_debounce = __toESM(require_debounce());

// compiler/src/core/utils/encoder.ts
init_cjs_shims();
var Encoder = class {
  constructor(encoded = new Array(), cache = /* @__PURE__ */ new Map()) {
    this.encoded = encoded;
    this.cache = cache;
    this.hasChanged = true;
  }
  serialize() {
    return this.encoded;
  }
  deserialize(data) {
    if (this.encoded.length !== 0)
      return;
    for (let i = 0, len = data.length; i < len; i++) {
      this.push(data[i]);
    }
  }
  push(value) {
    this.hasChanged = true;
    const key = value.toString();
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const index = this.encoded.push(value) - 1;
    this.cache.set(key, index);
    return index;
  }
  get(index) {
    return this.encoded[index] ?? null;
  }
  all() {
    return this.encoded;
  }
  clear() {
    this.encoded.length = 0;
    this.cache.clear();
  }
};

// compiler/src/store.ts
var cwd = process.cwd();
var Store = class {
  // APM url
  constructor(cacheHandler = buildCacheHandler(process.cwd(), "store.json"), report2 = (0, import_debounce.default)(
    () => {
      if (!this.encodings.hasChanged)
        return;
      this.cacheHandler.write(this.serialize());
      void report({ compiler: this.get() });
    },
    1e3,
    { leading: true, trailing: false }
  )) {
    this.cacheHandler = cacheHandler;
    this.report = report2;
    /* Encoding */
    this.encodings = new Encoder();
    /* Component Data (Component Locs, Externals) */
    this.reactData = {};
    /* Debugging */
    this.failedFiles = new Array();
    this.port = 42423;
    let data;
    try {
      data = this.cacheHandler.load();
    } catch (err) {
      logError("Failed to load data from disk");
      if (err instanceof Error) {
        void saveLog("error", {
          origin: "Failed to load data from disk",
          message: err.message,
          stack: err.stack
        });
      }
    }
    if (data) {
      try {
        this.deserialize(data);
      } catch (err) {
        logError("Failed to deserialize data from disk");
        if (err instanceof Error) {
          void saveLog("error", {
            origin: "Failed to deserialize data from disk",
            message: err.message,
            stack: err.stack,
            data
          });
        }
      }
    }
    process.on("exit", () => {
      this.cacheHandler.write(this.serialize());
    });
  }
  get() {
    const data = {
      encodings: this.encodings.all(),
      reactData: this.reactData,
      failedFiles: this.failedFiles,
      cwd
    };
    return data;
  }
  clear() {
    this.encodings.clear();
    this.reactData = {};
  }
  serialize() {
    this.encodings.hasChanged = false;
    return {
      encodings: this.encodings.serialize(),
      reactData: this.reactData
    };
  }
  deserialize(data) {
    this.encodings.deserialize(data.encodings);
    this.reactData = data.reactData || {};
  }
};
var buildCacheHandler = (cwd3, file) => {
  return {
    write: (data) => {
      const baseDir = import_node_path2.default.join(cwd3, ".million");
      try {
        if (!import_node_fs2.default.existsSync(import_node_path2.default.join(baseDir))) {
          import_node_fs2.default.mkdirSync(import_node_path2.default.join(baseDir));
        }
        import_node_fs2.default.writeFileSync(import_node_path2.default.join(baseDir, file), JSON.stringify(data));
      } catch (err) {
        logError("Failed to write cache to disk");
        if (err instanceof Error) {
          void saveLog("error", {
            origin: "Failed to write cache to disk",
            message: err.message,
            stack: err.stack,
            baseDir
          });
        }
      }
    },
    load: () => {
      const baseDir = import_node_path2.default.join(cwd3, ".million");
      try {
        if (!import_node_fs2.default.existsSync(import_node_path2.default.join(baseDir, file))) {
          return null;
        }
        return JSON.parse(
          import_node_fs2.default.readFileSync(import_node_path2.default.join(baseDir, file), "utf8")
        );
      } catch (err) {
        logError("Failed to delete cache from disk");
        if (err instanceof Error) {
          void saveLog("error", {
            origin: "Failed to delete cache from disk",
            message: err.message,
            stack: err.stack,
            baseDir
          });
        }
        return null;
      }
    }
  };
};

// compiler/src/index.ts
var cwd2 = process.cwd();
var DEFAULT_INCLUDE = "**/*.{mtsx,mjsx,tsx,jsx,ts,js}";
var DEFAULT_EXCLUDE = "**/node_modules/**/*";
var cacheDirs = [".cache/", ".vite/", ".million/", ".next/"];
var store = new Store();
var encode = (secret) => {
  return store.encodings.push(secret);
};
var transform = async (instance2, meta, options, code, id) => {
  await instance2.initServer;
  if (options == null ? void 0 : options.skipTransform)
    return null;
  const relativePath = import_node_path3.default.relative(cwd2, id);
  let withBabelOptions = options;
  try {
    if (cacheDirs.some((dir) => id.includes(dir))) {
      return null;
    }
    if (options.dev) {
      instance2.meta.time = logStart(relativePath);
    }
    withBabelOptions = Object.assign(
      {
        source: code,
        filename: relativePath,
        absoluteFilename: id,
        framework: meta.framework,
        stats: {
          components: 0,
          captures: 0
        }
      },
      options
    );
    instance2.meta.stats.components += withBabelOptions.stats.components;
    instance2.meta.stats.captures += withBabelOptions.stats.captures;
    const result = await compile(id, code, withBabelOptions);
    if (options.dev) {
      instance2.meta.totalTime += logEnd(
        relativePath,
        instance2.meta.time,
        withBabelOptions.stats
      );
    }
    return result;
  } catch (err) {
    if (err instanceof Error) {
      store.failedFiles.push({
        filename: relativePath,
        error: err.message
      });
      if ((options == null ? void 0 : options.telemetry) !== false) {
        void saveLog("error", {
          origin: "Failed to compile",
          message: err.message,
          stack: err.stack,
          options: withBabelOptions,
          stats: instance2.meta.stats,
          totalTime: instance2.meta.totalTime,
          code
        });
      }
    }
    logError(
      `Failed to compile: ${relativePath} 
 ${err.message} ${(options == null ? void 0 : options.dev) ? err.stack : ""}`
    );
  }
  return null;
};
var unplugin = (0, import_unplugin.createUnplugin)((options, meta) => {
  var _a, _b, _c;
  const currentOptions = options || {};
  if (process.env.NODE_ENV === "production" && !((_a = currentOptions.production) == null ? void 0 : _a.enabled)) {
    logError(
      "Enable production mode to use Million Lint in production. This is potentially dangerous (contact: aiden@million.dev)"
    );
    return { name: "anya" };
  }
  const filter = (0, import_pluginutils.createFilter)(
    ((_b = currentOptions.filter) == null ? void 0 : _b.include) || DEFAULT_INCLUDE,
    ((_c = currentOptions.filter) == null ? void 0 : _c.exclude) || [
      DEFAULT_EXCLUDE,
      // Next.js pages dir specific
      "**/_app.{jsx,tsx,js,ts}",
      "**/_document.{jsx,tsx,js,ts}",
      "**/api/**/*",
      // Million.js specific
      "**/.million/**/*"
    ]
  );
  const instance2 = createBuildInstance(currentOptions);
  return {
    enforce: "pre",
    name: "anya",
    watchChange() {
      instance2.meta.totalTime = 0;
      void reset2();
    },
    transformInclude(id) {
      return filter(id);
    },
    async transform(code, id) {
      return transform(instance2, meta, options || {}, code, id);
    },
    buildEnd() {
      var _a2;
      if (options == null ? void 0 : options.skipTransform)
        return;
      if (process.env.NODE_ENV === "production" && ((_a2 = currentOptions.production) == null ? void 0 : _a2.enabled)) {
        void reportCompiler();
      } else {
        store.report();
      }
      logFinish(instance2.meta.totalTime, instance2.meta.stats);
    },
    webpack(compiler) {
      if (process.env.NODE_ENV !== "production")
        return;
      const options2 = compiler.options;
      if (!options2.resolve) {
        options2.resolve = {};
      }
      if (!options2.resolve.alias) {
        options2.resolve.alias = {};
      }
      if (Array.isArray(options2.resolve.alias)) {
        options2.resolve.alias.push({
          alias: "react-dom$",
          name: "react-dom/profiling"
        });
      } else {
        options2.resolve.alias["react-dom$"] = "react-dom/profiling";
      }
    },
    vite: {
      resolve: process.env.NODE_ENV !== "production" ? {} : {
        alias: [
          { find: /^react-dom$/, replacement: "react-dom/profiling" }
        ]
      },
      handleHotUpdate(ctx) {
        if (ctx.file.includes(".million"))
          return;
        instance2.meta.totalTime = 0;
        void reset2();
        store.report();
      },
      configResolved(config) {
        repushPlugin(config.plugins, "anya", [
          // https://github.com/withastro/astro/blob/main/packages/astro/src/vite-plugin-jsx/index.ts#L173
          "astro:jsx",
          // https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react
          "vite:react-babel",
          "vite:react-jsx",
          // https://github.com/preactjs/preset-vite/blob/main/src/index.ts
          "vite:preact-jsx",
          // https://github.com/vitejs/vite-plugin-react-swc/blob/main/src/index.ts
          "vite:react-swc"
        ]);
      }
    }
  };
});
var repushPlugin = (plugins, pluginName, pluginNames) => {
  const namesSet = new Set(pluginNames);
  let baseIndex = -1;
  let targetIndex = -1;
  let targetPlugin;
  for (let i = 0, len = plugins.length; i < len; i += 1) {
    const current = plugins[i];
    if (namesSet.has(current.name) && baseIndex === -1) {
      baseIndex = i;
    }
    if (current.name === pluginName) {
      targetIndex = i;
      targetPlugin = current;
    }
  }
  if (targetPlugin && baseIndex !== -1 && targetIndex !== -1 && baseIndex < targetIndex) {
    plugins.splice(targetIndex, 1);
    plugins.splice(baseIndex, 0, targetPlugin);
  }
};

// compiler/loader.ts
var instance;
async function MillionLintLoader(code) {
  const callback = this.async();
  try {
    const options = this.getOptions();
    if (!instance)
      instance = createBuildInstance(options);
    const id = this.resourcePath;
    if (id.includes("node_modules"))
      return callback(null, code);
    const result = await transform(
      instance,
      { framework: options.framework || "next" },
      options,
      code,
      id
    );
    callback(null, result == null ? void 0 : result.code, result == null ? void 0 : result.map);
  } catch (e) {
    callback(e);
  }
}
