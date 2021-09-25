import React from 'react';

const GamePiece = ({ icon }) => {
    return (
        <i className={`gamePiece ${icon}`}></i>
    );
}

export default GamePiece;