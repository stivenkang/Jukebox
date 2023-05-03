import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Playlist.css';

function PlaylistAddSong() {
    // const history = useHistory();

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    // useEffect(() => {
    //     dispatch(fetchArtists())
    //     dispatch(fetchAlbums())
    //     dispatch(fetchSongs())
    // }, []);

    // useEffect(() => {

    // })

    const artistName = artists.find(artist => artist.id === albums.artistId)?.name;

    const [input, setInput] = useState('');


    return (
        <div className='plAdd'>
            {/* <img className='plAddImg' src={} alt='' /> */}
            <div>
                {/* Name of artist, album, song, etc */}
                <p>{artists.name}</p>
                {/* <p>{artistName}</p> */}
                
                {/* Actual type (Artist, Album, Actual Artist Name) */}
            </div>
        </div>
    )
}

export default PlaylistAddSong;