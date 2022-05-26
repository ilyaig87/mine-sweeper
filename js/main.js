'use strict'

const FLAG = '🏴‍☠️'
const MINE = '🧨'
const FLOOR = ' '
const MINES = 2
const SIZE = 4
var cell = []
var game = []

var gTimerInterval
var gBoard
var gMinePos
var gMines
var mineCount
var gBoardSize

var gCell = {
  mineCount: 4,
  isShown: true,
  isMine: false,
  isMarked: true,
}

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

emojiBtn.innerHTML = '🙂'
flagsLeft.innerHTML = MINES

var elSpan = document.querySelector('.timer-box')
elSpan.innerText = '0.000'

// function startTimer() {
//   var startTime = Date.now()

//   gTimerInterval = setInterval(() => {
//     var seconds = ((Date.now() - startTime) / 1000).toFixed(3)
//     var elSpan = document.querySelector('.timer')
//     elSpan.innerText = seconds
//   }, 59)
// }

function init() {
  clearInterval(gTimerInterval)
  console.log('hello mine sweeper')
  gBoard = buildBoard()

  // console.table(gBoard)
  //   console.table(gBoard)

  renderBoard(gBoard, '.board')
  gGame.isOn = true

  var elModal = document.querySelector('.modal')
  elModal.style.display = 'none'
}

function setLevel(boardSize) {
  gBoardSize = boardSize
  console.log('boardSize:', boardSize)
  buildBoard()
}

function renderBoard(mat) {
  var strHTML = ''
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>\n'
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j]
      var className = gCell.isShown ? 'shown' : 'hidden'
      var dataAttrib = `data-i=${i} data-j=${j}`
      strHTML += `\t<td ${dataAttrib}
      class="${className}"
      onclick = "cellClicked(this,${i},${j})">${cell}          
  </td>\n`
    }
    strHTML += '\n</tr>\n'
    // console.log('strHTML: ', strHTML)
  }
  var elTable = document.querySelector('.board')
  elTable.innerHTML = strHTML
}

function buildBoard() {
  var board = []

  for (var i = 0; i < SIZE; i++) {
    board.push([])
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FLOOR
    }
  }
  for (var i = 0; i < MINES; i++) {
    board[getRandomInt(0, 3)][getRandomInt(0, 3)] = MINE
  }
  setMinesNegsCont(board)
  //   console.table(board)
  return board
}

function setMinesNegsCont(board) {
  var setMinesNegsCont = minesAroundCount(board)
  // console.log(setMinesNegsCont)
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
        newBoard.push([numOfmines])
      }
    }
  }

  // console.log(newBoard)
  // newBoard.push([numOfmines])
  gGame.isOn = true
  return newBoard
}

function cellClicked(elCell, cellI, cellJ) {
  // if (gBoard[cellI][cellJ] === MINE) {
  // Update the model
  // gBoard[cellI][cellJ] = MINE
  // var elCell = document.querySelector('.board')
  // elCell.innerText = MINE
  // }
  var elCell = document.querySelector(`[data-i="${cellI}"][data-j="${cellJ}"]`)
  // elCell.style.display = 'block'
  console.log('elCell.dataset: ', elCell.dataset)
}
function fillNums(max) {
  var arr = []
  for (var i = 0; i < max; i++) {
    arr[i] = i + 1
  }
  return arr
}
