import { combineReducers } from 'redux';
import FetchUser from './fetchReducer';
import InputAddPage from './InputAddPageReducer';

export default combineReducers({
	FetchUser,
	InputAddPage
});
