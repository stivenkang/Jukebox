import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { fetchPlaylist } from '../../store/playlist';
import './SideBar.css';

function SideBarOptions() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);

    // useEffect(() => {
    //     dispatch(fetchPlaylist(playlistId))
    // }, []);

    if (!sessionUser) {
        return null;
    }

    return (
        <div className='loginSBOpt'>
            <div className='loginPlaylists'>
                {/* <NavLink id='loggedInPlaylistsButton' exact to='/playlists'>
                    {playlists.map((playlist) => { return (
                        <p>{playlist.title}</p>
                    )})}
                </NavLink> */}

                {playlists.map(playlist => {
                    return <p className='loginPLLine' onClick={(e) => history.push(`/playlists/${playlist.id}`)} key={playlist.id}>{playlist.title}</p>
                })}
            </div>
        </div>
    )
}

export default SideBarOptions;

