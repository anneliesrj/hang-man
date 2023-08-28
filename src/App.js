import React, { useState, useEffect } from 'react';
import Header from './Components/Header.js';
import WordDisplay from './Components/WordDisplay.js';
import GuessInput from './Components/GuessInput.js';
import HangmanImage from './Components/HangmanImage.js';
import { getRandomWord } from './RandomWord.js';
import './App.css';
import './styles/styles.css';

const App = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameResult, setGameResult] = useState(null);

  useEffect(() => {
    getRandomWord().then(randomWord => {
      if (randomWord) {
        setWord(randomWord);
      }
    });
  }, []);

  // Check the game result when the guessed letters or the word changes
useEffect(() => {
  if (word && word.split('').every(letter => guessedLetters.includes(letter))) {
    setGameResult('win');
  }
  if (incorrectGuesses >= 11) {
    setGameResult('lose');
  }
}, [word, guessedLetters, incorrectGuesses]);

const handleGuess = letter => {
  letter = letter.toLowerCase(); // Convert guessed letter to lowercase

  if (!guessedLetters.includes(letter)) {
    setGuessedLetters([...guessedLetters, letter]);

    // Convert the word to lowercase for comparison
    const lowercaseWord = word.toLowerCase();
    
    if (!lowercaseWord.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }
  }

  // Check if the player has won
  console.log('Word:', word);
  console.log('Guessed Letters:', guessedLetters);
  if (word && word.split('').every(letter => guessedLetters.includes(letter))) {
    console.log('Player has won!');
    setGameResult('win');
  }

    // Check if the player has lost
    if (incorrectGuesses + 1 >= 11) {
      setGameResult('lose');
    }
  };

  // Handle the restart of the game
  const handleRestart = async () => {
    const randomWord = await getRandomWord();
    if (randomWord) {
      setWord(randomWord);
    }
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameResult(null); // Reset game result
  };

  // Render the game 
  return (
    <div className="App">
      <Header />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <GuessInput onGuess={handleGuess} />
      <HangmanImage
        incorrectGuesses={incorrectGuesses}
        guessedLetters={guessedLetters}
        word={word}
      />
      {/* Conditional rendering for game result messages */}
      {gameResult === 'win' && <h2 className='won'>You've won!</h2>}
      {gameResult === 'lose' && (
        <div>
          <h2 className='lost'>You've lost!</h2>
          <p className='lost'>The correct word was: {word}</p>
        </div>
      )}
      {/* Restart button */}
      <button className='restart-button' onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default App;
