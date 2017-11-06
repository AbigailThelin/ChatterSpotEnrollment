import React, {Component} from 'react'

import ProgressBarPrimary from '../assets/PrimaryProgressBar.svg'


export default class ProgressBar extends Component{

    render(){
        return(
                <img src={ProgressBarPrimary}/>
        )
    }
}