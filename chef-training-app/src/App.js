import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import MealId from "./Routes/MealId";
import Search from "./Routes/Search";
import IngredientId from "./Routes/IngredientId";
import RandomMeal from "./Routes/RandomMeal";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import './App.css';



const App = () => {
    return (
 
      <BrowserRouter>
        <NavBar />
      <main>
        <Switch>
          <Route exact path="/"><Homepage /></Route>
          <Route exact path="/meal/:id"><MealId /></Route>
          <Route exact path="/random"><RandomMeal /></Route>
          <Route exact path="/categories"><Categories /></Route>
          <Route path="/search/q=:searchFor"><Search /></Route>
          
          <Route exact path="/ingredients/:id"><IngredientId /></Route>
          
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
