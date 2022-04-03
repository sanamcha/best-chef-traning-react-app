import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import { isEmpty } from "../common/helper";
import ReactPlayer from "react-player/youtube";
import LoadingSpinner from "../common/LoadingSpinner";
import { getIngredientImage, getMealDetails } from "../Api";


const MealId = () => {
    const [ meal, setMeal ] = useState({});
    const [ ingredients, setIngredients ] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const getMeal = async () => {
            // console.debug("getMeal=", getMeal)

            let mealId = await getMealDetails(id);
            setMeal(mealId.meals[0]);
            getData();
            // console.debug("setMeal=", setMeal)
        };
        getMeal();
    }, [meal]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getData = async () => {
        let data = [];
        let i = 1;
        for(i; i<=20; i++) {
            const item = {
                name : meal[`strIngredient${i}`],
                measure : meal[`strMeasure${i}`],
                image : getIngredientImage(meal[`strIngredient${i}`]), 
            };
            data.push(item);
            i += 1;
        }
        return setIngredients(data);
    };

    return (
        <div className= "container">
            <div>
                {!isEmpty(meal) ? (
                    <div>
                        <h4>{meal.strMeal}</h4>
                        <img src={meal.strMealThumb} 
                             alt={`${meal.strMeal} meal`} />
                    </div>
                ) : (
                    <LoadingSpinner />
                )} 
            </div>
            <div>
                <div>
                    <h4> Ingredients </h4>
                    <div>
                        <Ingredients ingredients={ ingredients } />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4> Instructions </h4>
                    <p> {meal.strInstructions} </p>
                </div>
            </div>
           
        </div>
    )
}

export default MealId;