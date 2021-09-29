import React, { useState } from 'react';
import GameForm from './GameForm';
import GameStatus from './GameStatus';
import '../styles/GameInfo.css';

const GameInfo = ({ message, setPlayerName, setShowResetBtn, setShowGameForm, setShowGameStatus, showGameForm, showGameStatus }) => {
    return (
        <div className='gameInfo'>
            {showGameForm
                ?   <GameForm
                        setPlayerName={setPlayerName}
                        setShowResetBtn={setShowResetBtn}
                        setShowGameForm={setShowGameForm}
                        setShowGameStatus={setShowGameStatus}
                    />
                :   null
            }
            {showGameStatus
                ?   <GameStatus
                        message={message}
                    />
                :   null}
        </div>
    );
}

export default GameInfo;