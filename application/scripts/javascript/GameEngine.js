(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  define(['lodash', 'jaws', 'Ship', 'Planet'], function (_, jaws, Ship, Planet) {
    var GameEngine;
    return GameEngine = (function () {

      function GameEngine() {
        this.checkForCollisions = __bind(this.checkForCollisions, this);

        this.isOutside = __bind(this.isOutside, this);

      }

      GameEngine.prototype.setup = function () {
        jaws.preventDefaultKeys(["left", "right", "up", "down", "space"]);
        this.viewport = new jaws.Viewport({
          max_x: jaws.width,
          max_y: jaws.height
        });
        this.ship = new Ship({
          'x': jaws.width / 2,
          'y': jaws.height - 225
        });
        return this.planets = new jaws.SpriteList;
      };

      GameEngine.prototype.update = function () {
        this.handlePlayerInput();
        this.createEnemies();
        this.moveThings();
        return this.checkForCollisions();
      };

      GameEngine.prototype.draw = function () {
        jaws.context.clearRect(0, 0, jaws.width, jaws.height);
        this.ship.draw();
        return this.planets.draw();
      };

      GameEngine.prototype.handlePlayerInput = function () {
        if (jaws.pressed("left")) {
          this.ship.moveLeft();
        }
        if (jaws.pressed("right")) {
          return this.ship.moveRight();
        }
      };

      GameEngine.prototype.createEnemies = function () {
        if (0 === _.random(0, 300)) {
          return this.planets.push(new Planet(this.viewport));
        }
      };

      GameEngine.prototype.moveThings = function () {
        this.planets.forEach(function (planet) {
          return planet.fall();
        });
        return this.planets.removeIf(this.isOutside);
      };

      GameEngine.prototype.isOutside = function (item) {
        var outside;
        return false;
        outside = this.viewport.isOutside(item);
        if (outside) {
          console.log("deleting");
        }
        return outside;
      };

      GameEngine.prototype.checkForCollisions = function () {
        return jaws.collideOneWithMany(this.ship, this.planets).forEach(function (planet) {
          planet.stop();
          this.ship.stop();
          return alert("GameOver");
        });
      };

      return GameEngine;

    })();
  });

}).call(this);