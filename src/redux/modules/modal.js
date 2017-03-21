const SHOW_MODAL = 'SHOW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = {
	modalVisible: false
};

export default function reducer (state = initialState, action = {}) {
	
	switch (action.type) {
		case SHOW_MODAL:

			return {
				modalVisible: true,
				modalInfo: action.payload
			}
		case CLOSE_MODAL:
			return {
				modalVisible: false
			}
		default:
			return state;
	}
}

export function showModal (info) {
	// alert(info.label);
	return {
		type: SHOW_MODAL,
		payload: info
	}
}

export function closeModal () {
	return {
		type: CLOSE_MODAL
	}	
}


