const INITIAL_SUBMIT = 'INITIAL_SUBMIT';
const SUBMISSION_SUCCESSFUL = 'SUBMISSION_SUCCESSFUL';
const SUBMISSION_FAILED = 'SUBMISSION_FAILED';

export default function reducer (state={}, action) {
	switch (action.payload) {
		case INITIAL_SUBMIT:
			return {
				...state,
				numberPromise: action.payload
			}
		default:
			return state
	}
}

export function submitNumber (payload) {
	console.log(payload);
	return {
		type: INITIAL_SUBMIT,
		payload
	}
}
