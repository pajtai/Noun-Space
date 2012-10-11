define

  # self executing function that calculates the speeds one time, and then
  # returns them as an object
  # all speeds are base speeds, so they may be later modified as a funcion of an attribute
  speeds: ( ->

    baseSpeed =  6

    return {
      ship: baseSpeed
      planet: baseSpeed / 2
      star: baseSpeed / 3
      bullet: baseSpeed * 2
    }

  )()

  getSpeed: (entity) ->
    return @speeds[entity]
