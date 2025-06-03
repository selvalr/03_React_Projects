import React from 'react'
import Sidebar from './components/Sidebar'
import Searchbar from './components/Searchbar'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <div>
        <Searchbar/>
      </div>
    </div>
  )
}

export default App