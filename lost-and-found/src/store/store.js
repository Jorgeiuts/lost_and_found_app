import { configureStore } from '@reduxjs/toolkit'
import { lostObjectsSlice } from './lost_objects'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth:        authSlice.reducer,
    lostObjects: lostObjectsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* additional middleware if needed */)
})