import { gql } from '@apollo/client'

export const GET_LAUNCH_BY_ID = gql`
  query GetLaunchById($id: ID!) {
    launch(id: $id) {
      id
      details
      mission_name
      launch_year
      launch_date_utc
      rocket {
        rocket_name
        rocket {
          company
          mass {
            kg
          }
          payload_weights {
            id
            kg
          }
        }
      }
      links {
        article_link
        flickr_images
        video_link
        wikipedia
      }
    }
  }
`

export const GET_LAUNCHES = gql`
  query GetLaunches($find: LaunchFind) {
    launches(find: $find) {
      id
      mission_name
      launch_year
      launch_date_utc
      rocket {
        rocket_name
        rocket {
          company
        }
      }
    }
  }
`
