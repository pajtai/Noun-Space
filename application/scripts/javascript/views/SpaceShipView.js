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
    var SpaceShipView;
    return SpaceShipView = (function (_super) {

      __extends(SpaceShipView, _super);

      function SpaceShipView() {
        return SpaceShipView.__super__.constructor.apply(this, arguments);
      }

      SpaceShipView.prototype.initialize = function (mPaper, $window, winWidth, position) {
        this.mPaper = mPaper;
        this.$window = $window;
        this.winWidth = winWidth;
        this.position = position;
        this.render();
        this.addKeyListeners();
        return this.moving = false;
      };

      SpaceShipView.prototype.addKeyListeners = function () {
        var _this = this;
        this.$window.keydown(function (e) {
          var direction, key;
          key = e.which;
          switch (key) {
          case C.LEFT_ARROW:
            direction = C.LEFT;
            break;
          case C.RIGHT_ARROW:
            direction = C.RIGHT;
          }
          return _this.move(direction);
        });
        return this.$window.keyup(function (e) {
          var direction, key;
          key = e.which;
          switch (key) {
          case C.LEFT_ARROW:
            direction = C.LEFT;
            break;
          case C.RIGHT_ARROW:
            direction = C.RIGHT;
          }
          return _this.stop(direction);
        });
      };

      SpaceShipView.prototype.render = function () {
        return this.mSelf = this.mPaper.image('img/rocket.png', this.position.x, this.position.y, 84, 97);
      };

      SpaceShipView.prototype.move = function (direction) {
        var bbox, distance, goTo, shipWidth, shipX, time;
        if (direction === this.moving) {
          return;
        }
        if (!(direction != null)) {
          return;
        }
        this.mSelf.stop();
        this.moving = direction;
        bbox = this.mSelf.getBBox();
        shipWidth = bbox.width;
        switch (direction) {
        case C.LEFT:
          goTo = 0 - 20;
          shipX = Math.min(bbox.x, this.winWidth);
          break;
        case C.RIGHT:
          goTo = this.winWidth - 80;
          shipX = Math.max(bbox.x, 0);
        }
        distance = Math.abs(shipX - goTo);
        time = distance / C.SPEED;
        return this.mSelf.animate({
          'x': "" + goTo
        }, time);
      };

      SpaceShipView.prototype.stop = function (direction) {
        if (!(direction != null)) {
          return;
        }
        if (direction === this.moving) {
          this.moving = false;
          return this.mSelf.stop();
        }
      };

      SpaceShipView.prototype.getBBox = function () {
        return this.mSelf.getBBox();
      };

      return SpaceShipView;

    })(Backbone.View);
  });

}).call(this);