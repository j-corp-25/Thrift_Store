import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-navigation'>
        <a href="/home">Home</a>
        <a href="/faq">FAQ</a>
        </div>

        <div className='header-title'>Elizabeth's Shop</div>
        <div className='header-message'>Discover Hidden Treasures</div>
        <div className='header-submessage'>Find unique and budget-friendly items at Elizabeths Shop</div>


    </div>
  )
}

export default Header
