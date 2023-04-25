import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist, updatePlaylist } from '../../store/playlist';
import SearchBar from '../SearchBar/SearchBar';
import './Playlist.css';

import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
import { receiveCurrentSong } from "../../store/currentSong";

function PlaylistCreate() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);


    useEffect(() => {
        dispatch(createPlaylist())
    }, [dispatch]);



    const [searchValue, setSearchValue] = useState("");
    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        dispatch(fetchArtists())
        dispatch(fetchAlbums())
        dispatch(fetchSongs())
    }, []);

    const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchSongs = searchValue !== '' && songs.filter((song) => song.title && song.title.toLowerCase().startsWith(searchValue.toLowerCase()));

    const handleClick = (song) => {
        dispatch(receiveCurrentSong(song));
    }
    

    return (
        <div className='playlistCreate'>
            <div className='playlistCreateHead'>
                {/* needs an img container to hold a grid of 4x4 of top 4 albums */}
                <div>
                    <h1>Playlist Title</h1>
                    <p className='plUN'>{sessionUser.username}</p>
                </div>
            </div>
            <div className='playlistCreateBody'>
                <p className='plSearchHead'>Let's find something for your playlist</p>
                {/* <SearchBar className='plSearch'/> */}
                <div>
                    <input 
                        className='plSBar' 
                        type='search'
                        onChange={handleChange}
                        placeholder='Seach for songs'>
                    </input>
                    <div className='plSRes'>
                        {searchValue !== '' &&
                            <div>
                                <>
                                    {searchSongs.length > 0 &&
                                        <div className='searchSongsRes'>
                                            <div className='searchType'>Songs</div>
                                            <div className='songResults'>
                                                {searchSongs.map((song) => (
                                                    <ul>
                                                        <li className='songInfo' key={song.id} onClick={() => handleClick(song)}>{song.title}</li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    }

                                    {searchArtists.length > 0 && 
                                        <div className='searchRes'>
                                            <div className='searchType'>Artists</div>
                                            <div className='results'>
                                                {searchArtists.map((artist) => (
                                                    <p>{artist.name}</p>
                                                ))}
                                            </div>
                                        </div>
                                    }

                                    {searchAlbums.length > 0 &&
                                        <div className='searchRes'>
                                            <div className='searchType'>Albums</div>
                                            <div className='results'>
                                                {searchAlbums.map((album) => (
                                                    <p>{album.title}</p>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                </>
                            </div>
                        }
                    </div>
                </div>

                {/* SearchBar component currently includes the top searchbar and also displays
                the results in the body with a full background color of grey. Possibly need
                to refactor the searchbar so its just the bar and the results would appear
                in the body which would a separate component or included somewhere else? */}

                {/* SearchBar component includes the display of results which is different for the playlist.
                Will have to add searchbar code (may be redundant) into playlist create and create its own
                display results to add to the playlist */}
            </div>
        </div>
    )

}

export default PlaylistCreate;