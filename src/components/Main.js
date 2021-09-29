import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ playerName, setPlayerName }) => {
  const [gameStart, setGameStart] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Select Rock, Paper, or Scissors');
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [showGameForm, setShowGameForm] = useState(true);
  const [showGameStatus, setShowGameStatus] = useState(false);

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

  const gamePieceClick = () => {
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
        setShowGameStatus={setShowGameStatus}
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