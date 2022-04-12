import React from "react";
import IngredientDetail from "./IngredientDetail";


const Ingredients =({ingredients}) => {
    
    return (
        <div className="row">
         
          {ingredients.map((ingredient, i) => 
            (
                <IngredientDetail key={i} ingredient ={ ingredient } />
            )
            )}
        </div>
    )
}

export default Ingredients;