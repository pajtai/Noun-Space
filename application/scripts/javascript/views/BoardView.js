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

  define(['backbone', 'jquery', 'raphael'], function (Backbone, $, Raphael) {
    var BoardView;
    return BoardView = (function (_super) {

      __extends(BoardView, _super);

      function BoardView() {
        return BoardView.__super__.constructor.apply(this, arguments);
      }

      BoardView.prototype.el = $('#board');

      BoardView.prototype.initialize = function (width, height) {
        this.width = width;
        this.height = height;
        return this.render();
      };

      BoardView.prototype.render = function () {
        return this.mPaper = Raphael(this.el, this.width, this.height);
      };

      BoardView.prototype.paper = function () {
        return this.mPaper;
      };

      return BoardView;

    })(Backbone.View);
  });

}).call(this);