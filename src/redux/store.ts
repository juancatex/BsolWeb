import { configureStore } from '@reduxjs/toolkit'
import stateModalStore from './features/stateModal'
import stateLoading from './features/stateLoading'
import stateSnackbar from './features/stateSnackbar'

export const Modalstore = configureStore({
  reducer: {
    stateModalStore,
    stateLoading,
    stateSnackbar
  }
})

export type RootState = ReturnType<typeof Modalstore.getState>
export type AppDispatch = typeof Modalstore.dispatch
