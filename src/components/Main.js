import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ setPlayerName }) => {
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [showGameForm, setShowGameForm] = useState(true);
  const [showGameStatus, setShowGameStatus] = useState(false);

  return (
    <main>
      <Gameboard
        setPlayerName={setPlayerName}
        setShowGameForm={setShowGameForm}
        setShowGameStatus={setShowGameStatus}
        showGameForm={showGameForm}
        showGameStatus={showGameStatus}
      />
      {showResetBtn ? <Button text='Reset Game' /> : null}
    </main>
  );
}

export default Main;