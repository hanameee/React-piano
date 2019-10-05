import React, { Component } from "react";

class Key extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.midiSounds !== nextProps.midiSounds) {
      this.midiSounds = nextProps.midiSounds;
    }
  }

  constructor(props) {
    super(props);
    this.midiSounds = props.midiSounds;
  }
  playInstrument() {
    this.midiSounds.playChordNow(
      this.props.instrument,
      this.props.pitches,
      this.props.duration
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.playInstrument.bind(this)}>button</button>
      </div>
    );
  }
}

export default Key;

// example

// import React, { Component } from 'react';
// import './App.css';
// import Key from "./Key/Key";
// import MIDISounds from "midi-sounds-react";

// class App extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       midiSounds : this.midiSounds
//     }
//   }
//   componentDidMount() {
//     this.setState({
//       midiSounds:this.midiSounds
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <MIDISounds ref={(ref) => { this.midiSounds = ref; }} instruments={[3]} />
//         <Key instrument={3} pitches={[60]} duration={2.5} midiSounds={this.state.midiSounds}></Key>
//         <Key instrument={3} pitches={[65]} duration={2.5} midiSounds={this.state.midiSounds}></Key>
//       </div>
//     );
//   }
// }

// export default App;
