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

  define(['jaws', 'SpeedPass'], function (jaws, Speeds) {
    var Ship;
    return Ship = (function (_super) {

      __extends(Ship, _super);

      function Ship(position) {
        this.speed = Speeds.getSpeed('ship');
        Ship.__super__.constructor.call(this, {
          'image': 'img/rocket.png',
          'x': position.x,
          'y': position.y
        });
      }

      Ship.prototype.moveLeft = function () {
        return this.x -= this.speed;
      };

      Ship.prototype.moveRight = function () {
        return this.x += this.speed;
      };

      Ship.prototype.stop = function () {
        return this.speed = 0;
      };

      return Ship;

    })(jaws.Sprite);
  });

}).call(this);