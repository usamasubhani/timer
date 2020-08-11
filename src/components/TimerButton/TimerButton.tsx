import React from 'react'
import './TimerButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward } from '@fortawesome/free-solid-svg-icons'


type Props = {
    buttonAction: () => void;
    buttonValue: String;
    isOn: boolean;
}

const TimerButton : React.FC<Props> = ({buttonAction, buttonValue, isOn}) => {
    return (
        <div className="timer-button" onClick={buttonAction}>
            {buttonValue === "start" ? 
            <p>
                {isOn ? 
                <FontAwesomeIcon icon={faPause} /> :
                <FontAwesomeIcon icon={faPlay} />
                }
            </p> :
            <p><FontAwesomeIcon icon={faBackward} /></p>
            }
        </div>
    )
}

export default TimerButton