import React, { useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = () => {
  const [showResetBtn, setShowResetBtn] = useState(false);

  return (
    <main>
      <Gameboard />
      <Button />
    </main>
  );
}

export default Main;