import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists, createPlaylist } from '../../store/playlist';
import sidebarLogo from '../../assets/spotify-logo-inverted.png';
import SideBarPlaylists from './SideBarPlaylists';
import './SideBar.css';

function SideBar() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const playlists = useSelector(state => state.playlists ? Object.values(state.playlists) : []);


    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch]);

    const handleCreatePlaylist = async () => {
        // const highestId = Math.max(playlists.map((playlist) => playlist.id));
        // const nextId = highestId >= 0 ? highestId + 1 : 1;

        // code below takes into account if the playlists array is empty ... supposedly
        // const highestId = playlists.reduce((maxId, playlist) => Math.max(maxId, playlist.id), 0);
        // const nextId = highestId + 1;

        // const playlistIds = playlists.map((playlist) => playlist.id);
        // const maxId = Math.max(...playlistIds);
        // const nextId = maxId >= 0 ? maxId + 1 : 1;

        const nextId = playlists.length + 1;

        const playlist = {
            id: nextId,
            title: 'New Playlist',
            authorId: sessionUser.id,
            // playlistSongIds: [],
        };
        const newPlaylist = await dispatch(createPlaylist(playlist));
        debugger
        history.push(`/playlists/${newPlaylist.playlist.id}`);

        // await dispatch(createPlaylist(playlist));
        // history.push(`/playlists/${playlist.id}`);
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
                <div className='sideBarPlaylists' onClick={handleCreatePlaylist}>
                    <div id='sideBarPlaylistsButton' >
                        <i className="fa-regular fa-square-plus"></i>
                        <span style={{marginLeft: '15px'}}>Create Playlist</span>
                    </div>                  
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