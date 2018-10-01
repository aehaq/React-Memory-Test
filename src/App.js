import React, { Component } from 'react';
import options from "./options.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import GameCards from "./components/GameCards";
import GameBox from "./components/GameBox";
import './App.css';

class App extends Component {

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

    this.setState({options: options})
  }

  //handle click
  handleClick = id => {
    const chosen = this.state.options.find(item =>item.id === id)
    
    // If the chosen item had already been clicked 
    if (chosen.clicked === true) {

      // Reset Score
      this.setState({ 
        score: 0,
        result: "Wrong! Game Reset. Try Again.",
        options: this.state.options.map( (item) => item.clicked = false)
       })

      // Randomize the array order again
      this.randomizeOrder()

      // If it hasn't been clicked
    } else {

      // Check if this click wins the game
      if (this.state.score === 11) {

        // Reset Game, and set high Score to 12
        this.setState({ 
          score: 0, 
          topScore: 12, 
          result: "Congratulations! You Won! \n Feel free to play again.", 
          options: this.state.options.map( (item) => item.clicked = false )
        })

        // If this click does not win the game
      } else {

        // Increment Score and print new message
        chosen.clicked = true;
        this.setState({ 
          score: this.state.score + 1,
          result: "Choose another unique image..."
        })
  
        // Increment Top Score if Score would be higher
        if (this.state.score >= this.state.topScore) {

          this.setState({topScore: this.state.topScore + 1})

        }
      }
      // Shuffle the Array
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
