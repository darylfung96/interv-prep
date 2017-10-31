import { UPDATE_RESEARCH_INPUT,
		 UPDATE_QUESTION_INPUT, RESET_INPUTS, RESET_RESEARCH_INPUT } from '../actions/types';

const INITIAL_STATE = { researchInput: '' };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UPDATE_RESEARCH_INPUT: {
			return { ...state, researchInput: action.payload };
		}
		case RESET_RESEARCH_INPUT: {
			return INITIAL_STATE;
		}
		default: {
			return state;
		}
	}
};
