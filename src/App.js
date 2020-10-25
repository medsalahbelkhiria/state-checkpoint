import React  from 'react';
import './App.css';
import Timer from './Timer';
import Profile from './Profile.js';

class App extends React.Component {

  render() {

    return (
      <div className="App">
      
        <Timer />
        <Profile />

      </div>
    )
  }
}

export default App