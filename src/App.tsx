import { useEffect, useState } from "react"

function App() {
  const [board, setBoard] = useState();

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

  return (
    <>
      <div className="game_board">
        {board && board.map(row =>
          row.map(cell =>
            <div className="game_brick">{cell}</div>
          )
        )}
      </div>
    </>
  )
}

export default App
