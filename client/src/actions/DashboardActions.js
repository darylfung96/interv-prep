import axios from 'axios';
import { FETCH_COLLECTIONS, GO_EDIT_PAGE } from './types';

export const fetchCollections = () => async(dispatch) => {
	const currentUser = await axios('/api/current_user');
	if(currentUser) {
		dispatch({
			type: FETCH_COLLECTIONS,
			payload: currentUser.data.collections
		});
	}
};

export const goEdit = (companyName, position) => {
	return ({
		type: GO_EDIT_PAGE,
		payload: { companyName, position }
	});
};
