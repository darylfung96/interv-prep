import { combineReducers } from 'redux';
import FetchUser from './fetchReducer';
import InputAddPage from './InputAddPageReducer';
import DashCollectReducer from './DashCollectReducer';

export default combineReducers({
	FetchUser,
	InputAddPage,
	DashCollectReducer
});
