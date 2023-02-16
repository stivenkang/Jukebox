import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtist } from '../../store/artist';
import './ArtistsShow.css';

function ArtistShowPage() {
    const dispatch = useDispatch();
    const { artistId } = useParams();
    const artist = useSelector(state => state.artists[artistId] ? state.artists[artistId] : {})
    
    // debugger
    // console.log(artistId)
    // console.log('hello', artist)
    
    const [artistName, setArtistName] = useState('');
    const [artistDescription, setArtistDescription] = useState('');
    const [artistAlbums, setArtistAlbums] = useState([]);


    // useEffect(() => {
    //     return dispatch(fetchArtist(artistId))
    // })

    // useEffect(() => {
    //     if (artist) {
    //         setArtistName(artist.name);
    //         setArtistDescription(artist.description);
    //         setArtistAlbums(artist.albums);
    //     }
    // }, [artist])

    return (
        <div className='artistPageBody'>
            <img className='artistShowPageImg' src="https://jukebox-sk-seeds.s3.amazonaws.com/Snakehips-ArtistImg.jpeg" alt='' />
            <div>
                <h1>{artist.name}</h1>
                <p>{artist.description}</p>
                {/* <ul>
                    {artist.albums.map(album => (
                        <li key={album.id}>{album.name}</li>
                    ))}
                </ul> */}
                {/* <ul>
                    {artistSongs.map(song => (
                        <li key={song.id}>{song.name}</li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default ArtistShowPage;