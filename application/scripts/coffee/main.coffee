require.config
  # The shim config allows us to configure dependencies for
  # scripts that do not call _define()_ to register a module
  shim:
    'lodash':
      'exports': '_'

  paths:
    'lodash'      : '../vendor/lodash.0.7.0'
    'jaws'        : '../vendor/jaws'


require [
  'jaws'
  'GameEngine'
]
, (jaws, GameEngine) ->

  jaws.width = 1000
  # Loading the necessary images into JAWS
  jaws.assets.add("img/planet.png")
  jaws.assets.add("img/rocket.png")
  jaws.assets.add("img/star.png")

  # utility method to load all assets, etc.
  # send options to jaws to with a canvas the size of the screen
  jaws.start(GameEngine,
    'width' : window.innerWidth
    'height': window.innerHeight)
