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
    var GameEngine;
    return GameEngine = (function (_super) {

      __extends(GameEngine, _super);

      function GameEngine() {
        return GameEngine.__super__.constructor.apply(this, arguments);
      }

      return GameEngine;

    })(Backbone.Model);
  });

}).call(this);