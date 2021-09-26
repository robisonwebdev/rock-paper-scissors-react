import React from 'react';
import '../styles/GameForm.css';

const GameForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className='gameForm' onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter your name' />
            <input type='submit' value='Submit' />
        </form>
    );
}

export default GameForm;