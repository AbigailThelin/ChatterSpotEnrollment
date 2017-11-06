import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Search from './JS/Search.js'
import nonMember from './JS/nonMember'
import searchResults from './JS/searchResults.js'
import Profile from './JS/AddProfile.js'
import Completed from './JS/Completed.js'



export default(

    <Switch>
        <Route component={Search} path='/' exact/>
        <Route component={nonMember} path='/newMember'/>
        <Route component={searchResults} path='/results'/>
        <Route component={Profile} path='/addProfile'/>
        <Route component={Completed} path='/completed'/>
    </Switch>
)