import { useEffect, useState } from "react"

function App() {
  const [board, setBoard] = useState<string[][]>();
  const [playerCell, setPlayerCell] = useState([3, 10])



  function getRandomChar() {
    const ruLettersLower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    const randomIndex = Math.floor(Math.random() * ruLettersLower.length)
    return ruLettersLower[randomIndex]
  }

  function generateBoard() {
    const board = []
    for (let i = 0; i < 10; i++) {
      let row = []
      for (let j = 0; j < 20; j++) {
        row.push(getRandomChar())
      }
      board.push(row)
    }
    return board
  }

  useEffect(() => {
    const b = generateBoard()
    setBoard(b)
  }, [])

  function specialColorCell(rowNumber, colNumber) {
    if (rowNumber == playerCell[0] && colNumber == playerCell[1]) {
      return "game_brick_special"
    }
    if (rowNumber == playerCell[0] - 1 && colNumber == playerCell[1]) {
      return "game_brick_way"
    }
    if (rowNumber == playerCell[0] + 1 && colNumber == playerCell[1]) {
      return "game_brick_way"
    }

    return ""
  }

  return (
    <>
      <div className="game_board">
        {/* game_brick_special */}

        {board && board.map((row, rowNumber) =>
          row.map((cell, colNumber) =>
            <div className={`game_brick ${specialColorCell(rowNumber, colNumber)}`}>{rowNumber} {colNumber}</div>
          )
        )}
      </div>
    </>
  )
}

export default App
