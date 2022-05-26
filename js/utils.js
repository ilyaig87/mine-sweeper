'use strict'

function copyMat(mat) {
  var newMat = []
  for (var i = 0; i < mat.length; i++) {
    newMat[i] = []
    for (var j = 0; j < mat[0].length; j++) {
      newMat[i][j] = mat[i][j]
    }
  }
  return newMat
}

function countNeighbors(cellI, cellJ, mat) {
  var mineAroundCount = 0
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= mat[i].length) continue
      if (mat[i][j] === MINE) mineAroundCount++
    }
  }
  return mineAroundCount
}
function getRandomIntInc(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function getRandEmptyLocation() {
  var emptyCells = []
  for (var i = 1; i < SIZE - 1; i++) {
    for (var j = 1; j < SIZE[i] - 1; j++) {
      if (gBoard[i][j] === EMPTY) emptyCells.push({ i, j })
    }
  }
  var idx = getRandomIntInclusive(0, emptyCells.length - 1)
  return emptyCells[idx]
}
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle(items) {
  var randIdx, keep, i
  for (i = items.length - 1; i > 0; i--) {
    randIdx = getRandomInt(0, items.length - 1)

    keep = items[i]
    items[i] = items[randIdx]
    items[randIdx] = keep
  }
  return items
}
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}
