import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react';
// import { fetchSong } from '../../store/song';
import './PlayBar.css';

function PlayBar() {


    return (
        <AudioPlayer
            className='playBar'
            // src={currSong}
        />

        // <div className='playBar'>
            // {/* <h1>PlayBar</h1> */}
            // <AudioPlayer />
            // {/* <div className='playBarImg'>
            //     <img className='albumImg' src="" alt="" />
            //     <div className='songInfo'>
            //         <p>Song Info</p>
            //     </div>
            // </div>
            // <div className='playBarButtons'>
            //     <div className='playButton'>

            //     </div>
            // </div>
            // <div className='playBarVolume'>
                
            // </div> */}
        // {/* </div> */}
    )
}

export default PlayBar;