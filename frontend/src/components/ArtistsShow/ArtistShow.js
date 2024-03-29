import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtist } from '../../store/artist';
import { fetchAlbums } from '../../store/album';
import { fetchSongs } from '../../store/song';
import './ArtistsShow.css';
import AlbumIndexItem from '../Albums/AlbumIndexItem';
import PlaylistResLine from '../Playlists/PlaylistResLine';

function ArtistShowPage() {
    const dispatch = useDispatch();
    const { artistId } = useParams();
    const artist = useSelector(state => state.artists[artistId] ? state.artists[artistId] : {})
    const albums = useSelector(state => state.albums ? state.albums : {})
    const songs = useSelector(state => state.songs ? state.songs : {})

    const artistAlbums = Object.values(albums).filter(album => {
        return album.artistId === artist.id
    })

    const artistSongs = Object.values(songs).filter(song => {
        return song.artistId === artist.id
    })

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    useEffect(() => {
        dispatch(fetchArtist(artistId))
        dispatch(fetchAlbums())
        dispatch(fetchSongs())
    }, [artistId, dispatch])

    return (
        <div className='artistPageBody'>
            <div className='artistImgName'>
                <img className='artistShowImg' src={artist.photoUrl} alt='' />
                <h1 className='artistShowName'>{artist.name}</h1>
            </div>
            <div>
                <p className='artistSection'>Popular</p>
                <div>
                    {artistSongs.slice(0, showMore ? artistSongs.length : 5).map((song, index) => (
                        <ul className='artistSongs'>
                            <p>{index + 1}</p>
                            <PlaylistResLine song={song} />
                        </ul>
                    ))}
                </div>
                {artistSongs.length > 5 && (
                    <button className='showMore' onClick={handleShowMore}>{showMore ? 'Show Less' : 'Show More'}</button>
                )}

                <p className='artistSection'>Albums</p>
                <div className='artistRelatedDisplay'>
                    {artistAlbums.map(album => (
                        <ul>
                            <AlbumIndexItem className='artistAlbum' key={album.id} album={album} />
                        </ul>
                    ))}
                </div>
                <div>
                    <p className='artistSection'>About</p>
                    <p className='artistShowDesc'>{artist.description}</p>        
                </div>

            </div>
        </div>
    )
}

export default ArtistShowPage;
