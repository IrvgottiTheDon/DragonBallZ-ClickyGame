import React from 'react';
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

  handlePicked = event => {
    const name = event.target.attributes.getNamedItem("name").value;
  }

  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
