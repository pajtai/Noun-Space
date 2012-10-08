define [
  'backbone'
  'jquery'
  'raphael'
  'cache'
]
, (Backbone, $, Raphael, cache) ->

  class BoardView extends Backbone.View

    ###
    el:
      cache.$board
    ###

    initialize: ->
      @render()


    render: ->
      # why doesn't cache.$board or $('#board') work here?
      @mPaper = Raphael(document.getElementById('board'), cache.width, cache.height)

    paper: ->
      @mPaper
