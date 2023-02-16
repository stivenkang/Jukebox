import React from 'react';
import ArtistsIndex from '../ArtistsIndex/index.js';
import './MainBody.css';

function MainBody() {
    return (
        <div className='mainBody'>
            {/* <h1 className='indexPageTitle'>Artists</h1> */}
            <ArtistsIndex />
        </div>
    )
}

export default MainBody;