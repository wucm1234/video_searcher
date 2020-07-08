import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item ui grid"
    >
      <div className='row'>
        <div className=' eight wide column'>
          <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="content  eight wide column">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
