import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import alternatePB1 from '../assets/progressBarAssets/AlternateProgressBar1.svg'
import spinner from '../assets/spinner.svg'
import checkmark from '../assets/checkmark.svg'
import clock from '../assets/clock.svg'

import logo from '../assets/cs-logo.png'
import back from '../assets/back arrow.svg'
import arrowRight from '../assets/arrow-right.svg'

import AddProfile from './AddProfile';
import Completed from './Completed';


import '../Styles/nonMember.css'

export default class nonMember extends Component{

    constructor(){
        super()
        this.state={
            MountedComponent: 1,
            textSent: false,
            delivering: false,
            delivered: false,
            waitingResponse: false,
            optedIn: false
    }
    this.sendText = this.sendText.bind(this)
    this.profilePage = this.profilePage.bind(this)
}

    profilePage(input){
        if(input === 'goToProfile'){
            this.setState({
                MountedComponent: 2
            })
        }else if(input === 'goToCompleted'){
            this.setState({
                MountedComponent: 3
            })
        }
    }

    sendText(){
        setTimeout(()=>{
            this.setState({
                textSent: true,
                delivering: true
            })
        }, 100)
        setTimeout(()=>{
            this.setState({
                delivering: false,
                delivered: true
            })
        }, 3000)
        setTimeout(()=>{
            this.setState({
                delivered: false,
                waitingResponse: true
            })
        }, 5000)
        setTimeout(()=>{
            this.setState({
                waitingResponse: false,
                optedIn: true
            })
        }, 8000)
        }

    render(){

        let x = this.state.MountedComponent
        let component;
        switch(x){
            case 1:
                component=<div className='newMember'>
                    
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


                                    
                                    <button className='sendTextBtn' onClick={this.sendText}><img src={arrowRight} alt='next' className='nexty'/></button>
                                        {
                                            !this.state.textSent
                                            ?
                                            <div className='btnNext'></div>
                                            :
                                            <div className='nextBtn'>
                                                <span className='btnNext' onClick={()=>this.profilePage('goToProfile')}>next</span>
                                            </div>
                                        }

                                </div>

                                    
                        <div className='progressBarContainer'>
                                        {
                                            this.state.textSent ?
                                            null :
                                            <div className='textsProgress'>
                                                <img className='spinnerNoAnimation' src={spinner} alt='spinner'/>
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
                                                <img className='checkmark' src={checkmark} alt='checkmark'/>
                                                <p className='spinnerTextDelivered'>TEXT DELIVERED</p>
                                            </div>  :
                                            null
                                        }
                                        
                                        {
                                            !this.state.waitingResponse ?
                                            null :
                                            <div className='textsProgress'>
                                                <img className='spinner' src={clock} alt='spinner'/>
                                                <p className='spinnerText'>WAITING FOR RESPONSE</p>
                                            </div>
                                        }

                                        {
                                            this.state.optedIn ?
                                            <div className='textsProgress'>
                                                <img className='checkmark' src={checkmark} alt='checkmark'/>
                                                <p className='spinnerTextDelivered'>OPTED IN</p>
                                            </div> :
                                            null
                                        }
                                        
                                        <img className='bar' src={alternatePB1} alt='progressBar'/>
                                    </div> 

                </div>
                break;
            case 2: 
                component= <AddProfile onNextClicked={()=>this.profilePage('goToCompleted')} className='AddProfileAnimation'/>
                break;
            case 3:
                component=<Completed className='AddProfileAnimation'/>
                break;
            default: 
                null;
        }
        return(
            <div>
                {component}
            </div>
        )
    }
}