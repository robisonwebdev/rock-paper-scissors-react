import React from 'react';
import '../styles/GamePiece.css';

const GamePiece = ({ data_value, icon, onClick }) => {
    return (
        <i
            className={`gamePiece ${icon}`}
            data_value={data_value}
            onClick={onClick}
        >
        </i>
    );
}

export default GamePiece;