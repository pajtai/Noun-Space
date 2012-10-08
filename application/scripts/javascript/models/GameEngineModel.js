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

  define(['backbone', 'cache', 'BoardView', 'SpaceShipView', 'SpaceShipModel'], function (Backbone, cache, BoardView, SpaceShipView, SpaceShipModel) {
    var GameEngine;
    return GameEngine = (function (_super) {

      __extends(GameEngine, _super);

      function GameEngine() {
        return GameEngine.__super__.constructor.apply(this, arguments);
      }

      GameEngine.prototype.makeBoard = function () {
        return this.mBoardView = new BoardView();
      };

      GameEngine.prototype.makeSpaceship = function () {
        var position;
        this.mSpaceshipView = new SpaceShipView(this.mBoardView.paper());
        position = {
          x: cache.width / 2,
          y: cache.height - 250
        };
        this.mSpaceshipModel = new SpaceShipModel(position);
        this.mSpaceshipModel.on('change:position', function (model, newPosition) {
          return this.mSpaceShipView.drawSelf(newPosition);
        });
        return this.mSpaceshipView.drawSelf(position);
      };

      return GameEngine;

    })(Backbone.Model);
  });

}).call(this);