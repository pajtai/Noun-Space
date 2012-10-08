define [
  'backbone'
  'constants'
]
, (Backbone, C) ->

  class SpaceShipView extends Backbone.View

    path:
      'M71.234,54.269c0.038-1.293,0.061-2.609,0.061-3.954C71.295,16.368,52.469,3.1,52.469,3.1L49.999,0l-2.47,3.1  c0,0-18.824,13.269-18.824,47.215c0,1.345,0.023,2.66,0.061,3.951l-10.398,10.4V100H29.94V82.1l2.135-2.135  c1.443,6.094,2.803,9.542,2.803,9.542h30.244c0,0,1.359-3.448,2.803-9.542L70.06,82.1V100h11.573V64.666L71.234,54.269z   M49.999,71.347c-3.352,0-6.066-2.715-6.066-6.068c0-3.349,2.715-6.067,6.066-6.067c3.351,0,6.069,2.719,6.069,6.067  C56.068,68.632,53.35,71.347,49.999,71.347z M49.999,53.926c-3.352,0-6.066-2.716-6.066-6.069c0-3.348,2.715-6.066,6.066-6.066  c3.351,0,6.069,2.719,6.069,6.066C56.068,51.21,53.35,53.926,49.999,53.926z M49.999,36.505c-3.352,0-6.066-2.716-6.066-6.07  c0-3.348,2.715-6.065,6.066-6.065c3.351,0,6.069,2.718,6.069,6.065C56.068,33.789,53.35,36.505,49.999,36.505z'

    initialize: (@mPaper, @$window, @winWidth) ->
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
      @mSelf = @mPaper.path(@path).attr
        fill: '#FFF'
        stroke: 'none'

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

      @mSelf.animate({'transform':"t#{goTo},#{@position.y}"}, time)

      #console.log("d: #{distance} t: #{time} s: #{distance/time}")

    stop: (direction) ->
      return if not direction?
      if direction is @moving
        @moving = false
        #console.log("stopping movement in direction #{direction}")
        @mSelf.stop()


    drawInitial: (@position) ->
      #TODO: 18.368 int variable
      @mSelf.transform("t#{@position.x - 18.368},#{@position.y}")

    checkPosition: ->
      bbox = @mSelf.getBBox()
      newPosition =
        'x': bbox.x
        'y': bbox.y

      if (newPosition.x != @position.x)
        @position.x = newPosition.x
        @position.y = newPosition.y
        @trigger 'change:position', newPosition
