(function () {

  define(['jaws', 'SpeedPass'], function (jaws, Speeds) {
    var Ship;
    return Ship = (function () {

      function Ship(position) {
        this.speed = Speeds.getSpeed('ship');
        this.self = jaws.Sprite({
          'image': 'img/rocket.png',
          'x': position.x,
          'y': position.y
        });
      }

      Ship.prototype.draw = function () {
        return this.self.draw();
      };

      Ship.prototype.moveLeft = function () {
        return this.self.x -= this.speed;
      };

      Ship.prototype.moveRight = function () {
        return this.self.x += this.speed;
      };

      Ship.prototype.stop = function () {
        return this.speed = 0;
      };

      return Ship;

    })();
  });

}).call(this);