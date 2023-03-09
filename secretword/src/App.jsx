import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';
// data
import { wordsList } from './data/words';
// components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]
function App() {

  const [gameStage, setGameState] = useState(stages[0].name)
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  //escolhendo palavra e categoria 
  const pickWordNCategory = () => {
    //escolhendo categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //escolhendo palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }
  //começar jogo
  const startGame = () => {
    //escolhendo a categoria e a palavra
    const { word, category } = pickWordNCategory(); // declaração de duas variáveis que irão receber, cada uma, os valores advindos da função pickWordNCategory

    // criando array de palavras 
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letters) => letters.toLowerCase());

    //set states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameState(stages[1].name)
  };

  //processar a letra digitada pelo usuário
  const verifyLetter = (letter) => {
    console.log(letter);
  }

  //reinicia o jogo 
  const retryGame = () => {
  }
  return (
    <div className="App">
      {gameStage == 'start' && <StartScreen startGame={startGame} />}
      {(gameStage == 'game' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage == 'end' && <GameOver retryGame={retryGame} />}
    </div>
  );
}

export default App;
