const redux = require('redux')
const produce = require('immer').produce

const initialState = {
	name: 'Андрей',
	address: {
		street: 'Артёма',
		city: 'Йошкар-Ола',
		state: 'Марий Эл'
	},
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
	return {
		type: STREET_UPDATED,
		payload: street,
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case STREET_UPDATED:
			/*return {
				...state,
				address: {
					...state.address,
					street: action.payload,
				},
			}*/
			return produce(state, (draft) => {
				draft.address.street = action.payload
			})
		default: {
			return state
		}
	}
}

const store = redux.createStore(reducer)
console.log('Initial Create ', store.getState())

const unsubscribe = store.subscribe(() => {
	console.log('Updated State ', store.getState())
})

store.dispatch(updateStreet('Баумана'))

unsubscribe()
