import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtist } from '../../store/artist';
import { fetchAlbums } from '../../store/album';
import './ArtistsShow.css';
import AlbumIndexItem from '../Albums/AlbumIndexItem';

function ArtistShowPage() {
    const dispatch = useDispatch();
    const { artistId } = useParams();
    const artist = useSelector(state => state.artists[artistId] ? state.artists[artistId] : {})
    const albums = useSelector(state => state.albums ? state.albums : {})

    const artistAlbums = Object.values(albums).filter(album => {
            return album.artistId === artist.id
        })

    useEffect(() => {
        dispatch(fetchArtist(artistId))
        dispatch(fetchAlbums())
    }, [artistId, dispatch])
    // console.log(artistAlbums)

    return (
        <div className='artistPageBody'>
            <div className='artistImgName'>
                <img className='artistShowImg' src={artist.photoUrl} alt='' />
                <h1 className='artistShowName'>{artist.name}</h1>
            </div>
            <div>
                <p className='artistShowDesc'>{artist.description}</p>
            </div>
            <div>
                <p className='artistAlbumTitle'>Albums</p>
                {/* <div>
                    <AlbumIndexItem id='albumIndexItem' key={albums.id} album={albums}/>
                </div> */}
                <div className='artistRelatedDisplay'>
                    {artistAlbums.map(album => (
                        <ul>
                            <img src={album.photoUrl} alt='' />
                            <li className='artistAlbum' key={album.id}>{album.title}</li>
                            {/* <AlbumIndexItem /> */}
                        </ul>
                    ))}

                </div>
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
