import React from 'react'
import VideoItem from './VideoItem'

//props.videos, videos is object array from App component


const VideoList = ({ videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return (
        <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}  />
        )
    });

    //props.videos
    return (
        <div className="ui relaxed divided list"> {renderedList} </div>
    )
};

export default VideoList;