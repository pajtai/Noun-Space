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

  define(['backbone', 'BoardView', 'SpaceShipView', 'SpaceShipModel', 'constants'], function (Backbone, BoardView, SpaceShipView, SpaceShipModel, C) {
    var GameEngine;
    return GameEngine = (function (_super) {

      __extends(GameEngine, _super);

      function GameEngine() {
        return GameEngine.__super__.constructor.apply(this, arguments);
      }

      GameEngine.prototype.initialize = function () {
        this.$window = $(window);
        this.winHeight = this.$window.height();
        this.winWidth = this.$window.width();
        return this.$score = $('#score');
      };

      GameEngine.prototype.makeBoard = function () {
        return this.mBoardView = new BoardView(this.winWidth, this.winHeight);
      };

      GameEngine.prototype.makeSpaceship = function () {
        var position, _this = this;
        position = {
          x: this.winWidth / 2,
          y: this.winHeight - 250
        };
        this.mSpaceshipView = new SpaceShipView(this.mBoardView.paper(), this.$window, this.winWidth);
        this.mSpaceshipView.drawInitial(position);
        $('#score').html("x: " + (Math.floor(position.x)) + ", y: " + (Math.floor(position.y)));
        this.mSpaceshipModel = new SpaceShipModel(position);
        this.mSpaceshipModel.on('change:position', function (model, newPosition) {
          return _this.mSpaceshipView.drawSelf(newPosition);
        });
        return this.mSpaceshipView.on('change:position', function (newPosition) {
          $('#score').html("x: " + (Math.floor(newPosition.x)) + ", y: " + (Math.floor(newPosition.y)));
          return _this.mSpaceshipModel.move(newPosition);
        });
      };

      GameEngine.prototype.redraw = function () {
        return this.mSpaceshipView.checkPosition();
      };

      GameEngine.prototype.startTime = function () {
        var _this = this;
        return setInterval(function () {
          return _this.redraw();
        }, C.TICK);
      };

      return GameEngine;

    })(Backbone.Model);
  });

}).call(this);