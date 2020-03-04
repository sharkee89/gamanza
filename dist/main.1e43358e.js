// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: 'LOAD',
    MENU: 'MENU',
    STAR_FLUID: 'STAR_FLUID',
    STAR_ATLAS: 'STAR_ATLAS',
    STAR: 'STAR'
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.loadImages();
      this.loadAtlas();
      this.initLoadingBar();
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }, {
    key: "loadImages",
    value: function loadImages() {
      // MAIN MENU
      this.load.image('title_bg', './assets/image/title_bg.jpg');
      this.load.image('menu_button', './assets/image/menu_button.png');
      this.load.image('back_button', './assets/image/back.png');
      this.load.image('star_random', './assets/image/star-bg.png');
      this.load.image('star_random_portrait', './assets/image/star-bg-portrait.png');
      this.load.image('star_fluid', './assets/image/star-fluid-bg.png');
      this.load.image('star_fluid_portrait', './assets/image/star-fluid-bg-portrait.png');
    }
  }, {
    key: "loadAtlas",
    value: function loadAtlas() {
      // Star Fluid
      this.load.atlas('backgroundAnim', './assets/image/backgroundAnim.png', './assets/image/backgroundAnim.json'); // Star Atlas

      this.load.atlas('star', './assets/image/star.png', './assets/image/star.json');
    }
  }, {
    key: "initLoadingBar",
    value: function initLoadingBar() {
      var _this = this;

      // LOADING BAR
      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff
        }
      });
      this.load.on('progress', function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      });
      this.load.on('complete', function () {});
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createButton;
exports.createBackButton = createBackButton;
exports.getRandomInt = getRandomInt;

var _CST = require("../CST");

/** @type {import("../typings/phaser")} */
function createButton(button, scene, text, that) {
  button.setInteractive();
  button.on('pointerup', function () {
    that.scene.start(scene);
  });
  button.on('pointerover', function () {
    that.game.canvas.style.cursor = "pointer";
  });
  button.on('pointerout', function () {
    that.game.canvas.style.cursor = "initial";
  });
  var txt = that.add.text(0, 0, text, {
    font: '20px Arial',
    fill: '#fff',
    align: 'center'
  }).setDepth(2);
  txt.x = button.x - txt.width / 2;
  txt.y = button.y - txt.height / 2;
}

