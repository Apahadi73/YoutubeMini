import React from 'react';
import './VideoItem.css';
import { selectVideo } from '../actions';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const VideoItem = ({ video, selectVideo }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	return (
		<Card key={video.id.videoId} onClick={(e) => selectVideo(video)} style={{ marginBottom: '1rem' }}>
			<Card.Img variant="top" src={video.snippet.thumbnails.high.url} alt={video.snippet.description} />
			<Card.Body>
				<Card.Text>{video.snippet.title}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default connect(null, { selectVideo })(VideoItem);
