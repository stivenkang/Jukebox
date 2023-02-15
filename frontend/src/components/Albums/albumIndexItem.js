import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbum, fetchAlbum } from '../../store/album';

const AlbumIndexItem = (props) => {
    const {albumId} = useParams()
    const dispatch = useDispatch()
    const album = useSelector(getAlbum(albumId))

    useEffect(() => {
        dispatch(fetchAlbum(albumId))
    }, [dispatch, albumId])

    // const handleSubmit = e => {
    //     dispatch(fetchAlbum(props.album.id))
    // }
    // debugger
    return (
        <div>
            <p>{album.title}</p>
            <p>{album.year}</p>
            <p>{album.artist.name}</p>
        </div>
    )
}

export default AlbumIndexItem;