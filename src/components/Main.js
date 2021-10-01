import React, { useEffect, useState } from 'react';
import Gameboard from './Gameboard';
import Button from './Button';
import '../styles/Main.css';

const Main = ({ handleScoreUpdate, playerName, setPlayerName }) => {
  const [computerPick, setComputerPick] = useState(null);
  const [computeWinner, setComputeWinner] = useState(false);
  const [gameStart, setGameStart] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Select Rock, Paper, or Scissors');
  const [playerPick, setPlayerPick] = useState(null);
  const [showResetBtn, setShowResetBtn] = useState(false);
  const [showGameForm, setShowGameForm] = useState(true);
  const [showGameStatus, setShowGameStatus] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (computeWinner) {
      gameLogic(playerPick, computerPick);
    }
  }, [computeWinner])

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
    console.log('Player Pick:', player);
    console.log('Computer Pick:', computer);

    if (player === computer) {
      setWinner('Tie Game!')
      setMessage('No winners, try again!');
      setComputeWinner(false);
    } 

    // Rock
    if (player === 'rock') {
      if (computer === 'scissors') {
        setWinner(`${playerName} wins!`);
        setMessage('Rock beats scissors!');
        setComputeWinner(false);
        handleScoreUpdate('player');
      } else if (computer === 'paper') {
        setWinner('Computer wins!')
        setMessage('Paper beats rock!');
        setComputeWinner(false);
        handleScoreUpdate('computer');
      }
    }

    // Paper
    if (player === 'paper') {
      if (computer === 'rock') {
        setWinner(`${playerName} wins!`);
        setMessage('Paper beats rock!');
        setComputeWinner(false);
        handleScoreUpdate('player');
      } else if (computer === 'scissors') {
        setWinner('Computer wins!')
        setMessage('Scissors beats paper!');
        setComputeWinner(false);
        handleScoreUpdate('computer');
      }
    }

    // Scissors
    if (player === 'scissors') {
      if (computer === 'paper') {
        setWinner(`${playerName} wins!`);
        setMessage('Scissors beats paper!');
        setComputeWinner(false);
        handleScoreUpdate('player');
      } else if (computer === 'rock') {
        setWinner('Computer wins!')
        setMessage('Rock beats scissors!');
        setComputeWinner(false);
        handleScoreUpdate('computer');
      }
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleReset = () => {
    handleScoreUpdate('reset');
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
      setComputeWinner(true);
    }
  }

  return (
    <main>
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