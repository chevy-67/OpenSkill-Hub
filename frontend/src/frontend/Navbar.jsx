import React from 'react'
import '/src/styles/Navbar.css'

function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/explore'>Explore</a></li>
                <li><a href='/create'>Create</a></li>
            </ul>
        </nav>
    )
}

export default Navbar