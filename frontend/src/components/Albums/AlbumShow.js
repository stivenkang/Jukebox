import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/album";
import { fetchSongs } from "../../store/song";
import "./AlbumShow.css";

function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    const album = useSelector(state => state.albums[albumId] ? state.albums[albumId] : [])
    const songs = useSelector(state => state.songs ? state.songs : [])

    const albumSongs = Object.values(songs).filter(song => {
        return song.albumId === album.id
    })

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
        dispatch(fetchSongs())
    }, [albumId, dispatch])

    return (
        <div className='albumPageBody'>
            <div className='albumPageImg'>
                <img classname='albumShowImg' src={album.photoUrl} alt='' />
                <h1 className='albumShowTitle'>{album.title}</h1>
                {/* <p>{albumSongs}</p> */}
            </div>
        </div>
    )
}

export default AlbumShowPage;