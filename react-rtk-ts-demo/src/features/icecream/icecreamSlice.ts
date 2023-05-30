import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from "../cake/cakeSlice.js"

type initialStateType = {
	numOfIceCreams: number
}

const initialState: initialStateType = {
	numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		ordered: state => {
			state.numOfIceCreams--
		},
		restocked: (state, action: PayloadAction<number>) => {
			state.numOfIceCreams += action.payload
		}
	},
	/*extraReducers: {
		['cake/ordered']: (state) => {
			state.numOfIceCreams--
		},
	},*/
	extraReducers: (builder) => {
		builder.addCase(cakeOrdered, state => {
			state.numOfIceCreams--
		})
	}
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions