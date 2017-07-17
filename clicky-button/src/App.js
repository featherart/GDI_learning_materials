import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 0
    }
  }

  handleClick() {
    var clicked = this.state.clicked + 1
    this.setState({ clicked: clicked })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className='count'>I've been clicked {this.state.clicked} times</div>
          <button className='click-button' onClick={() => this.handleClick()}>click me</button>
        </div>
      </div>
    );
  }
}

export default App;
