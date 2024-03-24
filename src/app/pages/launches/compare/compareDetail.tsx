import { useQuery } from '@apollo/client'
import CompareItem from '@components/launches/compare/compareItem'
import CompareItemLoading from '@components/launches/compare/compareItemLoading'
import { addEnergyConsumptions } from '@features/launches/launchesSlice'
import { GetLaunchById_launch_rocket_rocket_payload_weights } from '@services/launches/__generated__/GetLaunchById'
import { GET_LAUNCH_BY_ID } from '@services/launches/query'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

interface CompareDetailProps {
  launchId: string
}

const CompareDetail: React.FC<CompareDetailProps> = ({ launchId }): JSX.Element => {
  const dispatch = useDispatch()

  const { data: { launch } = {} } = useQuery(GET_LAUNCH_BY_ID, {
    variables: { id: launchId },
  })

  /**
   * To be honest, I couldn't understand exactly how to calculate, it can be wrong :(
   */
  const calculateEnergyConsumption = useMemo(() => {
    if (launch) {
      const rocketMass = launch.rocket.rocket.mass.kg
      const payloadMass =
        launch.rocket.rocket.payload_weights.find((weight: GetLaunchById_launch_rocket_rocket_payload_weights) => weight.id === 'leo')
          ?.kg || 0
      const totalMass = rocketMass + payloadMass
      const fuelMass = totalMass * 15

      const energyConsumption = fuelMass * 1.35e7 
      return energyConsumption
    }
    return 0
  }, [launch])

  useEffect(() => {
    if (launch && calculateEnergyConsumption) {
      dispatch(addEnergyConsumptions({ id: launch.id, name: launch.mission_name, value: calculateEnergyConsumption }))
    }
  }, [launch, calculateEnergyConsumption, dispatch])

  return launch ? (
    <CompareItem
      launch={launch}
      energyConsumption={calculateEnergyConsumption}
    />
  ) : (
    <CompareItemLoading />
  )
}

export default CompareDetail
