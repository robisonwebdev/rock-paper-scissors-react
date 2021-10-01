import React, { useEffect, useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ playerName, setPlayerName }) => {
  const [computerPick, setComputerPick] = useState(null);
  const [gameStart, setGameStart] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Select Rock, Paper, or Scissors');
  const [playerPick, setPlayerPick] = useState(null);
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [showGameForm, setShowGameForm] = useState(true);
  const [showGameStatus, setShowGameStatus] = useState(false);
  const [winner, setWinner] = useState('');

  const getComputersPick = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        setComputerPick('rock');
        break;
      case 1:
        setComputerPick('paper');
        break;
      case 2:
        setComputerPick('scissors');
        break;
    }
  }

  const gameLogic = (player, computer) => {
    if (player === computer) {
      setWinner('Tie Game!')
      setMessage('No winners, try again!');
    } 

    // Rock
    if (player === 'rock') {
      if (computer === 'scissors') {
        setWinner(`${playerName} wins!`);
        setMessage('Rock beats scissors!');
      } else if (computer === 'paper') {
        setWinner('Computer wins!')
        setMessage('Paper beats rock!');
      }
    }

    // Paper
    if (player === 'paper') {
      if (computer === 'rock') {
        setWinner(`${playerName} wins!`);
        setMessage('Paper beats rock!');
      } else if (computer === 'scissors') {
        setWinner('Computer wins!')
        setMessage('Scissors beats paper!');
      }
    }

    // Scissors
    if (player === 'scissors') {
      if (computer === 'paper') {
        setWinner(`${playerName} wins!`);
        setMessage('Scissors beats paper!');
      } else if (computer === 'rock') {
        setWinner('Computer wins!')
        setMessage('Rock beats scissors!')
      }
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleReset = () => {
    setPlayerName('');
    setShowGameForm(true);
    setShowGameStatus(false);
    setShowResetBtn(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
        setPlayerName(inputValue);
        setShowResetBtn(true);
        setShowGameForm(false);
        setShowGameStatus(true);
        setInputValue('');
    }
  }

  const gamePieceClick = (event) => {
    if (gameStart) {
      setPlayerPick(event.target.getAttribute('data_value'));
      getComputersPick();
      gameLogic(playerPick, computerPick);
    }
  }

  return (
    <main>
      {console.log('Player Pick:', playerPick)}
      {console.log('Computer Pick:', computerPick)}
      <Gameboard
        gamePieceClick={gamePieceClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        message={message}
        playerName={playerName}
        showGameStatus={showGameStatus}
        showGameForm={showGameForm}
        winner={winner}
      />
      {showResetBtn
        ? <Button
            onClick={handleReset}
            text='Reset Game'
          />
        : null
      }
    </main>
  );
}

export default Main;