import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../ArtistsIndex/ArtistsIndex.css';

const AlbumIndexItem = ({album}) => {
    const history = useHistory();

    const artists = useSelector(state => state.artists ? Object.values(state.artists) : []);
    const artistName = artists.find(artist => artist.id === album.artistId)?.name;

    return (
        <div className='artistsList' onClick={(e) => history.push(`/albums/${album.id}`)}>
            <img className='albumImg' src={album.photoUrl} alt='' />
            <p className='albumName'>{album.title}</p>
            <p className='albumCardInfo'>{album.year} - {artistName}</p>
        </div>
    )
}

export default AlbumIndexItem;