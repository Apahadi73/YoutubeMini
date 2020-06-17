import React from "react";
import { connect } from "react-redux";

import "./VideoDetail.css";

class VideoDetail extends React.Component {
  render() {
    const video = this.props.selectedVideo;
    if (!video) {
      return <div>Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <iframe className="iframeBox" title="video player" src={videoSrc} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedVideo: state.selectedVideo };
};

export default connect(mapStateToProps)(VideoDetail);
