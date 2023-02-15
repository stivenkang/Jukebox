import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

function SideBarOptions() {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            // <div className='loggedInPlaylists'>
            //     <NavLink id='loggedInPlaylistsButton' exact to="/playlists/${playlists.id}">Playlists</NavLink>
            // </div>
            <div>Playlists</div>
        );
    } else {
        return null
    }

    return (
        // <div className='loggedInSideBarOptions'>

        // </div>
        {sessionLinks}
    )
}

export default SideBarOptions;

