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

  define(['jaws'], function (jaws) {
    var Sprite;
    return Sprite = (function (_super) {

      __extends(Sprite, _super);

      Sprite.prototype.jaws = jaws;

      function Sprite(position) {
        Sprite.__super__.constructor.call(this, position);
      }

      Sprite.prototype.moveLeft = function () {
        return this.x -= this.speed;
      };

      Sprite.prototype.moveRight = function () {
        return this.x += this.speed;
      };

      Sprite.prototype.moveUp = function () {
        return this.y -= this.speed;
      };

      Sprite.prototype.moveDown = function () {
        return this.y += this.speed;
      };

      Sprite.prototype.stop = function () {
        return this.speed = 0;
      };

      return Sprite;

    })(jaws.Sprite);
  });

}).call(this);