(function () {

  define(['jaws'], function (jaws) {
    return {
      setup: function () {
        jaws.preventDefaultKeys(["left", "right", "up", "down", "space"]);
        return this.ship = jaws.Sprite({
          'image': 'img/rocket.png',
          'x': 100,
          'y': 100
        });
      },
      update: function () {
        return this.handlePlayerInput();
      },
      draw: function () {
        jaws.context.clearRect(0, 0, jaws.width, jaws.height);
        return this.ship.draw();
      },
      handlePlayerInput: function () {
        if (jaws.pressed("left")) {
          this.ship.x = this.ship.x - 2;
        }
        if (jaws.pressed("right")) {
          this.ship.x = this.ship.x + 2;
        }
        if (jaws.pressed("up")) {
          this.ship.y = this.ship.y - 2;
        }
        if (jaws.pressed("down")) {
          return this.ship.y = this.ship.y + 2;
        }
      }
    };
  });

}).call(this);