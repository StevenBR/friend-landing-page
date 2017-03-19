const SHOW_MODAL = 'SHOW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = {
	modalVisible: false
};

export default function reducer (state = initialState, action = {}) {
	
	switch (action.type) {
		case SHOW_MODAL:

			return {
				modalVisible: true
			}
		case CLOSE_MODAL:
			return {
				modalVisible: false
			}
		default:
			return state;
	}
}

export function showModal () {
	return {
		type: SHOW_MODAL
		}
}

export function closeModal () {
	return {
		type: CLOSE_MODAL
	}	
}


