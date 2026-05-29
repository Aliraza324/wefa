import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commandOpen: false,
  selectedPlan: 'growth',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCommandOpen: (state, action) => {
      state.commandOpen = action.payload
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload
    },
  },
})

export const { setCommandOpen, setSelectedPlan } = uiSlice.actions
export const selectCommandOpen = (state) => state.ui.commandOpen
export const selectSelectedPlan = (state) => state.ui.selectedPlan
export default uiSlice.reducer
