import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { auctionsApi } from './services/auctions-api';
import cartReducer from './auction/cartSlice'
import userReducer from './auth/userSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer,
		[auctionsApi.reducerPath]: auctionsApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auctionsApi.middleware),
})

setupListeners(store.dispatch)
