import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Tower from './tower';
import { setupBoard, moveDisk } from '../utils/game_utils';

import '../styles/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: setupBoard(this.props.numDisks),
      selected: null,
      won: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const towerIdx = parseInt(e.currentTarget.id) - 1;
    if (this.state.selected === null) {
      this.setState({
        selected: towerIdx
      });
    } else {
      this.setState({
        board: moveDisk(this.state.board, this.state.selected, towerIdx), 
        selected: null
      });
    }
  }

  render() {
    const [left, middle, right] = this.state.board;
    const { numDisks } = this.props;
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="game flex-container">
          <Tower 
            id="1"
            onClick={this.handleClick} 
            disks={left} 
            max={numDisks} />
          <Tower 
            id="2"
            onClick={this.handleClick} 
            disks={middle} 
            max={numDisks} />
          <Tower 
            id="3"
            onClick={this.handleClick} 
            disks={right} 
            max={numDisks} />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default Game;
