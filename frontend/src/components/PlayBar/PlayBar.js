import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentSong } from '../../store/currentSong';
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

    // const album = useSelector((state) => state.currentAlbum);

    // const album = useSelector((state) => {
    //     const albumId = currentSong.albumId;
    //     return state.albums[albumId];
    // });

    // const albumImg = album ? album.imageUrl : '';

    return (
        <div>
            <div>
                {/* <img src={albumImg} alt='Album Cover' /> */}
                <p>{currentSong.title}</p>
            </div>
            <div>
                <AudioPlayer
                    className='playBar'
                    src={currentSong.songUrl}
                    // autoPlay
                    showFilledProgress
                    showSkipControls
                    showFilledVolume
                    defaultCurrentTime
                    defaultDuration
                />
            </div>
        </div>
    )
}

export default PlayBar;