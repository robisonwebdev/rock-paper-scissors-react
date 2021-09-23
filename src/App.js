import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState('');

  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
