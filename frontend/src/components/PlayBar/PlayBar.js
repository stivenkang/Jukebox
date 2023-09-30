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
    const playlists = useSelector(state => state.playlists ? Object.values(state.playlists) : []);

    const location = useLocation();
    const playlistId = location.pathname.split("/")[2] || "";
    const plSongs = useSelector(state => {
        // debugger
        // return state.playlists[playlistId]?.playlistSongs

        // const playlist = playlists[playlistId];
        const currPl = playlists.find(playlist => playlist.id === playlistId);
        return currPl ? currPl.playlistSongs : [];
    });

    // playlist is undefined and therefore playlist.id can't find anything to compare playlistId too

    const currIndex = plSongs.findIndex(song => {
        debugger
        return song && song.id === currentSong.id;
    })

    const handleNextSong = () => {
        debugger
        const nextSong = currIndex !== -1 && currIndex < plSongs.length -1 ? plSongs[currIndex + 1] : currentSong;

        // dispatch(playNextSong(currentSong.id, plSongs));
        dispatch(playNextSong(nextSong))
    };

    // can I just add a const (currentSong, setCurrentSong) = useState()?
    // this would set the next song to be the new currentSong


    // const handleNextSong = () => {
    //     dispatch(playNextSong(currentSong.id, plSongs));
    // };
    
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