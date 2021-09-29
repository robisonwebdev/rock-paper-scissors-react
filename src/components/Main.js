import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ playerName, setPlayerName }) => {
  const [message, setMessage] = useState('Select Rock, Paper, or Scissors');
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [showGameForm, setShowGameForm] = useState(true);
  const [showGameStatus, setShowGameStatus] = useState(false);

  const handleReset = () => {
    setPlayerName('');
    setShowGameForm(true);
    setShowGameStatus(false);
    setShowResetBtn(false);
  }

  return (
    <main>
      <Gameboard
        message={message}
        playerName={playerName}
        setPlayerName={setPlayerName}
        setShowResetBtn={setShowResetBtn}
        setShowGameForm={setShowGameForm}
        setShowGameStatus={setShowGameStatus}
        showGameForm={showGameForm}
        showGameStatus={showGameStatus}
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