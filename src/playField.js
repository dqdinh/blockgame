var Immutable = require('immutable')
var Bacon = require('baconjs')
var {List} = Immutable
var pieces = require('./pieces')
var inputStream = require('./input')

var EMPTY_ROW  = Immutable.Repeat(0, 10)
var INITIAL_PLAY_FIELD = Immutable.Repeat(EMPTY_ROW, 20)

var moveDown = (playField) => List.of(EMPTY_ROW).concat(playField.slice(0, 20))

var playerPressedDown = inputStream
  .map((inputs) => inputs.get("down"))
  .toEventStream()
  .skipDuplicates()
  .filter((isPressed) => isPressed)

var newPiece = Bacon.once(pieces.asMap.get("i")).delay(1000)
var getLandingSpace = (playField) => playField.slice(0, 2).map((row) => row.slice(3, 7))
var addPieceToLandingSpace = (landingSpace, piece) => landingSpace.map((row, rowIndex) =>
  row.map((cell, cellIndex) => piece.get(rowIndex).get(cellIndex) === 0 ? cell : piece.get(rowIndex).get(cellIndex))
)
var setLandingSpace = (playField, landingSpace) =>
  playField.slice(0, 2).map((row, rowIndex) =>
    row.slice(0, 3)
      .concat(row.slice(3, 7).map((cell, cellIndex) => landingSpace.get(rowIndex).get(cellIndex)))
      .concat(row.slice(7))
  ).concat(playField.slice(2, 20))

var addPieceToPlayField = function(playField, piece) {
  var landingSpace = addPieceToLandingSpace(getLandingSpace(playField), piece)
  return setLandingSpace(playField, landingSpace)
}

var gravity = newPiece.flatMapLatest(() => Bacon.interval(1000, { transformation: "MOVE_PIECE_DOWN" }))

var playFieldTransformationStream = newPiece.map(function(piece){ return { transformation: "NEW_PIECE", piece } })
  .merge(playerPressedDown.map(function(){ return { transformation: "MOVE_PIECE_DOWN" } }))
  .merge(gravity)

var applyTransformation = function(playField, t) {
  switch (t.transformation) {
    case "NEW_PIECE":
      return addPieceToPlayField(playField, t.piece)
    case "MOVE_PIECE_DOWN":
      return moveDown(playField)
  }
}
var playFieldStream = playFieldTransformationStream.scan(INITIAL_PLAY_FIELD, applyTransformation)

module.exports = playFieldStream