import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AddProfile from './AddProfile.js'

import alternatePB1 from '../assets/progressBarAssets/AlternateProgressBar1.svg'
import spinner from '../assets/spinner.svg'


import logo from '../assets/cs-logo.png'
import back from '../assets/back arrow.svg'
import statusBar from '../assets/progressBarAssets/PrimaryProgressBar.svg'
import deliveringStatusBar from '../assets/progressBarAssets/primaryProgressBar2.svg'
import sentStatusBar from '../assets/progressBarAssets/GroupThree.svg'
import waitingStatusBar from '../assets/progressBarAssets/GroupFour.svg'
import OptedIn from '../assets/progressBarAssets/OptedIn.svg'


import '../Styles/nonMember.css'

export default class nonMember extends Component{

    constructor(){
        super()
        this.state={
            textSent: false,
            delivering: false,
            delivered: false

    }
    this.sendText = this.sendText.bind(this)
}

    sendText(){
        setTimeout(()=>{
            this.setState({
                textSent: true,
                delivering: true
            })
        }, 100)
        setTimout(()=>{
            this.setState({
                delivering: false,
                delivered: true
            })
        }, 3000)
        }


    render(){
        return(
            <div className='newMember'>

                <div className='searchHeader'>
                    <Link to={'/'}><img className='backArrow' src={back} alt='back'/></Link>
                    <img className='Searchlogo' src={logo} alt='logo'/>
                </div>


                <div className='directions'>
                    <p className='vipMember'>Enroll a VIP Member</p>
                </div>

                <div className='inputForm'>

                        <div className='topForm'>
                            <div className='nameContainer'>
                                <input className='nameInput' placeholder='NAME'/>
                            </div>

                            <div className='numberContainer'>
                                <input className='numberInput' placeholder='NUMBER'/>
                            </div>
                        </div>


                    
                       <button className='sendTextBtn' onClick={this.sendText}>SEND</button>
                        {
                            !this.state.textSent
                            ?
                            <div className='btnNext'></div>
                            :
                            <Link to='/addProfile'><div className='nextBtn'>
                                <span className='btnNext' onClick={this.profilePage}>next ></span>
                            </div></Link>
                        }

                    </div>

                    
                        {
                            this.state.textSent ?
                            null :
                            <div className='textsProgress'>
                                <img className='spinner' src={spinner} alt='spinner'/>
                                <p className='spinnerText'>WAITING TO SEND TEXT</p>
                            </div>  
                        }

                        {
                          this.state.delivering ?
                          <div className='textsProgress'>
                            <img className='spinner' src={spinner} alt='spinner'/>
                            <p className='spinnerText'>DELIVERING TEXT</p>
                        </div> 
                        :
                        null  
                        }

                        {
                            this.state.delivered ?
                            <div className='textsProgress'>
                                <img className='spinner' src={spinner} alt='spinner'/>
                                <p className='spinnerText'>TEXT DELIVERED</p>
                            </div>  :
                            null
                        }
                        
                    <div className='progressBarContainer'>
                        <img className='bar' src={alternatePB1} alt='progressBar'/>
                    </div> 

            </div>
        )
    }
}