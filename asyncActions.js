const redux = require('redux')
const {createStore} = require("redux");

const initialState = {
	loading: false,
	users: [],
	error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUESTED
	}
}

const fetchUsersSuccess = users => {
	return {
		type: FETCH_USERS_SUCCEEDED,
		payload: users,
	}
}

const fetchUsersFailure = error => {
	return {
		type: FETCH_USERS_ERROR,
		payload: error,
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			}
		case FETCH_USERS_SUCCEEDED:
			return {
				loading: false,
				users: action.payload,
				error: ''
			}
		case FETCH_USERS_ERROR:
			return {
				loading: false,
				users: [],
				error: action.payload
			}
	}
}

const store = createStore(reducer)


