import "./styles.css"

export const DrinkCard = (props) =>{
  const {strDrinkThumb, idDrink, strCategory, strInstructions } = {...props.drink}

  return(
    <div className="container">
      <div className="imageArea">
        <img src={strDrinkThumb} alt="drink"/>
      </div>
      <div className="detailsArea">
        <h3>{idDrink}</h3>
        <h5>Category: {strCategory}</h5>
        <p>{strInstructions}</p>
      </div>
    </div>
  );
}