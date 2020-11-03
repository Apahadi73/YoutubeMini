import { combineReducers } from 'redux';

//reducer that changes user search key in the redux store
const userInputReducer = (userSearchInput = null, action) => {
	switch (action.type) {
		case 'SET_USERSEARCHINPUT':
			return action.payload;
		default:
			return userSearchInput;
	}
};

const youtubeVideosReducers = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}
};

const selectedVideoReducers = (selectedVideo = null, action) => {
	switch (action.type) {
		case 'SELECTED_VIDEO':
			return action.payload;
		default:
			return selectedVideo;
	}
};

export default combineReducers({
	userInput: userInputReducer,
	youtubeVideos: youtubeVideosReducers,
	selectedVideo: selectedVideoReducers
});
