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
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);


    const location = useLocation();
    const playlistId = parseInt(location.pathname.split("/")[2] || "", 10);

    const plSongs = useSelector(state => {
        const currPl = playlists.find(playlist => playlist.id === playlistId);
        return currPl ? currPl.playlistSongs : [];
    });

    const currIndex = plSongs.findIndex(playlistSong => {
        return playlistSong && playlistSong.song_id === currentSong.id;
    })

    const handleNextSong = () => {
        // const nextPlSong = currIndex !== -1 && currIndex < plSongs.length -1 ? plSongs[currIndex + 1] : currentSong;

        const nextIndex = currIndex !== -1 ? (currIndex + 1) % plSongs.length : 0;
        const nextPlSong = plSongs[nextIndex];

        if (nextPlSong) {
            const nextSongId = nextPlSong.song_id;
            const nextSong = songs.find(song => song.id === nextSongId);
            dispatch(playNextSong(nextSong));
        }
    };
    
    const handlePreviousSong = () => {
        // const prevPlSong = currIndex !== -1 && currIndex > 0 ? plSongs[currIndex - 1] : currentSong;

        const prevIndex = currIndex !== -1 ? (currIndex - 1 + plSongs.length) % plSongs.length : plSongs.length - 1;
        const prevPlSong = plSongs[prevIndex];

        if (prevPlSong) {
            const prevSongId = prevPlSong.song_id;
            const prevSong = songs.find(song => song.id === prevSongId);
            dispatch(playPreviousSong(prevSong));
        }
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