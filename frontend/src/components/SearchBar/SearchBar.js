import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
// import { fetchArtists } from "../../store/artist";
import './SearchBar.css'
import ArtistsIndexItem from "../ArtistsIndex/ArtistsIndexItem";
import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";

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
    }, [dispatch]);

    const searchArtists = searchValue !== '' && artists.filter((artist) => artist.name.toLowerCase().includes(searchValue.toLowerCase()));
    const searchAlbums = searchValue !== '' && albums.filter((album) => album.title.toLowerCase().includes(searchValue.toLowerCase()));
    // const searchSongs = songs.filter((song) => song.title.toLowerCase().includes(searchValue.toLowerCase()));

    // if (albums.length === 0) {
    //     return null
    // }

    // if (artists.length === 0) {
    //     return null
    // }

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
                        <div className='searchArt'>
                            <h3 className='searchType'>Artists</h3>
                            {searchArtists.map((artist) => (
                                <ArtistsIndexItem id='artistIndexItem' key={artist.id} artist={artist} />
                                // <ul key={artist.id}>
                                //     <p>{artist.name}</p>
                                //     {/* <p>{artist}</p> */}
                                // </ul>
                            ))}
                        </div>

                        <div className='searchAl'>
                            <h3 className='searchType'>Albums</h3>
                            {searchAlbums.map((album) => (
                                <ul key={album.id}>
                                    <p>{album.title}</p>
                                </ul>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchBar;


// halfway done, need to finish index.js then move on too css