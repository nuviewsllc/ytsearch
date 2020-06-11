import React from 'react'
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect }) => {
    return ( 
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img className="ui image" alt={video.snippet.title} src= {video.snippet.thumbnails.medium.url} />
        <div className= "content">
            <div className="header">{video.snippet.title} </div>
            </div>
        </div>
    );

}

export default VideoItem;

//classNames are used from symantec UI templates 
//look at example of source code and apply to respective divs

//ex parent div all vids = VideoList
// each child = Videoitem so has own className too
//USE FOR COMEDIO VIDEO CATALOG?