function createBackButton(that, interval) {
  var btn = that.add.image(that.game.renderer.width - 64, that.game.renderer.height - 64, 'back_button').setDepth(0);
  btn.setInteractive();
  btn.on('pointerup', function () {
    if (interval) {
      clearInterval(interval);
    }

    that.scene.start(_CST.CST.SCENES.MENU);
  });
  btn.on('pointerover', function () {
    that.game.canvas.style.cursor = "pointer";
  });
  btn.on('pointerout', function () {
    that.game.canvas.style.cursor = "initial";
  });
  btn.setScale(0.15);
  return btn;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "create",
    value: function create() {
      this.setFullBackground();
      this.setLogo();
      this.setButtons();
    }
  }, {
    key: "setFullBackground",
    value: function setFullBackground() {
      var bg = this.add.image(0, 0, 'title_bg');
      bg.displayHeight = this.sys.game.config.height;
      bg.scaleX = bg.scaleY;
      bg.y = this.game.config.height / 2;
      bg.x = this.game.config.width / 2;
    }
  }, {
    key: "setLogo",
    value: function setLogo() {
      var logo = this.add.text(0, this.game.renderer.height * 0.1, 'Gamanza Test', {
        font: '48px Arial',
        fill: '#fff',
        align: 'center'
      }).setDepth(1);
      logo.x = this.game.renderer.width / 2 - logo.width / 2;
    }
  }, {
    key: "setButtons",
    value: function setButtons() {
      this.setButton(_CST.CST.SCENES.STAR_FLUID, 'Zadatak 1.1', -50);
      this.setButton(_CST.CST.SCENES.STAR_ATLAS, 'Zadatak 1.2', 25);
      this.setButton(_CST.CST.SCENES.STAR, 'Zadatak 2', 100);
    }
  }, {
    key: "setButton",
    value: function setButton(scene, text, distance) {
      var starFluidButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + distance, 'menu_button').setDepth(1);
      starFluidButton.setScale(.2);
      (0, _utils.default)(starFluidButton, scene, text, this);
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/scenes/StarFluidScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarFluidScene = void 0;

var _CST = require("../CST");

var _utils = require("./utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StarFluidScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(StarFluidScene, _Phaser$Scene);

  function StarFluidScene() {
    _classCallCheck(this, StarFluidScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(StarFluidScene).call(this, {
      key: _CST.CST.SCENES.STAR_FLUID
    }));
  }

  _createClass(StarFluidScene, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var bg;
      this.setFullBackground(bg);
      (0, _utils.createBackButton)(this);
    }
  }, {
    key: "createStarAnimation",
    value: function createStarAnimation(frame) {
      this.backgroundAnim01 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', "".concat(frame, "_01"));
      this.backgroundAnim02 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', "".concat(frame, "_02"));
      this.backgroundAnim03 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', "".concat(frame, "_03"));
      this.backgroundAnim04 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', "".concat(frame, "_04"));
      this.backgroundAnim05 = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', "".concat(frame, "_05"));
      var sprites = [this.backgroundAnim01, this.backgroundAnim02, this.backgroundAnim03, this.backgroundAnim04, this.backgroundAnim05];
      this.startStarAnimation(sprites, 75);
    }
  }, {
    key: "setFullBackground",
    value: function setFullBackground(bg) {
      if (this.game.config.height > this.game.config.width) {
        bg = this.add.image(0, 0, 'star_fluid_portrait');
        this.createStarAnimation('portrait');
      } else {
        bg = this.add.image(0, 0, 'star_fluid');
        this.createStarAnimation('landscape');
      }

      bg.displayHeight = this.sys.game.config.height;
      bg.scaleX = bg.scaleY;
      bg.y = this.game.config.height / 2;
      bg.x = this.game.config.width / 2;
    }
  }, {
    key: "animateStars",
    value: function animateStars(sprites, time) {
      var _this = this;

      var _loop = function _loop(i) {
        setTimeout(function () {
          _this.juice.fadeInOut(sprites[i]);
        }, i * time);
      };

      for (var i = 0; i < sprites.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "startStarAnimation",
    value: function startStarAnimation(sprites, time) {
      var _this2 = this;

      this.animateStars(sprites, time);
      setInterval(function () {
        _this2.animateStars(sprites, time);
      }, 4000);
    }
  }]);

  return StarFluidScene;
}(Phaser.Scene);

exports.StarFluidScene = StarFluidScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/scenes/StarScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarScene = void 0;

var _CST = require("../CST");

var _utils = require("./utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StarScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(StarScene, _Phaser$Scene);

  function StarScene() {
    _classCallCheck(this, StarScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(StarScene).call(this, {
      key: _CST.CST.SCENES.STAR
    }));
  }

  _createClass(StarScene, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var bg;
      this.setFullBackground(bg);
      this.setSprites();
      (0, _utils.createBackButton)(this);
    }
  }, {
    key: "setFullBackground",
    value: function setFullBackground(bg) {
      if (this.game.config.height > this.game.config.width) {
        bg = this.add.image(0, 0, 'star_random_portrait');
      } else {
        bg = this.add.image(0, 0, 'star_random');
      }

      bg.displayHeight = this.sys.game.config.height;
      bg.scaleX = bg.scaleY;
      bg.y = this.game.config.height / 2;
      bg.x = this.game.config.width / 2;
    }
  }, {
    key: "setSprites",
    value: function setSprites() {
      var _this = this;

      this.star = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'star', 'smallStars_1');
      this.zvezda = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'star', 'zvezdica_1');
      var frameNames = this.textures.get('star').getFrameNames().filter(function (frame) {
        return frame.indexOf('smallStars_') > -1;
      });
      var frameZvezdice = this.textures.get('star').getFrameNames().filter(function (zvezdica) {
        return zvezdica.indexOf('zvezdica_') > -1;
      });
      this.showRandomStars(frameNames, this.star, (0, _utils.getRandomInt)(500, 1000), 5);
      setTimeout(function () {
        _this.showRandomStars(frameZvezdice, _this.zvezda, (0, _utils.getRandomInt)(500, 1000), 7);
      }, 500);
    }
  }, {
    key: "showRandomStars",
    value: function showRandomStars(frames, entity, interval, lastElement) {
      var _this2 = this;

      setInterval(function () {
        if (entity) {
          _this2.juice.fadeOut(entity);
        }

        var frame = frames[(0, _utils.getRandomInt)(0, lastElement)];
        entity = _this2.add.sprite((0, _utils.getRandomInt)(0 + entity.width / 2, window.innerWidth - entity.width / 2), (0, _utils.getRandomInt)(0 + entity.height / 2, window.innerHeight - entity.height / 2), 'star', frame);
        entity.alpha = 0;

        _this2.juice.fadeIn(entity);
      }, interval);
    }
  }]);

  return StarScene;
}(Phaser.Scene);

