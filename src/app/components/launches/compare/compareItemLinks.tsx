import { Box, Chip, Stack } from '@mui/material'
import { GetLaunchById_launch } from '@services/launches/__generated__/GetLaunchById'

interface CompareItemLinksProps {
  launch: GetLaunchById_launch
}

const CompareItemLinks: React.FC<CompareItemLinksProps> = ({ launch }): JSX.Element => {
  return (
    <Box sx={{ p: 2 }}>
      <Stack
        direction='row'
        spacing={1}>
        {launch.links?.wikipedia && (
          <a
            href={launch.links?.wikipedia}
            target='_blank'>
            <Chip
              label='wikipedia'
              size='small'
            />
          </a>
        )}
        {launch.links?.article_link && (
          <a
            href={launch.links?.article_link}
            target='_blank'>
            <Chip
              label='Article'
              size='small'
            />
          </a>
        )}
        {launch.links?.video_link && (
          <a
            href={launch.links?.video_link}
            target='_blank'>
            <Chip
              color='error'
              label='Youtube'
              size='small'
            />
          </a>
        )}
      </Stack>
    </Box>
  )
}

export default CompareItemLinks
