const GET_MESSAGES_PROCESSED = "GET_MESSAGES_PROCESSED";

export default function reducer (state = {}, action) {
	switch (action.type) {
		case GET_MESSAGES_PROCESSED:
			return {
				...state,
				messagesPromise: action.payload
			}
		default:
			return state;
	}
}

export function getMessages (payload) {
	return {
		type: GET_MESSAGES_PROCESSED,
		payload
	}
}