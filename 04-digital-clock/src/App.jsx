import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [currentTime, setcurrentTime] = useState(new Date())

  useEffect(()=>{
    const timer=setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);


    return ()=> clearInterval(timer)
  },[]);

  const formatHour=(hour)=>{
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

  }

  const formatTimeWithLeadingZero=(num)=>{
    return num<10?`0${num}`:num;
  }

  const formatDate=(date)=>{
    const option={ weekday:"short", year:"numeric", month:"short", day:"numeric"}
    return date.toLocaleDateString(undefined, option);
  }

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:{
          formatTimeWithLeadingZero(currentTime.getMinutes())}:{formatTimeWithLeadingZero(currentTime.getSeconds())}{currentTime.getHours() >= 12 ? " PM" : " AM"}</div>
        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
