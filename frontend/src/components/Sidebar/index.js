import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/spotify-logo-inverted.png';
import './Sidebar.css';

function Sidebar() {

    return (
        <div className='sidebar1'>
            <img className='sidebarLogo' src={logo} alt='' />
        </div>
    )
}

export default Sidebar;