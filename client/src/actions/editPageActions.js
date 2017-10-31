import axios from 'axios';
import { UPDATE_RESEARCH_INPUT, ON_ADD_RESEARCH, RETRIEVE_RESEARCH,
		 UPDATE_QUESTION_INPUT, RESET_INPUTS, RESET_RESEARCH_INPUT } from './types';


export const retrieveResearch = (companyName, position) => async(dispatch) => {
	const currentUser = await axios('/api/current_user');
	if (currentUser) {
		if(currentUser.data.collections[companyName] == undefined) dispatch({ type: RETRIEVE_RESEARCH, payload: null });
		else dispatch({ type: RETRIEVE_RESEARCH, payload: currentUser.data.collections[companyName][position].research, });
	}
}

// update the text for the research add modal
export const updateResearch = (research) => {
	return {
		type: UPDATE_RESEARCH_INPUT,
		payload: research
	}
};

// reset the text for the research add modal
export const resetResearch = () => {
	return {
		type: RESET_RESEARCH_INPUT,
	}
};

export const addResearch = (research, company, positionName) => async(dispatch) => {
	const currentUser = await axios('/api/current_user');

	const response = await fetch('/dashboard/edit/add/research', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			research,
			company,
			positionName,
			_id: currentUser.data._id,
		})
	});

	dispatch({
		type: ON_ADD_RESEARCH,
		payload: response.ok
	})
};
