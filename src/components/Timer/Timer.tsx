import React, { useState } from 'react'
import './Timer.css'
import TimerButton from '../TimerButton/TimerButton';

const Timer = () => {

    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ isOn, setOn ] = useState(0);
    
    function startTimer() {
        console.log("Timer Started (Just kidding)")
    }
    function pauseTimer() {
        console.log("Timer Paused (Just kidding)")
    }
    function resetTimer() {
        console.log("Timer Reset (Just kidding)")
    }

    return (
        <div className="timer">
            <div className="time">
            </div>

            <div className="timer-button-container">
                <TimerButton buttonAction={startTimer} buttonValue={"start"} isOn={false} />
                <TimerButton buttonAction={resetTimer} buttonValue={"reset"} isOn={false} />
            </div>
        </div>
    )

    
}

export default Timer
