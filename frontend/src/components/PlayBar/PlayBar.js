import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../../store/currentSong';
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

    return (
        <AudioPlayer
            className='playBar'
            src={currentSong}
            // autoPlay
            showFilledProgress
            showSkipControls
            showFilledVolume
            defaultCurrentTime
            defaultDuration
            // setCurrentTime
            // setDuration
        />
    )
}

export default PlayBar;