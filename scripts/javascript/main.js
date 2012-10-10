(function () {

  require.config({
    shim: {
      'lodash': {
        'exports': '_'
      }
    },
    paths: {
      'lodash': '../vendor/lodash.0.7.0',
      'jaws': '../vendor/jaws'
    }
  });

  require(['jaws', 'GameEngine'], function (jaws, GameEngine) {
    return window.onload = function () {
      jaws.width = 1000;
      jaws.assets.add("img/planet.png");
      jaws.assets.add("img/rocket.png");
      jaws.assets.add("img/star.png");
      return jaws.start(GameEngine, {
        'width': window.innerWidth,
        'height': window.innerHeight
      });
    };
  });

}).call(this);