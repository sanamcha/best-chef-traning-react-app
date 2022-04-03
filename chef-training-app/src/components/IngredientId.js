import React, { useEffect } from "react";

const IngredientId = ({ ingredient }) => {
    useEffect(() => {

    }, []);

    return (
        <div>
            <img src={ ingredient.img }
                 alt ={ ingredient.name } />
            <p>{ ingredient.measure }</p>
            <p>{ ingredient.name }</p>
        </div>
    );
}

export default IngredientId;