import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import './Searchbar.css'

function SearchBar() {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : {});
    const [searchValue, setSearchValue] = useState("");
    
    return (
        <>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input className='searchBar' 
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder="What do you want to listen to?"
            />
        </>
    )
}

export default SearchBar();


// halfway done, need to finish index.js then move on too css