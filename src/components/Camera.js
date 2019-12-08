import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Card from '@material-ui/core/Card';
import { useSnackbar } from 'notistack';
import Button from './Button';
import { addUserData } from '../lib/data';
import ImagePreview from './ImagePreview';
import 'react-html5-camera-photo/build/css/index.css';

const snackOption = {
  variant: 'success',
  autoHideDuration: 1000,
}

const computeCo2 = (choice) => {
  if (choice === 'banana') {
    return 0.9 * 0.120;
  }
  if (choice === 'orange') {
    return 0.5 * 0.131;
  }
  if (choice === 'pizza') {
    return 0.644;
  }
  if (choice === 'sandwich') {
    return 2.889;
  }
  if (choice === 'hot dog') {
    return 2.778;
  }
  return 0;
}

const CameraComponent = () => {
  const [dataUri, setDataUri] = useState(null);
  const [stream, setStream] = useState(null);
  const [objClass, setObjClass] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  async function handleTakePhotoAnimationDone (dataUri) {
    setLoading(true);
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
    setLoading(false);
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
      { 
        objClass && <Card style={{ padding: 10, margin: 10 }}>
          <div>{objClass}</div>
          <div>kg CO<sub>2</sub>e {computeCo2(objClass)}</div>      
        </Card>
      }
      {
        loading && <div> loading... </div>
      }
      {
        objClass && <Button onClick={() => {
          addUserData({ 
            unit: 'kg',
            date: new Date(),
            choice: objClass,
            rawValue: 0.1,
            computedValue: computeCo2(objClass),
          });
          enqueueSnackbar('Added new entry', snackOption);
        }} label="Add"/>
      }
      <RotateLeftIcon 
        style={{ 
          position: 'fixed', top: 0, right: 0, padding: 20, color: 'white' 
        }}
        fontSize="large" onClick={() => {
        setDataUri(null);
        setObjClass(null);
      }}/>
    </div>
  );
}

export default CameraComponent;
