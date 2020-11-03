import React from 'react';
import { connect } from 'react-redux';

import './VideoDetail.css';

class VideoDetail extends React.Component {
	render() {
		let videoId = '';
		console.log(this.props.youtubeVideos);
		const video = this.props.selectedVideo;
		if (!video) {
			return (
				<div className="iframeBox">
					<div className="spinner-border text-info " role="status">
						<span className="sr-only">Please select a video to play</span>
					</div>
				</div>
			);
		}
		if (video.id.videoId) {
			videoId = video.id.videoId;
		} else {
			videoId = this.props.defaultVideo.id.videoId;
		}
		const videoSrc = `https://www.youtube.com/embed/${videoId}`;
		return (
			<div>
				<iframe className="iframeBox" title="video player" src={videoSrc} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return { selectedVideo: state.selectedVideo, defaultVideo: state.youtubeVideos };
};

export default connect(mapStateToProps)(VideoDetail);
