import React, { useState } from 'react';
import '../styles/header.css';


const Header = () => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  // Render header info and help button and info
  return (
    <header>
      <h1>Welcome to Annelies' Hangman Game</h1>
      <button className="help-button" onClick={toggleHelp}>Help</button>
      {showHelp && (
        <div className="help-text">
          <h3>Game Rules:</h3>
          <p>The object of hangman is to guess the secret word before the stick figure is hung. You guess letters to narrow the word down.
            <br/>Gameplay continues until the you guess the word or run out of guesses and the stick figure is hung. Good luck!</p>
        </div>
      )}
    </header>
  );
};

export default Header;
