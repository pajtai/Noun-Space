define [
  'lodash'
  'jaws'
  'Ship'
  'Planet'
]
, (_, jaws, Ship, Planet) ->

  class GameEngine
    # TODO: mixin jaws props to reg classes
    setup: ->
      jaws.preventDefaultKeys(["left", "right", "up", "down", "space"])

      # creae the viewport
      @viewport = new jaws.Viewport({max_x: jaws.width, max_y: jaws.height})

      @ship = new Ship
        'x': jaws.width / 2
        'y': jaws.height - 225

      @planets = new jaws.SpriteList

    update: ->
      @handlePlayerInput()
      @createEnemies()
      @moveThings()
      @checkForCollisions()

    draw: ->
      jaws.context.clearRect(0, 0, jaws.width, jaws.height);
      @ship.draw()
      @planets.draw()

    handlePlayerInput: ->
      if(jaws.pressed("left"))
        @ship.moveLeft()
      if(jaws.pressed("right"))
        @ship.moveRight()

    createEnemies: ->
      if (0 is _.random(0, 300))
        @planets.push(new Planet(@viewport))

    moveThings: ->
      @planets.forEach (planet) ->
        planet.fall()
      @planets.removeIf(@isOutside)

    isOutside: (item) =>
      return false;
      # TODO: fix this, planets begin in the wrong spot?
      outside =  @viewport.isOutside(item)
      if outside
        console.log("deleting")
      return outside

    checkForCollisions: () =>
      jaws.collideOneWithMany(@ship, @planets).forEach (planet) ->
        planet.stop()
        @ship.stop()
        alert("GameOver")

