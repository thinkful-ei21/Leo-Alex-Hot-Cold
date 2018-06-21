import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    
    function handleSubmit(event){
        event.preventDefault();
        const data = document.getElementById('userGuess').value;
        props.setRecentGuess(data);    
    }
    return (
        <form   onSubmit={(event)=>handleSubmit(event)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
              />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
            />
        </form>
    );
};

