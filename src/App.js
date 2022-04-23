import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { DrinkCard } from './components/Card';
import { getDrinks } from './reducer/drinkSlice';

import './App.css'

function App() {
  const dispatch = useDispatch()
  const drinks = useSelector((state) => state.drinksReducer.drinks)

  useEffect(() => {
    dispatch(getDrinks());
  },[dispatch]);

  return (
    <div className='containerCards'>      
      {drinks.map((drink,index) => (
          <DrinkCard drink={drink} index={index}/>
      ))}
    </div>
  );
}

export default App;