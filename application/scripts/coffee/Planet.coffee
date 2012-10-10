define [
  'lodash'
  'jaws'
  'SpeedPass'
]
, (_, jaws, Speeds) ->

  class Planet

    constructor: (@viewport) ->

      position =
        'x': _.random(0, jaws.width)
        'y': 0

      @speed = Speeds.getSpeed('planet')
      @self = jaws.Sprite
        'image' : 'img/planet.png'
        'x'     : position.x
        'y'     : position.y

    draw: ->
      @self.draw()

    fall: ->
      @self.y += @speed

    stop: ->
      @speed = 0