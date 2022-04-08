import React, { useEffect } from "react";
import M from "materialize-css";

const IngredientDetail = ({ ingredient }) => {
    useEffect(() => {
       M.AutoInit();
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

export default IngredientDetail;