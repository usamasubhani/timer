import React from 'react'
import './TimerButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward } from '@fortawesome/free-solid-svg-icons'


type Props = {
    buttonAction: () => void;
    buttonValue: String;
    isOn: boolean;
}

const icons = {
    "Play" : faPlay,
    "Pause" : faPause,
    "Reset": faBackward
}
const TimerButton : React.FC<Props> = ({buttonAction, buttonValue}) => {
    return (
        <div className="timer-button">
            {buttonValue == "start" ? 
            <p><FontAwesomeIcon icon={faPlay} /></p> :
            <p><FontAwesomeIcon icon={faBackward} /></p>
            }
        </div>
    )
}

export default TimerButton