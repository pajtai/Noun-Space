define

  # self executing function that calculates the speeds one time, and then
  # returns them as an object
  speeds: ( ->

    baseSpeed =  5

    return {
      ship: baseSpeed
      planet: baseSpeed / 2
    }

  )()

  getSpeed: (entity) ->
    return @speeds[entity]
