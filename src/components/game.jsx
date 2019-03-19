import React, { Component } from 'react';
import Tower from './tower';
import { 
  setupBoard,
  moveDisk,
  gameWon } from '../utils/game_utils';

import '../styles/Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: setupBoard(this.props.numDisks),
      won: false
    };
  }

  makeMove = (from, to) => {
    this.setState({
      board: moveDisk(this.state.board, from, to), 
    }, () => {
      if (gameWon(this.state.board, this.props.numDisks)) {
        this.setState({ won: true });
      }
    });
  }

  render() {
    const [left, middle, right] = this.state.board;
    const { numDisks } = this.props;
    return (
      <div className="game flex-container">
        <Tower 
          id="1"
          makeMove={this.makeMove}
          disks={left} 
          max={numDisks} />
        <Tower 
          id="2"
          makeMove={this.makeMove}
          disks={middle} 
          max={numDisks} />
        <Tower 
          id="3"
          makeMove={this.makeMove}
          disks={right} 
          max={numDisks} />
      </div>
    );
  }
}

export default Game;
