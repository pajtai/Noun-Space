define [
  'backbone'
  'BoardView'
  'SpaceShipView'
  'PlanetView'
  'StarView'
  'constants'
  'lodash'
  'raphael'
]
, (Backbone, BoardView, SpaceShipView, PlanetView, StarView, C, _, Raphael) ->

  class GameEngine extends Backbone.Model

    starInterval: 10
    enemyInterval: 60

    initialize: ->
      @$window = $(window)
      @winHeight = @$window.height()
      @winWidth = @$window.width()
      # TODO: pull score into raphael
      @$score = $('#score')
      @age = 0
      @starTicker = 0
      @enemyTicker = 0
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
        if @enemyTicker is @enemyInterval
          @enemyTicker = 0
          --@enemyInterval
          @createEnemy()
        if @starTicker is @starInterval
          @starTicker = 0
          @createStar()
        @checkForCollisions()
        ++@age
        ++@starTicker
        ++@enemyTicker

      , C.TICK

    createEnemy: () ->
      --@easiness
      ++@planets
      @showScore()
      @planetViews.push(new PlanetView(@mBoardView.paper(), @$window, @winWidth, @winHeight))

    createStar: () ->
      new StarView(@mBoardView.paper(), @winWidth, @winHeight)


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


