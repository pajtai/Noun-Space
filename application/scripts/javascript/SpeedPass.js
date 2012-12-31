(function () {

  define({
    speeds: (function () {
      var baseSpeed;
      baseSpeed = 6;
      return {
        ship: baseSpeed,
        planet: baseSpeed / 2,
        star: baseSpeed / 3,
        bullet: baseSpeed * 2
      };
    })(),
    getSpeed: function (entity) {
      return this.speeds[entity];
    }
  });

}).call(this);