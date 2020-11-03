import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import { Col, Container, Row } from 'react-bootstrap';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Container>
					<SearchBar />
					<Row>
						<Col key="video-detail" sm={12} md={9}>
							<VideoDetail />
						</Col>
						<Col key="video-list" sm={12} md={3}>
							<VideoList />
						</Col>
					</Row>
				</Container>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
