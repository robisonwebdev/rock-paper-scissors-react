import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = () => {
  const [showResetBtn, setShowResetBtn] = useState(false);

  return (
    <main>
      <Gameboard />
      {showResetBtn ? <Button text='Reset Game' /> : null}
    </main>
  );
}

export default Main;