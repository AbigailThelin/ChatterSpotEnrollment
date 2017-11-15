import React, { Component } from 'react'
import '../Styles/Search.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import QM from '../assets/Question_Mark.svg'
import logo from '../assets/cs-logo.png'
import plus from '../assets/+.png'
import down from '../assets/down.svg'

export default class Search extends Component{

    constructor(){
        super()
        this.state={
            users: [
                {
                    name: 'anne', number: '801.121.1212', subscribed: true, email: 'anne@anne.com', location: 'Provo'
                },
                {
                    name: 'joe', number: '801.222.2222', subscribed: false, email: 'joe@joe.com', location: 'Provo'
                },
                {
                    name: 'Chris', number: '801.333.3333', subscribed: true, email: 'chris@chris.com', location: 'Provo'
                },   
                {
                    name: 'Abby', number: '801.777.7777', subscribed: false, email: 'abby@abby.com'
                },
                {
                    name: 'Abby Thelin', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
                {
                    name: 'Abby Keenan', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
                {
                    name: 'Abby Newell', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
                {
                    name: 'Abby Lowerwald', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
                {
                    name: 'Abby Thelander', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
                {
                    name: 'Abby Smith', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
                {
                    name: 'Abby Dalgrhen', number: '801.777.7777', subscribed: false, email: 'abby@abby.com', location: 'Provo'
                },
            ],
            searchInput: '',
            searchResults: [],
            membersAfterSearch: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.showUsers = this.showUsers.bind(this)
    }

    showUsers(){
        this.setState({
            membersAfterSearch: true
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
        
        let searchInput = this.state.searchInput
        const filterMembers = this.state.users.filter(user=>{
            var matches = user.name.indexOf(searchInput)>=0 || 
                          user.number.indexOf(searchInput)>=0 ||
                          user.email.indexOf(searchInput)>=0;
            return matches;
        })

        const allMembers = filterMembers.map((currentMember, i)=>{
            return(
                <div className='memberContainer'>
                    <div className='searchNameContainer'>
                        {currentMember.name}
                    </div>
                    <div className='searchNumberContainer'>
                        {currentMember.number}
                    </div>
                    <div className='searchNumberContainer'>
                        {currentMember.email}
                    </div>
                    <div className='searchNumberContainer'>
                        {currentMember.location}
                    </div>
                </div>
            )
        })

        return(
            <div className='Search'>
                <div className='logout'>
                    <p className='nameLogout'>John Doe</p>
                    <img src={down} alt='down' className='arrow'/>
                </div>

                <div className='searchBox'>

                    {/* <div className='header'>
                        <img className='logo' src={logo} alt='logo'/>
                        <Link to='/newMember'><img className='add' src={plus} alt='add'/></Link>
                    </div> */}

                    <div className='hoverable'>
                        <img className='QM' src={QM} alt='hover'/>
                        <span className='hoverableSpan'><p>SEARCH BY NAME NUMBER OR EMAIL</p></span>
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

                            <div className='membersHeader'>
                                <div className='nameMemberHead'>
                                    <p>NAME</p>
                                </div>
                                <div className='nameMemberHead'>
                                    <p>NUMBER</p>
                                </div>
                                <div className='nameMemberHead'>
                                    <p>EMAIL</p>
                                </div>
                                <div className='nameMemberHead'>
                                    <p>LOCATION</p>
                                </div>
                            </div>
                                {allMembers}
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