import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PlaylistIndexItem = ({playlist}) => {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);

    const playlistSongs = useSelector(state => {
        const currPlaylist = state.playlists[playlist.id]
        return currPlaylist ? Object.values(currPlaylist.playlistSongs) : [];
    });
    const songsInPlaylist = playlistSongs.map(playlistSong => songs.find(song => song.id === playlistSong));

    const albumCovers = songsInPlaylist.slice(0, 4).map(song => {
        if (!song) {
            return null;
        }
        
        const album = albums.find(album => album.id === song.albumId);
        return album ? album.photoUrl : null;
    });

    return (
        <div className='playlistsList' onClick={(e) => history.push(`/playlists/${playlist.id}`)}>
            <div className='plIndImgCont'>
                {albumCovers.map((coverPhoto, index) => (
                    <img key={index} className='playlistCover' src={coverPhoto} alt='' />
                ))}
            </div>

            <div className='plIndInfo'>
                <p>{playlist.title}</p>
                <p>By {sessionUser.username}</p>
            </div>
        </div>
    )
}    

export default PlaylistIndexItem;