import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

function SideBarOptions() {
    const sessionUser = useSelector(state => state.session.user)

    if (!sessionUser) {
        return null;
    }

    return (
        <div className='loggedInSideBarOptions'>
            <div className='loggedInPlaylists'>
                <NavLink id='loggedInPlaylistsButton' exact to='/playlists'>
                    <p>Playlists would go here</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBarOptions;

