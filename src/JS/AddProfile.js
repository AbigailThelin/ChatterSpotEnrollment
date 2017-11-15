import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import alternatePB2 from '../assets/progressBarAssets/AlternatePB2.svg'
import spinner from '../assets/spinner.svg'
import checkmark from '../assets/checkmark.svg'
import clock from '../assets/clock.svg'

import backArrow from '../assets/back arrow.svg'
import profileStatusBar from '../assets/progressBarAssets/ProfileStatusBar.svg'
import logo from '../assets/cs-logo.png'
import back from '../assets/back arrow.svg'
import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'
import '../Styles/addProfile.css'

export default class AddProfile extends Component{

    render(){
        const { className, onNextClicked } = this.props;

        return(
            <div className={'addProfile ' + className}>


                    <div className='directions'>
                        <p className='vipMember'>Additional Info</p>
                    </div>

                    <div className='additionalInfoContainer'>
                    <div className='aditionalInfo'>
                        <div className='emailAddressContainer'>
                            <input className='emailAdress' placeholder='EMAIL'/>
                        </div>

                        <div className='addressContainer'>
                            <input className='homeAddress' placeholder='ADDRESS'/>
                        </div>
                    </div>
                    </div>


                    <div className='locationContainerProfile'>
                        <select className='locationForm'>
                            <option value="hide">---Location---</option>
                            <option value='Provo'>PROVO</option>
                            <option value='Lindon'>LINDON</option>
                            <option value='Salt Lake'>SALT LAKE</option>
                            <option value='Orem'>OREM</option>
                        </select>
                    </div>
                        


                    <div className='nextAndBackContainer'>
                        <div className='nextAndBack'>
                            <Link to='/newMember'><img className='btnNext' alt='back' src={arrowLeft}/></Link>
                            <button onClick={()=>onNextClicked()} className='btnNext'><img alt='next'src={arrowRight}/> </button>
                        </div>
                    </div>

                    <div className='progressBarContainer2'>
                    <div className='textsProgress2' id='profile2'>
                        <img className='checkmark' src={checkmark} alt='checkmark'/>
                        <p className='spinnerTextDelivered'>OPTED IN</p>
                    </div>

                        <img className='bar' src={alternatePB2} alt='progressBar'/>
                    </div> 
            </div>
        )
    }
}