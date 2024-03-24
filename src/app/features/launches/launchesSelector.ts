import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store'
const selectLaunches = (state: RootState) => state.launches

export const selectCompareEnabled = createSelector(selectLaunches, launches => launches.compareEnabled)

export const selectSelectedLaunchesIds = createSelector(selectLaunches, launches => launches.selectedLaunchesIds)

export const selectFilter = createSelector(selectLaunches, launches => launches.filter)

export const selectEnergyConsumptions = createSelector(selectLaunches, launches => launches.energyConsumptions)

export const selectIsLaunchSelectedToCompare = createSelector(
  selectLaunches,
  (_, id) => id,
  (launches, id) => launches?.selectedLaunchesIds?.some((launchId: string) => launchId === id),
)
