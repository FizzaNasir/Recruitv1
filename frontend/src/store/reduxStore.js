import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const objSlice = createSlice({
  name: 'obj',
  initialState: { obj: null },
  reducers: {
    save(state, action) {
      console.log('in save method')
      state.obj = action.payload
    },
  },
})

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticatebd = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
})

const store = configureStore({
  reducer: { confirmObj: objSlice.reducer, auth: AuthSlice.reducer },
})

export const objActions = objSlice.actions
export const authActons = AuthSlice.actions
export default store
