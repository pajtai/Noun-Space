(function () {

  define({
    speeds: (function () {
      var baseSpeed;
      baseSpeed = 5;
      return {
        ship: baseSpeed,
        planet: baseSpeed / 2
      };
    })(),
    getSpeed: function (entity) {
      return this.speeds[entity];
    }
  });

}).call(this);