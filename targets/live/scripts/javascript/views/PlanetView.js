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
    var PlanetView;
    return PlanetView = (function (_super) {

      __extends(PlanetView, _super);

      function PlanetView() {
        this.fell = __bind(this.fell, this);
        return PlanetView.__super__.constructor.apply(this, arguments);
      }

      PlanetView.prototype.selfWidth = 100;

      PlanetView.prototype.selfHeight = 63;

      PlanetView.prototype.initialize = function (mPaper, $window, winWidth, winHeight) {
        this.mPaper = mPaper;
        this.$window = $window;
        this.winWidth = winWidth;
        this.winHeight = winHeight;
        this.position = {
          x: _.random(0, this.winWidth - this.selfWidth),
          y: 0 - this.selfHeight
        };
        return this.render();
      };

      PlanetView.prototype.render = function () {
        this.mSelf = this.mPaper.image('img/planet.png', this.position.x, this.position.y, this.selfWidth, this.selfHeight);
        return this.fall();
      };

      PlanetView.prototype.fall = function () {
        var distance, goTo, time;
        distance = this.winHeight - this.position.y;
        time = distance / (C.SPEED * 0.5);
        goTo = this.winHeight + this.selfHeight;
        return this.mSelf.animate({
          'y': goTo
        }, time, '<', this.fell);
      };

      PlanetView.prototype.fell = function () {
        return this.mSelf.remove();
      };

      PlanetView.prototype.getBBox = function () {
        return this.mSelf.getBBox();
      };

      PlanetView.prototype.stop = function () {
        return this.mSelf.stop();
      };

      return PlanetView;

    })(Backbone.View);
  });

}).call(this);