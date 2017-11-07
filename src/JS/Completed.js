import React, {Component} from 'react'

import '../Styles/completed.css'

import logo from '../assets/cs-logo.png'
import { Link } from 'react-router-dom'
import plus from '../assets/+.png'
import finished from '../assets/progressBarAssets/finishedProgressBar.svg'
import thumbsUp from '../assets/thumbsUp.svg'

export default class Completed extends Component{


    render(){
        return(
            <div className='completed'>

                <div className='header'>
                    <img className='logo' src={logo} alt='logo'/>
                    <Link to='/newMember'><img className='add' src={plus} alt='add'/></Link>
                </div>

                <div className='progressBarContainer'>
                    <img className='bar' src={finished} alt='progressbar'/>
                </div>

                <div className='completedHeadContainer'>
                    <p className='completedHeader'>FORM COMPLETED</p>
                </div>


                <div className='completedContainer'>
                    {/* <img className='thumbsUp' src={thumbsUp} alt='thumbsup'/> */}
                </div>

                <div className='nextAndBack'>
                    <Link to='/addProfile'><p className='btnNext'> back</p></Link>
                    <Link to='/'><p className='btnNext'>search </p></Link>
                </div>
            </div>
        )
    }
}