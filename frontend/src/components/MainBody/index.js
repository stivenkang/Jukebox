import React from 'react';
import ArtistsIndex from '../ArtistsIndex/index.js';
import './MainBody.css';

function MainBody() {
    return (
        <div className='mainBody'>
            <ArtistsIndex />
            {/* <img src={"https://jukebox-sk-seeds.s3.amazonaws.com/SnakeHips-AllMyFriends.jpeg"} /> */}
        </div>
    )
}

export default MainBody;