define [
  'Sprite'
  'SpeedPass'
]
, (Sprite, Speeds) ->

  class Ship extends Sprite

    @adj = 85

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
      if @x > Sprite::jaws.width - @adj
        @x = Sprite::jaws.width - @adj

