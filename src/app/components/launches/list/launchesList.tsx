import { Grid } from '@mui/material'
import { GetLaunches_launches } from '@services/launches/__generated__/getLaunches'
import LaunchesItem from './launchesItem'

interface LaunchesListProps {
  launches: GetLaunches_launches[]
  onCheckItem: (id: string | null) => void
}

const LaunchesList: React.FC<LaunchesListProps> = ({ launches, onCheckItem }): JSX.Element => {
  return (
    <Grid
      container
      spacing={2}>
      {launches.map(launch => (
        <LaunchesItem
          key={launch.id}
          launch={launch}
          onCheck={onCheckItem}
        />
      ))}
    </Grid>
  )
}

export default LaunchesList
