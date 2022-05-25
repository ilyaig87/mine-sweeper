'use strict'

function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>'
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j]
      var className = 'cell cell-' + i + '-' + j

      var tdId = `cell-${i}-${j}`

      strHTML += `<td id="${tdId}" class="${className}" onclick="cellClicked()">
                            ${cell}`
    }
    strHTML += '</tbody>'
  }
  var elContainer = document.querySelector(selector)
  elContainer.innerHTML = strHTML
}

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
  var mineCount = 0
  for (var i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= mat.length) continue
    for (var j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue
      if (j < 0 || j >= mat[i].length) continue
      if (mat[i][j] === MINE) mineCount++
    }
  }

  return mineCount
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
