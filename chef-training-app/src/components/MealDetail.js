import React from "react";
import { Link } from "react-router-dom";

const MealDetail = ({ meal }) => {

    return (
        <div>
            <div>
            <img src = { meal.strMealThumb }
                alt = { meal.strMeal } />
            </div>
            <div>
                <Link to={`/meal/${meal.idMeal}`}>View Recipe </Link>
            </div>
            <div>
                <span>{meal.strMeal}</span>
                <p><span>Category:</span>{ meal.strCategory }</p>
                <p>
                    <span>Area: </span>{ meal.strArea }
                </p>
                <p>
                    <span>Tags:</span>{meal.strTags}
                </p>
            </div>
            
        </div>
    )
}

export default MealDetail;