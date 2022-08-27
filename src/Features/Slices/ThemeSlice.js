import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Theme: 'all',
}

export const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    onChangeTheme(state, action) {
      state.Theme = action.payload
    },
  },
})

export const { onChangeTheme } = ThemeSlice.actions
