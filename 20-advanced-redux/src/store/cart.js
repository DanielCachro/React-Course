import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	isOpen: true,
	items: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCart(state) {
			state.isOpen = !state.isOpen
		},
		addToCart(state, action) {
			const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
			if (existingItemIndex === -1) {
				state.items.push(action.payload)
			} else {
				state.items[existingItemIndex].qty += 1
			}
		},
		changeItemQty(state, action) {
			const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
			if (action.payload.qty !== 0) {
				state.items[itemIndex].qty = action.payload.qty
			} else {
				state.items.splice(itemIndex, 1)
			}
		},
	},
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
