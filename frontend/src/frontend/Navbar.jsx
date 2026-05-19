import {useState,useEffect} from 'react'
import '/src/styles/Navbar.css'
import {Link,useNavigate,useLocation} from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()
    const location = useLocation()
    
    const queryParams = new URLSearchParams(location.search)
    const currentSearch = queryParams.get('search') || ''

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

    const handleSearchChange = (e) => {
        const val = e.target.value
        if (val) {
            navigate(`/home?search=${encodeURIComponent(val)}`)
        } else {
            navigate(`/home`)
        }
    }

    return(
        <nav className='navbar'>
            <ul className='nav-links'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
            </ul>
            
            <div className='navbar-search'>
                <input 
                    type='text' 
                    placeholder='Search...' 
                    value={currentSearch} 
                    onChange={handleSearchChange} 
                    className='nav-search-bar'
                />
            </div>

            {!isLoggedIn && (
                <>
                    <ul className='nav-links-right'>
                        <li><Link to='/login' className='nav-btn'>Login</Link></li>
                        <li><Link to='/signup' className='nav-btn'>Sign Up</Link></li>
                    </ul>
                </>
            )}
            {isLoggedIn && (
                <ul className='nav-links-right'>
                    <li><Link to='/createpost' className='nav-btn'>Create</Link></li>
                    <li><button onClick={handleLogout} className='nav-btn-logout'>Logout</button></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar