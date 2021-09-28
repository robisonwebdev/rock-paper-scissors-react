import React, { useState } from 'react';
import GameForm from './GameForm';
import GameStatus from './GameStatus';
import '../styles/GameInfo.css';

const GameInfo = ({ setPlayerName, setShowGameForm, setShowGameStatus, showGameForm, showGameStatus }) => {
    return (
        <div className='gameInfo'>
            {showGameForm
                ?   <GameForm
                        setPlayerName={setPlayerName}
                        setShowGameForm={setShowGameForm}
                        setShowGameStatus={setShowGameStatus}
                    />
                :   null
            }
            {showGameStatus ? <GameStatus /> : null}
        </div>
    );
}

export default GameInfo;