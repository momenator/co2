import React from 'react';
import UserDataDisplay from './UserDataDisplay';
import logo from '../data/pics/eCO2_logo.png';
import emoji from '../data/pics/ann.png';
import plot1 from '../data/pics/plot1.png';

const Home = () => {
  return <div style={{ padding: 10, overflow: 'hidden' }}>
      <img STYLE="position:absolute; TOP:20px; LEFT:100px; WIDTH:70px; HEIGHT:70px" src={logo} alt="emoji"/>
      <img STYLE="position:absolute; TOP:12px; RIGHT:100px; WIDTH:80px; HEIGHT:80px" src={emoji} alt="Logo" />
      
      <p></p>
      <p></p>

    <UserDataDisplay />
  </div>
};

export default Home;
