import React from 'react';
import { DragSource } from 'react-dnd';
import { Types } from './Constants';
import { colorPicker } from '../utils/color_utils';

import '../styles/Disk.css';

const diskSource = {
  isDragging(props, monitor) {
    return monitor.getItem().id === props.id;
  },

  beginDrag(props) {
    console.log("dragging from ", props.towerId);
    return { 
      id: props.id,
      towerId: props.towerId
    }
  },

  endDrag(props, monitor, component) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log("finished dragging"); 
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Disk = ({ connectDragSource, isDragging, value, max, towerId }) => {
  return connectDragSource(
    <div className="disk flex-container" 
      style={{ 
        width: `${(value / max) * 100}%`, 
        height: `${240 / max}px`,
        backgroundColor: colorPicker(value / max),
        opacity: isDragging ? 0.5 : 1,
      }}>
      {value}
    </div>
  );
}

export default DragSource(Types.DISK, diskSource, collect)(Disk);
