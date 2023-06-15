import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { receiveCurrentSong } from "../../store/currentSong";
import { fetchPlaylist, updatePlaylist } from '../../store/playlist';
import { deletePlaylistSong } from '../../store/playlistSong';
import './Playlist.css';

function PlaylistSongLine({song}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    // const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const artistName = artists.find(artist => artist.id === song.artistId)?.name;
    const album = albums.find(album => album.id === song.albumId);
    
    const handleClick = (song) => {
        dispatch(receiveCurrentSong(song));
    }

    const handleRemoveClick = (song) => {
        dispatch(deletePlaylistSong(playlistId, song.id))
        
        // const updatedPlaylistSongs = playlistSongs.filter((playlistSong) => playlistSong.id !== song.id);
        // dispatch(updatePlaylist(playlistId, updatedPlaylistSongs));

        // dispatch(updatePlaylist(playlistId, song.id))
    }

    useEffect(() => {
        dispatch(fetchPlaylist(playlistId))
    }, [dispatch, playlistId])


    return (
        <div className='plAdd'>
            <img className='plAddImg' src={album?.photoUrl || ''} alt='Album Cover' />
            <div className='plSInfo' onClick={() => handleClick(song)}>
                <p className='plSTitle'>{song.title}</p>
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