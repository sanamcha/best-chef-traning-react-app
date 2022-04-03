import React from "react";
import MealDetail from "./MealDetail";

const Meals = ({ meals }) => {
    return (
        <div>
            {meals.map((m => (
                <MealDetail key={ m.idMeal } meal={m} />
            )))}
        </div>
    );
}

export default Meals;