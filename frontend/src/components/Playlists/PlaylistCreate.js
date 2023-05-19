import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updatePlaylist, deletePlaylist } from '../../store/playlist';
import PlaylistResLine from './PlaylistResLine';
import './Playlist.css';

import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
import { receiveCurrentSong } from "../../store/currentSong";
import playlistSongsReducer from '../../store/playlistSong';

function PlaylistCreate({playlist}) {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);
    const playlistSongs = useSelector(state => state.playlistSongs ? Object.values(state.playlistSongs) : []);
    // const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    // const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : [])
    
    const [searchValue, setSearchValue] = useState("");
    const [playlistTitle, setPlaylistTitle] = useState("");
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState("New Playlist #")
    const [plCover, setPlCover] = useState([]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handlePlaylistTitleChange = (e) => {
        setPlaylistTitle(e.target.value);
    }

    const handleTitleClick = () => {
        setEdit(true)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedPlaylist = { id: playlistId, title: playlistTitle };
        dispatch(updatePlaylist(updatedPlaylist));
        setEdit(false);
    }

    const handleDelete = () => {
        dispatch(deletePlaylist(playlistId))
        history.push('/')
    }

    useEffect(() => {
        dispatch(fetchArtists())
        dispatch(fetchAlbums())
        dispatch(fetchSongs())
    }, []);

    // useEffect(() => {
    //     const albumCovers = songs.slice(0, 4).map((song) => song.album.coverPhoto);
    //     setPlCover(albumCovers);
    // }, [songs]);

    // const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    // const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchSongs = searchValue !== '' && songs.filter((song) => song.title && song.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    

    return (
        <div className='playlistCreate'>
            <div className='playlistCreateHead'>

                <img className='plImg'></img>

                {/* Rough draft of img container for each playlist */}
                {/* <div className='plImgCont'>
                    {plCover.map((coverPhoto, index) => (
                        <img key={index} className='plImg' src={coverPhoto} alt='Playlist Cover' />
                    ))}
                </div> */}


                {/* <div>
                    <h1>New Playlist #{playlistId}</h1>
                    <p className='plUN'>{sessionUser.username}</p>
                </div> */}

                <div>
                    {edit ? (
                        <form onSubmit={handleUpdate}>
                            <input
                                type='text'
                                value={playlistTitle}
                                onChange={handlePlaylistTitleChange}
                                // placeholder='New Playlist #{playlistId}'
                            />
                            <button type='submit'>Save</button>
                        </form>
                    ) : (
                        <h1 onClick={handleTitleClick}>New Playlist #{playlistId}</h1>
                    )}
                    <p className='plUN'>{sessionUser.username}</p>
                </div>
                
                <div className='plDelete' onClick={handleDelete}>
                    <p className='plDeleteButton'>Delete</p>
                </div>
            </div>

            <div>
                {/* Should display the songs that have been saved into the 
                current playlist as playlistresline without the add button */}
                {playlistSongs.map((playlistSong) => (
                    <PlaylistResLine key={playlistSong.id} playlistSong={playlistSong} />
                ))}
            </div>

            <div className='playlistCreateBody'>
                <p className='plSearchHead'>Let's find something for your playlist</p>
                <div>
                    <input 
                        className='plSBar' 
                        type='search'
                        onChange={handleChange}
                        placeholder='Search for songs'>
                    </input>
                    <div className='plSRes'>
                        {searchValue !== '' &&
                            <div>
                                {searchSongs.length > 0 &&
                                    <div className='plSongResults'>
                                        {searchSongs.map((song) => (
                                            <ul>
                                                <PlaylistResLine song={song}/>
                                            </ul>
                                        ))}
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCreate;