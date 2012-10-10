require.config
  paths:
    'jaws'        : '../vendor/jaws'
    'GameEngine'  : './models/GameEngine'

require [
  'jaws'
  'GameEngine'
]
, (jaws, GameEngine) ->

  window.onload = ->

    jaws.width = 1000
    # Loading the necessary images into JAWS
    jaws.assets.add("img/planet.png")
    jaws.assets.add("img/rocket.png")

    # utility method to load all assets, etc.
    # send options to jaws to with a canvas the size of the screen
    jaws.start(GameEngine,
      'width' : window.innerWidth
      'height': window.innerHeight)
