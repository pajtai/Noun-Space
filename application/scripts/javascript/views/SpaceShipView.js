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

      SpaceShipView.prototype.path = 'M71.234,54.269c0.038-1.293,0.061-2.609,0.061-3.954C71.295,16.368,52.469,3.1,52.469,3.1L49.999,0l-2.47,3.1  c0,0-18.824,13.269-18.824,47.215c0,1.345,0.023,2.66,0.061,3.951l-10.398,10.4V100H29.94V82.1l2.135-2.135  c1.443,6.094,2.803,9.542,2.803,9.542h30.244c0,0,1.359-3.448,2.803-9.542L70.06,82.1V100h11.573V64.666L71.234,54.269z   M49.999,71.347c-3.352,0-6.066-2.715-6.066-6.068c0-3.349,2.715-6.067,6.066-6.067c3.351,0,6.069,2.719,6.069,6.067  C56.068,68.632,53.35,71.347,49.999,71.347z M49.999,53.926c-3.352,0-6.066-2.716-6.066-6.069c0-3.348,2.715-6.066,6.066-6.066  c3.351,0,6.069,2.719,6.069,6.066C56.068,51.21,53.35,53.926,49.999,53.926z M49.999,36.505c-3.352,0-6.066-2.716-6.066-6.07  c0-3.348,2.715-6.065,6.066-6.065c3.351,0,6.069,2.718,6.069,6.065C56.068,33.789,53.35,36.505,49.999,36.505z';

      SpaceShipView.prototype.initialize = function (mPaper) {
        this.mPaper = mPaper;
        return this.render();
      };

      SpaceShipView.prototype.render = function () {
        console.log("rendering");
        return this.mSelf = this.mPaper.path(this.path).attr({
          fill: '#FFF',
          stroke: 'none'
        });
      };

      SpaceShipView.prototype.drawSelf = function (position) {
        return this.mSelf.transform("t" + position.x + "," + position.y);
      };

      return SpaceShipView;

    })(Backbone.View);
  });

}).call(this);