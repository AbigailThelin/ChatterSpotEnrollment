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
                    <img className='bar' src={profileStatusBar} alt='statusBar'/>
                </div>
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
                    



                <div className='nextAndBack'>
                    <Link to='/newMember'><p className='btnNext'> back</p></Link>
                    <Link to='/completed'><p className='btnNext'>finish </p></Link>
                </div>
            </div>
        )
    }
}