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
    var Ship;
    return Ship = (function (_super) {

      __extends(Ship, _super);

      function Ship(position, viewport) {
        this.viewport = viewport;
        this.speed = Speeds.getSpeed('ship');
        Ship.__super__.constructor.call(this, {
          'image': 'img/rocket.png',
          'x': position.x,
          'y': position.y
        });
      }

      Ship.prototype.moveLeft = function () {
        Ship.__super__.moveLeft.call(this);
        return this.moveInside();
      };

      Ship.prototype.moveRight = function () {
        Ship.__super__.moveRight.call(this);
        return this.moveInside();
      };

      Ship.prototype.moveInside = function () {
        var adj;
        adj = 85;
        if (this.viewport.isLeftOf(this)) {
          this.viewport.forceInside(this, 0);
        }
        if (this.x > Sprite.prototype.jaws.width - adj) {
          return this.x = Sprite.prototype.jaws.width - adj;
        }
      };

      return Ship;

    })(Sprite);
  });

}).call(this);