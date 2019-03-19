import React from 'react';
import Disk from './disk';

import '../styles/Tower.css';

const Tower = ({ id, disks, max, onClick }) => (
  <div id={id} 
    className="tower-background flex-container"
    onClick={onClick}>
    <div className="tower flex-container vertical">
      <div className="tower-disks flex-container vertical">
        {disks.map(disk => <Disk key={disk} value={disk} max={max} />)}
      </div>
      <div className="tower-base"></div>
    </div>
  </div>
);

export default Tower;
