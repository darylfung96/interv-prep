import { GO_EDIT_PAGE, RETRIEVE_RESEARCH } from '../actions/types';

const INITIAL_STATE = { companyName: '', position: [], research: [] };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case GO_EDIT_PAGE: {
			return { ...state, ...action.payload };
		}
		case RETRIEVE_RESEARCH: {
			return { ...state, research: action.payload };
		}
		default: {
			return state;
		}
	}
};
