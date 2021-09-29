import React from 'react';
import '../styles/GamePiece.css';

const GamePiece = ({ icon, onClick }) => {
    return (
        <i className={`gamePiece ${icon}`} onClick={onClick}></i>
    );
}

export default GamePiece;