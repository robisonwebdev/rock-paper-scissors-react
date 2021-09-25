import React from 'react';
import '../styles/GamePiece.css';

const GamePiece = ({ icon }) => {
    return (
        <i className={`gamePiece ${icon}`}></i>
    );
}

export default GamePiece;