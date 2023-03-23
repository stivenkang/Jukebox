import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbum, fetchAlbum } from '../../store/album';
import '../ArtistsIndex/ArtistsIndex.css';

const AlbumIndexItem = ({album}) => {
    // const {albumId} = useParams()
    // const dispatch = useDispatch()
    // const album = useSelector(getAlbum(albumId))

    // useEffect(() => {
    //     dispatch(fetchAlbum(albumId))
    // }, [dispatch, albumId])

    // const handleSubmit = e => {
    //     dispatch(fetchAlbum(album.id))
    // }
    // debugger
    return (
        <div className='artistsList'>
            <img className='albumImg' src={album.photoUrl} alt='' />
            <p>{album.title}</p>
            <p>{album.year}</p>
            {/* <p>{album.artistId.name}</p> */}
        </div>
    )
}

export default AlbumIndexItem;