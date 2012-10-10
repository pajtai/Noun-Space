define [
  'lodash'
  'Sprite'
  'SpeedPass'
]
, (_, Sprite, Speeds) ->

  class Star extends Sprite

    constructor: (@viewport) ->

      position =
        'x': _.random(0, Sprite::jaws.width)
        'y': 0



      size = _.random(1, 30)
      starScale = size / 30
      starAlpha = size / 50

      @speed = Speeds.getSpeed('planet') / (size / 10)

      super
        'image' : 'img/star.png'
        'x'           : position.x
        'y'           : position.y
        'alpha'       : starAlpha

      @scale(starScale)
