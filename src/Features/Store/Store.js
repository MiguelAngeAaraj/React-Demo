import { configureStore, addListener } from '@reduxjs/toolkit'
import { ThemeSlice } from '../Slices/ThemeSlice'
import { GymSlice } from '../Api/ApiSlice'
import { DetailSlice } from '../Slices/Details'
export const Store = configureStore({
  reducer: {
    [GymSlice.reducerPath]: GymSlice.reducer,
    Theme: ThemeSlice.reducer,
    Details: DetailSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GymSlice.middleware),
})

addListener(Store.dispatch)
