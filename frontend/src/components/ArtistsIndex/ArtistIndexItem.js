import React from 'react';
import { useHistory } from 'react-router-dom';

function ArtistIndexItem({artist}) {
    const history = useHistory();
    // debugger
    console.log(artist)

    return (
        <div onClick={(e) => history.push(`/artists/${artist.id}`)}>
            <div className='artistsList'>
                {/* <img className='artistImg' src={artist.photoUrl} alt='' /> */}
                <p className='artistName'>{artist.name}</p>
                <p>Working?</p>
            </div>
        </div>
    )
}

export default ArtistIndexItem;