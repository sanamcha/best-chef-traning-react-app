import React from "react";
import MealDetail from "./MealDetail";

const Meals = ({ meals }) => {
    return (
        <div>
            {meals.map((m => (
                <MealDetail  />
            )))}
        </div>
    );
}

export default Meals;