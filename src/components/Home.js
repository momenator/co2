import React from 'react';
import UserDataDisplay from './UserDataDisplay';
import logo from '../data/pics/eCO2_logo.png';
import emoji from '../data/pics/ann.png';
import plot1 from '../data/pics/plot1.png';

const Home = () => {
  return <div style={{ padding: 10, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div> <img height={60} src={logo} alt="emoji"/> </div>
        <div> <img height={70} src={emoji} alt="Logo" /> </div>
      </div>
    <UserDataDisplay />
  </div>
};

export default Home;
