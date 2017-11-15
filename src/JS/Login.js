import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../Styles/Login.css'


export default class Login extends Component{

    render(){
        return(
            <div className='LoginPage'>
                <div className='loginContainer'>
                    <div className='header'>
                        <p className='loginHead'>ENROLLMENT PAGE LOGIN</p>
                    </div>

                    <div className='body'>

                        <div className='left'>
                            <input className='input' id='name' placeholder='COMPANY USERNAME'/>
                        </div>
                        <div className='right'>
                            <input className='input' id='password' placeholder='PASSWORD'/>
                        </div>

                    </div>
                        <div className='btnContainer'>
                            <Link to='/search' className='link'><button id='btn' onClick>LOGIN</button></Link>
                        </div>
                </div>
            </div>
        )
    }
}