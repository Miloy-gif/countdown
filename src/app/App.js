import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import {Icon} from '../icon/Icon';


const App =()  => {
    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () =>{
         const countdownDate = new Date ('August 1, 2020 00:00:00').getTime();

         interval = setInterval(() =>{
             const now =new Date().getTime();
             const distance = countdownDate - now;

             const days = Math.floor(distance /(1000* 60 * 60* 24));
             const hours = Math.floor((distance % (1000* 60 * 60* 24)) / (1000*60*60));
             const minutes = Math.floor((distance % (1000* 60 * 60)) /(1000*60));
             const seconds = Math.floor( (distance % (1000* 60)) / 1000);

             if (distance < 0){
                 //stop our timer
                 clearInterval(interval.current);
             } else {
                 //update timer
                 setTimerDays(days);
                 setTimerHours(hours);
                 setTimerMinutes(minutes);
                 setTimerSeconds(seconds);
             }
         }, 1000);
    };

    //componentDidMount
    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current)
        };
    });



  return (
      <section className="timer-container">
        <section className="timer">
            <div><Icon/></div>
            <div className="body-container">
            <div>
            <h2>Countdown Timer</h2>
            <p>Countdown to a really special date. On you could or would never imagine!</p>
            </div>
            <div className="body-timer">
                <div >
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                </div>
                <span>:</span>

                <div>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                </div>
                <span>:</span>

                <div>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                </div>
                <span>:</span>

                <div>
                    <p>{timerSeconds}</p>
                    <p><small>Seconds</small></p>
                </div>
            </div>
            </div>


        </section>
      </section>
  );
};

export default App;
