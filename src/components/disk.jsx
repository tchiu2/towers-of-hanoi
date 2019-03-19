import React from 'react';

import '../styles/Disk.css';

const Disk = ({ value, max }) => (
  <div 
    className="disk flex-container" 
    style={{ width: `${(value / max) * 100}%`, 
             height: `${240 / max}px` }}>
    {value}
  </div>
);

export default Disk;
