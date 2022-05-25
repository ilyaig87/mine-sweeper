'use strict'

const FLAG = '🏴‍☠️'
const MINE = '🧨'
const FLOOR = ' '
const MINES = 2
const SIZE = 4
var cell = []
var game = []

var gCell = {
  mineCount: 4,
  isShown: true,
  isMine: false,
  isMarked: true,
}

var gBoard
var gMinePos
var gMines
var mineCount

var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0,
}

var gLevel = {
  SIZE: SIZE,
  MINES: MINES,
}

function initGame() {
  console.log('hello mine sweeper')
  gBoard = buildBoard()
  //   console.table(gBoard)
  //   console.table(gBoard)

  printMat(gBoard, '.board-container')
  gGame.isOn = true

  var elModal = document.querySelector('.modal')
  elModal.style.display = 'none'
}

function renderGame(board) {}

function buildBoard() {
  var board = []

  for (var i = 0; i < SIZE; i++) {
    board.push([])
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FLOOR
    }
  }
  for (var i = 0; i < MINES; i++) {
    board[getRandomIntInc(0, 3)][getRandomIntInc(0, 3)] = MINE

    if (board[i][j] === MINE) {
      gCell.isMine = true
    }
    console.log(gCell)
  }

  setMinesNegsCont(board)
  //   console.table(board)
  return board
}

function setMinesNegsCont(board) {
  var setMinesNegsCont = minesAroundCount(board)

  countNeighbors(gBoard)

  return setMinesNegsCont
}

// --------------------------------------------------------------------------------------------------------------------
//    get the number of mines in each neighbor cell
// --------------------------------------------------------------------------------------------------------------------
function minesAroundCount(board) {
  var newBoard = []
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      var numOfmines = countNeighbors(i, j, board)
      if (numOfmines >= 0) {
        newBoard.push(numOfmines)
      }
    }
  }
  //   console.table(newBoard)
  gGame.isOn = true
  return newBoard
}

function cellClicked(elCell, i, j) {
  console.log(elCell[i][j])
  return
}
