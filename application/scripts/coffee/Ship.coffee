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

    goTo: (newX) ->
      @x = newX
      @moveInside()

    moveInside: ->
      if @viewport.isLeftOf(@)
        # TODO: force inside is broken
        @viewport.forceInside(@, 0)
      if @x > Sprite::jaws.width - 85
        @x = Sprite::jaws.width - 85
