import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const auction = action.payload
			const item = state.items.find(item => item.id === auction.id)
			if(item) {
				item.amount += 1
			} else {
				state.items.push({id: auction.id, amount: 1, auction})
			}
		}
	},
})

export const { addToCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsAmount = (state) => state.cart.items.map(i => i.amount).reduce((a, b) => a + b, 0);

export default cartSlice.reducer
