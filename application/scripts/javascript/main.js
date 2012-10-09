(function () {

  require.config({
    shim: {
      'lodash': {
        'exports': '_'
      },
      'backbone': {
        'deps': ['jquery', 'lodash'],
        'exports': 'Backbone'
      }
    },
    paths: {
      'lodash': '../vendor/lodash.0.7.0',
      'backbone': '../vendor/backbone.0.9.2',
      'raphael': '../vendor/raphael.2.1.0.amd',
      'constatns': './constants',
      'GameEngine': './models/GameEngineModel',
      'BoardView': './views/BoardView',
      'SpaceShipView': './views/SpaceShipView',
      'PlanetView': './views/PlanetView'
    }
  });

  require(['jquery', 'GameEngine'], function ($, GameEngine) {
    var gameEngine;
    gameEngine = new GameEngine();
    gameEngine.makeBoard();
    gameEngine.makeSpaceship();
    return gameEngine.startTime();
  });

}).call(this);