exports.StarScene = StarScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/scenes/StarAtlasScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarAtlasScene = void 0;

var _CST = require("../CST");

var _utils = require("./utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StarAtlasScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(StarAtlasScene, _Phaser$Scene);

  function StarAtlasScene() {
    _classCallCheck(this, StarAtlasScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(StarAtlasScene).call(this, {
      key: _CST.CST.SCENES.STAR_ATLAS
    }));
  }

  _createClass(StarAtlasScene, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var bg;

      if (this.game.config.height > this.game.config.width) {
        bg = this.add.image(0, 0, 'star_fluid_portrait');
        this.createStarAnimation('portrait');
      } else {
        bg = this.add.image(0, 0, 'star_fluid');
        this.createStarAnimation('landscape');
      }

      bg.displayHeight = this.sys.game.config.height;
      bg.scaleX = bg.scaleY;
      bg.y = this.game.config.height / 2;
      bg.x = this.game.config.width / 2;
      (0, _utils.createBackButton)(this);
    }
  }, {
    key: "createStarAnimation",
    value: function createStarAnimation(frame) {
      this.backgroundAnim = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'backgroundAnim', "".concat(frame, "_01"));
      this.anims.create({
        key: 'fluid',
        frames: [{
          key: 'backgroundAnim',
          frame: "".concat(frame, "_01")
        }, {
          key: 'backgroundAnim',
          frame: "".concat(frame, "_02")
        }, {
          key: 'backgroundAnim',
          frame: "".concat(frame, "_03")
        }, {
          key: 'backgroundAnim',
          frame: "".concat(frame, "_04")
        }, {
          key: 'backgroundAnim',
          frame: "".concat(frame, "_05")
        }],
        frameRate: 10,
        repeat: -1
      });
      this.backgroundAnim.play('fluid');
    }
  }]);

  return StarAtlasScene;
}(Phaser.Scene);

