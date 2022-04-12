import React, {useEffect, useState}from "react";
import Meals from "../components/Meals";
import LoadingSpinner from "../common/LoadingSpinner";
import {isEmpty} from "../common/Helper.js";
import { getRandomMeals } from "../Api";

const RandomMeal = () => {
    const [ meals, setMeals ] = useState([]);
    useEffect(() => {
       result();
    }, []) 

    const result = async () => {
        const meals = await getRandomMeals();
        console.log(getRandomMeals());
        setMeals(meals);
    }
        
    
    return (
        <div>
            <h4 className="randomMeals">Our Popular Meals:</h4>
            { isEmpty(meals) ? (
                <LoadingSpinner />
            ) : (
            <div className="container">
                <Meals meals={meals} />
            </div>
            )}
        </div>
    );

}
export default RandomMeal;

