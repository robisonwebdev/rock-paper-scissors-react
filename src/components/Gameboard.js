import React from 'react';
import GameInterface from './GameInterface';
import GameInfo from './GameInfo';
import '../styles/Gameboard.css';

const Gameboard = ({ setPlayerName, setShowResetBtn, setShowGameForm, setShowGameStatus, showGameForm, showGameStatus }) => {
  return (
    <div className='gameboard'>
      <GameInterface competitor='Player' />
      <GameInfo
        setPlayerName={setPlayerName}
        setShowResetBtn={setShowResetBtn}
        setShowGameForm={setShowGameForm}
        setShowGameStatus={setShowGameStatus}
        showGameForm={showGameForm}
        showGameStatus={showGameStatus}
      />
      <GameInterface competitor='Computer' />
    </div>
  );
}

export default Gameboard;