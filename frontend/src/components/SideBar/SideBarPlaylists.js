import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './SideBar.css';

function SideBarOptions() {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);

    if (!sessionUser) {
        return null;
    }

    return (
        <div className='loginSBOpt'>
            <div className='loginPlaylists'>
                {playlists.map(playlist => {
                    return <p className='loginPLLine' onClick={(e) => history.push(`/playlists/${playlist.id}`)} key={playlist.id}>{playlist.title}</p>
                })}
            </div>
        </div>
    )
}

export default SideBarOptions;

