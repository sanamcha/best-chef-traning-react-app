import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import { isEmpty } from "../common/Helper";
import ReactPlayer from "react-player/youtube";
import LoadingSpinner from "../common/LoadingSpinner";
import { getIngredientImage, getMealDetails } from "../Api";


const MealId = () => {
    const [ meal, setMeal ] = useState({});
    const [ ingredients, setIngredients ] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const mealDetails = async () => {
            // console.debug("mealDetails=", mealDetails)

            let mealId = await getMealDetails(id);
            setMeal(mealId.meals[0]);
            getMoreData();
            
        };
        mealDetails();
    }, [meal]);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const getMoreData = async () => {
        let moreData = [];
        let i = 1;
        for(i; i<=10; i++) {
            const item = {
                name : meal[`strIngredient${i}`],
                measure : meal[`strMeasure${i}`],
                image : getIngredientImage(meal[`strIngredient${i}`]), 
            };
            moreData.push(item);
            i += 1;
        }
        return setIngredients(moreData);
    };

    return (
        <div className= "container">
            <div className="row">
                {!isEmpty(meal) ? (
                    <div className="col s12 ">
                        <h4 className="center-align">{meal.strMeal}</h4>
                        <img
                        src={meal.strMealThumb} 
                             alt={`${meal.strMeal} meal`} />
                    </div>
                ) : (
                    <LoadingSpinner />
                )} 
            </div>
            <div className="row">
                <div className="col s12">
                    <h4 className="center-align"> Ingredients </h4>
                    <div className="center-align">
                        <Ingredients ingredients={ ingredients } />
                    </div>
                </div>
            </div>
            <div className="row center-align">
                <div className="col s12">
                    <h4> Instructions </h4>
                    <p> {meal.strInstructions} </p>
                </div>
            </div>
            {meal.strYoutube && (
                <div className="row center-align">
                    <div className="col s12">
                        <h4>Training Video</h4>
                        <div className="player-wrapper">
                            <ReactPlayer 
                                className = "react-player"
                                url = { meal.strYoutube }
                                width="100%"
                                height="400px"
                                pip={true}
                                stopOnUnmount={false}
                            />
                        </div>
                    </div>
                    
                </div>
                
            )}
            <button className="btn btn-primary">Add Reviews....</button>
        </div>
    )
}

export default MealId;