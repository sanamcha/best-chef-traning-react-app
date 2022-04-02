import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MealApi from "./Api";
import Homepage from "./components/Homepage";
import './App.css';



function App() {
  const[isLoading, setIsLoading] = useState(true);
  const [mealsId, setMealsId] = useState([]);
  const[meals, setMeals] = useState([])
  const[ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function getLatestMeal(){
      let mealsId = await MealApi.getMealDetails();
      let meals = await MealApi.getRandomMeals();
      let ingredients = await MealApi.getIngredient();
      setMealsId(mealsId);
      setMeals(meals);
      setIngredients(ingredients);
      setIsLoading(false);
    }
    getLatestMeal();
  }, []);

  if( isLoading ) {
    return <p> Loading.......</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/meal/:id">
              <MealDetail />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            
            <Route exact path="/ingredients/:id">
              <Ingredients />
            </Route>  
          
            <Route>
              <p>Sorry... I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
