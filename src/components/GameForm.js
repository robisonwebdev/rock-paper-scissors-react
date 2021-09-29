import React from 'react';
import Button from './Button';
import '../styles/GameForm.css';

const GameForm = ({ handleChange, handleSubmit, inputValue }) => {
    return (
        <form className='gameForm' onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} placeholder='Enter your name' value={inputValue} />
            <Button className='submitBtn' type='submit' text='Start Game!' />
        </form>
    );
}

export default GameForm;