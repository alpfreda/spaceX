import { useQuery } from '@apollo/client'
import LaunchesCompareButton from '@components/launches/list/launchesCompareButton'
import LaunchesFilter from '@components/launches/list/launchesFilter'
import LaunchesList from '@components/launches/list/launchesList'
import Loader from '@components/shared/loader'
import { selectViewLaunchesIds } from '@features/auth/launchesSelector'
import { selectFilter } from '@features/launches/launchesSelector'
import { setFilter, setSelectedLaunchesIds, toggleCompareEnabled } from '@features/launches/launchesSlice'
import { Container, Typography } from '@mui/material'
import { GetLaunches_launches, GetLaunchesVariables } from '@services/launches/__generated__/getLaunches'
import { GET_LAUNCHES } from '@services/launches/query'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LaunchesListPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const viewLaunchIds: string[] = useSelector(selectViewLaunchesIds)
  const filter = useSelector(selectFilter)
  const { loading, data, refetch } = useQuery(GET_LAUNCHES, { variables: filter })
  const launches =
    data?.launches.filter((launch: GetLaunches_launches) => viewLaunchIds.some(viewLaunchId => viewLaunchId === launch.id)) ?? []

  useEffect(() => {
    refetch(filter)
  }, [refetch, filter])

  const onToggleCompareButton = (): void => {
    dispatch(toggleCompareEnabled())
  }

  const onCheckItem = (id: string | null): void => {
    if (id) {
      dispatch(setSelectedLaunchesIds(id))
    }
  }

  const onChangeFilter = (newFilter: GetLaunchesVariables): void => {
    dispatch(setFilter(newFilter))
  }

  return (
    <>
      <Typography
        variant='h3'
        textAlign='center'
        color='white'
        gutterBottom>
        Launches
      </Typography>
      <Loader isLoading={loading} />
      <Container maxWidth='lg'>
        <LaunchesCompareButton onToggleCompareEnabled={onToggleCompareButton} />
        <LaunchesFilter onChangeFilter={onChangeFilter} />
        <LaunchesList
          launches={launches}
          onCheckItem={onCheckItem}
        />
      </Container>
    </>
  )
}

export default LaunchesListPage
