import React from 'react';
import { useHistory } from 'react-router-dom';

function ArtistIndexItem({artist}) {
    const history = useHistory();

    return (
        <div onClick={(e) => history.push(`/artists/${artist.id}`)}>
            <div className='artistsList'>
                <img className='artistImg' src="https://jukebox-sk-seeds.s3.amazonaws.com/Snakehips-ArtistImg.jpeg" alt='' />
                <p className='artistName'>{artist.name}</p>
            </div>
        </div>
    )
}

export default ArtistIndexItem;