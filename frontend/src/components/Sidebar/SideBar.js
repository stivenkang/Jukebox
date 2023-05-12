import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist } from '../../store/playlist';
import { fetchPlaylists } from '../../store/playlist';
import sidebarLogo from '../../assets/spotify-logo-inverted.png';
import SideBarPlaylists from './SideBarPlaylists';
import './SideBar.css';

function SideBar() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, []);

    const handleCreatePlaylist = async () => {
        const playlist = {
            title: 'New Playlist',
            authorId: sessionUser.id,
            // playlistSongIds: [],
        };
        await dispatch(createPlaylist(playlist))
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
                <div className='sideBarPlaylists' onClick={handleCreatePlaylist}>
                    <NavLink id='sideBarPlaylistsButton' exact to="/playlists/:playlistId"><i className="fa-regular fa-square-plus"></i><span style={{marginLeft: '15px'}}>Create Playlist</span></NavLink>
                </div>
                {/* <SideBarPlaylists /> */}
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
                    <SideBarPlaylists />
                {/* </div> */}
            </div>
        </div>
    )
}

export default SideBar;