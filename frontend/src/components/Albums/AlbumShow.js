import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/album";
import { receiveCurrentSong } from "../../store/currentSong";
import { fetchSongs } from "../../store/song";
import PlayBar from "../PlayBar/PlayBar";
import "./AlbumShow.css";

function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const albums = useSelector(state => state.albums[albumId] ? state.albums[albumId] : [])
    const songs = useSelector(state => state.songs ? state.songs : [])
    // const artist = useSelector(state => albums.artistId ? state.artists[albums.artistId] : null)

    const albumSongs = Object.values(songs).filter(song => {
        return song.albumId === albums.id
    })

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
        dispatch(fetchSongs())
    }, [albumId, dispatch])

    const [currentSong, setCurrentSong] = useState('');

    const handleClick = (song) => {
        // setCurrentSong(song.songUrl);
        dispatch(receiveCurrentSong(song));
    }

    return (
        <div className='albumPageBody'>
            <div className='albumPageImg'>
                <img className='albumShowImg' src={albums.photoUrl} alt='' />
                <h1 className='albumShowTitle'>{albums.title}</h1>
                {/* <p>{albumSongs}</p> */}
            </div>
            <div>
                <p className='albumSongType'># Title</p>
                <div>
                    {albumSongs.map((song, index) => (
                        <ul>
                            <li className='albumSongList' key={song.id} onClick={() => handleClick(song)}>{index + 1} {song.title}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlbumShowPage;