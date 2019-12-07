import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'

function App() {

  const [ colour, changeColour ] = useState("blue")
  return (

    <html>
      <body>

      <div className="App">
        <p>
          <h1>Our Cool Name</h1>
        </p>

        <p id="demo" style={{ color: colour }}>dafdsaf</p>
        <button type="button" onClick={() => { changeColour("red") }}>Click Me!</button>
        </div>

      <div>
        <p>
          <IdiomaticReactList items={[10000,24456,3]}/>
        </p>
      </div>

      </body>

      <div>
          <img src={logo} />
      </div>

    </html>
  );
}

function IdiomaticReactList(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <div align="center" key={index} >
          {index} | {item}
        </div>
      ))}
    </div>
  );
}

export default App;
