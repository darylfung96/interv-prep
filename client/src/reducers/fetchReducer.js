import { FETCH_USER } from '../actions/types';

const INITIAL_STATE = { user: null };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_USER:
			return { user: action.payload };
		default:
			return state;
	}
};
