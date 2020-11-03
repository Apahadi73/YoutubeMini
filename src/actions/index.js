//Action Creator
import youtube from '../apis/youtube';

const apiKey = 'AIzaSyCr68utaNgnuJ0j4t-uEiES8SnSqelsEpE';

//gets user input
export const getUserInput = (userInput) => {
	return {
		type: 'SET_USERSEARCHINPUT',
		payload: userInput
	};
};

export const fetchYoutubeVideos = (userInput) => async (dispatch, getState) => {
	const response = await youtube.get('/search', {
		params: {
			q: userInput,
			part: 'snippet',
			maxResults: 5,
			type: 'video',
			key: apiKey
		}
	});
	await dispatch({ type: 'FETCH_POSTS', payload: response.data.items });
	await dispatch({ type: 'SELECTED_VIDEO', payload: response.data.items[0] });
};

export const selectVideo = (video) => {
	return {
		type: 'SELECTED_VIDEO',
		payload: video
	};
};
