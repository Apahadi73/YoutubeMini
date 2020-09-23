import React from "react";
import { connect } from "react-redux";
import { fetchYoutubeVideos } from "../actions";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  componentDidMount() {
    this.props.fetchYoutubeVideos();
  }

  renderList() {
    return this.props.youtubeVideos.map((video) => {
      return (
        <div key={video.id.videoId}>
          <VideoItem video={video} />
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { youtubeVideos: state.youtubeVideos };
};
export default connect(mapStateToProps, { fetchYoutubeVideos })(VideoList);
