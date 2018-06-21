import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:3,
            guesses:[10,15,25],
            feedback:'Make your guess!',
            recentGuess:1,
            answer:38
        };
    }

    setFeedback(feedback){
        this.setState({
            feedback
        });
    }
    setRecentGuess(recentGuess){
        this.setState({
            recentGuess
        });
        let feedback;
        if(this.state.answer==recentGuess){
         feedback = 'Correct!'
        };
        if ((recentGuess>this.state.answer && recentGuess<this.state.answer+10)|| (recentGuess<this.state.answer && recentGuess>this.state.answer-10)){
            feedback = 'Hot!'
        };
        if ((recentGuess>this.state.answer+10)||(recentGuess<this.state.answer-10)){
            feedback = 'Cold.'
        };
        this.setFeedback(feedback);
        this.setGuessCount(recentGuess);
        this.addGuess(recentGuess);
    }
    setGuessCount(guess){
        if(!this.state.guesses.includes(guess))
        this.setState({
        count: this.state.count+1
        });
    }
    addGuess(guess){
        if(!this.state.guesses.includes(guess)){
        this.setState({
            guesses: this.state.guesses.concat(guess)
        });}
    }

    render(){
        return (   
        <div>
            <Header />
            <GuessSection
                feedback={this.state.feedback}
                setFeedback={feedback=>this.setFeedback(feedback)}
                answer={this.state.answer}
                recentGuess={this.state.recentGuess}
                setRecentGuess={recentGuess=>this.setRecentGuess(recentGuess)}
             />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }
}

