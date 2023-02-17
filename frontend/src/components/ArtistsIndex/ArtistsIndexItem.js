import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ArtistsIndex.css';

function ArtistIndexItem({artist}) {
    const history = useHistory();


    return (
        <div onClick={(e) => history.push(`/artists/${artist.id}`)}>
            <div className='artistsList'>
                <img className='artistImg' src={artist.photoUrl} alt='' />
                <p className='artistName'>{artist.name}</p>
            </div>
        </div>
    )
}

export default ArtistIndexItem;