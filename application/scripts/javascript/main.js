(function () {

  require.config({
    paths: {
      'jaws': '../vendor/jaws',
      'GameEngine': './models/GameEngine'
    }
  });

  require(['jaws', 'GameEngine'], function (jaws, GameEngine) {
    return window.onload = function () {
      jaws.width = 1000;
      jaws.assets.add("img/planet.png");
      jaws.assets.add("img/rocket.png");
      return jaws.start(GameEngine, {
        'width': window.innerWidth,
        'height': window.innerHeight
      });
    };
  });

}).call(this);