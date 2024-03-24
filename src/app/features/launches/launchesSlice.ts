import { createSlice } from '@reduxjs/toolkit'
import { LaunchesState } from './types'

const initialState: LaunchesState = {
  compareEnabled: false,
  filter: { find: {} },
  selectedLaunchesIds: [],
  energyConsumptions: [],
}

const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    toggleCompareEnabled(state) {
      state.compareEnabled = !state.compareEnabled
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    setSelectedLaunchesIds(state, action) {
      const index = state.selectedLaunchesIds.indexOf(action.payload)
      if (index !== -1) {
        state.selectedLaunchesIds.splice(index, 1)
      } else {
        state.selectedLaunchesIds.push(action.payload)
      }
    },
    setEnergyConsumptionsEmpty(state) {
      state.energyConsumptions = []
    },
    addEnergyConsumptions(state, action) {
      state.energyConsumptions.push(action.payload)
    },
  },
})

export const { toggleCompareEnabled, setFilter, setSelectedLaunchesIds, setEnergyConsumptionsEmpty, addEnergyConsumptions } =
  launchesSlice.actions
export default launchesSlice.reducer
