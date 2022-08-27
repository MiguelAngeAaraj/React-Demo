import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const GymSlice = createApi({
  reducerPath: 'Gym',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://exercisedb.p.rapidapi.com' }),
  endpoints: (builder) => ({}),
})
