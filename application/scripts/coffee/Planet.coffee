define [
  'lodash'
  'Sprite'
  'SpeedPass'
]
, (_, Sprite, Speeds) ->

  class Planet extends Sprite

    constructor: (@viewport) ->

      position =
        'x': _.random(0, Sprite::jaws.width)
        'y': 0

      @speed = Speeds.getSpeed('planet')
      @horizontalSpeed = _.random(-10, 10) / 10

      super
        'image' : 'img/planet.png'
        'x'     : position.x
        'y'     : position.y

      @scale(_.random(75, 100) / 100)
      @viewport.forceInsideVisibleArea(@, 1)

    moveIt: ->
      @moveDown()
      @x += @horizontalSpeed


