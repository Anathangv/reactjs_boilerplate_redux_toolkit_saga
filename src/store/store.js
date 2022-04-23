import { configureStore } from '@reduxjs/toolkit'
import drinkSlice from '../reducer/drinkSlice'
import createSagaMiddleware from '@redux-saga/core'
import drinkSaga from '../saga/drinksSaga'

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    drinksReducer: drinkSlice
  },
  middleware: [saga]
});

saga.run(drinkSaga)