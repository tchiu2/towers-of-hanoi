import React from 'react';
import { DropTarget } from 'react-dnd';
import { Types } from './Constants';
import Disk from './disk';

import '../styles/Tower.css';

const towerTarget = {
  drop(props) {
    console.log("dropped on ", props.id);
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const Tower = ({ connectDropTarget, isOver, id, disks, max, onClick }) => {
  return connectDropTarget(
    <div id={id} className="tower-background flex-container">
      <div className="tower flex-container vertical">
        <div className="tower-disks flex-container vertical">
          {disks.map(disk => <Disk key={disk} onClick={onClick} value={disk} max={max} towerId={id} />)}
        </div>
        <div className="tower-base flex-container"></div>
      </div>
    </div>
  );
}

export default DropTarget(Types.DISK, towerTarget, collect)(Tower);