exports.StarAtlasScene = StarAtlasScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"lib/phaserJuice.min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var phaserJuice = /*#__PURE__*/function () {
  function phaserJuice(scene) {
    _classCallCheck(this, phaserJuice);

    this.scene = scene, this.options = function (effectOptions, option) {
      0 === (option = option || {}).x ? option.x = 1e-5 : 0 === option.y && (option.y = 1e-5);
      var config = {
        x: option.x || effectOptions.x,
        y: option.y || effectOptions.y,
        alpha: option.alpha || effectOptions.alpha,
        scaleX: option.scaleX || effectOptions.scaleX,
        scaleY: option.scaleY || effectOptions.scaleY,
        angle: option.angle || effectOptions.angle,
        duration: option.duration || effectOptions.duration,
        yoyo: option.yoyo || effectOptions.yoyo,
        repeat: option.repeat || effectOptions.repeat,
        ease: option.ease || effectOptions.ease,
        delay: option.delay || effectOptions.delay,
        paused: option.paused || effectOptions.paused,
        onStart: option.onStart || effectOptions.onStart,
        onComplete: option.onComplete || effectOptions.onComplete
      };
      return config;
    };
  }

  _createClass(phaserJuice, [{
    key: "add",
    value: function add(target) {
      return this.target = target, this;
    }
  }, {
    key: "shake",
    value: function (_shake) {
      function shake(_x, _x2, _x3) {
        return _shake.apply(this, arguments);
      }

      shake.toString = function () {
        return _shake.toString();
      };

      return shake;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var shakeConfig = {
        x: 5,
        y: 0,
        duration: 50,
        yoyo: !0,
        repeat: 8,
        ease: "Bounce.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(shakeConfig, config);
      return this.shakeTween = scene.tweens.add({
        targets: target,
        x: target.x + options.x,
        y: target.y - options.y,
        duration: options.duration,
        yoyo: options.yoyo,
        repeat: options.repeat,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && shake.remove();
        }
      }), this;
    })
  }, {
    key: "shakeY",
    value: function shakeY(target) {
      null == target && (target = this.target);
      var config = {
        x: 0,
        y: 5
      };
      var shake = this.shake(target, config);
    }
  }, {
    key: "wobble",
    value: function (_wobble) {
      function wobble(_x4, _x5, _x6) {
        return _wobble.apply(this, arguments);
      }

      wobble.toString = function () {
        return _wobble.toString();
      };

      return wobble;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var wobbleConfig = {
        x: 20,
        y: 0,
        duration: 150,
        yoyo: !0,
        repeat: 5,
        ease: "Sine.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(wobbleConfig, config);
      return this.wobbleTween = scene.tweens.add({
        targets: target,
        x: target.x + options.x,
        y: target.y + options.y,
        duration: options.duration,
        yoyo: options.yoyo,
        repeat: options.repeat,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && wobble.remove();
        }
      }), this;
    })
  }, {
    key: "wobbleY",
    value: function wobbleY(target) {
      null == target && (target = this.target);
      var config = {
        x: 0,
        y: 20
      };
      var shake = this.wobble(target, config);
    }
  }, {
    key: "scaleUp",
    value: function scaleUp(target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var growConfig = {
        scaleX: target.scaleX + .25,
        scaleY: target.scaleY + .25,
        duration: 750,
        delay: 0,
        paused: !1
      };
      var options = this.options(growConfig, config);
      return this.scaleUpTween = scene.tweens.add({
        targets: target,
        scaleX: options.scaleX,
        scaleY: options.scaleY,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && grow.remove();
        }
      }), this;
    }
  }, {
    key: "scaleDown",
    value: function scaleDown(target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var shrinkConfig = {
        scaleX: target.scaleX - .25,
        scaleY: target.scaleY - .25,
        duration: 750,
        delay: 0,
        paused: !1
      };
      var options = this.options(shrinkConfig, config);
      return this.scaleDown = scene.tweens.add({
        targets: target,
        scaleX: options.scaleX,
        scaleY: options.scaleY,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && shrink.remove();
        }
      }), this;
    }
  }, {
    key: "pulse",
    value: function (_pulse) {
      function pulse(_x7, _x8, _x9) {
        return _pulse.apply(this, arguments);
      }

      pulse.toString = function () {
        return _pulse.toString();
      };

      return pulse;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var pulseConfig = {
        scaleX: 1.25 * target.scaleX,
        scaleY: 1.25 * target.scaleY,
        duration: 750,
        repeat: 2,
        yoyo: !0,
        ease: "Quad.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(pulseConfig, config);
      return this.pulseTween = scene.tweens.add({
        targets: target,
        scaleX: options.scaleX,
        scaleY: options.scaleY,
        yoyo: options.yoyo,
        repeat: options.repeat,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && pulse.remove();
        }
      }), this;
    })
  }, {
    key: "flash",
    value: function flash(target, duration, color) {
      var scene = this.scene;
      null == target && (target = this.target), null == duration && (duration = 150), null == color && (color = "0xffffff"), target.setTintFill(color);
      var flashTimer = scene.time.addEvent({
        delay: duration,
        callback: function callback() {
          target.setTint("0xffffff");
        },
        callbackScope: this
      });
      return this;
    }
  }, {
    key: "rotate",
    value: function (_rotate) {
      function rotate(_x10, _x11, _x12) {
        return _rotate.apply(this, arguments);
      }

      rotate.toString = function () {
        return _rotate.toString();
      };

      return rotate;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var rotateConfig = {
        angle: 360,
        duration: 500,
        ease: "Circular.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(rotateConfig, config);
      return this.rotateTween = scene.tweens.add({
        targets: target,
        angle: options.angle,
        yoyo: options.yoyo,
        repeat: options.repeat,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && rotate.remove();
        }
      }), this;
    })
  }, {
    key: "bounce",
    value: function (_bounce) {
      function bounce(_x13, _x14, _x15) {
        return _bounce.apply(this, arguments);
      }

      bounce.toString = function () {
        return _bounce.toString();
      };

      return bounce;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var bounceConfig = {
        y: 25,
        duration: 1e3,
        ease: "Bounce",
        delay: 0,
        paused: !1
      };
      var options = this.options(bounceConfig, config);
      return this.bounceTween = scene.tweens.add({
        targets: target,
        y: target.y + options.y,
        repeat: options.repeat,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && bounce.remove();
        }
      }), this;
    })
  }, {
    key: "fadeIn",
    value: function (_fadeIn) {
      function fadeIn(_x16, _x17, _x18) {
        return _fadeIn.apply(this, arguments);
      }

      fadeIn.toString = function () {
        return _fadeIn.toString();
      };

      return fadeIn;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var fadeInConfig = {
        alpha: 1,
        duration: 750,
        ease: "Circular.easeIn",
        delay: 0,
        paused: !1
      };
      var options = this.options(fadeInConfig, config);
      return this.fadeInTween = scene.tweens.add({
        targets: target,
        alpha: options.alpha,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && fadeIn.remove();
        }
      }), this;
    })
  }, {
    key: "fadeOut",
    value: function (_fadeOut) {
      function fadeOut(_x19, _x20, _x21) {
        return _fadeOut.apply(this, arguments);
      }

      fadeOut.toString = function () {
        return _fadeOut.toString();
      };

      return fadeOut;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var fadeOutConfig = {
        alpha: 0,
        duration: 750,
        ease: "Circular.easeOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(fadeOutConfig, config);
      return this.fadeOutTween = scene.tweens.add({
        targets: target,
        alpha: options.alpha,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && fadeOut.remove();
        }
      }), this;
    })
  }, {
    key: "fadeInOut",
    value: function (_fadeInOut) {
      function fadeInOut(_x22, _x23, _x24) {
        return _fadeInOut.apply(this, arguments);
      }

      fadeInOut.toString = function () {
        return _fadeInOut.toString();
      };

      return fadeInOut;
    }(function (target, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == destroy && (destroy = !1);
      var fadeInOutConfig = {
        alpha: 0,
        duration: 500,
        yoyo: !0,
        repeat: 3,
        ease: "Circular.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(fadeInOutConfig, config);
      return this.fadeInOutTween = scene.tweens.add({
        targets: target,
        alpha: options.alpha,
        duration: options.duration,
        yoyo: options.yoyo,
        repeat: options.repeat,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && fadeInOut.remove();
        }
      }), this;
    })
  }, {
    key: "flipX",
    value: function (_flipX) {
      function flipX(_x25, _x26, _x27, _x28) {
        return _flipX.apply(this, arguments);
      }

      flipX.toString = function () {
        return _flipX.toString();
      };

      return flipX;
    }(function (target, direction, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == direction && (direction = !0), null == destroy && (destroy = !1);
      var flipXConfig = {
        scaleX: direction = direction ? -1 : 1,
        duration: 500,
        ease: "Sine.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(flipXConfig, config);
      return this.flipXTween = scene.tweens.add({
        targets: target,
        scaleX: options.scaleX,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && flipX.remove();
        }
      }), this;
    })
  }, {
    key: "flipY",
    value: function (_flipY) {
      function flipY(_x29, _x30, _x31, _x32) {
        return _flipY.apply(this, arguments);
      }

      flipY.toString = function () {
        return _flipY.toString();
      };

      return flipY;
    }(function (target, direction, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == direction && (direction = !0), null == destroy && (destroy = !1);
      var flipYConfig = {
        scaleY: direction = direction ? -1 : 1,
        duration: 500,
        ease: "Sine.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(flipYConfig, config);
      return this.flipYTween = scene.tweens.add({
        targets: target,
        scaleY: options.scaleY,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && flipY.remove();
        }
      }), this;
    })
  }, {
    key: "spinX",
    value: function (_spinX) {
      function spinX(_x33, _x34, _x35, _x36) {
        return _spinX.apply(this, arguments);
      }

      spinX.toString = function () {
        return _spinX.toString();
      };

      return spinX;
    }(function (target, direction, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == direction && (direction = !0), null == destroy && (destroy = !1);
      var spinXConfig = {
        scaleX: direction = direction ? -1 : 1,
        duration: 500,
        yoyo: !0,
        repeat: 3,
        ease: "Sine.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(spinXConfig, config);
      return this.spinXTween = scene.tweens.add({
        targets: target,
        scaleX: options.scaleX,
        yoyo: options.yoyo,
        repeat: options.repeat,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && spinX.remove();
        }
      }), this;
    })
  }, {
    key: "spinY",
    value: function (_spinY) {
      function spinY(_x37, _x38, _x39, _x40) {
        return _spinY.apply(this, arguments);
      }

      spinY.toString = function () {
        return _spinY.toString();
      };

      return spinY;
    }(function (target, direction, config, destroy) {
      var scene = this.scene;
      null == target && (target = this.target), null == direction && (direction = !0), null == destroy && (destroy = !1);
      var spinYConfig = {
        scaleY: direction = direction ? -1 : 1,
        duration: 500,
        yoyo: !0,
        repeat: 3,
        ease: "Sine.easeInOut",
        delay: 0,
        paused: !1
      };
      var options = this.options(spinYConfig, config);
      return this.spinYTween = scene.tweens.add({
        targets: target,
        scaleY: options.scaleY,
        yoyo: options.yoyo,
        repeat: options.repeat,
        duration: options.duration,
        ease: options.ease,
        delay: options.delay,
        paused: options.paused,
        onStart: function onStart(tween, target) {
          void 0 !== options.onStart && options.onStart(tween, target);
        },
        onComplete: function onComplete(tween, target) {
          void 0 !== options.onComplete && options.onComplete(tween, target), destroy && spinY.remove();
        }
      }), this;
    })
  }, {
    key: "reset",
    value: function reset(target) {
      return null == target && (target = this.target), target.setAlpha(1), target.setScale(1), target.setAngle(0), target.setTint("0xffffff"), this;
    }
  }]);

  return phaserJuice;
}();

