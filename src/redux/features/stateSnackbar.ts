import { createSlice } from '@reduxjs/toolkit'

export const stateSnackbar = createSlice({
  name: 'openModald',
  initialState: {
    state: false,
    type: 'error'
  },
  reducers: {
    snackbarOn: (state) => {
      state.state = true
    },
    snackbarOff: (state) => {
      state.state = false
    },
    snackbarType: (state) => {
      state.type = 'error'
    }
  }
})

export const { snackbarOn, snackbarOff } = stateSnackbar.actions

export default stateSnackbar.reducer
