import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Meals from "../components/Meals";
import { getSearchByName } from "../Api";

const Search = () => {
  const [meals, setMeals] = useState([]);
  const [isEmpty, setIsEmpty] = useState([true]);
  let { searchFor } = useParams();

 

  

  return (
    <div>
      <div>
        {meals && !isEmpty > 0 ? (
          <p>
            <span>{`${meals.length} meals found for "${searchFor}"`}</span>
          </p>
        ) : (
          <div>
            <span>{`No meals found for "${searchFor}"`}</span>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Search;
