// redux/reducers/UserReducer.js
const INITIAL_STATE = { name:'Pedro Dias' };

export default (state = INITIAL_STATE, action) => {
	const { type, params } = action;
	switch (type) {
		case 'SET_NAME':
			return { name: params };
		default:
			return state;
	}
};

