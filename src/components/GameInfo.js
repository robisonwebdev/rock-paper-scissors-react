import React from 'react';
import GameForm from './GameForm';
import GameStatus from './GameStatus';
import '../styles/GameInfo.css';

const GameInfo = ({ handleChange, handleSubmit, inputValue, message, showGameForm, showGameStatus, winner }) => {
    return (
        <div className='gameInfo'>
            {showGameForm
                ?   <GameForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        inputValue={inputValue}
                    />
                :   null
            }
            {showGameStatus
                ?   <GameStatus
                        message={message}
                        winner={winner}
                    />
                :   null}
        </div>
    );
}

export default GameInfo;