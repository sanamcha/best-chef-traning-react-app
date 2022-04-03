import React from "react";
import IngredientId from "./IngredientId";

const Ingredients =({ ingredients }) => {
    return (
        <div>
            {ingredients.map((ingredient, i) => (
                <IngredientId key={i} ingredient ={ ingredient } />
            ))}
        </div>
    )
}

export default Ingredients;