import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  Data: {},
}

export const DetailSlice = createSlice({
  name: 'Detail',
  initialState,
  reducers: {
    onSetId(state, action) {
      state.id = action.payload
    },
    onSearchData(state, action) {
      console.log(state.id)
      state.Data = action.payload.find((data) => data.id === state.id)
    },
  },
})

export const { onSetId, onSearchData } = DetailSlice.actions
