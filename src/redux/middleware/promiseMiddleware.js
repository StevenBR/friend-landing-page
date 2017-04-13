const promiseMiddleware = store => next => action => {
	if(isPromise(action.payload)) {
		action.payload.then(
			res => {
				action.payload = res;
				// console.log(action.payload);
				store.dispatch(action);
			}
		).catch(
			error => {
				console.log('REQUEST ERROR',error);
				const REQUEST_FAILURE = 'REQUEST_FAILURE';
				action.type = REQUEST_FAILURE;
				store.dispatch(action);
			}
		)
		return
	}
	next(action)

};

function isPromise (payload) {
	return payload && typeof payload.then === "function";
}

export {promiseMiddleware}