define [
  'Sprite'
  'SpeedPass'
]
, (Sprite, Speeds) ->

  class Ship extends Sprite

    constructor: (position, @viewport) ->

      @speed = Speeds.getSpeed('ship')

      super
        'image' : 'img/rocket.png'
        'x'     : position.x
        'y'     : position.y



    moveLeft: ->
      super()
      @moveInside()

    moveRight: ->
      super()
      @moveInside()

    moveInside: ->
      adj = 85
      if @viewport.isLeftOf(@)
        # TODO: force inside is broken
        @viewport.forceInside(@, 0)
      if @x > Sprite::jaws.width - adj
        @x = Sprite::jaws.width - adj

