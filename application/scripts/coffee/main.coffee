require.config
# The shim config allows us to configure dependencies for
# scripts that do not call _define()_ to register a module
  shim:
    'lodash':
      'exports': '_'
    'backbone':
      'deps': [
        'jquery'
        'lodash'
      ]
      'exports': 'Backbone'
  paths:
    'lodash'              : '../vendor/lodash.0.7.0'
    'backbone'            : '../vendor/backbone.0.9.2'
    'raphael'             : '../vendor/raphael.2.1.0.amd'

    'constatns'           : './constants'

    'GameEngine'          : './models/GameEngineModel'

    'BoardView'           : './views/BoardView'
    'SpaceShipView'       : './views/SpaceShipView'
    'PlanetView'          : './views/PlanetView'

require [
  'jquery'
  'GameEngine'
]
, ($, GameEngine) ->

  gameEngine = new GameEngine()
  gameEngine.makeBoard()
  gameEngine.makeSpaceship()
  gameEngine.startTime()