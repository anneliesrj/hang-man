import React from 'react';
import '../styles/hangmanImage.css';

const HangmanImage = ({ incorrectGuesses, guessedLetters, word }) => {
  const totalImages = 11; // Total number of images

  // Calculate the correct image index
  const imageIndex = Math.min(incorrectGuesses + 1, totalImages);
  const imageName = `state${imageIndex}.GIF`;

  // Get the guessed letters not in the word
  const incorrectGuessedLetters = guessedLetters.filter(letter => !word.includes(letter));

  //Render images and guessed letters
  return (
    <div className='image-frame'>
      <img src={`./images/${imageName}`} alt={`Hangman stage ${imageIndex}`} />
      <div>
        {incorrectGuessedLetters.length > 0 && (
          <p>Incorrectly guessed letters: {incorrectGuessedLetters.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default HangmanImage;
