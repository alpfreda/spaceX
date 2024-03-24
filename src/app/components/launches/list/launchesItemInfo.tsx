import { ManageHistory, PrecisionManufacturing, RocketLaunch } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { GetLaunches_launches } from '@services/launches/__generated__/getLaunches'

interface LaunchesItemInfoProps {
  launch: GetLaunches_launches
}

const LaunchesItemInfo: React.FC<LaunchesItemInfoProps> = ({ launch }): JSX.Element => {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem
        alignItems='flex-start'
        sx={{ padding: 0 }}>
        <ListItemIcon sx={{ minWidth: '2rem', marginTop: '.25rem' }}>
          <RocketLaunch />
        </ListItemIcon>
        <ListItemText primary={launch.rocket?.rocket_name} />
      </ListItem>
      <ListItem
        alignItems='flex-start'
        sx={{ padding: 0 }}>
        <ListItemIcon sx={{ minWidth: '2rem', marginTop: '.25rem' }}>
          <PrecisionManufacturing />
        </ListItemIcon>
        <ListItemText primary={launch.rocket?.rocket?.company} />
      </ListItem>
      <ListItem
        alignItems='flex-start'
        sx={{ padding: 0 }}>
        <ListItemIcon sx={{ minWidth: '2rem', marginTop: '.25rem' }}>
          <ManageHistory />
        </ListItemIcon>
        <ListItemText primary={launch.launch_year} />
      </ListItem>
    </List>
  )
}

export default LaunchesItemInfo
