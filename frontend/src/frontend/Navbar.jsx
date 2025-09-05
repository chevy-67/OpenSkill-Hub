import React from 'react'
import '/src/styles/Navbar.css'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai';

function Navbar(){
    return(
        <nav className='navbar'>
            <div className='logo'>
                {/* Logo will go here */}
            </div>
            <div className='searchbar'>
                <div className='searchbox'>
                    <input type="search" placeholder="Search"></input>
                    <button>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
            <ul className='nav-links-right'>
                <li><Link to='/login' className='nav-btn-ln'>Login</Link></li>
                <li><Link to='/signup' className='nav-btn-sn'>Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar