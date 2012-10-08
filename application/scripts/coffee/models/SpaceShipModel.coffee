define [
  'backbone'
  'constants'
]
, (Backbone, C) ->

  class SpaceShipModel extends Backbone.Model

    initialize: (position) ->
      @set
        'position': position

    move: (position) ->
      position = @get 'position'

      @set
        'position':
          'x': position.x
          'y': position.y

