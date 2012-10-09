define [
  'backbone'
  'constants'
]
, (Backbone, C) ->

  class StarView extends Backbone.View

    minRadius: 1
    maxRadius: 5
    initialize: (@mPaper, @winWidth, @winHeight) ->
      # TODO: make get starting position a mixin
      @position =
        x: _.random(0, @winWidth)
        y: 0
      @render()

    render: ->
      @radius = _.random(@minRadius, @maxRadius)
      opacity = 0.2 * @radius
      # TODO: make sure all instance variables start with "m"
      @mSelf = @mPaper.circle(@position.x, @position.y, @radius)
      @mSelf.attr({'fill': '#FFF', 'opacity': opacity})
      @fall()

    fall: ->
      distance = @winHeight - @position.y
      time = (6 * distance )/ (C.SPEED * @radius)
      goTo = @winHeight

      @mSelf.animate({'cy': goTo}, time, @fell)

    fell: =>
      @mSelf.remove()
