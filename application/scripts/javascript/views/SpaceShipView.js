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

  define(['backbone'], function (Backbone) {
    var SpaceShipView;
    return SpaceShipView = (function (_super) {

      __extends(SpaceShipView, _super);

      function SpaceShipView() {
        return SpaceShipView.__super__.constructor.apply(this, arguments);
      }

      return SpaceShipView;

    })(Backbone.View);
  });

}).call(this);