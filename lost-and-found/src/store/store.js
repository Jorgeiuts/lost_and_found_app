import { configureStore } from '@reduxjs/toolkit'
import { lostObjectsSlice } from './lost_objects/lostObjectsSlice'

export const store = configureStore({
  reducer: {
    lostObjects: lostObjectsSlice.reducer
  },
})