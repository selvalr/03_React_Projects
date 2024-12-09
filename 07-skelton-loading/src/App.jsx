import { useEffect, useState } from 'react'
import './App.css'
import SkeltonLoader from './Skelton'



function App() {
  const [loading, setLoading] = useState(true)
const [data,setData]=useState(null);
 
useEffect(()=>{
  setTimeout(() => {
    setData({
      title:'selva',
      description:'hello',
      about:'what'
    })
    setLoading(false);
  }, 4000);
})

return (
    <>
    {
      loading ? 
      (<SkeltonLoader/>) :

      (<div>
        <h2>{data.title}</h2>
        <h2>{data.description}</h2>
        <h2>{data.about}</h2>
      </div>)
    }         
    </>
  )
}

export default App
