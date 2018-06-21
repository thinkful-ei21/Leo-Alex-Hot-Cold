import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {


    return (
        <section>
            <h2 id="feedback" >{props.feedback}
            </h2>

            <GuessForm 
            setRecentGuess={recentGuess=>props.setRecentGuess(recentGuess)}
            recentGuess={props.recentGuess}
            feedback={props.feedback}
            answer={props.answer}
            setFeedback={feedback=>props.setFeedback(feedback)}
            />
        </section>
    );
}

