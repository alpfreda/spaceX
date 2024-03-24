import { Box, Stack, Typography } from '@mui/material'
import { GetLaunchById_launch } from '@services/launches/__generated__/GetLaunchById'

export interface CompareItemPrimaryInfoProps {
  launch: GetLaunchById_launch
  energyConsumption: number
}

const CompareItemPrimaryInfo: React.FC<CompareItemPrimaryInfoProps> = ({ launch, energyConsumption }): JSX.Element => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'>
        <Typography
          gutterBottom
          variant='h5'
          sx={{ textOverflow: 'ellipsis', height: 35, overflow: 'hidden' }}
          component='div'>
          {launch.mission_name}
        </Typography>
        <Typography
          gutterBottom
          color='green'
          variant='h6'
          component='div'>
          {energyConsumption.toString().slice(0, 7)}
        </Typography>
      </Stack>

      <Typography
        color='text.secondary'
        sx={{ height: 100, overflow: 'hidden' }}
        variant='body2'>
        {launch.details?.slice(0, 200)}
      </Typography>
    </Box>
  )
}

export default CompareItemPrimaryInfo
