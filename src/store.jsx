import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './components/Slices/UserSlice'

export const store = configureStore({
  reducer: {
    userDetails:UserSlice
  },
})