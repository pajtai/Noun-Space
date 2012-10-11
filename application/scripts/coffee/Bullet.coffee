define [
  'lodash'
  'Sprite'
  'SpeedPass'
]
, (_, Sprite, Speeds) ->

  class Bullet extends Sprite

    constructor: (position) ->

      @speed = Speeds.getSpeed('bullet')

      super
        'image' : 'img/bullet.png'
        'x'           : position.x
        'y'           : position.y

      @scale(0.5)

    moveIt: ->
      @y -= @speed
