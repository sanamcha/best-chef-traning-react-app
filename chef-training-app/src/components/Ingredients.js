import React from "react";
import IngredientId from "./IngredientId";

const Ingredients =({ ingredients }) => {
    return (
        <div>
            {ingredients.map((ingredient, i) => (
                <IngredientId   />
            ))}
        </div>
    )
}

export default Ingredients;