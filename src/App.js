import React, { Component } from 'react';
import options from "./options.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import GameCards from "./components/GameCards";
import GameBox from "./components/GameBox";
import './App.css';

class App extends Component {
  // Options array
  state = {
    options: options,
    score: 0,
    topScore: 0,
    result: "Click an Image to Begin"
  };

  randomizeOrder = () => {
    //change order of this.state.options
    console.log("Randomizing")

    const options = this.state.options.map((a) => [Math.random(), a])
    .sort( (a, b) => a[0]-b[0] )
    .map( (a) => a[1] )

    this.setState({options})
  }

  handleClick = id => {
    //handle click
    const chosen = this.state.options.find(item =>item.id === id)
    console.log(chosen)
    if (chosen.clicked === true) {

    } else {
      chosen.clicked = true;

      this.randomizeOrder()
    }
    
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topScore={this.state.topScore} result={this.state.result} />
        <Jumbotron />
        <GameBox>
          {this.state.options.map(option => (
          <GameCards 
            handleClick={this.handleClick}
            id={option.id}
            key={option.id}
            image={option.image}
            name={option.name}
          />
          ))}
        </GameBox>
      </Wrapper>
    );
  }
}

export default App;
