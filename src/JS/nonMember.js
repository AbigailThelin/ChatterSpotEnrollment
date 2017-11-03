import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import QM from '../assets/Question_Mark.svg'
import logo from '../assets/cs-logo.png'
import back from '../assets/back arrow.svg'

import '../Styles/nonMember.css'

export default class nonMember extends Component{

    constructor(){
        super()
        this.state={
    }
}

    render(){
        return(
            <div className='newMember'>
                <div className='searchHeader'>
                    <Link to={'/'}><img className='backArrow' src={back} alt='back'/></Link>
                    <img className='Searchlogo' src={logo} alt='logo'/>
                </div>

                    <div className='hoverable'>
                        <img className='QM' src={QM} alt='hover'/>
                        <span className='hoverableSpan'>Add a users name and number then send text <br/> add additional info</span>
                    </div>

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

                        <button className='sendTextBtn'>SEND</button>
                    </div>
                    </div>

                    <div className='additionalInfo'>additional info</div>

                    <div className='scrollableForm'>
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
                    </div>

                    <div className='saveBtn'>
                        <button className='btnSave'>SAVE</button>
                    </div>


            </div>
        )
    }
}
