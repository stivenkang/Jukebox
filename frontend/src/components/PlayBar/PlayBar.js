import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../../store/currentSong';
import './PlayBar.css';

function PlayBar({songUrl}) {
    // const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.currentSong);
    // const currAlbumSongs = useSelector(({ currentAlbum }) => {
    //     return currentAlbum ? Object.values(currentAlbum.songs) : []
    // });

    if (!currentSong) {
        return null;
    }

    return (
        // <AudioPlayer
        //     className='playBar'
        //     src={songUrl}
        //     showSkipControls
        //     showFilledVolume
        // />

        <div className='playBar'>
            <p>?????????</p>
            <AudioPlayer
                src={songUrl}
                showSkipControls
                showFilledVolume
            />
        </div>
    )
}

export default PlayBar;