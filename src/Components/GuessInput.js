import React, { useState } from 'react';
import '../styles/guessInput.css';


// Define component
const GuessInput = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  // Function to handle the guess
  const handleGuess = () => {
    if (guess) {
      onGuess(guess.toLowerCase());
      setGuess('');
    }
  };

  // Render input field and guess button
  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value)}
        maxLength={1}
      />
      <button className="guess-button" onClick={handleGuess}>Guess</button>
    </div>
  );
};

export default GuessInput;
