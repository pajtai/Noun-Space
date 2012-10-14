define [
  'jaws'
  'require'
  'GameEngine'
]
, (jaws, require, GameEngine) ->

  class GameOver

    setup: ->

      # There is a circular dependency, so resolve it with require:
      @gameEngine = require('GameEngine')

      jaws.on_keydown ["esc", "space", "enter"], =>
        jaws.switchGameState @gameEngine

      body = document.body

      body.addEventListener('touchstart', @restart, false);

    restart: =>
      jaws.switchGameState @gameEngine

    draw: ->

      jaws.context.font = "bold 60pt terminal"
      jaws.context.lineWidth = 10
      jaws.context.fillStyle = "Green"
      jaws.context.strokeStyle =  "rgba(200,200,200,0.0)"
      jaws.context.fillText("Game Over!", 60, 180)
      jaws.context.fillText("Enter or tap plays again", 60, 280)

