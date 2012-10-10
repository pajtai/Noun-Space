define [
  'Sprite'
  'SpeedPass'
]
, (Sprite, Speeds) ->

  class Ship extends Sprite

    constructor: (position) ->

      @speed = Speeds.getSpeed('ship')

      super
        'image' : 'img/rocket.png'
        'x'     : position.x
        'y'     : position.y
