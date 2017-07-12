import React from 'react';
import logo from './ryan.jpg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: 1,
    }
  }

  handleClick() {
    let clicked = this.state.clicked + 1
    this.setState({clicked: clicked})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ryan Gosling's Spinning Head!</h2>
        </div>
        <div>
          <div className='counts'>the button has been clicked {this.state.clicked} times.</div>
          <button className='click-button' onClick={() => this.handleClick()}>click me!</button>
        </div>
      </div>
    );
  }
}

export default App;
