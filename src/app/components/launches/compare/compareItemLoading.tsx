import { Card, CardContent, CardHeader, Divider, Grid, Skeleton, Stack } from '@mui/material'

interface CompareItemLoadingProps {}

const CompareItemLoading: React.FC<CompareItemLoadingProps> = (): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}>
      <Card>
        <CardHeader
          title={
            <Skeleton
              animation='wave'
              height={20}
              width='80%'
              style={{ marginBottom: 6 }}
            />
          }
          subheader={
            <Skeleton
              animation='wave'
              height={10}
              width='40%'
            />
          }
        />
        <Skeleton
          sx={{ height: 110 }}
          animation='wave'
          variant='rectangular'
        />

        <CardContent>
          <>
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 15 }}
            />
            <Skeleton
              animation='wave'
              height={20}
              style={{ marginBottom: 15 }}
            />
          </>
          <Divider />
          <Stack
            flexDirection='row'
            justifyContent='end'
            gap={1}
            py={1}>
            <Skeleton
              variant='circular'
              width={40}
              height={40}
            />
            <Skeleton
              variant='circular'
              width={40}
              height={40}
            />
            <Skeleton
              variant='circular'
              width={40}
              height={40}
            />
          </Stack>
          <Divider />
          <Stack
            flexDirection='row'
            justifyContent='end'
            gap={1}
            pt={2}>
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem', width: '30%' }}
            />
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem', width: '30%' }}
            />
            <Skeleton
              variant='text'
              sx={{ fontSize: '1rem', width: '30%' }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CompareItemLoading
