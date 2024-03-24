import { selectEnergyConsumptions } from '@features/launches/launchesSelector'
import { EnergyConsumption } from '@features/launches/types'
import { Card, CardContent, Typography } from '@mui/material'
import { BarPlot, ChartsAxis, ChartsTooltip, ResponsiveChartContainer } from '@mui/x-charts'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

interface ChartData {
  labels: string[]
  data: number[]
}

export interface CompareChartProps {}

const CompareChart: React.FC<CompareChartProps> = (): JSX.Element => {
  const energyConsumptions: EnergyConsumption[] = useSelector(selectEnergyConsumptions)

  const chartData: ChartData = useMemo(() => {
    const labels: string[] = []
    const data: number[] = []

    energyConsumptions.forEach(({ name, value }: EnergyConsumption) => {
      labels.push(name)
      data.push(value)
    })

    return { labels, data }
  }, [energyConsumptions])

  return (
    <>
      {energyConsumptions.length > 0 && (
        <Card
          variant='outlined'
          sx={{ mt: 2 }}>
          <CardContent>
            <Typography
              color='text.secondary'
              gutterBottom>
              Energy Consumptions
            </Typography>
            <ResponsiveChartContainer
              xAxis={[{ scaleType: 'band', data: chartData.labels }]}
              series={[{ type: 'bar', data: chartData.data }]}
              height={300}>
              <BarPlot />
              <ChartsAxis />
              <ChartsTooltip />
            </ResponsiveChartContainer>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default CompareChart
