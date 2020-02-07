import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video,onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        alt="img"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title.replace(/&quot;/g, '"').replace(/&amp;/g, '&')}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
