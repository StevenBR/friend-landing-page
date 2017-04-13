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
    	// console.log('success',action.result);   	
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
    	console.log('submit number error',action.error);
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
