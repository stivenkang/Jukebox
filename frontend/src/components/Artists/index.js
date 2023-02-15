import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists, getArtist } from '../../store/artist'
import ArtistIndexItem from './ArtistIndexItem';

const ArtistIndexPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArtists())
    }, [dispatch])

    return (
        <div className='artistIndexPage'>
            
        </div>
    )
}

export default ArtistIndexPage;