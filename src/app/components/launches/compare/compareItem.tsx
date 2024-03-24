import { Card, Divider, Grid } from '@mui/material'
import { GetLaunchById_launch } from '@services/launches/__generated__/GetLaunchById'
import CompareItemImages from './compareItemImages'
import CompareItemInfo from './compareItemInfo'
import CompareItemLinks from './compareItemLinks'
import CompareItemPrimaryInfo from './compareItemPrimaryInfo'

export interface CompareItemProps {
  launch: GetLaunchById_launch
  energyConsumption: number
}

const CompareItem: React.FC<CompareItemProps> = ({ launch, energyConsumption }): JSX.Element => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}>
      <Card variant='outlined'>
        <CompareItemPrimaryInfo
          launch={launch}
          energyConsumption={energyConsumption}
        />
        <Divider />
        <CompareItemInfo launch={launch} />
        <Divider />
        <CompareItemImages launch={launch} />
        <Divider />
        <CompareItemLinks launch={launch} />
      </Card>
    </Grid>
  )
}

export default CompareItem
