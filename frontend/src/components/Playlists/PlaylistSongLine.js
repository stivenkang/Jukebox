import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCurrentSong } from "../../store/currentSong";
import { deletePlaylistSong } from '../../store/playlistSong';
import './Playlist.css';

function PlaylistSongLine({song, index}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    const artists = useSelector((state) => state.artists ? Object.values(state.artists) : []);
    const songs = useSelector((state) => state.songs ? Object.values(state.songs) : []);
    const albums = useSelector((state) => state.albums ? Object.values(state.albums) : []);
    const playlistSongs = useSelector((state) => state.playlists[playlistId].playlistSongs ? state.playlists[playlistId].playlistSongs : []);

    const artist = artists.find((artist) => artist.id === song?.artistId);
    const artistName = artist ? artist.name : null;
    
    const album = albums.find((album) => album.id === song?.albumId);
    
    const handleClick = (song) => {
        dispatch(receiveCurrentSong(song));
    }

    const handleRemoveClick = () => {
        dispatch(deletePlaylistSong(playlistSongs[index].id))
    }

    if (!artists || !albums || !songs) {return null}


    return (
        <div className='plAdd'>
            <img className='plAddImg' src={album?.photoUrl || ''} alt='Album Cover' />
            <div className='plSInfo' onClick={() => handleClick(song)}>
                <p className='plSTitle'>{song?.title}</p>
                <p className='plSArtist'>{artistName}</p>
            </div>
            <div className='plSAlbumInfo' onClick={(e) => history.push(`/albums/${album.id}`)}>
                <p className='plSAlbum'>{album?.title || ''}</p>
            </div>
            <div className='plRemoveButton' onClick={() => handleRemoveClick(song)}>
                <p>Remove</p>
            </div>
        </div>
    )
}

export default PlaylistSongLine;