define [
  'lodash'
  'jaws'
  'Ship'
  'Planet'
  'Star'
  'GameOver'
  'Bullet'
  'Explosion'
  'jquery'
]
, (_, jaws, Ship, Planet, Star, GameOver, Bullet, Explosion, $) ->

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
      @canShoot = true
      @scoreView = document.getElementById('score')
      # create the viewport
      @viewport = new jaws.Viewport({max_x: jaws.width, max_y: jaws.height})

      @ship = new Ship
        'x': jaws.width / 2
        'y': jaws.height - 225
        , @viewport

      @swiping = false
      @tapping = false

      @planets = new jaws.SpriteList
      @stars = new jaws.SpriteList
      @bullets = new jaws.SpriteList
      @explosions = new jaws.SpriteList

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
      @bullets.draw()
      @explosions.draw()

    handlePlayerInput: ->
      if(jaws.pressed("left") or (@swiping == 'left'))
        @ship.moveLeft()
      if(jaws.pressed("right") or (@swiping == 'right'))
        @ship.moveRight()
      if(jaws.pressed("space") or @swiping or @tapping)
        @shoot()

    shoot: ->
      return if not @canShoot

      @canShoot = false

      setTimeout =>
        @canShoot = true
      , 500

      bullet1 = new Bullet
        'x': @ship.x + 3
        'y': @ship.y

      @bullets.push(bullet1)

      bullet2 = new Bullet
        'x': @ship.x + 72
        'y': @ship.y

      @bullets.push(bullet2)

    createEnemies: (rand) ->
      if (0 <= rand <= @difficulty)
        ++@levelUp
        ++@howManyPlanets
        if (@levelUp is 5)
          @levelUp = 0
          ++@difficulty

        planet = new Planet(@viewport)
        @planets.push(planet)

        @showScore()

    showScore: ->
      @scoreView.innerHTML = "SCORE: #{@howManyPlanets * (@difficulty + 1)} - fps: #{jaws.game_loop.fps}"

    createStars: (rand) ->
      if (75 < rand < 100)
        star = new Star(@viewport)
        @stars.push(star)

    moveThings: ->
      @planets.forEach (planet) ->
        planet.moveIt()
      @planets.removeIf(@isOutside)
      @stars.forEach (star) ->
        star.moveDown()
      @stars.removeIf(@isOutside)
      @bullets.forEach (bullet) ->
        bullet.moveIt()
      @bullets.removeIf(@isOutside)
      @explosions.forEach (explosion) ->
        explosion.moveIt()
      @explosions.removeIf(@explosionCheck)

    isOutside: (item) =>
      @viewport.isOutside(item)

    explosionCheck: (explosion) =>
      explosion.removeMe()

    checkForCollisions: () =>
      jaws.collideOneWithMany(@ship, @planets).forEach (planet) =>
        planet.stop()
        @ship.stop()
        jaws.switchGameState GameOver

      jaws.collideManyWithMany(@bullets, @planets).forEach (pair) =>
        bullet = pair[0]
        planet = pair[1]

        explosion = new Explosion
          'x': planet.x
          'y': planet.y

        @explosions.push explosion

        @bullets.remove bullet
        @planets.remove planet

        @howManyPlanets += 1
        @showScore()

