/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LaunchFind } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetLaunches
// ====================================================

export interface GetLaunches_launches_rocket_rocket {
  __typename: "Rocket";
  company: string | null;
}

export interface GetLaunches_launches_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket: GetLaunches_launches_rocket_rocket | null;
}

export interface GetLaunches_launches {
  __typename: "Launch";
  id: string | null;
  mission_name: string | null;
  launch_year: string | null;
  launch_date_utc: any | null;
  rocket: GetLaunches_launches_rocket | null;
}

export interface GetLaunches {
  launches: (GetLaunches_launches | null)[] | null;
}

export interface GetLaunchesVariables {
  find?: LaunchFind | null;
}
