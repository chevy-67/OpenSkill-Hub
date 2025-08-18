import React from 'react'
import '/src/styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/createpost'>Create</Link></li>
            </ul>
            <ul className='nav-links-right'>
                <li><Link to='/login' className='nav-btn'>Login</Link></li>
                <li><Link to='/signup' className='nav-btn'>Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar