import { Checkbox, Stack } from '@mui/material'

interface LaunchesItemCheckboxProps {
  checked: boolean
  onChange: () => void
}

const LaunchesItemCheckbox: React.FC<LaunchesItemCheckboxProps> = ({ checked, onChange }): JSX.Element => {
  return (
    <Stack
      position='absolute'
      right='0'
      top='0'>
      <Checkbox
        checked={checked}
        size='large'
        onChange={onChange}
      />
    </Stack>
  )
}

export default LaunchesItemCheckbox
