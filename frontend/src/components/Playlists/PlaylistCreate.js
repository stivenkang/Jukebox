import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPlaylist, updatePlaylist } from '../../store/playlist';
import SearchBar from '../SearchBar/SearchBar';
import './Playlist.css';

function PlaylistCreate() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createPlaylist())
    }, [dispatch]);

    return (
        <div className='playlistCreateBody'>
            <div className='playlistCreateHead'>
                <h1>Should be creating new playlist page</h1>
            </div>
            <div>
                <p className='albumSongType'>Let's find something for your playlist</p>
                <SearchBar />
            </div>
        </div>
    )

}

export default PlaylistCreate;