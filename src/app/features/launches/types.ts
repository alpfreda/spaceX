import { GetLaunchesVariables } from '@services/launches/__generated__/getLaunches'

export interface LaunchesState {
  filter: GetLaunchesVariables
  compareEnabled: boolean
  selectedLaunchesIds: string[]
  energyConsumptions: EnergyConsumption[]
}

export interface EnergyConsumption {
  id: string
  name: string
  value: number
}
