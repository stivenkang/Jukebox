import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import './PlayBar.css';
import { playNextSong, playPreviousSong } from '../../store/currentSong';
import { useLocation } from 'react-router-dom';

function PlayBar() {
    const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.currentSong);
    const songArtist = useSelector(state => state.artists[currentSong.artistId]);
    const songAlbum = useSelector(state => state.albums[currentSong.albumId]);

    const location = useLocation();
    const playlistId = location.pathname.split("/")[2]
    const playlist = useSelector(state => {
        return state.playlists[playlistId]?.playlistSongs
    });
    // debugger

    const handleNextSong = () => {
        // debugger
        dispatch(playNextSong(currentSong.id, playlist));
    };
    
    const handlePreviousSong = () => {
        dispatch(playPreviousSong());
    };

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

                    // autoPlayAfterSrcChange
                    onClickNext={handleNextSong}
                    onClickPrevious={handlePreviousSong}
                />
            </div>
        </div>
    )
}

export default PlayBar;