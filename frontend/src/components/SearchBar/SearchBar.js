import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import './SearchBar.css'
import ArtistsIndexItem from "../ArtistsIndex/ArtistsIndexItem";
import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
import AlbumIndexItem from "../Albums/AlbumIndexItem";
import ArtistIndexItem from "../ArtistsIndex/ArtistsIndexItem";

function SearchBar() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const [searchValue, setSearchValue] = useState("");
    const audioRef = useRef(null);

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

    // debugger
    const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().startsWith(searchValue.toLowerCase()));
    const searchSongs = searchValue !== '' && songs.filter((song) => song.title && song.title.toLowerCase().startsWith(searchValue.toLowerCase()));

    // const handleClick = (artistId) => {
    //     history.push(`/aritsts/${artistId}`)
    // }


    // shouldn't need to include this in the searchbar, the play functionality should be applied to all songs
    // const handleClick = (e) => {
    //     if (audioRef.current) {
    //         if (audioRef.current.paused) {
    //             audioRef.current.play();
    //         } else {
    //             audioRef.current.pause();
    //         }
    //     }
    // }

    
    return (
        <div>
            <input 
                className='searchBar' 
                type='search'
                onChange={handleChange}
                placeholder='Who do you want to listen to?'>
            </input>
            <div className='searchResults'>
                {searchValue !== '' &&
                    <div>
                        <>
                            <div className='topRes'>
                                {searchArtists.length > 0 && 
                                    <div className='firstArt'>
                                        <div className='searchType'>Top Result</div>
                                        <div className='topResult'>
                                            <ArtistIndexItem id='artistIndexItem' key={searchArtists[0]} artist={searchArtists[0]} />
                                        </div>
                                    </div>
                                }

                                {searchSongs.length > 0 &&
                                    <div className='searchSongsRes'>
                                        <div className='searchType'>Songs</div>
                                        <div className='songResults'>
                                            {searchSongs.slice(0, 4).map((song) => (
                                                // <ul className='songInfo' key={song.id} onClick={() => handleClick(song.songUrl)}>
                                                <ul className='songInfo' key={song.id}>
                                                    <audio id='audio-player' ref={audioRef} src={song.songUrl}>{song.title}</audio>
                                                    <p>{song.title}</p>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div>

                            {searchArtists.length > 0 && 
                                <div className='searchRes'>
                                    <div className='searchType'>Artists</div>
                                    <div className='results'>
                                        {searchArtists.map((artist) => (
                                            <ArtistsIndexItem id='artistIndexItem' key={artist.id} artist={artist} />
                                            // <ul key={artist.id}>
                                            //     <p>{artist.name}</p>
                                            //     {/* <p>{artist}</p> */}
                                            // </ul>
                                        ))}
                                    </div>
                                </div>
                            }

                            {searchAlbums.length > 0 &&
                                <div className='searchRes'>
                                    <div className='searchType'>Albums</div>
                                    <div className='results'>
                                        {searchAlbums.map((album) => (
                                            <AlbumIndexItem id='albumIndexItem' key={album.id} album={album} />
                                            // <ul key={album.id}>
                                            //     <p>{album.title}</p>
                                            // </ul>
                                        ))}
                                    </div>
                                </div>
                            }
                        </>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchBar;


// halfway done, need to finish index.js then move on too css