import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Tile from './components/Tile.js';
import characters from "./characters.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: characters,
      selectedTiles: [],
      topScore: 0,
      gameMessage: "press any tile to start"
    }
  }

  // callback function to handle clicks
  handlePicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters();
    this.checkGuess(name, this.updateScore)
  }

  // callback function to shuffle the characters
  shuffleCharacters = () => {
    this.setState(this.state.characters = this.shuffleArray(this.state.characters))
  }

  // callback function to assist shuffling character array
  shuffleArray = (array) => {
    var y, x, i;
    for (i = array.length - 1; i > 0; i--) {
      y = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[y];
      array[y] = x;
    }
    return array;
  }

  // callback function to check if tile has already been clicked
  checkGuess = (name, callback) => {
    const newState = { ...this.state };
    if (newState.selectedTiles.includes(name)) {
      newState.gameMessage = `YOU ALREADY PICKED "${name.toUpperCase()}"!`
      newState.selectedTiles = []
      // reset the game with new state
      this.setState(this.state = newState)
    } 
    else {
      newState.selectedTiles.push(name)
      newState.gameMessage = `GOOD CHOICE!`
      this.setState(this.state = newState)
    }
    callback(newState, this.alertWinner)
  }

  // callback function to update the score state
  updateScore = (newState, callback) => {
    if (newState.selectedTiles.length > newState.topScore) {
      newState.topScore++
      this.setState(this.state = newState)
    }
    callback(newState)
  }

  // callback function to reset game when max score reached
  alertWinner = (newState) => {
    if (newState.selectedTiles.length === 16) {
      newState.gameMessage = "CHAMPION!";
      newState.selectedTiles = [];
      this.setState(this.state = newState)
    }
  }


  render() {
    return (
      <div>
        <NavBar
          gameMessage={this.state.gameMessage}
          currentScore={this.state.selectedTiles.length}
          topScore={this.state.topScore}
        />
        <main role="main">
          <section className="jumbotron" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/header.jpg)', backgroundSize: 'cover'}}>
            <div className="container">
              <h1>Dragonball Z Clicky Game!</h1>
              <p className="lead">Click on a an image to earn points, but don't click on any more than once!</p>
            </div>
          </section>
          <div className="py-3 bg-light">
            <div className="container gameArea">
              <div className="row">
                {this.state.characters.map(char => (<Tile id={char.id} name={char.name} image={char.image} key={char.id} handlePicked={this.handlePicked} /> ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
