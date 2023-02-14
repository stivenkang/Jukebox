export const RECEIVE_ALBUMS = 'albums/receiveAlbums'
export const RECEIVE_ALBUM = 'albums/receiveAlbum'

const receiveAlbums = (albums) => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

const receiveAlbum = (album) => {
    return{
        type: RECEIVE_ALBUM,
        album
    }
}

export const getAlbum = (albumId) => (state) => state.albums ? state.albums[albumId] : null
export const getAlbums = (state) => state.albums ? Object.values(state.albums) : []

export const fetchAlbums = () => async dispatch => {
    const res = await fetch(`/api/albums`)
    const albums = await res.json()
    console.log({albums})
    dispatch(receiveAlbums(albums))
    // debugger
}

export const fetchAlbum = (albumId) => async dispatch => {
    const res = await fetch(`/api/albums/${albumId}`)
    if (res.ok) {
        const album = await res.json()
        dispatch(receiveAlbum(album))
    }
}

const albumsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_ALBUMS:
            return {...state, ...action.albums};
        case RECEIVE_ALBUM:
            newState[action.album.id] = action.album
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;