import React, { Component } from 'react';
import options from "./options.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import GameCards from "./components/GameCards";
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
    console.log(`Image with ID: ${id} clicked`)
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.score} topScore={this.topScore} />
        <Jumbotron />
        {this.state.options.map(option => (
        <GameCards 
          handleClick={this.handleClick}
          id={option.id}
          image={option.image}
          name={option.name}
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
