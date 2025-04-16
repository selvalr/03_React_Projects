import React from 'react'
import style from './Navigation.module.css'
import reactLogo from '../images/logo.png';

const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
<div className='logo'>
    <img src={reactLogo} alt="logo" />
</div>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation