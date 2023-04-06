import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Songs() {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    return (
        <div>

        </div>
    )
}

export default Songs;