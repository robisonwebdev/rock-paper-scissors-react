import React from 'react';
import Button from './Button';
import '../styles/GameForm.css';

const GameForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className='gameForm' onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter your name' />
            <Button text='Start Game!' />
        </form>
    );
}

export default GameForm;