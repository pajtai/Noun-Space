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
    var Star;
    return Star = (function (_super) {

      __extends(Star, _super);

      function Star(viewport) {
        var position, size, starAlpha, starScale;
        this.viewport = viewport;
        position = {
          'x': _.random(0, Sprite.prototype.jaws.width),
          'y': 0
        };
        size = _.random(1, 30);
        starScale = size / 30;
        starAlpha = size / 50;
        this.speed = Speeds.getSpeed('planet') * size / 50;
        Star.__super__.constructor.call(this, {
          'image': 'img/star.png',
          'x': position.x,
          'y': position.y,
          'alpha': starAlpha
        });
        this.scale(starScale);
      }

      return Star;

    })(Sprite);
  });

}).call(this);