import { createSlice } from '@reduxjs/toolkit'

export const stateLoading = createSlice({
  name: 'openModald',
  initialState: {
    state: false
  },
  reducers: {
    loadingOn: (state) => {
      state.state = true
    },
    loadingOff: (state) => {
      state.state = false
    }
  }
})

export const { loadingOn, loadingOff } = stateLoading.actions

export default stateLoading.reducer
