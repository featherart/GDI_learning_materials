import React from 'react';
import logo from './ryan.jpg';
import './App.css';

const App = ({ clicked = 5, handleClick }) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Ryan Gosling's Spinning Head!</h2>
      </div>
      <div>
        <div className='counts'>the button has been clicked {clicked} times.</div>
        <button className='click-button' onClick={handleClick}>click me!</button>
      </div>
    </div>
  )
}

export default App;
