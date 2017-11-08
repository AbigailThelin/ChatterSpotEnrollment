import react from 'react';
import {App} from '../App.js'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {nonMember} from './nonMember.js';
import {AddProfile} from './AddProfile.js';
import {Completed} from './Completed.js';

const GetPageComponent = (props) => {
    let component;
    let animation = "slide";
    const currentStep = match.params.stepNumber;

    if (lastLocation !== null){
            const match = /steps\/(\d+)/.exec(lastLocation.pathname)
            if(match){
                const previousStep = parseInt(match[1])
                if(previousStep > currentStep){
                    animation = "unslide";
        }}}

switch(match.params.stepNumber){
    case "1": 
        component= <nonMember/>
        break;
    case "2":
        component= <AddProfile/>
        break;
    case "3":
        component= <Completed/>
        break;
    default: 
        component= <nonMember/>
}

return(
    <App>
        <TransitionGroup className="transition-wrapper">
            <CSSTransition
                timeout={750}
                classNames={animation}
            >
                {component}
            </CSSTransition>
        </TransitionGroup>
    </App>
)
}