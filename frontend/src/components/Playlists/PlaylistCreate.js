import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, updatePlaylist } from '../../store/playlist';
import PlaylistResLine from './PlaylistResLine';
import './Playlist.css';

import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
import { receiveCurrentSong } from "../../store/currentSong";
import playlistSongsReducer from '../../store/playlistSong';
import { useParams } from 'react-router-dom';

function PlaylistCreate({playlist}) {
    const { playlistId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    // const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : [])


    const [searchValue, setSearchValue] = useState("");
    const [playlistTitle, setPlaylistTitle] = useState("");
    // const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    // const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    // const handlePlaylistTitleChange = (e) => {
    //     setPlaylistTitle(e.target.value);
    // }

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(updatePlaylist({ id: playlist.id, title: playlistTitle }));
    // }

    useEffect(() => {
        dispatch(fetchArtists())
        dispatch(fetchAlbums())
        dispatch(fetchSongs())
    }, []);

    // const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    // const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchSongs = searchValue !== '' && songs.filter((song) => song.title && song.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    

    return (
        <div className='playlistCreate'>
            <div className='playlistCreateHead'>
                {/* needs an img container to hold a grid of 4x4 of top 4 albums */}
                <div>
                    <h1>New Playlist #{playlistId}</h1>
                    <p className='plUN'>{sessionUser.username}</p>
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