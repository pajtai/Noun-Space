(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  define(['lodash', 'jaws', 'Ship', 'Planet', 'Star', 'GameOver', 'Bullet', 'Explosion'], function (_, jaws, Ship, Planet, Star, GameOver, Bullet, Explosion) {
    var GameEngine;
    return GameEngine = (function () {

      function GameEngine() {
        this.checkForCollisions = __bind(this.checkForCollisions, this);

        this.explosionCheck = __bind(this.explosionCheck, this);

        this.isOutside = __bind(this.isOutside, this);

        this.onTouchStop = __bind(this.onTouchStop, this);

        this.onTouchMove = __bind(this.onTouchMove, this);

        this.onTouchStart = __bind(this.onTouchStart, this);

      }

      GameEngine.prototype.setup = function () {
        jaws.preventDefaultKeys(["left", "right", "up", "down", "space"]);
        this.difficulty = 0;
        this.levelUp = 0;
        this.score = 0;
        this.howManyPlanets = 0;
        this.canShoot = true;
        this.scoreView = document.getElementById('score');
        this.viewport = new jaws.Viewport({
          max_x: jaws.width,
          max_y: jaws.height
        });
        this.ship = new Ship({
          'x': jaws.width / 2,
          'y': jaws.height - 225
        }, this.viewport);
        this.currentX = false;
        this.addTouchListeners();
        this.planets = new jaws.SpriteList;
        this.stars = new jaws.SpriteList;
        this.bullets = new jaws.SpriteList;
        return this.explosions = new jaws.SpriteList;
      };

      GameEngine.prototype.addTouchListeners = function () {
        var body;
        body = document.body;
        body.addEventListener('touchstart', this.onTouchStart, false);
        body.addEventListener('touchmove', this.onTouchMove, false);
        return body.addEventListener('touchend', this.onTouchStop, false);
      };

      GameEngine.prototype.onTouchStart = function (event) {
        if (this.multiFinger(event)) {
          return;
        }
        event.preventDefault();
        return this.currentX = event.touches[0].pageX;
      };

      GameEngine.prototype.onTouchMove = function (event) {
        if (this.multiFinger(event)) {
          return;
        }
        event.preventDefault();
        return this.currentX = event.touches[0].pageX;
      };

      GameEngine.prototype.onTouchStop = function (event) {
        if (this.multiFinger(event)) {
          return;
        }
        event.preventDefault();
        return this.currentX = false;
      };

      GameEngine.prototype.multiFinger = function (event) {
        return event.touches.length > 1 || (event.scale && event.scale === !1);
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
        this.stars.draw();
        this.bullets.draw();
        return this.explosions.draw();
      };

      GameEngine.prototype.handlePlayerInput = function () {
        if (jaws.pressed("left")) {
          this.ship.moveLeft();
        }
        if (jaws.pressed("right")) {
          this.ship.moveRight();
        }
        if (jaws.pressed("space")) {
          this.shoot();
        }
        if (this.currentX > 0) {
          this.shoot();
          return this.ship.goTo(this.currentX);
        }
      };

      GameEngine.prototype.shoot = function () {
        var bullet1, bullet2, _this = this;
        if (!this.canShoot) {
          return;
        }
        this.canShoot = false;
        setTimeout(function () {
          return _this.canShoot = true;
        }, 500);
        bullet1 = new Bullet({
          'x': this.ship.x + 3,
          'y': this.ship.y
        });
        this.bullets.push(bullet1);
        bullet2 = new Bullet({
          'x': this.ship.x + 72,
          'y': this.ship.y
        });
        return this.bullets.push(bullet2);
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
          this.planets.push(planet);
          return this.showScore();
        }
      };

      GameEngine.prototype.showScore = function () {
        return this.scoreView.innerHTML = "SCORE: " + (this.howManyPlanets * (this.difficulty + 1)) + " - fps: " + jaws.game_loop.fps;
      };

      GameEngine.prototype.createStars = function (rand) {
        var star;
        if ((75 < rand && rand < 100)) {
          star = new Star(this.viewport);
          return this.stars.push(star);
        }
      };

      GameEngine.prototype.moveThings = function () {
        this.planets.forEach(function (planet) {
          return planet.moveIt();
        });
        this.planets.removeIf(this.isOutside);
        this.stars.forEach(function (star) {
          return star.moveDown();
        });
        this.stars.removeIf(this.isOutside);
        this.bullets.forEach(function (bullet) {
          return bullet.moveIt();
        });
        this.bullets.removeIf(this.isOutside);
        this.explosions.forEach(function (explosion) {
          return explosion.moveIt();
        });
        return this.explosions.removeIf(this.explosionCheck);
      };

      GameEngine.prototype.isOutside = function (item) {
        return this.viewport.isOutside(item);
      };

      GameEngine.prototype.explosionCheck = function (explosion) {
        return explosion.removeMe();
      };

      GameEngine.prototype.checkForCollisions = function () {
        var _this = this;
        jaws.collideOneWithMany(this.ship, this.planets).forEach(function (planet) {
          planet.stop();
          _this.ship.stop();
          return jaws.switchGameState(GameOver);
        });
        return jaws.collideManyWithMany(this.bullets, this.planets).forEach(function (pair) {
          var bullet, explosion, planet;
          bullet = pair[0];
          planet = pair[1];
          explosion = new Explosion({
            'x': planet.x,
            'y': planet.y
          });
          _this.explosions.push(explosion);
          _this.bullets.remove(bullet);
          _this.planets.remove(planet);
          _this.howManyPlanets += 1;
          return _this.showScore();
        });
      };

      return GameEngine;

    })();
  });

}).call(this);