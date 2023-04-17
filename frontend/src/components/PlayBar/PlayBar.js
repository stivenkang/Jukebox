import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
// import { receiveCurrentSong } from '../../store/currentSong';
import './PlayBar.css';

function PlayBar() {
    // const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.currentSong);
    // const artists = useSelector((state) => state.artists);
    // const currAlbumSongs = useSelector(({ currentAlbum }) => {
    //     return currentAlbum ? Object.values(currentAlbum.songs) : []
    // });

    const songArtist = useSelector(state => state.artists[currentSong.artistId]);
    const songAlbum = useSelector(state => state.albums[currentSong.albumId]);
    
    // const album = useSelector((state) => {
    //     const albumId = currentSong.albumId;
    //     return state.albums[albumId];
    // });
    // const albumImg = album ? album.imageUrl : '';
        
    // if (!currentSong || !songArtist) {
    //     return null;
    // }

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
                {/* <img src={albumImg} alt='Album Cover' /> */}
                <p>{currentSong.title}</p>
                <p>{songArtist.name}</p>
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