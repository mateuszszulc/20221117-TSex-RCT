import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '',
	email: ''
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logInUser: (state, action) => {
			const [name] = action.payload.split('@')
			state.name = name;
			state.email = action.payload;
		},
		logOutUser: (state) => {
			state.name = '';
			state.email = '';
		}
	},
})

export const { logInUser, logOutUser } = userSlice.actions

export const selectUser = (state) => {
	const { name, email } = state.user;
	return { name, email }
};
export const selectIsAuth = (state) => Boolean(state.user.name && state.user.email);

export default userSlice.reducer
