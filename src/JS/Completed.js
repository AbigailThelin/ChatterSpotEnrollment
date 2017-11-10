import React, {Component} from 'react'

import '../Styles/completed.css'

import alternatePB3 from '../assets/progressBarAssets/AlternatePB3.svg'
import logo from '../assets/cs-logo.png'
import { Link } from 'react-router-dom'
import plus from '../assets/+.png'
import finished from '../assets/progressBarAssets/finishedProgressBar.svg'
import checkmark from '../assets/checkmark.svg'
import trophy from '../assets/bigprize.svg'

export default class Completed extends Component{


    render(){
        return(
            <div className='completed'>

                <div className='header'>
                    <img className='logo' src={logo} alt='logo'/>
                    <Link to='/newMember'><img className='add' src={plus} alt='add'/></Link>
                </div>

                <div className='completedHeadContainer'>
                    <p className='completedHeader' id="">THANK YOU!</p>
                </div>

                <div id='completedNavBtns'>
                        <img src={trophy} className='trophy' alt='trophy'/>

                    <Link to='/' className='SearchBtn'><div >
                        <p>GO TO SEARCH</p>
                    </div></Link>
                        <Link to='addProfile'><p id='goBack'>GO BACK</p></Link>
                </div>

            <div id='pbContainer'>
                {<div className='textsProgress' id='completed'>
                    <img className='checkmark' src={checkmark} alt='checkmark'/>
                    <p className='spinnerTextDelivered'>OPTED IN</p>
                </div>}

                <div className='progressBarContainer'>
                    <img className='bar' src={alternatePB3} alt='progressBar'/>
                </div> 
            </div>


            </div>
        )
    }
}