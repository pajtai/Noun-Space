define [
  'backbone'
  'constants'
]
, (Backbone, C) ->

  # TODO: create a parent "enemy" class
  # TODO: So much modelly stuff is on view due to Raphael... can we eliminate model?
  class PlanetView extends Backbone.View

    selfWidth: 100
    selfHeight: 63

    initialize: (@mPaper, @$window, @winWidth, @winHeight) ->
      @position =
        x: _.random(0, @winWidth - @selfWidth)
        y: 0 - @selfHeight
      @render()

    render: ->
      @mSelf = @mPaper.image('img/planet.png', @position.x, @position.y, @selfWidth, @selfHeight)
      @fall()

    fall: ->
      distance = @winHeight - @position.y
      time = distance / (C.SPEED * 0.5)
      goTo = @winHeight + @selfHeight

      @mSelf.animate({'y': goTo}, time, '<', @fell)

    fell: =>
      @mSelf.remove()

    getBBox: ->
      @mSelf.getBBox()

    stop: ->
      @mSelf.stop()