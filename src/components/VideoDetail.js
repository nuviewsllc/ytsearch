import React from 'react'

//const VideoDetail = (props) => { }

const VideoDetail = ({video}) => {
    if (!video) {
        return <div> Loading.... </div>
    }
    
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`

    return(
    //after embed numbers are video id.
        <div>
            <div className= "ui embed">
                 <iframe title= "Video Player" src={videoSrc} />
       </div>
        <div className="ui segment">
             <h4 className = "ui header">{video.snippet.title} </h4>
        <p> {video.snippet.description}</p>
        </div>
    </div>

 );

};

export default VideoDetail;