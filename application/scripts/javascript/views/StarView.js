(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  },
      __hasProp = {}.hasOwnProperty,
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
    var StarView;
    return StarView = (function (_super) {

      __extends(StarView, _super);

      function StarView() {
        this.fell = __bind(this.fell, this);
        return StarView.__super__.constructor.apply(this, arguments);
      }

      StarView.prototype.minRadius = 1;

      StarView.prototype.maxRadius = 5;

      StarView.prototype.initialize = function (mPaper, winWidth, winHeight) {
        this.mPaper = mPaper;
        this.winWidth = winWidth;
        this.winHeight = winHeight;
        this.position = {
          x: _.random(0, this.winWidth),
          y: 0
        };
        return this.render();
      };

      StarView.prototype.render = function () {
        var opacity;
        this.radius = _.random(this.minRadius, this.maxRadius);
        opacity = 0.2 * this.radius;
        this.mSelf = this.mPaper.circle(this.position.x, this.position.y, this.radius);
        this.mSelf.attr({
          'fill': '#FFF',
          'opacity': opacity
        });
        return this.fall();
      };

      StarView.prototype.fall = function () {
        var distance, goTo, time;
        distance = this.winHeight - this.position.y;
        time = (6 * distance) / (C.SPEED * this.radius);
        goTo = this.winHeight;
        return this.mSelf.animate({
          'cy': goTo
        }, time, this.fell);
      };

      StarView.prototype.fell = function () {
        return this.mSelf.remove();
      };

      return StarView;

    })(Backbone.View);
  });

}).call(this);