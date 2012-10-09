(function () {
  var __hasProp = {}.hasOwnProperty,
      __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
      };

  define(['backbone', 'BoardView', 'SpaceShipView', 'PlanetView', 'constants', 'lodash', 'raphael'], function (Backbone, BoardView, SpaceShipView, PlanetView, C, _, Raphael) {
    var GameEngine;
    return GameEngine = (function (_super) {

      __extends(GameEngine, _super);

      function GameEngine() {
        return GameEngine.__super__.constructor.apply(this, arguments);
      }

      GameEngine.prototype.initialize = function () {
        this.$window = $(window);
        this.winHeight = this.$window.height();
        this.winWidth = this.$window.width();
        this.$score = $('#score');
        this.age = 0;
        this.planets = 0;
        return this.planetViews = [];
      };

      GameEngine.prototype.makeBoard = function () {
        return this.mBoardView = new BoardView(this.winWidth, this.winHeight);
      };

      GameEngine.prototype.makeSpaceship = function () {
        var position;
        position = {
          x: this.winWidth / 2,
          y: this.winHeight - 250
        };
        return this.mSpaceshipView = new SpaceShipView(this.mBoardView.paper(), this.$window, this.winWidth, position);
      };

      GameEngine.prototype.startTime = function () {
        var _this = this;
        return this.ticker = setInterval(function () {
          _this.createEnemy();
          _this.checkForCollisions();
          return ++_this.age;
        }, C.TICK);
      };

      GameEngine.prototype.createEnemy = function () {
        var rand;
        rand = _.random(0, 100);
        if (0 === rand) {
          ++this.planets;
          this.showScore();
          return this.planetViews.push(new PlanetView(this.mBoardView.paper(), this.$window, this.winWidth, this.winHeight));
        }
      };

      GameEngine.prototype.showScore = function () {
        return this.$score.html("SCORE: " + this.planets);
      };

      GameEngine.prototype.checkForCollisions = function () {
        var planet, _i, _len, _ref, _results;
        _ref = this.planetViews;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          planet = _ref[_i];
          _results.push(this.checkCollision(planet));
        }
        return _results;
      };

      GameEngine.prototype.checkCollision = function (planet) {
        var planetBox, spaceBox, _i, _len, _ref;
        planetBox = planet.getBBox();
        spaceBox = this.mSpaceshipView.getBBox();
        if ((planetBox != null) && (spaceBox != null) && Raphael.isBBoxIntersect(planet.getBBox(), this.mSpaceshipView.getBBox())) {
          clearInterval(this.ticker);
          _ref = this.planetViews;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            planet = _ref[_i];
            planet.stop();
          }
          return alert("Game Over");
        }
      };

      return GameEngine;

    })(Backbone.Model);
  });

}).call(this);