define [
  'backbone'
  'jquery'
  'cache'
]
, (Backbone, $, cache) ->

  el: cache.$board

    initialize: ->
      @render()

    render: ->
      dimensions = @getDimensions()
      @paper = Raphael(@el, cache.$window.width, cache.$window.height)

    # TODO: add window change size listener
