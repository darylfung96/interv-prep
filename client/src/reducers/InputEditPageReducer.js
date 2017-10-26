import { UPDATE_RESEARCH_INPUT,
		 UPDATE_QUESTION_INPUT, RESET_INPUTS } from '../actions/types';

const INITIAL_STATE = { research: '' };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UPDATE_RESEARCH_INPUT: {
			return { ...state, research: action.payload };
		}
		default: {
			return state;
		}
	}
};
