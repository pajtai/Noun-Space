define [
  'jaws'
  'GameEngine'
]
, (jaws, GameEngine) ->

  class GameOver

    setup: ->
      # ????
      console.log(GameEngine)
      jaws.on_keydown ["esc", "space", "enter"], ->
        jaws.switchGameState GameEngine


    draw: ->

      jaws.context.font = "bold 60pt terminal"
      jaws.context.lineWidth = 10
      jaws.context.fillStyle = "White"
      jaws.context.strokeStyle =  "rgba(200,200,200,0.0)"
      jaws.context.fillText("Game Over!", 60, 180)

      #jaws.context.font = "bold 30pt terminal"
      #jaws.context.fillStyle = "White"
      #jaws.context.fillText("Press space to play again", 30, 260)
