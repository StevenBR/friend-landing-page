// const INITIAL_SUBMIT = 'INITIAL_SUBMIT';
// const SUBMISSION_SUCCESSFUL = 'SUBMISSION_SUCCESSFUL';
// const SUBMISSION_FAILED = 'SUBMISSION_FAILED';

// export default function reducer (state={}, action) {
// 	switch (action.payload) {
// 		case INITIAL_SUBMIT:			
// 			return {
// 				...state,
// 				loading: true,
// 				numberPromise: action.payload
// 			}
// 		default:
// 			return state
// 	}
// }

// export function submitNumber (payload) {
// 	console.log('first',payload);
// 	return {
// 		type: INITIAL_SUBMIT,
// 		payload
// 	}
// }


const LOAD = 'submit-number/LOAD';
const LOAD_SUCCESS = 'submit-number/LOAD_SUCCESS';
const LOAD_FAIL = 'submit-number/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS: 
    	console.log('ho success',action.result);   	
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

// export function isLoaded(globalState) {
//   return globalState.info && globalState.info.loaded;
// }

export function submitNumber(promise) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise
  };
}
