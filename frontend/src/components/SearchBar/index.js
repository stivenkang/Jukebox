import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { fetchArtists } from "../../store/artist";
import './SearchBar.css'

function SearchBar() {
    // const dispatch = useDispatch();
    const { artistId } = useParams()
    const artist = useSelector(state => state.artists[artistId] ? state.artists[artistId] : {});

    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleOnClick = () => {
        const artistInfo = Object.value(artistId).find(artist => artist.name === searchValue);
        // const artistInfo = artist.find_by((artistId) => artistId.name === searchValue);
        history.push(`/artist/${artistInfo.id}`)
    }
    
    return (
        <div>
            <input className='searchBar' onChange={handleOnChange} defaultValue={searchValue} placeholder="Who do you want to listen to?"/>
            <button id='searchBar'onClick={handleOnClick}>Go</button>
            {/* <i class="fa-solid fa-magnifying-glass"></i>
            <input className='searchBar' 
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="What do you want to listen to?"
            /> */}
        </div>
    )
}

export default SearchBar;


// halfway done, need to finish index.js then move on too css