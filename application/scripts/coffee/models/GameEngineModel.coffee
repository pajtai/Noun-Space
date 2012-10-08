define [
  'backbone'
  'cache'
  'BoardView'
  'SpaceShipView'
  'SpaceShipModel'
]
, (Backbone, cache, BoardView, SpaceShipView, SpaceShipModel) ->

  class GameEngine extends Backbone.Model

    makeBoard: ->
      @mBoardView = new BoardView()

    makeSpaceship: ->

      @mSpaceshipView = new SpaceShipView(@mBoardView.paper())

      position =
        x: cache.width / 2
        y: cache.height - 250

      @mSpaceshipModel = new SpaceShipModel(position)

      @mSpaceshipModel.on 'change:position'
        , (model, newPosition) ->
          @mSpaceShipView.drawSelf(newPosition)

      @mSpaceshipView.drawSelf(position)
