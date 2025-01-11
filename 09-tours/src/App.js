
import './App.css';
import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import Tours from './Tours';


const url = 'https://www.course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]= useState(true);
 const [tours,setTours]=useState([]);


 const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours)
}
 const fetchTours=async()=>{
  setLoading(true);
  try{
  const response=await fetch(url);
 
  const res=await response.json();
  console.log(res);
setLoading(false);
  setTours(res);
  
  }
  catch(error){
    setLoading(false)
    console.log(error)
  }
  

 }

 

 useEffect(() => {
  fetchTours()
}, [])

if(loading){
  (
    <main>
      <Loading />
    </main>
  )
}

if (tours.length === 0) {
  return (
    <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={() => fetchTours()}>
          refresh
        </button>
      </div>
    </main>
  )
}

  return (
    <main>
    <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
