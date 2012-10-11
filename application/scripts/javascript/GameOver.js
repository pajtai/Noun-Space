(function () {

  define(['jaws', 'GameEngine'], function (jaws, GameEngine) {
    var GameOver;
    return GameOver = (function () {

      function GameOver() {}

      GameOver.prototype.setup = function () {
        console.log(GameEngine);
        return jaws.on_keydown(["esc", "space", "enter"], function () {
          return jaws.switchGameState(GameEngine);
        });
      };

      GameOver.prototype.draw = function () {
        jaws.context.font = "bold 60pt terminal";
        jaws.context.lineWidth = 10;
        jaws.context.fillStyle = "White";
        jaws.context.strokeStyle = "rgba(200,200,200,0.0)";
        return jaws.context.fillText("Game Over!", 60, 180);
      };

      return GameOver;

    })();
  });

}).call(this);