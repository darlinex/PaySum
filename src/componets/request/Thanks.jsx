import React, { useState, useEffect } from 'react';
import comingsoonimg from '../../assets/Comingsoonbg.jpg'; // Adjust the path to your image
import '../request/Thanks.css'

const ComingSoon = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 12,
        minutes: 30,
        seconds: 40,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                const { days, hours, minutes, seconds } = prevTime;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prevTime;
                }

                let newSeconds = seconds - 1;
                let newMinutes = minutes;
                let newHours = hours;
                let newDays = days;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }

                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                if (newHours < 0) {
                    newHours = 23;
                    newDays -= 1;
                }

                return {
                    days: newDays,
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds,
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section className="container">
                <img src={comingsoonimg} alt="" className="image" />

                <div className='backdrop-blur-sm flex flex-col justify-center items-center rounded-lg w-[60%] h-[55%] p-20'>
                    <header>Coming soon page</header>

                    <p>Our website is under construction. We're working hard to improve our website and we'll be ready to launch after.</p>
                    <div className="time-content">
                        <div className="time-days flex flex-col justify-center items-center ">
                            <div className="number">{timeLeft.days.toString().padStart(2, '0')}</div>
                            <div className="text">days</div>
                        </div>
                        <div className="time-hours flex flex-col justify-center items-center">
                            <div className="number">{timeLeft.hours.toString().padStart(2, '0')}</div>
                            <div className="text">hours</div>
                        </div>
                        <div className="time-minutes flex flex-col justify-center items-center">
                            <div className="number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            <div className="text">minutes</div>
                        </div>
                        <div className="time-seconds flex flex-col justify-center items-center">
                            <div className="number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            <div className="text">seconds</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )


};

export default ComingSoon;