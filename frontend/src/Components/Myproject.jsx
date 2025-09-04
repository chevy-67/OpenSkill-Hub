import React, { useEffect, useState } from 'react'
import SideBarLeft from './SideBarLeft';
import Navbar from '../frontend/Navbar';



function Myproject() {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error(err));
    }, []);
    return (
        <>
            <div className='myprojects'>
                <Navbar />
            </div>
            <div className='myprojects'>
                <SideBarLeft />
            </div>

        </>
    )
}

export default Myproject;
