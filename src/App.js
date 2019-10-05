import React, { Component } from 'react';
import PianoController from '../src/containers/PianoController/PianoController'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoController />
      </div>
    )
  }
}

export default App;
