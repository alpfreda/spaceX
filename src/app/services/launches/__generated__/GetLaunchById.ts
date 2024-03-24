/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLaunchById
// ====================================================

export interface GetLaunchById_launch_rocket_rocket_mass {
  __typename: "Mass";
  kg: number | null;
}

export interface GetLaunchById_launch_rocket_rocket_payload_weights {
  __typename: "RocketPayloadWeight";
  id: string | null;
  kg: number | null;
}

export interface GetLaunchById_launch_rocket_rocket {
  __typename: "Rocket";
  company: string | null;
  mass: GetLaunchById_launch_rocket_rocket_mass | null;
  payload_weights: (GetLaunchById_launch_rocket_rocket_payload_weights | null)[] | null;
}

export interface GetLaunchById_launch_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket: GetLaunchById_launch_rocket_rocket | null;
}

export interface GetLaunchById_launch_links {
  __typename: "LaunchLinks";
  article_link: string | null;
  flickr_images: (string | null)[] | null;
  video_link: string | null;
  wikipedia: string | null;
}

export interface GetLaunchById_launch {
  __typename: "Launch";
  id: string | null;
  details: string | null;
  mission_name: string | null;
  launch_year: string | null;
  launch_date_utc: any | null;
  rocket: GetLaunchById_launch_rocket | null;
  links: GetLaunchById_launch_links | null;
}

export interface GetLaunchById {
  launch: GetLaunchById_launch | null;
}

export interface GetLaunchByIdVariables {
  id: string;
}
