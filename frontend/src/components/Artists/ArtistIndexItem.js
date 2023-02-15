import React from 'react';

const ArtistIndexItem = ({artist}) => {
    return (
        <div className='artistsList'>
            {/* <img className='artistImg' src={artist.photoUrl} alt='' /> */}
            <div>
                <p className='artistName'>{artist.name}</p>
            </div>
        </div>
    )
}

export default ArtistIndexItem;