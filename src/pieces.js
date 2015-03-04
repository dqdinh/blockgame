var Immutable = require('immutable')
var {List, Map} = Immutable

var EMPTY_CELL = Map()
var EMPTY_ROW = Immutable.Repeat(EMPTY_CELL, 10).toList()
var EMPTY_GRID = Immutable.Repeat(EMPTY_ROW, 20).toList()

var I_CELL = Map({
  baseColor: 'red',
  lockingColor: 'darkred'
})
var O_CELL = Map({
  baseColor: 'yellow',
  lockingColor: 'brown'
})
var T_CELL = Map({
  baseColor: 'cyan',
  lockingColor: 'darkcyan'
})
var S_CELL = Map({
  baseColor: 'magenta',
  lockingColor: 'purple'
})
var Z_CELL = Map({
  baseColor: 'green',
  lockingColor: 'darkgreen'
})
var J_CELL = Map({
  baseColor: 'lightblue',
  lockingColor: 'blue'
})
var L_CELL = Map({
  baseColor: 'orange',
  lockingColor: 'brown'
})


var i = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(I_CELL, I_CELL, I_CELL, I_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, I_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, I_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, I_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, I_CELL, EMPTY_CELL)
  )
)
var o = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, O_CELL, O_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, O_CELL, O_CELL, EMPTY_CELL)
  )
)
var t = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(T_CELL, T_CELL, T_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, T_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(T_CELL, T_CELL, T_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(T_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, T_CELL, EMPTY_CELL, EMPTY_CELL)
  )
)
var s = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, S_CELL, S_CELL, EMPTY_CELL),
    List.of(S_CELL, S_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(S_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(S_CELL, S_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, S_CELL, EMPTY_CELL, EMPTY_CELL)
  )
)
var z = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(Z_CELL, Z_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, Z_CELL, Z_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, Z_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, Z_CELL, Z_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, Z_CELL, EMPTY_CELL, EMPTY_CELL)
  )
)
var j = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, J_CELL, J_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, J_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, J_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, J_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, J_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, J_CELL, J_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, J_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(J_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL)
  )
)
var l = List.of(
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(L_CELL, L_CELL, L_CELL, EMPTY_CELL),
    List.of(L_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(L_CELL, L_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, L_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, L_CELL, EMPTY_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(EMPTY_CELL, EMPTY_CELL, L_CELL, EMPTY_CELL),
    List.of(L_CELL, L_CELL, L_CELL, EMPTY_CELL)
  ),
  List.of(
    List.of(EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(L_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(L_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL),
    List.of(L_CELL, L_CELL, EMPTY_CELL, EMPTY_CELL)
  )
)
var asMap = Immutable.Map({ i, o, t, s, z, j, l })

var asList = List.of(i, o, t, s, z, j, l)

var toString = function(piece) {
  return asMap.keyOf(piece).toUpperCase()
}

module.exports = { asMap, asList, toString, EMPTY_CELL, EMPTY_GRID, EMPTY_ROW }