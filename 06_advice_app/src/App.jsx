import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [advice, setAdvice] = useState("");
const [count,setCount]=useState(0);

  const getAdvice=async()=>{
    const res= await fetch("https://api.adviceslip.com/advice");
const data=await res.json();

setAdvice(data.slip.advice);
setCount((pre)=>pre+1);



  }

  useEffect(function(){
    getAdvice();
  },[])

 
  return (
    <div>
      <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <p>You have read <b>{count}</b> piece of message</p>
    </div>
  )
}

export default App
