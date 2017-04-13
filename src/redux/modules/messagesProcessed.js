const LOAD = 'messages-processed/LOAD';
const LOAD_SUCCESS = 'messages-processed/LOAD_SUCCESS';
const LOAD_FAIL = 'messages-processed/LOAD_FAIL';

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
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
    	console.log('messages processed error',action.error);
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

export function getMessages(promise) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise
  };
}
