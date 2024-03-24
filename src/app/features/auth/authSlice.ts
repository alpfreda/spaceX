import { createSlice } from '@reduxjs/toolkit'

export const mockUser = {
  id: 1,
  name: 'John Doe',
  role: 'admin',
  viewLaunches: [
    '5eb87cd9ffd86e000604b32a',
    '5eb87d35ffd86e000604b37a',
    '5eb87d37ffd86e000604b37c',
    "5eb87ce3ffd86e000604b336",
    "5eb87ce4ffd86e000604b337",
    "5eb87ce4ffd86e000604b338",
    "5eb87ce8ffd86e000604b33c",
    "5eb87ceaffd86e000604b33d",
    "5eb87ceaffd86e000604b33e",
    "5eb87cecffd86e000604b33f",
    "5eb87ceeffd86e000604b341",
    "5eb87cefffd86e000604b342",
    "5eb87cf0ffd86e000604b343",
    "5eb87cf2ffd86e000604b344",
    "5eb87cf3ffd86e000604b345",
    "5eb87cf5ffd86e000604b346",
    "5eb87cf6ffd86e000604b347",
    "5eb87cf8ffd86e000604b348",
    "5eb87cf9ffd86e000604b349",
    "5eb87cfaffd86e000604b34a",
    "5eb87cfdffd86e000604b34c",
    "5eb87cfeffd86e000604b34d",
    "5eb87cfeffd86e000604b34e"
  ],
}

interface AuthState {
  user: typeof mockUser
}

const initialState: AuthState = {
  user: mockUser,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
