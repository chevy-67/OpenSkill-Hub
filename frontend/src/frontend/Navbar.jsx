import {useState,useEffect} from 'react'
import '/src/styles/Navbar.css'
import {Link,useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    useEffect(()=>{
        const username = localStorage.getItem('username')
        setIsLoggedIn(username)
    })

    const handleLogout = () =>{
        localStorage.removeItem('username')
        setIsLoggedIn(false)
        navigate('/home')
    }
    return(
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/createpost'>Create</Link></li>
            </ul>
            {!isLoggedIn && (
                <>
                    <ul className='nav-links-right'>
                        <li><Link to='/login' className='nav-btn'>Login</Link></li>
                        <li><Link to='/signup' className='nav-btn'>Sign Up</Link></li>
                    </ul>
                </>
            )}
            {isLoggedIn && (
                <button onClick={handleLogout} className='nav-btn'>Logout</button>
            )}
        </nav>
    )
}

export default Navbar