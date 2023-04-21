import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists } from '../../store/playlist';
import PlaylistIndexItem from './PlaylistIndexItem';

function PlaylistIndex() {
    const dispatch = useDispatch();

    const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, []);

    return (
        <div>
            <div>
            <p>This is the playlist</p>
                
            </div>
            {/* <div>
                <PlaylistIndexItem />
            </div> */}
        </div>
    )
}

export default PlaylistIndex;