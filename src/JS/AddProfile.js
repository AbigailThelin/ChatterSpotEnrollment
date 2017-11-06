import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import backArrow from '../assets/back arrow.svg'
import profileStatusBar from '../assets/progressBarAssets/ProfileStatusBar.svg'
import logo from '../assets/cs-logo.png'
import back from '../assets/back arrow.svg'
import '../Styles/addProfile.css'

export default class AddProfile extends Component{

    render(){
        return(
            <div className='addProfile'>

            <div className='searchHeader'>
                <Link to={'/'}><img className='backArrow' src={back} alt='back'/></Link>
                <img className='Searchlogo' src={logo} alt='logo'/>
            </div>

                <div className='progressBarContainer'>
                    <img src={profileStatusBar} alt='statusBar'/>
                </div>

                <div className='aditionalInfo'>
                    <div className='emailAddressContainer'>
                        <input className='emailAdress' placeholder='EMAIL'/>
                    </div>

                    <div className='addressContainer'>
                        <input className='homeAddress' placeholder='ADDRESS'/>
                    </div>
                    
                </div>



                <div className='nextAndBack'>
                    <p className='btnNext'> back</p>
                    <span className='btnNext'>next </span>
                </div>
            </div>
        )
    }
}