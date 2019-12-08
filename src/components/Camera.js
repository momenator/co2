import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const CameraComponent = () => {
  return <div><Camera  
    onTakePhoto={(dataUri) => {
      console.log(dataUri)
    }}
  />
  </div>;
}

export default CameraComponent;
