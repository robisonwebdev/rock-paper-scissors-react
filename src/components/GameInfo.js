import React from 'react';
import GameForm from './GameForm';
import GameStatus from './GameStatus';
import '../styles/GameInfo.css';

const GameInfo = () => {
    return (
        <div className='gameInfo'>
            <GameForm />
            <GameStatus />
        </div>
    );
}

export default GameInfo;