import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchPlaylist, updatePlaylist, deletePlaylist } from '../../store/playlist';
import PlaylistResLine from './PlaylistResLine';
import PlaylistSongLine from './PlaylistSongLine';
import './Playlist.css';

import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";

function PlaylistCreate() {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    // const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);
    const playlist = useSelector((state) => state.playlists[playlistId])
    
    const playlistSongs = useSelector(state => {
        const currPlaylist = state.playlists[playlistId]
        return currPlaylist ? Object.values(currPlaylist.playlistSongs) : [];
    });
    // const playlistSongIds = playlistSongs.map(playlistSong => playlistSong?.song_id);
    // // const songsInPlaylist = songs.filter(song => playlistSongIds.includes(song.id));
    // const songsInPlaylist = playlistSongIds.map(playlistSongId => songs.find(song => song.id === playlistSongId));

    const songsInPlaylist = playlistSongs.map(playlistSong => songs.find(song => song.id === playlistSong));


    const albumCovers = songsInPlaylist.slice(0, 4).map(song => {
        if (!song) {
            return null;
        }
        
        const album = albums.find(album => album.id === song.albumId);
        return album ? album.photoUrl : null;
    });

    // debugger

    const [searchValue, setSearchValue] = useState("");
    const [playlistTitle, setPlaylistTitle] = useState("");
    const [edit, setEdit] = useState(false);

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
        dispatch(updatePlaylist({id: playlistId, title: playlistTitle}))
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
        dispatch(fetchPlaylist(playlistId))
    }, [dispatch, playlistId]);

    useEffect(() => {
        if (playlist) {
            setPlaylistTitle(playlist.title);
        }
    }, [playlist]);

    // const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    // const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchSongs = searchValue !== '' && songs.filter((song) => song.title && song.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    
    if (!songs || !albums || !artists) {return null}

    return (
        <div className='playlistCreate'>
            <div className='playlistCreateHead'>
                <div className='plImgCont'>
                    {albumCovers.map((coverPhoto, index) => (
                        <img key={index} className='plImg' src={coverPhoto} alt='' />
                    ))}
                </div>

                <div>
                    {edit ? (
                        <form onSubmit={handleUpdate}>
                            <input
                                type='text'
                                value={playlistTitle}
                                onChange={handlePlaylistTitleChange}
                                // placeholder='New Title'
                            />
                            <button type='submit'>Save</button>
                        </form>
                    ) : (
                        // <h1 onClick={handleTitleClick}>New Playlist #{playlistId}</h1>
                        <h1 onClick={handleTitleClick}>{playlistTitle}</h1>
                    )}

                    <p className='plUN'>{sessionUser.username}</p>
                </div>
            </div>

            <div className='plDelete' onClick={handleDelete}>
                <p>Delete Playlist</p>
            </div>

            <div className='plSongDisplay'>
                <div className='plColumnSign'>
                    <p># Title </p>
                    <p>Album</p>
                </div>

                <div className='dkdk'>
                    {songsInPlaylist.map((song, index) => (
                        <div className='dk' key={index}>
                            <p className='plSongsIndex'>{index + 1}</p>
                            <PlaylistSongLine key={song} index={index} song={song} />
                        </div>
                    ))}
                </div>
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