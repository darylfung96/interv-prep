import { combineReducers } from 'redux';
import FetchUser from './fetchReducer';
import InputAddPage from './InputAddPageReducer';
import DashCollectReducer from './DashCollectReducer';
import EditPageReducer from './EditPageReducer';
import InputEditPageReducer from './InputEditPageReducer';

export default combineReducers({
	FetchUser,
	InputAddPage,
	DashCollectReducer,
	EditPageReducer,
	InputEditPageReducer,
});
