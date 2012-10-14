(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  define(['jaws', 'require', 'GameEngine'], function (jaws, require, GameEngine) {
    var GameOver;
    return GameOver = (function () {

      function GameOver() {
        this.restart = __bind(this.restart, this);

      }

      GameOver.prototype.setup = function () {
        var body, _this = this;
        this.gameEngine = require('GameEngine');
        jaws.on_keydown(["esc", "space", "enter"], function () {
          return jaws.switchGameState(_this.gameEngine);
        });
        body = document.body;
        return body.addEventListener('touchstart', this.restart, false);
      };

      GameOver.prototype.restart = function () {
        return jaws.switchGameState(this.gameEngine);
      };

      GameOver.prototype.draw = function () {
        jaws.context.font = "bold 60pt terminal";
        jaws.context.lineWidth = 10;
        jaws.context.fillStyle = "Green";
        jaws.context.strokeStyle = "rgba(200,200,200,0.0)";
        jaws.context.fillText("Game Over!", 60, 180);
        return jaws.context.fillText("Hit Enter to play again", 60, 280);
      };

      return GameOver;

    })();
  });

}).call(this);