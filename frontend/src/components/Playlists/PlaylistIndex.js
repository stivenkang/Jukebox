import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists } from '../../store/playlist';
import PlaylistIndexItem from './PlaylistIndexItem';
import './Playlist.css';

function PlaylistIndex() {
    const dispatch = useDispatch();
    const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, []);

    return (
        <div className='playlistPageBody'>
            <p className='plIndTitle' >Playlists</p>
            <div className='plIndDisplay'>
                {playlists.map((playlist) => { return (
                    <PlaylistIndexItem key={playlist.id} playlist={playlist} />
                )})}
            </div>
        </div>
    )
}

export default PlaylistIndex;