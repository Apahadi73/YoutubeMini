import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './bootstrap.min.css';
import reducers from './reducers';
import App from './App';
const reduxStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
