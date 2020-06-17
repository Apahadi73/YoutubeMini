import React from "react";
import "./VideoItem.css";
import { selectVideo } from "../actions";
import { connect } from "react-redux";

const VideoItem = ({ video, selectVideo }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="card video-item"
      key={video.id.videoId}
      onClick={(e) => selectVideo(video)}
    >
      <img
        src={video.snippet.thumbnails.high.url}
        className="card-img-top"
        alt={video.snippet.description}
      />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </div>
  );
};

export default connect(null, { selectVideo })(VideoItem);
