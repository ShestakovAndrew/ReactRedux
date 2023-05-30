const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
	numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		ordered: state => {
			state.numOfIceCreams--
		},
		restocked: (state, action) => {
			state.numOfIceCreams += action.payload
		}
	}
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions