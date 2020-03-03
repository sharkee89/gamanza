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
    CARD: 'CARD',
    FIRE: 'FIRE',
    TOOL: 'TOOL',
    STAR_FLUID: 'STAR_FLUID',
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
      var _this = this;

      // MAIN MENU
      this.load.image('title_bg', './assets/image/title_bg.jpg');
      this.load.image('menu_button', './assets/image/menu_button.png');
      this.load.image('back_button', './assets/image/back.png');
      this.load.image('star_random', './assets/image/star-bg.png');
      this.load.image('star_random_portrait', './assets/image/star-bg-portrait.png');
      this.load.image('star_fluid', './assets/image/star-fluid-bg.png');
      this.load.image('star_fluid_portrait', './assets/image/star-fluid-bg-portrait.png'); // LOADING BAR

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff
        }
      });
      this.load.on('progress', function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      });
      this.load.on('complete', function () {}); // CARDS

      var cardIndex = 0;

      for (var i = 0; i < 55; i++) {
        if (i !== 13 && i !== 27 && i !== 41) {
          this.load.spritesheet("card".concat(cardIndex), "assets/sprite/cards/tile0".concat(i, ".png"), {
            frameHeight: 96,
            frameWidth: 72
          });
          cardIndex++;
        }
      } // FIRE


      this.load.image('space', 'assets/particles/starfield.jpg');
      this.load.image('fire1', 'assets/particles/fire1.png');
      this.load.image('fire2', 'assets/particles/fire2.png');
      this.load.image('fire3', 'assets/particles/fire3.png');
      this.load.image('smoke', 'assets/particles/smoke-puff.png');
      this.load.spritesheet('ball', 'assets/particles/plasmaball.png', {
        frameHeight: 128,
        frameWidth: 128
      }); // TOOL

      this.load.spritesheet('euro', 'assets/sprite/euro.png', {
        frameHeight: 128,
        frameWidth: 128
      }); // Star Fluid

      this.load.atlas('backgroundAnim', './assets/image/backgroundAnim.png', './assets/image/backgroundAnim.json'); // Star Random

      this.load.atlas('star', './assets/image/star.png', './assets/image/star.json');
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
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
      var bg = this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
      var logo = this.add.text(0, this.game.renderer.height * 0.2, 'Gamanza Test', {
        font: '48px Arial',
        fill: '#fff',
        align: 'center'
      }).setDepth(1);
      logo.x = this.game.renderer.width / 2 - logo.width / 2;
      var starFluidButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'menu_button').setDepth(1);
      var starButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, 'menu_button').setDepth(1);
      (0, _utils.default)(starFluidButton, _CST.CST.SCENES.STAR_FLUID, 'Zadatak 1', this);
      (0, _utils.default)(starButton, _CST.CST.SCENES.STAR, 'Zadatak 2', this);
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/scenes/CardScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardScene = void 0;

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

var CardScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(CardScene, _Phaser$Scene);

  function CardScene() {
    _classCallCheck(this, CardScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardScene).call(this, {
      key: _CST.CST.SCENES.CARD
    }));
  }

  _createClass(CardScene, [{
    key: "preload",
    value: function preload() {
      this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
    }
  }, {
    key: "create",
    value: function create() {
      var height = 0;
      var cards = [];
      var cardIndex = 0;

      for (var i = 51; i >= 0; i--) {
        var card = this.add.sprite(100, 100 + height, "card".concat(cardIndex)).setDepth(i);
        cards.push(card);
        cardIndex++;
        height += 10;
      }

      var secondDeckWidth = 500;
      var secondDeckHeight = 610;
      var sDepth = 0;
      var cardInterval = setInterval(function () {
        cards[0].x = secondDeckWidth;
        cards[0].y = secondDeckHeight;
        cards[0].setDepth(sDepth);
        secondDeckHeight -= 10;
        sDepth++;
        cards.shift();

        if (!cards.length) {
          clearInterval(cardInterval);
        }
      }, 1000);
      var backButton = (0, _utils.createBackButton)(this, cardInterval);
    }
  }]);

  return CardScene;
}(Phaser.Scene);

exports.CardScene = CardScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/scenes/FireScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FireScene = void 0;

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

var FireScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(FireScene, _Phaser$Scene);

  function FireScene() {
    _classCallCheck(this, FireScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(FireScene).call(this, {
      key: _CST.CST.SCENES.FIRE
    }));
  }

  _createClass(FireScene, [{
    key: "init",
    value: function init() {
      var fpsText;
      var particles;
    }
  }, {
    key: "preload",
    value: function preload() {
      this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
      this.load.image('fire', 'assets/particles/muzzleflash3.png');
      var backButton = (0, _utils.createBackButton)(this);
    }
  }, {
    key: "create",
    value: function create() {
      this.fpsText = this.add.text(10, 10, 'FPS: -- \n-- Particles', {
        font: 'bold 26px Arial',
        fill: '#ffffff'
      });
      this.particles = this.add.particles('fire');
      this.particles.createEmitter({
        alpha: {
          start: 1,
          end: 0
        },
        scale: {
          start: 0.5,
          end: 2.5
        },
        speed: 20,
        accelerationY: -300,
        angle: {
          min: -85,
          max: -95
        },
        rotate: {
          min: -180,
          max: 180
        },
        lifespan: {
          min: 1000,
          max: 1100
        },
        blendMode: 'ADD',
        frequency: 110,
        maxParticles: 10,
        x: 400,
        y: 300
      });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      this.fpsText.setText('FPS: ' + (1000 / delta).toFixed(3) + '\n' + this.particles.emitters.first.alive.length + ' Particles');
    }
  }]);

  return FireScene;
}(Phaser.Scene);

exports.FireScene = FireScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/scenes/ToolScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolScene = void 0;

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

var ToolScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(ToolScene, _Phaser$Scene);

  function ToolScene() {
    _classCallCheck(this, ToolScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToolScene).call(this, {
      key: _CST.CST.SCENES.TOOL
    }));
  }

  _createClass(ToolScene, [{
    key: "preload",
    value: function preload() {
      this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0);
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      if (el1) this.destroy(el1);
      if (el2) this.destroy(el2);
      if (el3) this.destroy(el3);
      var configurations = ['STS', 'SSS', 'SST', 'TST'];
      var el1;
      var el2;
      var el3;
      var fontSize;
      var generatorInterval = setInterval(function () {
        if (el1) _this.destroy(el1);
        if (el2) _this.destroy(el2);
        if (el3) _this.destroy(el3);
        var selectedConfig = configurations[(0, _utils.getRandomInt)(0, configurations.length - 1)];
        var x = (0, _utils.getRandomInt)(100, 650);
        var y = (0, _utils.getRandomInt)(100, 650);
        var fontSize = (0, _utils.getRandomInt)(14, 42);

        switch (selectedConfig) {
          case configurations[0]:
            el1 = _this.displayImage(x, y);
            el2 = _this.displayText(el1.x + el1.width - 78, y, fontSize);
            el3 = _this.displayImage(el2.x + el2.width + 20 + fontSize, y);
            break;

          case configurations[1]:
            el1 = _this.displayImage(x, y);
            el2 = _this.displayImage(el1.x + 100, y);
            el3 = _this.displayImage(el2.x + 100, y);
            break;

          case configurations[2]:
            el1 = _this.displayImage(x, y);
            el2 = _this.displayImage(el1.x + 100, y);
            el3 = _this.displayText(el2.x + el2.width - 78, y, fontSize);
            break;

          case configurations[3]:
            el1 = _this.displayText(x, y, fontSize);
            el2 = _this.displayImage(el1.x + el1.width + 50, y);
            el3 = _this.displayText(el2.x + el2.width - 78, y, fontSize);
            break;
        }
      }, 2000);
      var backButton = (0, _utils.createBackButton)(this, generatorInterval);
    }
  }, {
    key: "destroy",
    value: function destroy(el) {
      if (el.type === 'Sprite') {
        el.destroy();
      }

      if (el.type === 'Text') {
        el.setVisible(false);
      }
    }
  }, {
    key: "displayImage",
    value: function displayImage(x, y) {
      return this.add.sprite(x, y, "euro").setScale(0.5);
    }
  }, {
    key: "displayText",
    value: function displayText(x, y, fontSize) {
      return this.add.text(x, y, 'Sample text', {
        font: "".concat(fontSize, "px Arial"),
        fill: '#fff',
        align: 'center'
      });
    }
  }]);

  return ToolScene;
}(Phaser.Scene);

exports.ToolScene = ToolScene;
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
      var _this = this;

      var bg;

      if (this.game.config.height > this.game.config.width) {
        bg = this.add.image(0, 0, 'star_random_portrait');
      } else {
        bg = this.add.image(0, 0, 'star_random');
      }

      bg.displayHeight = this.sys.game.config.height;
      bg.scaleX = bg.scaleY;
      bg.y = this.game.config.height / 2;
      bg.x = this.game.config.width / 2;
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
      (0, _utils.createBackButton)(this);
    }
  }, {
    key: "showRandomStars",
    value: function showRandomStars(frames, entity, interval, lastElement) {
      var _this2 = this;

      setInterval(function () {
        if (entity) {
          entity.destroy();
        }

        var frame = frames[(0, _utils.getRandomInt)(0, lastElement)];
        entity = _this2.add.sprite((0, _utils.getRandomInt)(0 + entity.width / 2, window.innerWidth - entity.width / 2), (0, _utils.getRandomInt)(0 + entity.height / 2, window.innerHeight - entity.height / 2), 'star', frame);
      }, interval);
    }
  }]);

  return StarScene;
}(Phaser.Scene);

exports.StarScene = StarScene;
},{"../CST":"src/CST.js","./utils":"src/scenes/utils.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = void 0;

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _CardScene = require("./scenes/CardScene");

var _FireScene = require("./scenes/FireScene");

var _ToolScene = require("./scenes/ToolScene");

var _StarFluidScene = require("./scenes/StarFluidScene");

var _StarScene = require("./scenes/StarScene");

/** @type {import("../typings/phaser")} */
var game = new Phaser.Game({
  type: Phaser.WEBGL,
  width: window.innerWidth - 20,
  height: window.innerHeight - 20,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _CardScene.CardScene, _FireScene.FireScene, _ToolScene.ToolScene, _StarFluidScene.StarFluidScene, _StarScene.StarScene],
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
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/CardScene":"src/scenes/CardScene.js","./scenes/FireScene":"src/scenes/FireScene.js","./scenes/ToolScene":"src/scenes/ToolScene.js","./scenes/StarFluidScene":"src/scenes/StarFluidScene.js","./scenes/StarScene":"src/scenes/StarScene.js"}],"../../../.nvm/versions/node/v11.6.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50057" + '/');

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
},{}]},{},["../../../.nvm/versions/node/v11.6.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map