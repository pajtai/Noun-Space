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
      'SpaceShipModel': './models/SpaceShipModel',
      'BoardView': './views/BoardView',
      'SpaceShipView': './views/SpaceShipView'
    }
  });

  require(['jquery', 'cache', 'GameEngine'], function ($, cache, GameEngine) {
    var gameEngine;
    cache.$window = $(window);
    cache.height = cache.$window.height();
    cache.width = cache.$window.width();
    cache.$board = $('#board');
    cache.$score = $('#score');
    gameEngine = new GameEngine();
    gameEngine.makeBoard();
    return gameEngine.makeSpaceship();
  });

}).call(this);