exports.default = phaserJuice;
},{}],"src/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = void 0;

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _StarFluidScene = require("./scenes/StarFluidScene");

var _StarScene = require("./scenes/StarScene");

var _StarAtlasScene = require("./scenes/StarAtlasScene");

var _phaserJuiceMin = _interopRequireDefault(require("../lib/phaserJuice.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @type {import("../typings/phaser")} */
var game = new Phaser.Game({
  type: Phaser.WEBGL,
  width: window.innerWidth - 20,
  height: window.innerHeight - 20,
  plugins: {
    scene: [{
      key: 'phaserJuice',
      plugin: _phaserJuiceMin.default,
      mapping: 'juice'
    }]
  },
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _StarFluidScene.StarFluidScene, _StarAtlasScene.StarAtlasScene, _StarScene.StarScene],
  physics: {
    default: 'arcade',
    arcade: {
      useTree: false,
      gravity: {
        y: 100
      }
    }
  },
  render: {
    pixelArt: true
  }
});
exports.game = game;
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/StarFluidScene":"src/scenes/StarFluidScene.js","./scenes/StarScene":"src/scenes/StarScene.js","./scenes/StarAtlasScene":"src/scenes/StarAtlasScene.js","../lib/phaserJuice.min.js":"lib/phaserJuice.min.js"}],"C:/Users/Desk/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56518" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Desk/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map