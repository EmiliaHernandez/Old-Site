// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
// we will create an array of JS objects with the properties of our elephants
// we use const here cause the variable doesn't change after
// we have 4 items inside the array, each item is an object with 6 properties. An id, name, IP, desc, imdesc and alt description.
const elephantsArray = [
    {
        id: 1,
        name: "Byleth(Both Versions)",
        IP: "Fire Emblem",
        desc: "They are both fine",
        pictureUrl: "https://pbs.twimg.com/media/EBoxPMzXUAA3URH.png",
        imdescAlt: "They are both fine"
    },
    {
        id: 2,
        name: "C3PO",
        IP: "Star Wars",
        desc: "gay is okay",
        pictureUrl: "https://preview.free3d.com/img/2015/03/2408157595903722762/meftys0n.jpg",
        imdescAlt: "dark elephant"
    },
    {
        id: 3,
        name: "Cana",
        IP: "Fairy Tail",
        desc: "(.)(.)\uD83C\uDF77",
        pictureUrl: "https://64.media.tumblr.com/05c0d65f0ca79483eeea2d6e2eeb9c6e/tumblr_inline_o2wgyqHcRz1t4w1ob_400.png",
        imdescAlt: "papa elephant"
    },
    {
        id: 4,
        name: "Cassius 'Cash' Green",
        IP: "Sorry to Both You",
        desc: "wanted to name the cat after him if boy",
        pictureUrl: "https://goggler.my/wp-content/uploads/2020/03/sorry-to-bother-you-5e16f95e951ce.jpg",
        imdescAlt: "playful elephant"
    },
    {
        id: 5,
        name: "Chrollo",
        IP: "HunterxHunter",
        desc: "this should come as a surprise to no one",
        pictureUrl: "https://dafunda.com/wp-content/uploads/2021/06/Kemampuan-Nen-Miliknya.jpg",
        imdescAlt: "Chrollo from HXH"
    },
    {
        id: 6,
        name: "Cat Noir",
        IP: "Miraculous LadyBug",
        desc: "Cat noir, NOT Adrien!",
        pictureUrl: "https://qph.cf2.quoracdn.net/main-qimg-1d41a105852966d5a1388e44edd00c2c-pjlq",
        imdescAlt: "Cat Noir from miraculous ladybug"
    },
    {
        id: 7,
        name: "Chase Mathews",
        IP: "Zoey101",
        desc: "my exposure to a simp",
        pictureUrl: "https://www.independent.ie/incoming/28eb3/36053220.ece/AUTOCROP/w1240h700/chase.png",
        imdescAlt: "chase from zoey101"
    },
    {
        id: 8,
        name: "Chidi Anagonye",
        IP: "The Good Place",
        desc: "Written by a woman",
        pictureUrl: "https://imgix.bustle.com/rehost/2016/9/29/22972c3e-eb7c-4e69-b5c7-284c25ce88a6.JPG?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
        imdescAlt: "Chidi Anagonye from the goodplace"
    },
    {
        id: 9,
        name: "Emily",
        IP: "Corpse Bride",
        desc: "Best burton girl?",
        pictureUrl: "https://wallpapercave.com/wp/wp9983370.jpg",
        imdescAlt: ""
    },
    {
        id: 10,
        name: "Dave Navarro",
        IP: "Ink Master",
        desc: "He is a character in my brain",
        pictureUrl: "https://www.looper.com/img/gallery/what-ink-master-fans-want-to-see-in-a-new-season/l-intro-1614702911.jpg",
        imdescAlt: ""
    },
    {
        id: 11,
        name: "Deana Troi",
        IP: "Star Trek: Next Generation",
        desc: "i clap i clap whenever she appears",
        pictureUrl: "https://imagez.tmz.com/image/d4/4by3/2020/01/23/d4ce1f06284c4ac09d840d2833cfaf04_md.jpg",
        imdescAlt: ""
    },
    {
        id: 12,
        name: "Doc-Ock",
        IP: "Spider-Man Franchise",
        desc: "if nobody picks him i might have to",
        pictureUrl: "https://www.thewrap.com/wp-content/uploads/2021/12/spider-man-2-doc-ock.jpg",
        imdescAlt: ""
    },
    {
        id: 13,
        name: "Domino",
        IP: "Deadpool 2",
        desc: "put her back on my screen NOW",
        pictureUrl: "https://www.denofgeek.com/wp-content/uploads/2021/11/deadpool-2-domino-zazie-beetz-fox.jpg?resize=768%2C432",
        imdescAlt: ""
    },
    {
        id: 14,
        name: "House leaders",
        IP: "Fire Emblem: 3 Houses",
        desc: "I think they all have a little of something i like",
        pictureUrl: "https://www.gamespot.com/a/uploads/scale_landscape/1575/15759911/3566997-fire-emblem-3-houses-gift-guide-2019-features-promo12.jpg",
        imdescAlt: ""
    },
    {
        id: 15,
        name: "El Diablo",
        IP: "Suicide Squad",
        desc: "latino",
        pictureUrl: "https://tvovermind.com/wp-content/uploads/2018/04/El-Diablo-640x384.jpg",
        imdescAlt: ""
    },
    {
        id: 16,
        name: "Eraserhead",
        IP: "My Hero Academia",
        desc: "i knew as soon as he walked in",
        pictureUrl: "https://staticg.sportskeeda.com/editor/2022/11/75953-16672896403619-1920.jpg",
        imdescAlt: ""
    },
    {
        id: 17,
        name: "Lina",
        IP: "Bratz: Fashion Pixiez",
        desc: "I wanted to be her SO bad as an 8 year old",
        pictureUrl: "https://i.pinimg.com/736x/98/b1/68/98b1685265685582a6947fb92f525245.jpg",
        imdescAlt: ""
    },
    {
        id: 18,
        name: "Ferb and Vanessa",
        IP: "Phineas and Ferb",
        desc: "He was a silent character and I idolized him",
        pictureUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2018-03/6/16/asset/buzzfeed-prod-fastlane-03/sub-buzz-6491-1520370863-5.jpg?crop=1501:1000;80,0",
        imdescAlt: ""
    },
    {
        id: 19,
        name: "Team Azula",
        IP: "Avatar",
        desc: "i dont care if she's crazy",
        pictureUrl: "https://dankanator.com/wp-content/uploads/2020/10/avatar-original-plan-azula-team-different-no-ty-lee-mai.jpg",
        imdescAlt: ""
    },
    {
        id: 20,
        name: "Garnet",
        IP: "Steven Universe",
        desc: "my birthstone and favorite crystal gem",
        pictureUrl: "https://studybreaks.com/wp-content/uploads/2017/05/tumblr_mveqpzE9LV1rgmtf9o6_1280.png",
        imdescAlt: ""
    },
    {
        id: 21,
        name: "Geordi Laforge",
        IP: "Star Trek: Next Generation",
        desc: "Engineer",
        pictureUrl: "https://i.insider.com/5652f613dd089511058b4636?width=750&format=jpeg&auto=webp",
        imdescAlt: ""
    },
    {
        id: 25,
        name: "Jill Stingray",
        IP: "Va-11 Hall-a",
        desc: "mhm",
        pictureUrl: "https://c4.wallpaperflare.com/wallpaper/70/552/866/anime-girls-artwork-va-11-hall-a-wallpaper-preview.jpg",
        imdescAlt: ""
    },
    {
        id: 23,
        name: "Wilt",
        IP: "Fosters Home for Imaginary Friends",
        desc: "I wanted him to be real",
        pictureUrl: "https://thumbs.gfycat.com/AnxiousSoggyIvorybackedwoodswallow-size_restricted.gif",
        imdescAlt: ""
    },
    {
        id: 24,
        name: "Tim",
        IP: "Mysims",
        desc: "i love him so much",
        pictureUrl: "https://static1.personality-database.com/profile_images/befe7c260f7a43f39d32b77d83b796d7.png",
        imdescAlt: ""
    },
    {
        id: 22,
        name: "Gir",
        IP: "Invader Zim",
        desc: "drew him all the time",
        pictureUrl: "https://www.pngitem.com/pimgs/m/147-1475033_gir-png-gir-png-invader-zim-gir-dog.png",
        imdescAlt: ""
    },
    {
        id: 26,
        name: "Kurama",
        IP: "Yu yu Hakusho",
        desc: "Pink is my favorite color",
        pictureUrl: "https://animesher.com/orig/1/190/1905/19056/animesher.com_long-hair-green-eyes-shuichi-minamino-1905613.gif",
        imdescAlt: ""
    }
];
//https://static.wikia.nocookie.net/powerlisting/images/7/78/Rose_Whip.gif/revision/latest?cb=20190307190944
let htmlCode = ``;
// to get each single elephant object from the array and use them to build out html string, we need to open up our array, and we do that using forEach method. The forEach method, finds each item(object) in the array and returns them, this means we get 4 items that are objects back.
elephantsArray.forEach(function(singleElephantObjects) {
    htmlCode = htmlCode + `
    <article>
      <div>
      <img src="${singleElephantObjects.pictureUrl}" alt="${singleElephantObjects.imdescAlt}">
      </div>
      <div>
      <h3>${singleElephantObjects.name}</h3>
      <p>${singleElephantObjects.IP}</p>
      <p>${singleElephantObjects.desc}</p>
      </div>
    </article>
  `;
});
const elephantCards = document.querySelector(".all-elephant-cards");
elephantCards.innerHTML = htmlCode;

},{}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire716c")

//# sourceMappingURL=index.0641b553.js.map
