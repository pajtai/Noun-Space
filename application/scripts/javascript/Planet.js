(function () {

  define(['lodash', 'jaws', 'SpeedPass'], function (_, jaws, Speeds) {
    var Planet;
    return Planet = (function () {

      function Planet(viewport) {
        var position;
        this.viewport = viewport;
        position = {
          'x': _.random(0, jaws.width),
          'y': 0
        };
        this.speed = Speeds.getSpeed('planet');
        this.self = jaws.Sprite({
          'image': 'img/planet.png',
          'x': position.x,
          'y': position.y
        });
      }

      Planet.prototype.draw = function () {
        return this.self.draw();
      };

      Planet.prototype.fall = function () {
        return this.self.y += this.speed;
      };

      Planet.prototype.stop = function () {
        return this.speed = 0;
      };

      return Planet;

    })();
  });

}).call(this);