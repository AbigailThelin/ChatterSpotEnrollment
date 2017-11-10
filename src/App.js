import React, { Component } from 'react';
import './Styles/App.css';
import Router from './router'

import { Link } from 'react-router-dom'
import logo from './assets/cs-logo.png'
import back from './assets/back arrow.svg'
import plus from './assets/+.png'

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <div className='searchHeader'>
            <Link to={'/'}><img className='backArrow' src={back} alt='back'/></Link>
            <img className='Searchlogo' src={logo} alt='logo'/>
            <Link to='/newMember'><img className='addMember' src={plus} alt='add'/></Link>
        </div>

        {Router}
      </div>
    );
  }
}

export default App;
