import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

function SideBarOptions() {
    const sessionUser = useSelector(state => state.session.user)
    const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);

    if (!sessionUser) {
        return null;
    }

    return (
        <div className='loginSBOpt'>
            <div className='loginPlaylists'>
                {/* <NavLink id='loggedInPlaylistsButton' exact to='/playlists'>
                    <p>Playlists would go here</p>
                    {playlists.map((playlist) => { return (
                        <p>{playlist.title}</p>
                    )})}
                </NavLink> */}

                {playlists.map(playlist => {
                    return <p className='loginPLLine' key={playlist.id}>{playlist.title}</p>
                })}
            </div>
        </div>
    )
}

export default SideBarOptions;

