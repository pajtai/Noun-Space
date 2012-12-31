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

  define(['Sprite', 'SpeedPass'], function (Sprite, Speeds) {
    var Bullet;
    return Bullet = (function (_super) {

      __extends(Bullet, _super);

      function Bullet(position) {
        this.speed = Speeds.getSpeed('bullet');
        Bullet.__super__.constructor.call(this, {
          'image': 'img/bullet.png',
          'x': position.x,
          'y': position.y
        });
        this.scale(0.5);
      }

      Bullet.prototype.moveIt = function () {
        return this.y -= this.speed;
      };

      return Bullet;

    })(Sprite);
  });

}).call(this);