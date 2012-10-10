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

      function Ship(position) {
        this.speed = Speeds.getSpeed('ship');
        Ship.__super__.constructor.call(this, {
          'image': 'img/rocket.png',
          'x': position.x,
          'y': position.y
        });
      }

      return Ship;

    })(Sprite);
  });

}).call(this);