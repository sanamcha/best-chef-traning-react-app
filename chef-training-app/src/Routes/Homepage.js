import React, { useState, useEffect } from "react";
import Meals from "../components/Meals";
import { getRandomMeals } from "../Api";
import { mealData as latestMeals } from "../Api";
import { isEmpty } from "../common/helper";
import LoadingSpinner from "../common/LoadingSpinner";


const Homepage = () => {
    const [ meals, setMeals ] = useState([]);
    const [ mealData ] = useState(latestMeals)


    useEffect(() => {
        results();
    }, []);

    const results = async () => {
        const meals = await getRandomMeals();
        console.log(getRandomMeals);
        setMeals(meals);
    }
   
   
    // if(!meals) return <LoadingSpinner />
    
    return (
        <div>
            <h1>Home page..</h1>
            <div>
                <h4>
                    Best Meals
                </h4>
                <div>
                    <Meals meals={ mealData } />
                </div>
            </div>

            { isEmpty(meals) ? (
                <LoadingSpinner />
            ) : (
                <>
                <h4>Random Meals:</h4>
                <div>
                    <Meals meals={meals} />
                </div>
                </>
            )}
        </div>
    );
}

export default Homepage;
