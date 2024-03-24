import { Avatar, AvatarGroup } from '@mui/material'
import { GetLaunchById_launch } from '@services/launches/__generated__/GetLaunchById'

interface CompareItemImagesProps {
  launch: GetLaunchById_launch
}

const CompareItemImages: React.FC<CompareItemImagesProps> = ({ launch }): JSX.Element => {
  const renderAvatars = () => {
    return launch.links?.flickr_images?.map((flickrImage, index) => (
      <Avatar
        key={index}
        src={flickrImage || ''}
      />
    ))
  }

  return <AvatarGroup sx={{ p: 1, height: 45 }}>{renderAvatars()}</AvatarGroup>
}

export default CompareItemImages
