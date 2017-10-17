import { UPDATE_COMPANY_INPUT, UPDATE_POSITION_INPUT, UPDATE_RESEARCH_INPUT,
		 UPDATE_QUESTION_INPUT, UPDATE_NOTES_INPUT, ON_ADD, RESET_INPUTS } from '../actions/types';

const INITIAL_STATE = { company: '', position: '', research: '', question: '', notes: '', onAdd: false };

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UPDATE_COMPANY_INPUT:
			return { ...state, company: action.payload };
		case UPDATE_POSITION_INPUT:
			return { ...state, position: action.payload };
		case UPDATE_RESEARCH_INPUT:
			return { ...state, research: action.payload };
		case UPDATE_QUESTION_INPUT:
			return { ...state, question: action.payload };
		case UPDATE_NOTES_INPUT:
			return { ...state, notes: action.payload };
		case RESET_INPUTS:
			return INITIAL_STATE;
		case ON_ADD: {
			return { ...state, onAdd: action.payload };
		}
		default:
			return state;
	}
}
