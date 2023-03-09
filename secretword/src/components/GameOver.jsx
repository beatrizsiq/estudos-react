import "../style/GameOver.css"

const GameOver = ({retryGame}) => {
  return (
    <div>
      <h1>Game over</h1>
      <button onClick={retryGame}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver