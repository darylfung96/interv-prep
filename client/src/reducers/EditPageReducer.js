import { GO_EDIT_PAGE } from '../actions/types';

const INITIAL_STATE = { companyName: '', position: [] };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case GO_EDIT_PAGE: {
			return { ...state, ...action.payload };
		}
		default: {
			return state;
		}
	}
};
