import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { UPDATE_COMPANY_INPUT, UPDATE_POSITION_INPUT, UPDATE_RESEARCH_INPUT,
		 UPDATE_QUESTION_INPUT, UPDATE_NOTES_INPUT, ON_ADD, RESET_INPUTS } from './types';


export const updateCompany = (company) => {
	return {
		type: UPDATE_COMPANY_INPUT,
		payload: company
	};
};

export const updatePosition = (position) => {
	return {
		type: UPDATE_POSITION_INPUT,
		payload: position
	}
};

export const updateResearch = (research) => {
	return {
		type: UPDATE_RESEARCH_INPUT,
		payload: research
	}
};

export const updateQuestion = (question) => {
	return {
		type: UPDATE_QUESTION_INPUT,
		payload: question
	}
};

export const updateNotes = (notes) => {
	return {
		type: UPDATE_NOTES_INPUT,
		payload: notes
	}
};

export const onAdd = (company, position, research, question, notes) => async(dispatch) => {
	const currentUser = await axios('/api/current_user');

	const response = await fetch('/dashboard/add/submit', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			company,
			position,
			research,
			question,
			notes,
			_id: currentUser.data._id,
		})
	});

	dispatch({
		type: ON_ADD,
		payload: response.ok
	});
};

export const resetInputs = () => {
	return {
		type: RESET_INPUTS,
		payload: true
	}
};
