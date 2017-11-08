import React, {Component} from 'react'

import '../Styles/completed.css'

import alternatePB3 from '../assets/progressBarAssets/AlternatePB3.svg'
import logo from '../assets/cs-logo.png'
import { Link } from 'react-router-dom'
import plus from '../assets/+.png'
import finished from '../assets/progressBarAssets/finishedProgressBar.svg'
import checkmark from '../assets/checkmark.svg'

export default class Completed extends Component{


    render(){
        return(
            <div className='completed'>

                <div className='header'>
                    <img className='logo' src={logo} alt='logo'/>
                    <Link to='/newMember'><img className='add' src={plus} alt='add'/></Link>
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

                <div className='textsProgress' id='completed'>
                    <img className='checkmark' src={checkmark} alt='checkmark'/>
                    <p className='spinnerTextDelivered'>OPTED IN</p>
                </div>

                <div className='progressBarContainer'>
                    <img className='bar' src={alternatePB3} alt='progressBar'/>
                </div> 
            </div>
        )
    }
}