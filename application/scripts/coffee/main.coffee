require.config
# The shim config allows us to configure dependencies for
# scripts that do not call _define()_ to register a module
  shim:
    'lodash':
      'exports': '_'
    'backbone':
      'deps': [
        'lodash'
        'jquery'
      ]
      'exports': 'Backbone'
  paths:
    'lodash'              : '../vendor/lodash.0.7.0'
    'backbone'            : '../vendor/backbone.0.9.2'
    'raphael'             : '../vendor/raphael.2.1.0.amd'

    'cache'               : './cache'

    'GameEngine'          : './models/GameEngineModel'
    'SpaceShipModel'      : './models/SpaceShipModel'

    'BoardView'           : './views/BoardView'
    'SpaceShipView'       : './views/SpaceShipView'

require [
  'jquery'
  'cache'
  'GameEngine'
]
, ($, cache, GameEngine) ->


  cache.$window = $(window)
  cache.height = cache.$window.height()
  cache.width = cache.$window.width()
  cache.$board = $('#board')
  cache.$score = $('#score')

  gameEngine = new GameEngine()
  gameEngine.makeBoard()
  gameEngine.makeSpaceship()