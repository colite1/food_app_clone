import React from 'react'
import home from '../assets/icons/Home.png';
import profile from '../assets/icons/IconProfile.png';
import cart from '../assets/icons/IconCart.png';
import msg from '../assets/icons/Chat.png';
const Footer = () => {
  return (
    <div className='Footer-menu'>
        <ul className='menu-item'>
            <li><button className='btn-home-active'><img src={home} alt="Home"/>Home</button></li>
            <li><img src={profile} alt="profile"/></li>
            <li><img src={cart} alt="cart"/></li>
            <li><img src={msg} alt="msg"/></li>
        </ul>
    </div>
  )
}

export default Footer