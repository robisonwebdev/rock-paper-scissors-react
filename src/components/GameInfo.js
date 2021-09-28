import React, { useState } from 'react';
import GameForm from './GameForm';
import GameStatus from './GameStatus';
import '../styles/GameInfo.css';

const GameInfo = ({ setPlayerName }) => {
    const [showGameForm, setShowGameForm] = useState(true);
    const [showGameStatus, setShowGameStatus] = useState(false);

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