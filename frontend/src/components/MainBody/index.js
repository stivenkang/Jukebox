import React from 'react';
import ArtistsIndex from '../Artists/index';
import './MainBody.css';

function MainBody() {
    return (
        <div className='mainBody'>
            <h1 className='subBody'>Artists</h1>
            {/* <ArtistsIndex /> */}
            <img src={"https://jukebox-sk-seeds.s3.amazonaws.com/SnakeHips-AllMyFriends.jpeg"} />
        </div>
    )
}

export default MainBody;