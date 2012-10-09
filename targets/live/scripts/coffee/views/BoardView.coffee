define [
  'backbone'
  'jquery'
  'raphael'
]
, (Backbone, $, Raphael) ->

  class BoardView extends Backbone.View

    el: $('#board')

    initialize: (@width, @height) ->
      @render()


    render: ->
      @mPaper = Raphael(@el, @width, @height)

    paper: ->
      @mPaper
