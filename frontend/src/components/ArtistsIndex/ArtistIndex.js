import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists } from '../../store/artist'
import ArtistsIndexItem from './ArtistsIndexItem';
import './ArtistsIndex.css';

function ArtistIndexPage() {
    const dispatch = useDispatch();
    const artists = useSelector(state => 
        state.artists ? Object.values(state.artists) : [])

    useEffect(() => {
        dispatch(fetchArtists())
    }, [dispatch])

    return (
        <div className='artistIndexPage'>
            <h1 className='indexPageTitle'>Artists</h1>
            <div className='indexArtists'>
                <>
                    {artists.map((artist) => { return(
                        <ArtistsIndexItem id='artistIndexItem' key={artist.id} artist={artist} />
                    )})}
                </>
            </div>
        </div>
    )
}

export default ArtistIndexPage;