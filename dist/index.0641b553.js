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
        name: "Geordi La Forge",
        IP: "Star Trek: Next Generation",
        desc: "watching star trek:\uD83D\uDE34, Geordi starts talking:\uD83D\uDE33",
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
    },
    {
        id: 27,
        name: "Izzy Daniels",
        IP: "Jump In!",
        desc: "favorite DCOM and it's not even close",
        pictureUrl: "https://s.hdnux.com/photos/10/11/16/2134960/6/1200x0.jpg",
        imdescAlt: ""
    },
    {
        id: 28,
        name: "Ms. Bellum",
        IP: "Powerpuff Girls",
        desc: "mm",
        pictureUrl: "https://tvline.com/wp-content/uploads/2021/03/powerpuff-girls-sara-bellum.jpg?w=620",
        imdescAlt: ""
    },
    {
        id: 29,
        name: "Wario",
        IP: "Wario",
        desc: "Only Omar Dogan's depiction of him",
        pictureUrl: "https://preview.redd.it/virgin-luigi-chad-wario-all-credit-to-omardogan1976-on-v0-secqzt3059r91.jpg?width=640&crop=smart&auto=webp&s=d3f954219cbe3a8d7249cb538e0d94947a7aa245",
        imdescAlt: ""
    },
    {
        id: 30,
        name: "Lorna",
        IP: "Over the Garden Wall",
        desc: "voice",
        pictureUrl: "https://i.pinimg.com/originals/e9/56/f7/e956f7008f610251418323e14185feec.png",
        imdescAlt: ""
    },
    {
        id: 31,
        name: "Yusuke Urameshi",
        IP: "Yu Yu Hakusho",
        desc: "mm",
        pictureUrl: "https://i.pinimg.com/originals/06/49/85/064985d6314af40100052d6dbe0c84fc.gif",
        imdescAlt: ""
    },
    {
        id: 32,
        name: "Tanjiro",
        IP: "Demon Slayer",
        desc: "Mexican",
        pictureUrl: "https://www.gifcen.com/wp-content/uploads/2022/03/tanjiro-gif-1.gif",
        imdescAlt: ""
    },
    {
        id: 33,
        name: "Valkyrae",
        IP: "MCU",
        desc: "I know what you are",
        pictureUrl: "https://media.tenor.com/j0gSWGn-kRAAAAAd/valkyrie-thor-ragnarok.gif",
        imdescAlt: ""
    },
    {
        id: 34,
        name: "Spider-Man(ANY)",
        IP: "Marvel",
        desc: "Some are better than others",
        pictureUrl: "https://thumbs.gfycat.com/AdorableLividJoey-size_restricted.gif",
        imdescAlt: ""
    },
    {
        id: 35,
        name: "Shino",
        IP: "Naruto",
        desc: "Bug boy",
        pictureUrl: "https://media.tenor.com/FGcLOxieBtEAAAAM/shino-naruto.gif",
        imdescAlt: ""
    },
    {
        id: 36,
        name: "Sebastian",
        IP: "Stardew Valley",
        desc: "el es emo?!",
        pictureUrl: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/05/Stardew-Valley---Sebastian-wedding-(left)-Sebastians-portrait-(right).jpg",
        imdescAlt: ""
    },
    {
        id: 37,
        name: "Jack Skellington",
        IP: "Nightmare before christmas",
        desc: "He is special to me",
        pictureUrl: "https://m.media-amazon.com/images/M/MV5BMTgwMjAyMzExN15BMl5BanBnXkFtZTcwMDg2ODMyMw@@._V1_.jpg",
        imdescAlt: ""
    },
    {
        id: 38,
        name: "Howl Pendragon",
        IP: "Howl's Moving Castle",
        desc: "Movie is boring as hell but wow",
        pictureUrl: "https://p.favim.com/orig/2018/11/17/studio-ghibli-gif-howl39s-moving-castle-Favim.com-6536864.gif",
        imdescAlt: ""
    },
    {
        id: 39,
        name: "Mordecai",
        IP: "Regular Show",
        desc: "This is a voice-based decision",
        pictureUrl: "https://external-preview.redd.it/IFydAkETBrHEDINecNyqKLjdXd9pRFNdqdBL2-HocrY.png?width=640&crop=smart&auto=webp&s=e3dcfafac827ab363f588aa89496b4a124477842",
        imdescAlt: ""
    },
    {
        id: 40,
        name: "Paddington Bear",
        IP: "Paddington",
        desc: "I adore him",
        pictureUrl: "https://media.npr.org/assets/img/2018/06/05/pb2-ra-00012_wide-e13ace2630a1419a87931c3f2059e3734275f16c.jpg",
        imdescAlt: ""
    },
    {
        id: 41,
        name: "Rodrick Heffley",
        IP: "Diary of a Wimpy Kid",
        desc: "He's been here for 12 years",
        pictureUrl: "https://carboncostume.com/wordpress/wp-content/uploads/2020/08/rodrickheffley-diaryofawimpykid-character-1.jpg",
        imdescAlt: ""
    },
    {
        id: 42,
        name: "Maru",
        IP: "Stardew Valley",
        desc: "STEM girl swag",
        pictureUrl: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/05/Stardew-Valley---Maru-wedding-(left)-Maru-portrait-(right).jpg",
        imdescAlt: ""
    },
    {
        id: 43,
        name: "Wirt",
        IP: "Over the Garden Wall",
        desc: "I think I know where you can get the hat",
        pictureUrl: "https://i.pinimg.com/originals/25/98/90/259890c59ba120eac2bbc651760fb8d8.png",
        imdescAlt: ""
    },
    {
        id: 44,
        name: "Kylo Ren",
        IP: "Star Wars",
        desc: "Since day 1",
        pictureUrl: "https://www.mensjournal.com/wp-content/uploads/2020/05/Driver.jpg?w=900&quality=86&strip=all",
        imdescAlt: ""
    },
    {
        id: 45,
        name: "Optimus Prime",
        IP: "Transformers",
        desc: "he is just the best isnt he",
        pictureUrl: "https://itsastampede615821596.files.wordpress.com/2021/02/best-optimus-prime-movie-quotes.jpg?w=600",
        imdescAlt: ""
    },
    {
        id: 46,
        name: "Rei/Sailor Mars",
        IP: "Sailor Moon",
        desc: "would beat you up",
        pictureUrl: "https://media3.giphy.com/media/11FAUcye6lC28E/giphy.gif",
        imdescAlt: ""
    },
    {
        id: 46,
        name: "Sailor Neptune",
        IP: "Sailor Moon",
        desc: "Cannonically lesbian",
        pictureUrl: "https://i.pinimg.com/originals/53/db/80/53db8014b6a2020c9fd54f53240fdbb4.gif",
        imdescAlt: ""
    },
    {
        id: 47,
        name: "Tuxedo Mask/Darrien",
        IP: "Sailor Moon",
        desc: "Full package",
        pictureUrl: "https://i.gifer.com/KFCQ.gif",
        imdescAlt: ""
    },
    {
        id: 47,
        name: "Joker",
        IP: "Persona",
        desc: "Has anyone ever told you you look like Joker?",
        pictureUrl: "https://i.pinimg.com/originals/26/2e/b8/262eb8a2aee4e7e12f60203ca8dcf8e4.png",
        imdescAlt: ""
    },
    {
        id: 48,
        name: "Strawberry Shortcake Cast",
        IP: "PStrawberry Shortcake",
        desc: "What if we dressed up like them? \uD83D\uDE33",
        pictureUrl: "https://imageservice.disco.peacocktv.com/uuid/4facfd79-e113-3e1c-a82a-36f8a2b13707/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=deab97bc-02c5-3ab4-b50d-939b7384f18a",
        imdescAlt: ""
    },
    {
        id: 49,
        name: "Jigen",
        IP: "Lupin The Third",
        desc: "Something about eyeless characters",
        pictureUrl: "https://i.kym-cdn.com/photos/images/original/001/240/601/47b.gif",
        imdescAlt: ""
    },
    {
        id: 50,
        name: "Gordon Ramsay",
        IP: "Food",
        desc: "Subscribed",
        pictureUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_16/1426313/gordon-ramsay-today-main-190416.jpg",
        imdescAlt: ""
    },
    {
        id: 51,
        name: "Rin",
        IP: "Fruits Basket",
        desc: "She's so fucked up",
        pictureUrl: "https://otakuauthor.com/wp-content/uploads/2020/07/Fruits-Basket-Episode-39-Rin.jpg",
        imdescAlt: "Rin from fruits basket"
    },
    {
        id: 52,
        name: "Juvia",
        IP: "Fairy Tail",
        desc: "Wow she's literally me",
        pictureUrl: "https://i.redd.it/atqs63qro4o81.jpg",
        imdescAlt: ""
    },
    {
        id: 53,
        name: "Mindy",
        IP: "Drake & Josh",
        desc: "I haven't seen one like her since",
        pictureUrl: "https://e.radio-grpp.io/large/2018/07/12/075607_645220.jpg",
        imdescAlt: ""
    },
    {
        id: 54,
        name: "Sailor Jupiter",
        IP: "Sailor Moon",
        desc: "she actually beats up dudes",
        pictureUrl: "https://carboncostume.com/wordpress/wp-content/uploads/2022/02/sailor-jupiter-from-sailor-moon.jpg",
        imdescAlt: ""
    },
    {
        id: 55,
        name: "Sucker Punch Cast",
        IP: "Sucker Punch",
        desc: "It was ahead of its time",
        pictureUrl: "https://cdn.mos.cms.futurecdn.net/JX5KBgSTasEdaTHiUckamg.jpg",
        imdescAlt: ""
    },
    {
        id: 56,
        name: "Asuna",
        IP: "Sword Art Online",
        desc: "Merch, I had merch",
        pictureUrl: "https://media.tenor.com/enIv4g7nYkUAAAAC/yuuki-asuna-sword-art-online.gif",
        imdescAlt: ""
    },
    {
        id: 57,
        name: "The Bratz",
        IP: "Bratz",
        desc: "Some are better than others",
        pictureUrl: "https://static.tvtropes.org/pmwiki/pub/images/uivnay6dc7595jxobzypedmqqj3gzida_yky7bdf9kuyyzdioe2hkul28egj.jpg",
        imdescAlt: ""
    },
    {
        id: 58,
        name: "Chiyuki",
        IP: "Death Parade",
        desc: "I don't care about that man",
        pictureUrl: "https://img.hulu.com/user/v3/artwork/08580b61-4168-4a11-97a9-f606b8e5989a?base_image_bucket_name=image_manager&base_image=87bd71c5-7a6b-4e01-8556-2b74ef6f5456&size=600x338&format=jpeg",
        imdescAlt: ""
    },
    {
        id: 59,
        name: "Tsubaki",
        IP: "Soul Eater",
        desc: "i hate that blue boy",
        pictureUrl: "https://wallpapercave.com/wp/wp8351581.jpg",
        imdescAlt: ""
    },
    {
        id: 60,
        name: "Tae Takemi",
        IP: "Persona",
        desc: "im ill",
        pictureUrl: "https://i.pinimg.com/736x/bf/02/08/bf020843c00f24fd3f40a8f9459f1175.jpg",
        imdescAlt: ""
    },
    {
        id: 61,
        name: "Brock",
        IP: "Pokemon",
        desc: "vhs tape brock",
        pictureUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/brock-cerulean-city.jpg",
        imdescAlt: "brock"
    },
    {
        id: 62,
        name: "Remy",
        IP: "Ratouille",
        desc: "he makes me go ra-ta-toing",
        pictureUrl: "https://static01.nyt.com/images/2020/11/22/multimedia/00xp-ratatouille/00xp-ratatouille-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        imdescAlt: ""
    },
    {
        id: 63,
        name: "Rock Lee",
        IP: "Naruto",
        desc: "hehe",
        pictureUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/rock-lee-Cropped.jpg",
        imdescAlt: ""
    },
    {
        id: 64,
        name: "Mike",
        IP: "Warioware",
        desc: "pew pew",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBZahkUwLVGTacPjASZyO0SzO9bQkFad07A&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 65,
        name: "Puss in boots",
        IP: "Shrek",
        desc: "antonio banderas",
        pictureUrl: "https://i.ytimg.com/vi/vaJ2yQC_ktY/maxresdefault.jpg",
        imdescAlt: ""
    },
    {
        id: 66,
        name: "Tinker Bell Fairies",
        IP: "TinkerBell",
        desc: "all eligible, some are better",
        pictureUrl: "https://i.pinimg.com/originals/94/c6/d0/94c6d00c4997dc550f265de308f49c55.jpg",
        imdescAlt: ""
    },
    {
        id: 67,
        name: "RON(LEGO)",
        IP: "Lego",
        desc: "i collect them",
        pictureUrl: "https://www.lego.com/cdn/cs/set/assets/blta631cc3f048ae96a/HP-Char_Ron_1-Sidekick-Tall.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
        imdescAlt: ""
    },
    {
        id: 68,
        name: "Edward Scissorhands",
        IP: "Edward Scissorhands",
        desc: "he's different",
        pictureUrl: "https://variety.com/wp-content/uploads/2015/12/edward-scissorhands.jpg",
        imdescAlt: ""
    },
    {
        id: 69,
        name: "Jade",
        IP: "Victorious",
        desc: "she was so mean",
        pictureUrl: "https://64.media.tumblr.com/e9735a0ec354689fbbf3db2d5342a4eb/tumblr_inline_o0nxfo9FqY1r8mwrd_540.jpg",
        imdescAlt: ""
    },
    {
        id: 70,
        name: "Monster High Full Cast",
        IP: "Monster High",
        desc: "Everyone is eligible really",
        pictureUrl: "https://i.ytimg.com/vi/jaWdRAjEUkw/maxresdefault.jpg",
        imdescAlt: ""
    },
    {
        id: 71,
        name: "Steve",
        IP: "Blue's Clues",
        desc: "who doesn't",
        pictureUrl: "  https://thumbs.gfycat.com/AngelicEllipticalAndeancondor-max-1mb.gif",
        imdescAlt: ""
    },
    {
        id: 72,
        name: "x-men(all)",
        IP: "x-men",
        desc: "i cant choose",
        pictureUrl: "https://www.looper.com/img/gallery/x-men-characters-we-want-to-see-more-of-in-x-men-97/intro-1638296765.jpg",
        imdescAlt: ""
    },
    {
        id: 73,
        name: "Danny Fenton",
        IP: "Danny Phantom",
        desc: "black hair",
        pictureUrl: "https://i.gifer.com/LIuk.gif",
        imdescAlt: ""
    },
    {
        id: 74,
        name: "Gray Fullbuster",
        IP: "Fairy Tail",
        desc: "no comment",
        pictureUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00b0256b-bb51-4081-82b2-ee6d78e3aa81/d63xuo8-3bed56d7-065c-4bca-b341-2d89bdd6feed.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwYjAyNTZiLWJiNTEtNDA4MS04MmIyLWVlNmQ3OGUzYWE4MVwvZDYzeHVvOC0zYmVkNTZkNy0wNjVjLTRiY2EtYjM0MS0yZDg5YmRkNmZlZWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8WDaMs93ykkv2js-FXskkpwvA8uL-2JAa0IMkwmUCTY",
        imdescAlt: ""
    },
    {
        id: 75,
        name: "Hubert",
        IP: "Fire Emblem",
        desc: "emo",
        pictureUrl: "https://cdnen.samurai-gamers.com/wp-content/uploads/2019/08/02123851/hubertperfectteatime.jpg",
        imdescAlt: ""
    },
    {
        id: 76,
        name: "Kirito",
        IP: "Sword Art Online",
        desc: "I want to be him and asuna at points",
        pictureUrl: "https://static.wikia.nocookie.net/swordartonline/images/6/67/Kirito_SAO.png/revision/latest?cb=20140228021241",
        imdescAlt: ""
    },
    {
        id: 77,
        name: "Mr PeanutButter",
        IP: "Bojack horseman",
        desc: "havent finished the show",
        pictureUrl: "https://www.themarysue.com/wp-content/uploads/2019/07/How-BoJack-Horsemans-Mr.-Peanutbetter-Exposes-the-Problem-with-Nice-Guys.jpg?resize=1200%2C675",
        imdescAlt: ""
    },
    {
        id: 78,
        name: "Noface",
        IP: "spirited away",
        desc: "quiet guy",
        pictureUrl: "https://thumbs.gfycat.com/CandidNegligibleAmericanwarmblood-max-1mb.gif",
        imdescAlt: ""
    },
    {
        id: 79,
        name: "Pheonix Wright",
        IP: "Ace Attorney",
        desc: "smart",
        pictureUrl: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/07/Ace-Attorney-Phoenix-Wright-Sweating-Suit-Court-Trial-Feature.jpg",
        imdescAlt: ""
    },
    {
        id: 80,
        name: "Tokioka",
        IP: "Demon Slayer",
        desc: "so cool",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjhmfIjsPnrvrXj1nSGSJqPs_X8wGE_6tKg&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 81,
        name: "Inosuke",
        IP: "Demon Slayer",
        desc: "cat noir and kirito are to blame",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ROYkyX9QUlPnvam8EQQMjARl_cDm7pn6Rg&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 82,
        name: "Zero",
        IP: "Grand Budapest Hotel",
        desc: "he is in my old sketchbooks",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ygNwiaOCmzKMxH3ffEydJTgPHmfSWCrqsg&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 83,
        name: "Sky high cast",
        IP: "Sky High",
        desc: "couldnt find a pic with all the characters",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPvn-dJ9IxNkH35EbdAFG44AVgdwZKS4n7Q&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 84,
        name: "Karen",
        IP: "Spongebob",
        desc: "she was in charge",
        pictureUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fspongebobgalaxy.fandom.com%2Fwiki%2FKaren_Plankton&psig=AOvVaw0kDAa9BUWHrjTLgDBGJdk4&ust=1673988945703000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMC1zPb8zPwCFQAAAAAdAAAAABAQ",
        imdescAlt: ""
    },
    {
        id: 85,
        name: "Gary",
        IP: "Spongebob",
        desc: "uhh..meow?",
        pictureUrl: "https://assets.entrepreneur.com/content/3x2/2000/20180521195827-gary-spongebob.jpeg",
        imdescAlt: ""
    },
    {
        id: 86,
        name: "Mikasa",
        IP: "Attack on Titan",
        desc: "yeah",
        pictureUrl: "https://inasianspaces.files.wordpress.com/2022/01/7d3yupk.png?w=1200",
        imdescAlt: ""
    },
    {
        id: 87,
        name: "Ponyo",
        IP: "Ponyo",
        desc: "i want her as a pet",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvHcNbHaH6nAunxEiDilsWd4ggV5xHctKng&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 88,
        name: "Tom",
        IP: "Star vs the Forces of Evil",
        desc: "a theme is emerging",
        pictureUrl: "https://static.wikia.nocookie.net/star-and-the-forces-of-evil/images/2/29/S3E12_Star_and_Tom_walking_together_with_pinwheels.png/revision/latest/scale-to-width-down/1920?cb=20171116043411",
        imdescAlt: ""
    },
    {
        id: 89,
        name: "Kyoya",
        IP: "Ouran Highschool Host Club",
        desc: "we've all seen the episode",
        pictureUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.roleplaygateway.com%2Funiverses%2Fouran-high-school-host-club-college-years%2Fcharacters%2Fkyoya-ootori&psig=AOvVaw25cC8o1RYrbmnNQy5nq2kN&ust=1673990772525000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDI192DzfwCFQAAAAAdAAAAABAY",
        imdescAlt: ""
    },
    {
        id: 90,
        name: "Alex",
        IP: "Wizards of Waverly Place",
        desc: "shaped a generation",
        pictureUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.j-14.com%2Fposts%2Fselena-gomez-wizards-of-waverly-place-wand-137845%2F&psig=AOvVaw1U-U-MbDkI9Zel2vmI_VGT&ust=1673990894108000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOis65eEzfwCFQAAAAAdAAAAABAE",
        imdescAlt: ""
    },
    {
        id: 91,
        name: "",
        IP: "",
        desc: "",
        pictureUrl: "https://1gamerdash.com/wp-content/uploads/2020/10/among-us-imposter.jpg",
        imdescAlt: ""
    },
    {
        id: 92,
        name: "DR. Spencer Reid",
        IP: "Criminal Minds",
        desc: "quirky",
        pictureUrl: "https://i.ytimg.com/vi/r4hsieA1ylU/maxresdefault.jpg",
        imdescAlt: ""
    },
    {
        id: 93,
        name: "Baymax",
        IP: "Big Hero 6",
        desc: "",
        pictureUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flumiere-a.akamaihd.net%2Fv1%2Fimages%2Fpp_baymax_herobanner_mobile_22586_56a97a34.jpeg%3Fregion%3D0%2C0%2C640%2C480&imgrefurl=https%3A%2F%2Fdisneyplusoriginals.disney.com%2Fshow%2Fbaymax&tbnid=Opy55rP-zwL-hM&vet=12ahUKEwjkp6D1hs38AhXD2FMKHW1eAs0QMygBegUIARDuAQ..i&docid=PccSWJ3FaIjb0M&w=640&h=480&q=baymax&ved=2ahUKEwjkp6D1hs38AhXD2FMKHW1eAs0QMygBegUIARDuAQ",
        imdescAlt: ""
    },
    {
        id: 94,
        name: "Mr.Mint",
        IP: "Candyland",
        desc: "looks so well-meaning",
        pictureUrl: "https://static.wikia.nocookie.net/candy-land/images/c/c3/Candy_Land_1999_Mister_Mint_Board.jpg/revision/latest?cb=20211214192938",
        imdescAlt: ""
    },
    {
        id: 95,
        name: "Bibble",
        IP: "Barbie",
        desc: "AHHH",
        pictureUrl: "https://i.kym-cdn.com/entries/icons/original/000/026/942/bibble.jpg",
        imdescAlt: ""
    },
    {
        id: 96,
        name: "Soul",
        IP: "Soul Eater",
        desc: "...",
        pictureUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2FVqjX&psig=AOvVaw0u9wx9XYp0tUY6-SdSjvMZ&ust=1673994100045000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPDPwo-QzfwCFQAAAAAdAAAAABAZ",
        imdescAlt: ""
    },
    {
        id: 97,
        name: "Tohru Honda",
        IP: "Fruits Basket",
        desc: "She solos goku",
        pictureUrl: "https://preview.redd.it/5fw0nl85t3571.jpg?auto=webp&s=db79eb99440d30895822d5f3a645bd2a76fc1ee1",
        imdescAlt: ""
    },
    {
        id: 98,
        name: "Misa Amane",
        IP: "Death Note",
        desc: "Light didn't know what he had",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHQL7IbMtR-_JKqF4yjLyF4-9_oeaDdcq-Q&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 99,
        name: "Miku",
        IP: "Miku!",
        desc: "She is an it girl",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRlNsL62up9bEEoOjzyJ6CuUab4G2yGSteA&usqp=CAU",
        imdescAlt: ""
    },
    {
        id: 100,
        name: "BMO",
        IP: "Adventure Time",
        desc: "BMO",
        pictureUrl: "https://i.pinimg.com/originals/0a/6b/18/0a6b1810658fc8fea23038f961435151.jpg",
        imdescAlt: ""
    }
];
shuffle(elephantsArray);
function shuffle(elephantsArray) {
    let currentIndex = elephantsArray.length, randomIndex;
    // While there remain elements to shuffle.
    while(currentIndex != 0){
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [elephantsArray[currentIndex], elephantsArray[randomIndex]] = [
            elephantsArray[randomIndex],
            elephantsArray[currentIndex]
        ];
    }
    return elephantsArray;
}
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
