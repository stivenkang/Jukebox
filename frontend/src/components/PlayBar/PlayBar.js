import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';
import './PlayBar.css';

function PlayBar() {
    const currentSong = useSelector((state) => state.currentSong);
    const songArtist = useSelector(state => state.artists[currentSong.artistId]);
    const songAlbum = useSelector(state => state.albums[currentSong.albumId]);

    if (!currentSong || !songArtist) {
        return (
            <div className='playBar'>
                <div className='controlBar'>
                    <AudioPlayer
                        src={null}
                        showFilledProgress
                        showSkipControls
                        showFilledVolume
                        defaultCurrentTime
                        defaultDuration
                    />
                </div>
            </div>
        );
    }

    return (
        <div className='playBar'>
            <img className='songAlbumImg' src={songAlbum.photoUrl} alt='' />
            <div className='currentSong'>
                <p>{currentSong.title}</p>
                <p className='currentSongArtist'>{songArtist.name}</p>
            </div>
            <div className='controlBar'>
                <AudioPlayer
                    src={currentSong.songUrl}
                    autoPlay
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