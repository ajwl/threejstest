import React, {useEffect, useRef} from 'react';
// import * as THREE from "three"
import {makeThreeBits} from './threebits.js';
import './App.css';
// import logo from './logo.svg';


function App() {

  const canvasHolder = useRef();

  useEffect(() => {
    makeThreeBits(canvasHolder.current);
  });
  

  return (
    <div className="App">
      <header className="App-header">
        A rotating item
      </header>
      <div className="marker"></div>
      <div className="box" ref={canvasHolder}></div>
    </div>
  );
}

export default App;
