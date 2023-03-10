export const RECEIVE_ARTISTS = 'artists/receiveArtists'
export const RECEIVE_ARTIST = 'artists/receiveArtist'

export const receiveArtists = (artists) => {
    // console.log("artists", artists)
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const receiveArtist = (payload) => {
    // console.log("artist", payload)
    return {
        type: RECEIVE_ARTIST,
        payload
    }
}

export const getArtist = (artistId) => (state) => state.artists ? state.artists[artistId] : null
export const getArtists = (state) => state.artists ? Object.values(state.artists) : []

export const fetchArtists = () => async dispatch => {
    const res = await fetch(`/api/artists`)
    const data = await res.json()
    return dispatch(receiveArtists(data))
}

export const fetchArtist = (artistId) => async dispatch => {
    const res = await fetch(`/api/artists/${artistId}`)
    if (res.ok) {
        const data = await res.json()
        return dispatch(receiveArtist(data))
    }
}


const artistsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_ARTISTS:
            return {...newState, ...action.artists}
        case RECEIVE_ARTIST:
            newState[action.payload.artist.id] = action.payload.artist
            return newState;
        default:
            return state;
    }
}

export default artistsReducer;