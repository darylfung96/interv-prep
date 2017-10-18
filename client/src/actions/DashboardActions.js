import axios from 'axios';
import { FETCH_COLLECTIONS } from './types';

export const fetchCollections = () => async(dispatch) => {
	const currentUser = await axios('/api/current_user');
	if(currentUser) {
		dispatch({
			type: FETCH_COLLECTIONS,
			payload: currentUser.data.collections
		});
	}


}
