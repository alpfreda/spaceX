import CompareChart from '@components/launches/compare/compareChart'
import { selectSelectedLaunchesIds } from '@features/launches/launchesSelector'
import { setEnergyConsumptionsEmpty } from '@features/launches/launchesSlice'
import { KeyboardBackspace } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Container, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CompareDetail from './compareDetail'

const LaunchesLComparePage = (): JSX.Element => {
  const dispatch = useDispatch()
  const selectedLaunchIds: string[] = useSelector(selectSelectedLaunchesIds)

  useEffect(() => {
    return () => {
      dispatch(setEnergyConsumptionsEmpty())
    }
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <Typography
        variant='h3'
        textAlign='center'
        color='white'
        gutterBottom>
        Compare Launches
      </Typography>
      <Button
        sx={{ mb: 2 }}
        variant='contained'
        component={Link}
        to='/'
        startIcon={<KeyboardBackspace />}>
        Back to list
      </Button>
      {selectedLaunchIds.length > 0 ? (
        <Grid
          container
          spacing={2}>
          {selectedLaunchIds.map(launchId => (
            <CompareDetail
              key={launchId}
              launchId={launchId}
            />
          ))}
        </Grid>
      ) : (
        <Alert severity='warning'>
          <AlertTitle>Error</AlertTitle>
          For comparison, please select a launch first.
        </Alert>
      )}

      <CompareChart />
    </Container>
  )
}

export default LaunchesLComparePage
