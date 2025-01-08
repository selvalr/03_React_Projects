import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogHome from './components/Blog/BlogHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <h1>BlogHome</h1>
    <BlogHome />
    </>
  )
}

export default App
