import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [computerScore, setComputerScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <div className='app'>
      <Header
        computerScore={computerScore}
        playerScore={playerScore}
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
