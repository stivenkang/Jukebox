import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ArtistsIndex.css';

function ArtistIndexItem({artist}) {
    const history = useHistory();


    return (
        <div className='artistsList' onClick={(e) => history.push(`/artists/${artist.id}`)}>
            <img className='artistImg' src={artist.photoUrl} alt='' />
            <p className='artistName'>{artist.name}</p>
        </div>
    )
}

export default ArtistIndexItem;