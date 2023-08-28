import React from 'react';
import '../styles/wordDisplay.css';


// Define the word display component
const WordDisplay = ({ word, guessedLetters }) => {
  // Create a display word with guessed letters and underscores 
  const displayWord = word
    .split('')
    .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  // Render the display word
  return (
    <div className='display-word'>
      <p>{displayWord}</p>
    </div>
  );
};

export default WordDisplay;
