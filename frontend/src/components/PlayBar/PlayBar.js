import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
// import { receiveCurrentSong } from '../../store/currentSong';
import './PlayBar.css';

function PlayBar() {
    // const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.currentSong);
    // const currAlbumSongs = useSelector(({ currentAlbum }) => {
    //     return currentAlbum ? Object.values(currentAlbum.songs) : []
    // });

    if (!currentSong) {
        return null;
    }

    // const artist = useSelector((state) => state.artists.find(artist => artist.id === currentSong.artistId), [currentSong.artistId]);

    // const artistName = artist ? artist.name : '';

    // const album = useSelector((state) => state.currentAlbum);

    // const album = useSelector((state) => {
    //     const albumId = currentSong.albumId;
    //     return state.albums[albumId];
    // });

    // const albumImg = album ? album.imageUrl : '';

    return (
        <div className='playBar'>
            <div className='currentSong'>
                {/* <img src={albumImg} alt='Album Cover' /> */}
                <p>{currentSong.title}</p>
                {/* <p>{currentSong.artistId.name}</p> */}
                {/* <p>{artist.name}</p> */}
            </div>
            <div className='controlBar'>
                <AudioPlayer
                    src={currentSong.songUrl}
                    showFilledProgress
                    showSkipControls
                    showFilledVolume
                    defaultCurrentTime
                    defaultDuration
                    disableRemotePlayback={true}
                />
            </div>
        </div>
    )
}

export default PlayBar;