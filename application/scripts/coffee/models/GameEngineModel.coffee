define [
  'backbone'
  'BoardView'
  'SpaceShipView'
  'PlanetView'
  'constants'
  'lodash'
  'raphael'
]
, (Backbone, BoardView, SpaceShipView, PlanetView, C, _, Raphael) ->

  class GameEngine extends Backbone.Model

    initialize: ->
      @$window = $(window)
      @winHeight = @$window.height()
      @winWidth = @$window.width()
      # TODO: pull score into raphael
      @$score = $('#score')
      @age = 0
      @planets = 0
      @planetViews = []

    makeBoard: ->
      # TODO: this should be a model
      @mBoardView = new BoardView(@winWidth, @winHeight)

    makeSpaceship: ->

      position =
        x: @winWidth / 2
        y: @winHeight - 250

      @mSpaceshipView = new SpaceShipView(@mBoardView.paper(), @$window, @winWidth, position)
      # TODO: create score view - that has vars separately



    startTime: ->
      @ticker = setInterval =>
        @createEnemy()
        @checkForCollisions()
        ++@age
      , C.TICK

    createEnemy: ->
      rand = _.random(0, 100)
      if 0 is rand
        ++@planets
        @showScore()
        @planetViews.push(new PlanetView(@mBoardView.paper(), @$window, @winWidth, @winHeight))

    showScore: ->
      @$score.html("SCORE: #{@planets}")

    checkForCollisions: ->
      @checkCollision planet for planet in @planetViews

    checkCollision: (planet) ->
      planetBox = planet.getBBox()
      spaceBox = @mSpaceshipView.getBBox()
      if planetBox? and spaceBox? and Raphael.isBBoxIntersect(planet.getBBox(), @mSpaceshipView.getBBox())
        clearInterval @ticker
        planet.stop() for planet in @planetViews
        alert("Game Over")


