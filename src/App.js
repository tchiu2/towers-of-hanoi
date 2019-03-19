import React, { Component } from 'react';
import Game from './components/game';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game numDisks={5} />
      </div>
    );
  }
}

export default App;
