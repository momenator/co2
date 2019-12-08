import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ImagePreview from './ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';

const CameraComponent = () => {
  const [dataUri, setDataUri] = useState(null);
  const [stream, setStream] = useState(null);
  const [objClass, setObjClass] = useState(null);

  async function handleTakePhotoAnimationDone (dataUri) {
    setDataUri(dataUri);
    const img = document.getElementById('image-feed');
    const model = await cocoSsd.load();
    // Classify the image.
    let predictions = await model.detect(img);
    // remove person
    predictions = predictions.filter(p => p.class !== 'person');

    console.log('Predictions: ', predictions);
    if (predictions.length > 0) {
      setObjClass(predictions[0].class);
    }
  }

  function handleCameraStart (stream) {
    setStream(stream);
  }

  const isFullscreen = false;
  
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera 
            onCameraStart={(stream) => { handleCameraStart(stream); }}
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
      <div>Class :{objClass} </div>
      <RotateLeftIcon 
        style={{ 
          position: 'fixed', top: 0, right: 0, padding: 20, color: 'white' 
        }}
        fontSize="large" onClick={() => {
        setDataUri(null)
      }}/>
    </div>
  );
}

export default CameraComponent;
