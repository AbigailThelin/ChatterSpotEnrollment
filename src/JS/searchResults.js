import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import '../Styles/searchResults.css'
// import logo from '../assets/cs-logo.png'
// import back from '../assets/back arrow.svg'


export default class searchResults extends Component{

    // constructor(){
    //     super()

    //     this.state={
    //         users: [
    //             {
    //                 name: 'Tessa Miller', number: '801.121.1212', subscribed: false, location: 'Provo', email: 'tess.com'
    //             },
    //             {
    //                 name: 'Joe Demasters', number: '801.222.2222', subscribed: true, location: 'Provo', email: 'joe.com'
    //             },
    //             {
    //                 name: 'Chris Jones', number: '801.333.3333', subscribed: true, location: 'Provo', email: 'chris.com'
    //             },   
    //             {
    //                 name: 'Abigail Thelin', number: '801.777.7777', subscribed: false, location: 'Provo', email: 'abigail.com'
    //             },
    //             {
    //                 name: 'Grace Thelin', number: '801.777.7777', subscribed: false, location: 'Provo', email: 'grace.com'
    //             }
    //         ],
    //         dropdownMenu: false
    //     }
    // }


    render(){
        // const member = this.state.users.map((currentUser, i)=>{
        //     return(
        //         <div className='user'>
        //             <div className='nameContainer'>
        //                 <p className='name'>{currentUser.name}</p>
        //             </div>

        //             <div className='locationContainer'>
        //                 <p className='location'>{currentUser.location}</p>
        //                 <img onClick={this.dropdown} className='dropdown' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/1280px-Arrow-down.svg.png`} alt='dd'/> 
        //             </div>

        //             <div className='numberContainer'>
        //                 <p className='number'>{currentUser.number}</p>
        //             </div>

        //             <div className='emailContainer'>
        //                 <p className='email'>{currentUser.email}</p>
        //             </div>

        //             <div className='subscribedContainer'>
        //                 <p className='subscribed'>
        //                     {
        //                         currentUser.subscribed === true ?
        //                         <div>Subscribed</div> :
        //                         <button onClick={this.subscribeUser} className='subscribeBtn'>Subscribe User</button>
        //                     }
        //                 </p>
        //             </div>

        //         </div>
            // )
        // })

        return(
            <div className='searchResults'>

                {/* <div className='searchHeader'>
                    <Link to={'/'}><img className='backArrow' src={back}/></Link>
                    <img className='Searchlogo' src={logo} alt='logo'/>
                </div> */}

                {/* <div className='addingMembers'>
                    <p className='members'>Members</p>
                    <div className='btns'>
                        <Link to="/newMember"><button className='Addbtn'>Add New Member</button></Link>
                        <button className='Backbtn'>Go back to Search</button>
                    </div>
                </div> */}

                {/* <div className='bg'>
                    <div className="membersContainer">
                    <div className='searchEngine'>
                        <p className='search'>Search:</p>
                        <input className='searchInput' />
                    </div>
                    
                    <div className='users'>
                            {member}
                    </div>
                    </div>
                </div> */}
            </div>
        )
    }
}