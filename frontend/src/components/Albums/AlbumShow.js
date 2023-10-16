import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/album";
import { fetchSongs } from "../../store/song";
import "./AlbumShow.css";
import PlaylistResLine from '../Playlists/PlaylistResLine';

function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const albums = useSelector(state => state.albums[albumId] ? state.albums[albumId] : [])
    const songs = useSelector(state => state.songs ? state.songs : [])

    const albumSongs = Object.values(songs).filter(song => {
        return song.albumId === albums.id
    })

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
        dispatch(fetchSongs())
    }, [albumId, dispatch])

    return (
        <div className='albumPageBody'>
            <div className='albumPageImg'>
                <img className='albumShowImg' src={albums.photoUrl} alt='' />
                <div className='albumInfo'>
                    <h1 className='albumShowTitle'>{albums.title}</h1>
                    {/* <h3 className='albumShowArtist'>{artistName}</h3> */}
                </div>
            </div>
            <div>
                <p className='albumSongType'># Title</p>
                <div>
                    {albumSongs.map((song, index) => (
                        <ul className='albumSongList'>
                            {/* <li className='albumSongList' key={song.id} onClick={() => handleClick(song)}>{index + 1} {song.title}</li> */}

                            <p>{index + 1}</p>
                            <PlaylistResLine song={song} />
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlbumShowPage;