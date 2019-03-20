import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Game from './components/game';

import './App.css';

class App extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App flex-container vertical">
          <h1>Towers of Hanoi</h1>
          <Game numDisks={1} />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
