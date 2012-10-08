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

  define(['backbone', 'constants'], function (Backbone, C) {
    var SpaceShipModel;
    return SpaceShipModel = (function (_super) {

      __extends(SpaceShipModel, _super);

      function SpaceShipModel() {
        return SpaceShipModel.__super__.constructor.apply(this, arguments);
      }

      SpaceShipModel.prototype.initialize = function (position) {
        return this.set({
          'position': position
        });
      };

      SpaceShipModel.prototype.move = function (position) {
        position = this.get('position');
        return this.set({
          'position': {
            'x': position.x,
            'y': position.y
          }
        });
      };

      return SpaceShipModel;

    })(Backbone.Model);
  });

}).call(this);