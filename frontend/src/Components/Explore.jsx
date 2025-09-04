import React from 'react'
import SideBarLeft from '../Components/SideBarLeft';
import Navbar from '../frontend/Navbar';


function Explore() {
    return (
        <div className='explore-page'>
            <div>
                <Navbar/>
            </div>
            <div>
                <SideBarLeft />
            </div>
        </div>
    );
}

export default Explore;
