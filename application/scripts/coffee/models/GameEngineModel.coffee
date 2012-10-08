define [
  'backbone'
  'BoardView'
  'SpaceShipView'
  'SpaceShipModel'
  'constants'
]
, (Backbone, BoardView, SpaceShipView, SpaceShipModel, C) ->

  class GameEngine extends Backbone.Model

    initialize: ->
      @$window = $(window)
      @winHeight = @$window.height()
      @winWidth = @$window.width()
      # TODO: pull score into raphael
      @$score = $('#score')

    makeBoard: ->
      @mBoardView = new BoardView(@winWidth, @winHeight)

    makeSpaceship: ->

      position =
        x: @winWidth / 2
        y: @winHeight - 250

      @mSpaceshipView = new SpaceShipView(@mBoardView.paper(), @$window, @winWidth)
      @mSpaceshipView.drawInitial(position)
      # TODO: create score view
      $('#score').html("x: #{Math.floor(position.x)}, y: #{Math.floor(position.y)}")

      @mSpaceshipModel = new SpaceShipModel(position)

      @mSpaceshipModel.on 'change:position'
        , (model, newPosition) =>
          @mSpaceshipView.drawSelf(newPosition)

      @mSpaceshipView.on 'change:position'
        , (newPosition) =>
          $('#score').html("x: #{Math.floor(newPosition.x)}, y: #{Math.floor(newPosition.y)}")
          @mSpaceshipModel.move(newPosition)



    redraw: ->
      @mSpaceshipView.checkPosition()

    startTime: ->
      setInterval =>
        @redraw()
      , C.TICK

