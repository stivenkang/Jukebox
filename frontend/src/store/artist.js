// export const RECEIVE_ARTISTS = 'artists/receiveArtists'
export const RECEIVE_ARTIST = 'artists/receiveArtist'

const receiveArtist = (artist) => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

export const getArtist = (artistId) => (state) => state.artists ? state.artists[artistId] : null
// export const getArtists = (state) => state.artists ? Object.values(state.artists) : []

export const fetchArtist = (artistId) => async dispatch => {
    const res = await fetch(`/api/artists/${artistId}`)
    if (res.ok) {
        const artist = await res.json()
        dispatch(receiveArtist(artist))
    }
}


const artistsReducer = (state={}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_ARTIST:
            newState[action.artist.id] = action.artist
            return newState;
        default:
            return state;
    }
}

export default artistsReducer;