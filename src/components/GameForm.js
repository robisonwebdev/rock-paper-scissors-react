import React, { useState } from 'react';
import Button from './Button';
import '../styles/GameForm.css';

const GameForm = ({ setPlayerName }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setPlayerName(value);
        setValue('');
    }

    return (
        <form className='gameForm' onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} placeholder='Enter your name' value={value} />
            <Button text='Start Game!' />
        </form>
    );
}

export default GameForm;