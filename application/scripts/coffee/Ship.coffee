define [
  'jaws'
  'SpeedPass'
]
, (jaws, Speeds) ->

  # TODO: create base class, w stop e.g.
  class Ship extends jaws.Sprite

    constructor: (position) ->

      @speed = Speeds.getSpeed('ship')

      super
        'image' : 'img/rocket.png'
        'x'     : position.x
        'y'     : position.y

    moveLeft: ->
      @x -= @speed

    moveRight: ->
      @x += @speed

    stop: ->
      @speed = 0
