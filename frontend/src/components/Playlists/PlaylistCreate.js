import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, updatePlaylist } from '../../store/playlist';
import SearchBar from '../SearchBar/SearchBar';
import './Playlist.css';

function PlaylistCreate() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);


    useEffect(() => {
        dispatch(createPlaylist())
    }, [dispatch]);

    return (
        <div className='playlistCreate'>
            <div className='playlistCreateHead'>
                {/* needs an img container to hold a grid of 4x4 of top 4 albums */}
                <div>
                    <h1>Playlist Title</h1>
                    <p className='plUN'>{sessionUser.username}</p>
                </div>
            </div>
            <div className='playlistCreateBody'>
                <p className='plSearchHead'>Let's find something for your playlist</p>
                {/* <SearchBar /> */}
                {/* SearchBar component currently includes the top searchbar and also displays
                the results in the body with a full background color of grey. Possibly need
                to refactor the searchbar so its just the bar and the results would appear
                in the body which would a separate component or included somewhere else? */}
            </div>
        </div>
    )

}

export default PlaylistCreate;