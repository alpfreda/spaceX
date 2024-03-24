import { selectCompareEnabled, selectSelectedLaunchesIds } from '@features/launches/launchesSelector'
import { Clear, Compare, CompareArrows } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

interface LaunchesCompareButtonProps {
  onToggleCompareEnabled: () => void
}

const LaunchesCompareButton: React.FC<LaunchesCompareButtonProps> = ({ onToggleCompareEnabled }): JSX.Element => {
  const compareEnabled = useSelector(selectCompareEnabled)
  const selectedLaunchesIds = useSelector(selectSelectedLaunchesIds)

  return (
    <Stack
      direction='row'
      justifyContent='end'
      marginBottom='1rem'>
      <Button
        variant='contained'
        color={compareEnabled ? 'error' : 'primary'}
        startIcon={compareEnabled ? <Clear /> : <Compare />}
        onClick={onToggleCompareEnabled}>
        {compareEnabled ? 'Cancel' : 'Compare Launches'}
      </Button>
      {compareEnabled && (
        <Button
          sx={{ marginLeft: '1rem' }}
          variant='contained'
          color='success'
          component={Link}
          disabled={selectedLaunchesIds.length === 0}
          to='/compare'
          startIcon={<CompareArrows />}>
          Go To Compare
        </Button>
      )}
    </Stack>
  )
}

export default LaunchesCompareButton
