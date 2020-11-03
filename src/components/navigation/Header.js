import React from 'react';
import { Navbar } from 'react-bootstrap';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand>
				<FontAwesomeIcon icon={faArrowCircleUp} />TriviaQuiz
			</Navbar.Brand>
		</Navbar>
	);
};

export default Header;
