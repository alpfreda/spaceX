import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store'
const selectAuth = (state: RootState) => state.auth

export const selectViewLaunchesIds = createSelector(selectAuth, auth => auth.user.viewLaunches)
