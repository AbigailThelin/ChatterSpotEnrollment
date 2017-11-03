import React, { Component } from 'react';
import './Styles/App.css';
import Router from './router'

class App extends Component {
  render() {
    return (
    
      <div className="App">
        {Router}
      </div>
    );
  }
}

export default App;
