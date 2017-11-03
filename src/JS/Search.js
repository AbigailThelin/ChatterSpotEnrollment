import React, { Component } from 'react'
import '../Styles/Search.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import QM from '../assets/Question_Mark.svg'
import logo from '../assets/cs-logo.png'
import plus from '../assets/+.png'

export default class Search extends Component{

    constructor(){
        super()
        this.state={
            users: [
                {
                    name: 'anne', number: '801.121.1212', subscribed: true
                },
                {
                    name: 'joe', number: '801.222.2222', subscribed: false
                },
                {
                    name: 'Chris', number: '801.333.3333', subscribed: true
                },   
                {
                    name: 'Abby', number: '801.777.7777', subscribed: false
                },
            ],
            searchInput: '',
            searchResults: [],
            membersAfterSearch: false,
            user:[{
                name: '',
                email: '',
                number: '',
                status: ''
            }]
        }
        this.handleInput = this.handleInput.bind(this)
        this.showUsers = this.showUsers.bind(this)
    }

    showUsers(){
        this.setState({
            membersAfterSearch: true
        })
        axios.get('http://localhost:3000/members').then(res=>{
            this.setState({
                users: res
            })
        })
    }

    handleInput(input, e){
        if(input === 'search'){
            this.setState({
                searchInput: e.target.value
            })
        }
    }

    render(){
        return(
            <div className='Search'>
                <div className='searchBox'>

                    <div className='header'>
                        <img className='logo' src={logo} alt='logo'/>
                        <Link to='/newMember'><img className='add' src={plus} alt='add'/></Link>
                    </div>

                    <div className='hoverable'>
                        <img className='QM' src={QM} alt='hover'/>
                        <span className='hoverableSpan'>SEARCH BY NAME NUMBER OR EMAIL</span>
                    </div>

                    <div className='searchBar'>
                        {
                            !this.state.membersAfterSearch ?
                                <div className='headerW'>
                                    <p className='vip'>VIP <br/>Member Search</p>
                                </div> 

                                :
                                null
                        }
                        <div className='inputArea'>
                            <input className='input' onChange={e=>this.handleInput('search',e)}/>
                                <button className='btn' onClick={this.showUsers}>SEARCH</button>
                        </div>
                    </div>

                    {
                        this.state.membersAfterSearch ?
                        <div className='membersInfo'>
                            <div className='memberList'>

                            </div>
                        </div>
                        :
                        null
                    }

                </div>
            </div>
        )
    }
}