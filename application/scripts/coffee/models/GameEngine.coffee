define [
  'jaws'
]
, (jaws) ->

  setup: ->
    jaws.preventDefaultKeys(["left", "right", "up", "down", "space"]);

    @ship = jaws.Sprite
      'image' : 'img/rocket.png'
      'x'     : 100
      'y'     : 100

  update: ->
    @handlePlayerInput();

  draw: ->
    jaws.context.clearRect(0, 0, jaws.width, jaws.height);
    @ship.draw()

  handlePlayerInput: ->
    if(jaws.pressed("left"))
      @ship.x = @ship.x - 2
    if(jaws.pressed("right"))
      @ship.x = @ship.x + 2
    if(jaws.pressed("up"))
      @ship.y = @ship.y - 2
    if(jaws.pressed("down"))
      @ship.y = @ship.y + 2
