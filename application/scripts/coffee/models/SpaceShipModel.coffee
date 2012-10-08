define [
  'backbone'
]
, (Backbone) ->

  class SpaceShipModel extends Backbone.Model

    initialize: (position) ->
      @set
        'position': position

