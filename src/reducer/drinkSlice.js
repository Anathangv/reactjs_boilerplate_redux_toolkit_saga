import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drinks: [],
}

export const drinkSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    getDrinks: (state) => {},

    getDrinksSuccess: (state, action) => {
      state.drinks = action.payload
    },

    getDrinksError: (state) => {},
  }
})

export const { getDrinks, getDrinksSuccess, getDrinksError } = drinkSlice.actions

export default drinkSlice.reducer