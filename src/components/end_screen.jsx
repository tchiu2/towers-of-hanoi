import React from 'react';

import '../styles/EndScreen.css';

const EndScreen = ({ resetGame, closeModal }) => (
  <div className="end-screen">
    <div className="end-screen-content flex-container vertical">
      <div className="close-modal" onClick={closeModal}>X</div>
      <h2>You won!</h2>
      <button className="button" onClick={resetGame}>Play again</button>
    </div>
  </div>
);

export default EndScreen;
