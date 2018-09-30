import React, { Component } from 'react';
import options from "./options.json";
import './App.css';

class App extends Component {
  // Options array
  state = {
    options
  };

  score = 0;

  topScore = 0;

  randomizeOrder = () => {
    //change order of this.state.options
  }

  handleClick = id => {
    //handle click
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.score} topScore={this.topScore} />
        <Jumbotron />
        {this.state.options.map(option => (
        <GameCards 
          id={option.id}
          key={option.id}
          image={option.image}
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
