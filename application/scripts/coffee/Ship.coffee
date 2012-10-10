define [
  'jaws'
  'SpeedPass'
]
, (jaws, Speeds) ->

  # TODO: create base class, w stop e.g.
  class Ship

    constructor: (position) ->

      @speed = Speeds.getSpeed('ship')
      @self = jaws.Sprite
        'image' : 'img/rocket.png'
        'x'     : position.x
        'y'     : position.y

    draw: ->
      @self.draw()

    moveLeft: ->
      @self.x -= @speed

    moveRight: ->
      @self.x += @speed

    stop: ->
      @speed = 0
