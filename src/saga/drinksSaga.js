import {call, put, takeEvery} from 'redux-saga/effects'
import { getDrinksSuccess } from '../reducer/drinkSlice'

function* getDrinksLoad(){
  const drinksObject = yield call(() => fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%")
    .then(response => response.json()));

  yield put(getDrinksSuccess(drinksObject.drinks));
}

function* drinkSaga(){
  yield takeEvery('drinks/getDrinks', getDrinksLoad);
  //drinks/getDrinks is the reducer(name property)/action that is listened for the saga
}

export default drinkSaga;