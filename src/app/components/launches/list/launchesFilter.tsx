import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import { GetLaunchesVariables } from '@services/launches/__generated__/getLaunches'

interface LaunchesFilterProps {
  onChangeFilter: (filter: GetLaunchesVariables) => void
}

const years = [2000, 2005, 2010, 2015, 2020]

const LaunchesFilter: React.FC<LaunchesFilterProps> = ({ onChangeFilter }): JSX.Element => {
  const onClickYear = (year: number) => {
    onChangeFilter({ find: { launch_year: year.toString() } })
  }

  const renderYearsButtons = () =>
    years.map(year => (
      <Button
        key={year}
        size='small'
        onClick={() => onClickYear(year)}
        variant='contained'>
        {year}
      </Button>
    ))

  return (
    <Stack
      direction='row'
      justifyContent='start'
      alignItems='center'
      flexWrap='wrap'
      marginBottom='1rem'>
      <Typography
        gutterBottom
        color='#fff'
        component='div'
        marginRight='1rem'>
        Filter By:
      </Typography>
      <ButtonGroup
        variant='contained'
        color='primary'
        aria-label='Basic button group'>
        {renderYearsButtons()}
      </ButtonGroup>
    </Stack>
  )
}

export default LaunchesFilter
