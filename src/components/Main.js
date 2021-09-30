import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ playerName, setPlayerName }) => {
  const [gameStart, setGameStart] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Select Rock, Paper, or Scissors');
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [showGameForm, setShowGameForm] = useState(true);
  const [showGameStatus, setShowGameStatus] = useState(false);

  const gameLogic = (player, computer) => {
    if (player === computer) {
      // Return tie
    } 

    // Rock
    if (player === 'rock') {
      if (computer === 'scissors') {
        // return player wins
      } else if (computer === 'paper') {
        // return computer wins
      }
    }

    // Paper
    if (player === 'paper') {
      if (computer === 'rock') {
        // return player wins
      } else if (computer === 'scissors') {
        // return computer wins
      }
    }

    // Scissors
    if (player === 'scissors') {
      if (computer === 'paper') {
        // return player wins
      } else if (computer === 'rock') {
        // return computer wins
      }
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleReset = () => {
    setPlayerName('');
    setShowGameForm(true);
    setShowGameStatus(false);
    setShowResetBtn(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
        setPlayerName(inputValue);
        setShowResetBtn(true);
        setShowGameForm(false);
        setShowGameStatus(true);
        setInputValue('');
    }
  }

  const gamePieceClick = (event) => {
    if (gameStart) {
      console.log('Clicked');
    }
  }

  return (
    <main>
      <Gameboard
        gamePieceClick={gamePieceClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        message={message}
        playerName={playerName}
        showGameStatus={showGameStatus}
        showGameForm={showGameForm}
      />
      {showResetBtn
        ? <Button
            onClick={handleReset}
            text='Reset Game'
          />
        : null
      }
    </main>
  );
}

export default Main;