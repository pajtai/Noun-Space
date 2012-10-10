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

  define(['lodash', 'Sprite', 'SpeedPass'], function (_, Sprite, Speeds) {
    var Planet;
    return Planet = (function (_super) {

      __extends(Planet, _super);

      function Planet(viewport) {
        var position;
        this.viewport = viewport;
        position = {
          'x': _.random(0, Sprite.prototype.jaws.width),
          'y': 0
        };
        this.speed = Speeds.getSpeed('planet');
        Planet.__super__.constructor.call(this, {
          'image': 'img/planet.png',
          'x': position.x,
          'y': position.y
        });
        this.scale(_.random(75, 100) / 100);
      }

      return Planet;

    })(Sprite);
  });

}).call(this);