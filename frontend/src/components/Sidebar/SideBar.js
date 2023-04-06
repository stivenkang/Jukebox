import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import sidebarLogo from '../../assets/spotify-logo-inverted.png';
import SideBarOptions from './SideBarOptions';
import './SideBar.css';

function SideBar() {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='sideBarPlaylists'>
                <NavLink id='sideBarPlaylistsButton' exact to="/playlists/create"><i className="fa-regular fa-square-plus"></i><span style={{marginLeft: '15px'}}>Create Playlist</span></NavLink>
            </div>
        );
    } else {
        sessionLinks = (
            <div className='sideBarPlaylists'>
                <NavLink id='sideBarPlaylistsButton' exact to="/login"><i className="fa-regular fa-square-plus"></i><span style={{marginLeft: '15px'}}>Create Playlist</span></NavLink>
            </div>
        )
    }

    return (
        <div className='sideBar'>
            <div className='buttons'>
                <img className='sideBarLogo' src={sidebarLogo} alt='' />
                <div className='homeButton'>
                    <NavLink id='homeButton' exact to="/"><i className="fa-solid fa-house"></i><span style={{marginLeft: '15px'}}>Home</span></NavLink>
                </div>
                <div className='searchButton'>
                    <NavLink id='searchButton' exact to="/search"><i className= "fa-solid fa-magnifying-glass"></i><span style={{marginLeft: '15px'}}>Search</span></NavLink>
                </div>
                <div className='yourLibraryButton'>
                    <NavLink id='yourLibraryButton' exact to="/playlists"><i className="fa-regular fa-bookmark"></i><span style={{marginLeft: '15px'}}>Your Library</span></NavLink>
                </div>
                {sessionLinks}
                {/* <div className='sideBarLine'> */}
                    <SideBarOptions />
                {/* </div> */}
            </div>
        </div>
    )
}

export default SideBar;