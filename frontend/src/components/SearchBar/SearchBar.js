import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import './SearchBar.css'
import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import { fetchSongs } from "../../store/song";
// import AlbumIndexItem from "../Albums/AlbumIndexItem";
import ArtistIndexItem from "../ArtistsIndex/ArtistsIndexItem";
import PlaylistResLine from '../Playlists/PlaylistResLine';

function SearchBar() {
    const dispatch = useDispatch();
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
                                            {searchSongs.slice(0, 4).map((song, index) => (
                                                <ul className='songResult'>
                                                    <p className='songResultIndex'>{index + 1}</p>
                                                    <PlaylistResLine song={song} />
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
                                            <ArtistIndexItem id='artistIndexItem' key={artist.id} artist={artist} />
                                        ))}
                                    </div>
                                </div>
                            }

                            {searchAlbums.length > 0 &&
                                <div className='searchRes'>
                                    <div className='searchType'>Albums</div>
                                    <div className='results'>
                                        {/* {searchAlbums.map((album) => (
                                            <AlbumIndexItem id='albumIndexItem' key={album.id} album={album} />
                                        ))} */}
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