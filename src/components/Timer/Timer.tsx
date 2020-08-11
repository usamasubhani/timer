import React, { useState, useEffect } from 'react';
import './Timer.css'
import TimerButton from '../TimerButton/TimerButton';

const Timer = () => {
  const [seconds, setSeconds] = useState(56);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 25) {
            return
        }
        if (seconds === 59) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        } else {
          setSeconds((seconds) => seconds + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
      <div className="timer">
             <div className="time">
                 <h2>{("0" + minutes).slice(-2)} : {("0" + seconds).slice(-2)}</h2>
             </div>

             <div className="timer-button-container">
                 <TimerButton buttonAction={toggle} buttonValue={"start"} isOn={isActive} />
                 <TimerButton buttonAction={reset} buttonValue={"reset"} isOn={isActive} />
             </div>
         </div>
  );
};

export default Timer;