import React from 'react';
import polar from '../polar.gif';

const style = {
  padding: 20
}

const Wait = () => <div style={style}>
  <img src={polar} height={200}/>
  <h4>We'll be right back after saving this polar bear...</h4>  
</div>;
export default Wait;
