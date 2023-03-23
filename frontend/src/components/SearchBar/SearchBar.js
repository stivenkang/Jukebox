import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import './SearchBar.css'
import ArtistsIndexItem from "../ArtistsIndex/ArtistsIndexItem";
import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";
import AlbumIndexItem from "../Albums/AlbumIndexItem";

function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchValue, setSearchValue] = useState("");

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        dispatch(fetchArtists())
        dispatch(fetchAlbums())
    }, []);

    // debugger
    const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name && artist.name.toLowerCase().includes(searchValue.toLowerCase()));
    const searchAlbums = searchValue !== '' && albums.filter((album) => album.title && album.title.toLowerCase().includes(searchValue.toLowerCase()));
    // const searchSongs = songs.filter((song) => song.title.toLowerCase().includes(searchValue.toLowerCase()));

    // added conditional above to check if artist/album exists first. Code now works only for artists.

    // const handleClick = (artistId) => {
    //     history.push(`/aritsts/${artistId}`)
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
                            {searchArtists.length > 0 && 
                                <div className='searchArt'>
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
                                <div className='searchAl'>
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