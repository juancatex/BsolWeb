import { createSlice } from '@reduxjs/toolkit'

export const stateModal = createSlice({
  name: 'openModald',
  initialState: {
    open: false
  },
  reducers: {
    openModal: (state) => {
      state.open = true
    },
    closeModal: (state) => {
      state.open = false
    }
  }
})

export const { openModal, closeModal } = stateModal.actions

export default stateModal.reducer
