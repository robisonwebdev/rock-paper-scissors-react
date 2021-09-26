import React from 'react';

const GameForm = () => {
    return (
        <form>
            <input type='text' name='name' placeholder='Enter your name' />
            <input type='submit' value='Submit' />
        </form>
    );
}

export default GameForm;