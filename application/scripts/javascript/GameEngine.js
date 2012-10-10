(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  define(['lodash', 'jaws', 'Ship', 'Planet', 'Star'], function (_, jaws, Ship, Planet, Star) {
    var GameEngine;
    return GameEngine = (function () {

      function GameEngine() {
        this.checkForCollisions = __bind(this.checkForCollisions, this);

        this.isOutside = __bind(this.isOutside, this);

      }

      GameEngine.prototype.setup = function () {
        jaws.preventDefaultKeys(["left", "right", "up", "down", "space"]);
        this.difficulty = 0;
        this.levelUp = 0;
        this.score = 0;
        this.howManyPlanets = 0;
        this.scoreView = document.getElementById('score');
        this.viewport = new jaws.Viewport({
          max_x: jaws.width,
          max_y: jaws.height
        });
        this.ship = new Ship({
          'x': jaws.width / 2,
          'y': jaws.height - 225
        });
        this.planets = new jaws.SpriteList;
        return this.stars = new jaws.SpriteList;
      };

      GameEngine.prototype.update = function () {
        var rand;
        rand = _.random(0, 100);
        this.handlePlayerInput();
        this.createEnemies(rand);
        this.createStars(rand);
        this.moveThings();
        return this.checkForCollisions();
      };

      GameEngine.prototype.draw = function () {
        jaws.context.clearRect(0, 0, jaws.width, jaws.height);
        this.ship.draw();
        this.planets.draw();
        return this.stars.draw();
      };

      GameEngine.prototype.handlePlayerInput = function () {
        if (jaws.pressed("left")) {
          this.ship.moveLeft();
        }
        if (jaws.pressed("right")) {
          return this.ship.moveRight();
        }
      };

      GameEngine.prototype.createEnemies = function (rand) {
        var planet;
        if ((0 <= rand && rand <= this.difficulty)) {
          ++this.levelUp;
          ++this.howManyPlanets;
          if (this.levelUp === 5) {
            this.levelUp = 0;
            ++this.difficulty;
          }
          planet = new Planet(this.viewport);
          this.viewport.forceInsideVisibleArea(planet, 1);
          this.planets.push(planet);
          return this.scoreView.innerHTML = this.howManyPlanets * (this.difficulty + 1);
        }
      };

      GameEngine.prototype.createStars = function (rand) {
        var star;
        if ((75 < rand && rand < 100)) {
          star = new Star(this.viewport);
          this.viewport.forceInsideVisibleArea(star, 1);
          return this.stars.push(star);
        }
      };

      GameEngine.prototype.moveThings = function () {
        this.planets.forEach(function (planet) {
          return planet.moveDown();
        });
        this.planets.removeIf(this.isOutside);
        this.stars.forEach(function (star) {
          return star.moveDown();
        });
        return this.stars.removeIf(this.isOutside);
      };

      GameEngine.prototype.isOutside = function (item) {
        return this.viewport.isOutside(item);
      };

      GameEngine.prototype.checkForCollisions = function () {
        var _this = this;
        return jaws.collideOneWithMany(this.ship, this.planets).forEach(function (planet) {
          planet.stop();
          _this.ship.stop();
          jaws.switchGameState({
            setup: jaws.context.clearRect(0, 0, jaws.width, jaws.height)
          });
          return alert("GameOver");
        });
      };

      return GameEngine;

    })();
  });

}).call(this);