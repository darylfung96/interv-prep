import { FETCH_COLLECTIONS } from '../actions/types';

const INITIAL_STATE = { userInfo: {} };

export default(state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_COLLECTIONS: {
			return { ...state, userInfo: action.payload };
		}
		default:
			return state;
	}
};
