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

  define(['backbone', 'jquery', 'raphael', 'cache'], function (Backbone, $, Raphael, cache) {
    var BoardView;
    return BoardView = (function (_super) {

      __extends(BoardView, _super);

      function BoardView() {
        return BoardView.__super__.constructor.apply(this, arguments);
      }

/*
          el:
            cache.$board
      */


      BoardView.prototype.initialize = function () {
        return this.render();
      };

      BoardView.prototype.render = function () {
        return this.mPaper = Raphael(document.getElementById('board'), cache.width, cache.height);
      };

      BoardView.prototype.paper = function () {
        return this.mPaper;
      };

      return BoardView;

    })(Backbone.View);
  });

}).call(this);