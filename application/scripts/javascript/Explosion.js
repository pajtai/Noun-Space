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
    var Explosion;
    return Explosion = (function (_super) {

      __extends(Explosion, _super);

      function Explosion(position) {
        this.progress = 0;
        this.speed = Speeds.getSpeed('bullet');
        Explosion.__super__.constructor.call(this, {
          'image': 'img/explosion.png',
          'x': position.x,
          'y': position.y
        });
        this.selfScale = 0.5;
        this.scale(this.selfScale);
      }

      Explosion.prototype.moveIt = function () {
        return this.alpha -= 0.01;
      };

      Explosion.prototype.removeMe = function () {
        return this.alpha < 0;
      };

      return Explosion;

    })(Sprite);
  });

}).call(this);