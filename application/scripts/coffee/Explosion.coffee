define [
  'Sprite'
  'SpeedPass'
]
, (Sprite, Speeds) ->

  class Explosion extends Sprite

    constructor: (position) ->

      @progress = 0
      @speed = Speeds.getSpeed('bullet')

      super
        'image' : 'img/explosion.png'
        'x'           : position.x
        'y'           : position.y

      @selfScale = 0.5
      @scale(@selfScale)

    moveIt: ->
      @alpha -= 0.01

    removeMe: ->
      @alpha < 0
