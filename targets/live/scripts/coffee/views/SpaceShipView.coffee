define [
  'backbone'
  'constants'
]
, (Backbone, C) ->

  class SpaceShipView extends Backbone.View

    initialize: (@mPaper, @$window, @winWidth, @position) ->
      @render()
      @addKeyListeners()
      @moving = false

    addKeyListeners: ->
      @$window.keydown (e) =>
        key = e.which

        switch key
          when C.LEFT_ARROW then direction = C.LEFT
          when C.RIGHT_ARROW then direction = C.RIGHT

        @move direction

      @$window.keyup (e) =>
        key = e.which

        switch key
          when C.LEFT_ARROW then direction = C.LEFT
          when C.RIGHT_ARROW then direction = C.RIGHT

        @stop direction

    render: ->
      @mSelf = @mPaper.image('img/rocket.png', @position.x, @position.y, 84, 97)

    move: (direction) ->
      return if direction is @moving
      return if not direction?


      @mSelf.stop()
      @moving = direction

      bbox = @mSelf.getBBox()

      shipWidth = bbox.width

      # TODO: what is going on? why are these min and max needed???
      switch direction
        when C.LEFT
          goTo = 0 - 20
          shipX = Math.min(bbox.x, @winWidth)
        when C.RIGHT
          goTo = @winWidth - 80
          shipX = Math.max(bbox.x, 0)

      distance = Math.abs(shipX - goTo)
      time = distance / C.SPEED

      @mSelf.animate({'x':"#{goTo}"}, time)

    stop: (direction) ->
      return if not direction?
      if direction is @moving
        @moving = false
        @mSelf.stop()

    getBBox: ->
      @mSelf.getBBox()

