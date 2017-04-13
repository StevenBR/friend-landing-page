// const GET_MESSAGES_PROCESSED = "GET_MESSAGES_PROCESSED";

// export default function reducer (state = {}, action) {
// 	switch (action.type) {
// 		case GET_MESSAGES_PROCESSED:
// 			return {
// 				...state,
// 				messagesPromise: action.payload
// 			}
// 		default:
// 			return state;
// 	}
// }

// export function getMessages (payload) {
// 	return {
// 		type: GET_MESSAGES_PROCESSED,
// 		payload
// 	}
// }

const LOAD = 'redux-example/LOAD';
const LOAD_SUCCESS = 'redux-example/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:    	
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
    	console.log('ho error',action.error);
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

export function getMessages(promise) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise
  };
}
