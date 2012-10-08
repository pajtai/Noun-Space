(function () {

  require.config({
    shim: {
      'lodash': {
        'exports': '_'
      },
      'backbone': {
        'deps': ['lodash', 'jquery'],
        'exports': 'Backbone'
      }
    },
    paths: {
      'lodash': '../vendor/lodash.0.7.0',
      'backbone': '../vendor/backbone.0.9.2',
      'raphael': '../vendor/raphael.2.1.0.amd',
      'cache': './cache',
      'GameEngine': './models/GameEngineModel',
      'SpaceShipModel': './models/SpaceShipModel'
    }
  });

  require(['GameEngine'], function (GameEngine) {
    var gameEngine;
    gameEngine = new GameEngine();
    gameEngine.makeBoard();
    return gameEngine.makeSpaceship();
  });

}).call(this);