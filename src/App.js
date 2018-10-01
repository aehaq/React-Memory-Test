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

    this.setState({options: options})
  }

  handleClick = id => {
    //handle click
    const chosen = this.state.options.find(item =>item.id === id)
    
    if (chosen.clicked === true) {
      // If the chosen item had already been clicked 

      // Reset Score
      this.setState({ score: 0 })

      // Print the Game Reset Message
      this.setState({ result: "Wrong! Game Reset. Try Again."})

      // Set clicked state for all to false
      this.setState({ options: this.state.options.map( (item) => item.clicked = false)})

      // Randomize the array order again
      this.randomizeOrder()

    } else {
      if (this.state.score === 11) {
        // Reset Score
        this.setState({ score: 0 })

        // Set Top Score to 12
        this.setState({ topScore: 12 })

        // Print the Game Reset Message
        this.setState({ result: "Congratulations! You Won! \n Feel free to play again."})

        // Set clicked state for all to false
        this.setState({ options: this.state.options.map( (item) => item.clicked = false)})
      } else {

        chosen.clicked = true;
        this.setState({ score: this.state.score + 1})
  
        if (this.state.score >= this.state.topScore) {
          this.setState({topScore: this.state.topScore + 1})
        }

        // Print message
        this.setState({ result: "Choose another unique image..."})
      }

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
