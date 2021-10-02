import React from 'react';
import '../styles/GameStatus.css';

const GameStatus = ({ message, winner }) => {
    return (
        <div className='gameStatus'>
            <h3>{winner}</h3>
            <p>{message}</p>
        </div>
    );
}

export default GameStatus;