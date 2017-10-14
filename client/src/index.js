import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
	<App />
	</Provider>
	,document.querySelector('#root'));
