import React from 'react';
import GameInterface from './GameInterface';
import GameInfo from './GameInfo';
import '../styles/Gameboard.css';

const Gameboard = ({ playerName, setPlayerName, setShowResetBtn, setShowGameForm, setShowGameStatus, showGameForm, showGameStatus }) => {
  return (
    <div className='gameboard'>
      <GameInterface
        className='Player'
        competitor={playerName}
      />
      <GameInfo
        setPlayerName={setPlayerName}
        setShowResetBtn={setShowResetBtn}
        setShowGameForm={setShowGameForm}
        setShowGameStatus={setShowGameStatus}
        showGameForm={showGameForm}
        showGameStatus={showGameStatus}
      />
      <GameInterface
        className='Computer'
        competitor='Computer'
      />
    </div>
  );
}

export default Gameboard;