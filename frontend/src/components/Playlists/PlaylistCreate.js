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
    const playlist = useSelector((state) => state.playlists[playlistId] ? state.playlists[playlistId] : {})
    
    const playlistSongs = useSelector(state => {
        const currPlaylist = state.playlists[playlistId]
        return currPlaylist ? Object.values(currPlaylist.playlistSongs) : [];
    });

    const songsInPlaylist = playlistSongs.map((playlistSong) => {
        if (songs.length > 0) {
            return songs.find(song => song.id === playlistSong.song_id)
        }
        return null;
    });

    const albumCovers = songsInPlaylist.slice(0, 4).map(song => {
        if (!song) {
            return null;
        }
        
        const album = albums.find(album => album.id === song.albumId);
        return album ? album.photoUrl : null;
    });

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
        if (Object.values(artists).length === 0) {
            dispatch(fetchArtists())   
        }
        if (Object.values(albums).length === 0) {
            dispatch(fetchAlbums())   
        }
        if (Object.values(songs).length === 0) {
            dispatch(fetchSongs())   
        }
        if (Object.values(playlist).length === 0) {
            dispatch(fetchPlaylist(playlistId))
        }

    }, [dispatch, playlistId]);

    useEffect(() => {
        if (playlist && playlist.title !== playlistTitle) {
            setPlaylistTitle(playlist.title);
        }
    }, [playlist]);

    // const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    // const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchSongs = searchValue !== '' && songs.filter((song) => song.title && song.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    
    // if (!songs || !albums || !artists) {return null}

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
                                className='titleChange'
                                type='text'
                                value={playlistTitle}
                                onChange={handlePlaylistTitleChange}
                                style={{ fontSize: '25px' }}
                                // placeholder='New Title'
                            />
                            <button style={{ fontSize: '25px', color: 'grey' }} type='submit'>Save</button>
                        </form>
                    ) : (
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