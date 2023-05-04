import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCurrentSong } from "../../store/currentSong";
import { updatePlaylist } from '../../store/playlist';
import './Playlist.css';

function PlaylistAddSong({song}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const artistName = artists.find(artist => artist.id === song.artistId)?.name;
    const album = albums.find(album => album.id === song.albumId);

    const handleClick = (song) => {
        dispatch(receiveCurrentSong(song));
    }

    const handleAddClick = (song) => {
        dispatch(updatePlaylist(song))
    }

    return (
        <div className='plAdd'>
            {location.pathname === '/playlists/create' ? (
                <>
                    <img className='plAddImg' src={album.photoUrl} alt='Album Cover' />
                    <div className='plSInfo' onClick={() => handleClick(song)}>
                        <p className='plSTitle'>{song.title}</p>
                        <p className='plSArtist'>{artistName}</p>                
                    </div>
                    <div className='plSAlbumInfo' onClick={(e) => history.push(`/albums/${album.id}`)}>
                        <p className='plSAlbum'>{album.title}</p>
                    </div>
                    <div className='plAddButton' onClick={() => handleAddClick(song)}>
                        <p>Add</p>
                    </div>
                </>
            ) : (
                <>
                    <img className='plAddImg' src={album.photoUrl} alt='Album Cover' />
                    <div className='plSInfo' onClick={() => handleClick(song)}>
                        <p className='plSTitle'>{song.title}</p>
                        <p className='plSArtist'>{artistName}</p>                
                    </div>
                </>
            )}
        </div>
    )
}

export default PlaylistAddSong;