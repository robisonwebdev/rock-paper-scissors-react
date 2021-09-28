import React, { useState } from 'react';
import Button from './Button';
import '../styles/GameForm.css';

const GameForm = ({ setPlayerName, setShowGameForm, setShowGameStatus }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value !== '') {
            setPlayerName(value);
            setShowGameForm(false);
            setShowGameStatus(true);
            setValue('');
        }
    }

    return (
        <form className='gameForm' onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} placeholder='Enter your name' value={value} />
            <Button className='submitBtn' type='submit' text='Start Game!' />
        </form>
    );
}

export default GameForm;