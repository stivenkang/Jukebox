import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { fetchArtists } from "../../store/artist";
import './SearchBar.css'
import ArtistIndexItem from "../ArtistsIndex/ArtistsIndexItem";
import { fetchArtists } from "../../store/artist";
import { fetchAlbums } from "../../store/album";

function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const { artistId } = useParams()

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);
    
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const searchArtists = artists.filter((artist) => artist.name.toLowerCase().includes(searchValue.toLowerCase()));
    const searchAlbums = albums.filter((album) => album.title.toLowerCase().includes(searchValue.toLowerCase()));

    useEffect(() => {
        dispatch(fetchArtists())
        dispatch(fetchAlbums())
    }, [dispatch]);

    if (albums.length === 0) {
        return null
    }

    if (artists.length === 0) {
        return null
    }

    const handleClick = (artistId) => {
        history.push(`/aritsts/${artistId}`)
    }

    
    return (
        <>
            <input 
                className='searchBar' 
                type='text'
                value={searchValue} 
                onChange={handleChange}
                placeholder='Who do you want to listen to?'>
            </input>
            {searchArtists.map((artist) => (
                <li key={artist.id}>
                    {/* <p>{artist.name}</p> */}
                    {/* <p>{artist}</p> */}
                </li>
            ))}
        </>
    )
}

export default SearchBar;


// halfway done, need to finish index.js then move on too css