import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AddProfile from './AddProfile.js'


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
            textDelivered: false,
            waiting: false,
            optedIn: false,
            profilePage: false
    }
    this.sendText = this.sendText.bind(this)
    this.profilePage = this.profilePage.bind(this)
}

    sendText(){
        setTimeout(()=>{
            this.setState({
                textSent: true,
                delivering: true
            })
        }, 500)
        setTimeout(()=>{
            this.setState({
                delivering: false,
                textDelivered: true
            })
        }, 2000)
        setTimeout(()=>{
            this.setState({
                textDelivered: false,
                waiting: true
            })
        }, 5000)
        setTimeout(()=>{
            this.setState({
                waiting: false,
                optedIn: true
            })
        }, 8000)
        }

        profilePage(){
            this.setState({
                profilePage: true
            })
        }

    render(){
        return(
            <div className='newMember'>

                {
                    !this.state.profilePage ?
                    null :
                    <div className='profile'>
                    <AddProfile/>
                    </div>
                }

                <div className='searchHeader'>
                    <Link to={'/'}><img className='backArrow' src={back} alt='back'/></Link>
                    <img className='Searchlogo' src={logo} alt='logo'/>
                </div>
              

                {
                    !this.state.textSent ?
                    <div className='progressBarContainer'>
                        <img src={statusBar} alt='progressBar'/>
                    </div> :
                    null
                }

                {
                    !this.state.delivering ?
                    null :
                    <div className='progressBarContainer'>
                        <img src={deliveringStatusBar} alt='progressBar'/>
                    </div>
                }

                {
                    !this.state.textDelivered ?
                    null : 
                    <div className='progressBarContainer'>
                        <img src={sentStatusBar} alt='progressBar'/>
                    </div>
                }

                {
                    !this.state.waiting ?
                    null :
                    <div className='progressBarContainer'>
                        <img src={waitingStatusBar} alt='progressBar'/>
                    </div>
                }

                {
                    !this.state.optedIn ?
                    null :
                    <div className='progressBarContainer'>
                        <img src={OptedIn} alt='progressBar'/>
                    </div>
                }

                <div className='directions'>
                    <p className='vipMember'>Become a <br/>VIP Member</p>
                </div>

                <div className='inputForm'>
                    <div className='basicInfo'>

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
                            null
                            :
                            <div className='nextBtn'>
                                <span className='btnNext' onClick={this.profilePage}>next ></span>
                            </div>
                        }
                    </div>
                    </div>


            </div>
        )
    }
}

/* <div className='scrollableForm'>
    <div className='secondaryInfo'>
        <div className='emailAddressContainer'>
            <input className='emailAdress' placeholder='EMAIL'/>
        </div>

        <div className='addressContainer'>
            <input className='homeAddress' placeholder='ADDRESS'/>
        </div>
    </div>

    <div className='scrollableBirthdayForm'>
        <input className='dateInput' placeholder='mm/dd/yyyy'/>
    </div>

    <div className='location'>
        <select className='locationForm'>
            <option value="hide">---Location---</option>
            <option value='Provo'>PROVO</option>
            <option value='Lindon'>LINDON</option>
            <option value='Salt Lake'>SALT LAKE</option>
            <option value='Orem'>OREM</option>
        </select>
    </div>
</div> */