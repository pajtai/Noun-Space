define [
  'lodash'
  'jaws'
  'SpeedPass'
]
, (_, jaws, Speeds) ->

  class Planet extends jaws.Sprite

    constructor: (@viewport) ->

      position =
        'x': _.random(0, jaws.width)
        'y': 0

      @speed = Speeds.getSpeed('planet')

      super
        'image' : 'img/planet.png'
        'x'     : position.x
        'y'     : position.y

    fall: ->
      @y += @speed

    stop: ->
      @speed = 0