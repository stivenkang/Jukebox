import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import sidebarLogo from '../../assets/spotify-logo-inverted.png';
import SideBarOptions from './SideBarOptions';
import './SideBar.css';

function SideBar() {

    return (
        <div className='sideBar'>
            <div className='buttons'>
                <img className='sideBarLogo' src={sidebarLogo} alt='' />
                <div className='homeButton'>
                    <NavLink id='homeButton' exact to="/"><i className="fa-solid fa-house"></i><span style={{marginLeft: '15px'}}>Home</span></NavLink>
                </div>
                <br/>
                <div className='searchButton'>
                    <NavLink id='searchButton' exact to="/search"><i className= "fa-solid fa-magnifying-glass"></i><span style={{marginLeft: '15px'}}>Search</span></NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideBar;