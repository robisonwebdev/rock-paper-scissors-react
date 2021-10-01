import React from 'react';
import '../styles/GameStatus.css';

const GameStatus = ({ message, winner }) => {
    return (
        <div className='gameStatus'>
            <h6>{winner}</h6>
            <p>{message}</p>
        </div>
    );
}

export default GameStatus;