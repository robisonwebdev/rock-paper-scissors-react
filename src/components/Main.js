import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ setPlayerName }) => {
  const [showResetBtn, setShowResetBtn] = useState(false);

  return (
    <main>
      <Gameboard
        setPlayerName={setPlayerName}
      />
      {showResetBtn ? <Button text='Reset Game' /> : null}
    </main>
  );
}

export default Main;