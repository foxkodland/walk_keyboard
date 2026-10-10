import { useEffect, useState } from "react"
import GameBrick from "./components/GameBrick/GameBrick";

function App() {
  const [board, setBoard] = useState<string[][]>();
  const [playerCell, setPlayerCell] = useState([3, 10])
  const [goalCell, setGoalCell] = useState([0, 0])



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



  function keyDown(e: KeyboardEvent) {
    // console.log(e.key);
    // вниз
    const pos = [...playerCell]
    if (board[playerCell[0] + 1][playerCell[1]] == e.key) {
      pos[0] += 1
      setPlayerCell(pos)
    }

    if (board[playerCell[0] - 1][playerCell[1]] == e.key) {
      pos[0] -= 1
      setPlayerCell(pos)
    }
    if (board[playerCell[0]][playerCell[1] + 1] == e.key) {
      pos[1] += 1
      setPlayerCell(pos)
    }
    if (board[playerCell[0]][playerCell[1] - 1] == e.key) {
      pos[1] -= 1
      setPlayerCell(pos)
    }
    // ПРОВЕРКА ДОСТИГли цЕЛИ
    if (pos[0] == goalCell[0] && pos[1] == goalCell[1]) {
      const newPos = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 20)]
      setGoalCell(newPos)
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", keyDown)

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [board, playerCell])

  return (
    <>
      <div className="game_board">
        {/* game_brick_special */}

        {board && board.map((row, rowNumber) =>
          row.map((cell, colNumber) =>
            <GameBrick
              cell={cell}
              colNumber={colNumber}
              goalCell={goalCell}
              playerCell={playerCell}
              rowNumber={rowNumber}
            />
          )
        )}
      </div>
    </>
  )
}

export default App
