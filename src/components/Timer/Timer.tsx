import React, { useState } from 'react'
import './Timer.css'

const Timer = () => {

    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ isOn, setOn ] = useState(0);

    return (
        <div className="timer">
            <div className="time">
            </div>
        </div>
    )
}

export default Timer
