import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Meals from "../components/Meals";
import { getSearchByName } from "../Api";

const Search = () => {
  const [meals, setMeals] = useState([]);
  const [isEmpty, setIsEmpty] = useState([true]);
  let { searchFor } = useParams();

  useEffect(() => {
    result();
   
  }, []);

  const result = async () => {
    const data = await getSearchByName(searchFor);
    if (data) {
      setIsEmpty(false);
      return setMeals(data);
    }
  };

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
      <div>
        <Meals meals={meals} />
      </div>
    </div>
  );
};

export default Search;
