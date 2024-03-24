import { ManageHistory, PrecisionManufacturing, RocketLaunch } from '@mui/icons-material'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { GetLaunchById_launch } from '@services/launches/__generated__/GetLaunchById'

interface CompareItemInfoProps {
  launch: GetLaunchById_launch
}

const CompareItemInfo: React.FC<CompareItemInfoProps> = ({ launch }): JSX.Element => {
  return (
    <List sx={{ p: 2, width: '100%' }}>
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

export default CompareItemInfo
