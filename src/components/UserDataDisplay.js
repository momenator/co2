import React from 'react';
import GridDisplay from './GridDisplay';
import { getUserData } from '../lib/data';

import CarIcon from '@material-ui/icons/DriveEta';
import TaxiIcon from '@material-ui/icons/LocalTaxi';
import TrainIcon from '@material-ui/icons/Train';
import BusIcon from '@material-ui/icons/AirportShuttle';
import PlaneIcon from '@material-ui/icons/AirplanemodeActive';
import TramIcon from '@material-ui/icons/Tram';
import SubwayIcon from '@material-ui/icons/Subway';
import FireIcon from '@material-ui/icons/Whatshot';
import ElectricIcon from '@material-ui/icons/FlashOn';
import WaterIcon from '@material-ui/icons/Waves';

const textStyle = { 
  flex: 2, paddingTop: 10, fontSize: 20, fontWeight: 'bold' };

const isSubway = (choice) => choice.toLowerCase().includes('underground');
const isTram = (choice) => choice.toLowerCase().includes('tram');
const isTrain = (choice) => choice.toLowerCase().includes('rail');
const isPlane = (choice) => choice.toLowerCase().includes('air');
const isTaxi = (choice) => choice.toLowerCase().includes('taxi');
const isBus = (choice) => choice.toLowerCase().includes('bus');
const isCar = (choice) => {
  choice = choice.toLowerCase();
  return choice.includes('electric') || choice.includes('fuel');
}

const isHeat = (choice) => choice.toLowerCase().includes('heat');
const isElectric = (choice) => choice.toLowerCase().includes('electric');
const isWater = (choice) => choice.toLowerCase().includes('water');


const Icon = ({ choice }) => {
  choice = choice.toLowerCase();
  if (isCar(choice)) {
    return <CarIcon fontSize="large"/>;
  } else if (isPlane(choice)) {
    return <PlaneIcon fontSize="large"/>;
  } else if (isTram(choice)) {
    return <TramIcon fontSize="large"/>;
  } else if (isSubway(choice)) {
    return <SubwayIcon fontSize="large"/>;
  } else if (isTrain(choice)) {
    return <TrainIcon fontSize="large"/>;
  } else if (isBus(choice)) {
    return <BusIcon fontSize="large"/>;
  } else if (isTaxi(choice)) {
    return <TaxiIcon fontSize="large"/>;
  } else if (isHeat(choice)) {
    return <FireIcon fontSize="large"/>
  } else if (isElectric(choice)) {
    return <ElectricIcon fontSize="large"/>
  } else if (isWater(choice)) {
    return <WaterIcon fontSize="large"/>
  }
  return <div></div>;
}

const choiceLevel = (choice) => {
  choice = choice.toLowerCase();
  if (isCar(choice) || isPlane(choice) || isTaxi(choice)) {
    return 'red';
  } else if (isTram(choice) || isSubway(choice) || isTrain(choice) || isBus(choice)) {
    return 'green';
  } 
  return 'grey';
}

const WrappedData = (data) => {
  return <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
    <div style={{ flex: 1, color: 'white', backgroundColor: choiceLevel(data.choice) }}>
      <Icon choice={data.choice} /></div>
    <div style={textStyle}>{data.computedValue} co<sub>2</sub>e</div>
    <div style={textStyle}>{data.rawValue} {data.unit}</div>
  </div>;
}

const UserDataDisplay = () => {
  return <div>
    <GridDisplay items={getUserData().map(d => WrappedData(d))} spacing={1} itemsPerRow={1} />
  </div>
}

export default UserDataDisplay;
