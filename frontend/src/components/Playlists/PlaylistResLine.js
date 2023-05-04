import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCurrentSong } from "../../store/currentSong";
import './Playlist.css';

function PlaylistAddSong({song}) {
    // const history = useHistory();
    const dispatch = useDispatch();

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const artistName = artists.find(artist => artist.id === song.artistId)?.name;
    const albumImg = albums.find(album => album.id === song.albumId)?.photoUrl;

    const handleClick = (song) => {
        dispatch(receiveCurrentSong(song));
    }

    return (
        <div className='plAdd' onClick={() => handleClick(song)}>
            <img className='plAddImg' src={albumImg} alt='Album Cover' />
            <div className='plSInfo'>
                <p className='plSTitle'>{song.title}</p>
                <p className='plSArtist'>{artistName}</p>                
            </div>
        </div>
    )
}

export default PlaylistAddSong;