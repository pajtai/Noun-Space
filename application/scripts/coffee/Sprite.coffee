define [
  'jaws'
]
, (jaws) ->

  # This is a base class that allows easy custom setting of speeds using
  # the SpeedPass in the child's constructor
  class Sprite extends jaws.Sprite

    jaws: jaws

    constructor: (position) ->
      super(position)

    moveLeft: ->
      @x -= @speed

    moveRight: ->
      @x += @speed

    moveUp: ->
      @y -= @speed

    moveDown: ->
      @y += @speed

    stop: ->
      @speed = 0