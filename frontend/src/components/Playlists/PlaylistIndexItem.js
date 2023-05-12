import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';

const PlaylistIndexItem = ({playlist}) => {
    const history = useHistory();
    // const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='playlistsList' onClick={(e) => history.push(`/playlists/${playlist.id}`)}>
            {/* <img className='playlistCover' src={} alt='' /> */}
            <p>{playlist.title}</p>
            <p>By {sessionUser.username}</p>
        </div>
    )
}    

export default PlaylistIndexItem;