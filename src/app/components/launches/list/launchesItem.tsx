import { selectCompareEnabled, selectIsLaunchSelectedToCompare } from '@features/launches/launchesSelector'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { GetLaunches_launches } from '@services/launches/__generated__/getLaunches'
import { useSelector } from 'react-redux'
import LaunchesItemCheckbox from './launchesItemCheckbox'
import LaunchesItemInfo from './launchesItemInfo'

interface LaunchesItemProps {
  launch: GetLaunches_launches
  onCheck: (id: string | null) => void
}

const LaunchesItem: React.FC<LaunchesItemProps> = ({ launch, onCheck }): JSX.Element => {
  const compareEnabled = useSelector(selectCompareEnabled)
  const isSelectedLaunch = useSelector(state => selectIsLaunchSelectedToCompare(state, launch.id))

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}>
      <Card
        sx={{
          width: '100%',
          background: '#000000',
          border: '2px solid',
          borderColor: isSelectedLaunch ? '#2196f3' : '#333333',
          position: 'relative',
          '&:hover': {
            backgroundColor: '#ffffff',
            transition: 'ease all .5s',
            borderColor: '#eeeeee',
            '& *': {
              color: '#333',
            },
          },
        }}>
        <CardContent>
          {compareEnabled && (
            <LaunchesItemCheckbox
              checked={isSelectedLaunch}
              onChange={() => onCheck(launch.id)}
            />
          )}
          <Typography
            gutterBottom
            variant='h3'
            noWrap
            sx={{ fontSize: '1.5rem' }}
            component='div'>
            {launch.mission_name}
          </Typography>
          <LaunchesItemInfo launch={launch} />
          <Typography
            sx={{ fontSize: '1rem', color: '#999' }}
            component='div'>
            Launch Date: {new Date(launch.launch_date_utc).toLocaleDateString('en-US')}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default LaunchesItem
