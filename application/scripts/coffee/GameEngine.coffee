define [
  'lodash'
  'jaws'
  'Ship'
  'Planet'
  'Star'
]
, (_, jaws, Ship, Planet, Star) ->

  # TODO: break jaws up into its individual mosules using AMD
  # TODO: remove MAGIC NUMBERS!!!!!
  # TODO: set better detection rectangle for spaceship and planets
  class GameEngine

    setup: ->
      jaws.preventDefaultKeys(["left", "right", "up", "down", "space"])
      @difficulty = 0
      @levelUp = 0
      @score = 0
      @howManyPlanets = 0
      @scoreView = document.getElementById('score')
      # create the viewport
      @viewport = new jaws.Viewport({max_x: jaws.width, max_y: jaws.height})

      @ship = new Ship
        'x': jaws.width / 2
        'y': jaws.height - 225

      @planets = new jaws.SpriteList
      @stars = new jaws.SpriteList

    update: ->
      # make random number only once per update
      rand = _.random(0, 100)
      @handlePlayerInput()
      @createEnemies(rand)
      @createStars(rand)
      @moveThings()
      @checkForCollisions()

    draw: ->
      jaws.context.clearRect(0, 0, jaws.width, jaws.height);
      @ship.draw()
      @planets.draw()
      @stars.draw()

    handlePlayerInput: ->
      if(jaws.pressed("left"))
        @ship.moveLeft()
      if(jaws.pressed("right"))
        @ship.moveRight()

    createEnemies: (rand) ->
      if (0 <= rand <= @difficulty)
        ++@levelUp
        ++@howManyPlanets
        if (@levelUp is 5)
          @levelUp = 0
          ++@difficulty

        planet = new Planet(@viewport)
        @viewport.forceInsideVisibleArea(planet, 1)
        @planets.push(planet)

        @scoreView.innerHTML = @howManyPlanets * (@difficulty + 1)

    createStars: (rand) ->
      if (75 < rand < 100)
        star = new Star(@viewport)
        @viewport.forceInsideVisibleArea(star, 1)
        @stars.push(star)

    moveThings: ->
      @planets.forEach (planet) ->
        planet.moveDown()
      @planets.removeIf(@isOutside)
      @stars.forEach (star) ->
        star.moveDown()
      @stars.removeIf(@isOutside)

    isOutside: (item) =>
      @viewport.isOutside(item)

    checkForCollisions: () =>
      jaws.collideOneWithMany(@ship, @planets).forEach (planet) =>
        planet.stop()
        @ship.stop()
        jaws.switchGameState
          setup: jaws.context.clearRect(0, 0, jaws.width, jaws.height)
        alert("GameOver")
