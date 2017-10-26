import axios from 'axios';
import { UPDATE_RESEARCH_INPUT, ON_ADD_RESEARCH,
		 UPDATE_QUESTION_INPUT, RESET_INPUTS } from './types';


export const retrieveResearch = () => {

}

// update the text for the research add modal
export const updateResearch = (research) => {
	return {
		type: UPDATE_RESEARCH_INPUT,
		payload: research
	}
};

export const addResearch = (research) => async(dispatch) => {
	const currentUser = await axios('/api/current_user');

	const response = await fetch('/dashboard/edit/add/research', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			research,
			_id: currentUser.data._id,
		})
	});

	dispatch({
		type: ON_ADD_RESEARCH,
		payload: response.ok
	})
};
