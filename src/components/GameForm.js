import React from 'react';

const GameForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter your name' />
            <input type='submit' value='Submit' />
        </form>
    );
}

export default GameForm;