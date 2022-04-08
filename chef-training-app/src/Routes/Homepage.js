import React, { useState, useEffect } from "react";
import Meals from "../components/Meals";
import MealData from "../db";


import "../App.css";

const Homepage = () => {
    
    return (
        <div>
            <div>
                <h4>
                     The Best Meal Collection
                </h4>
                
            </div>
       
            <div>
                <Meals meals={ MealData } />
            </div>
          
        </div>
    );
}

export default Homepage;
