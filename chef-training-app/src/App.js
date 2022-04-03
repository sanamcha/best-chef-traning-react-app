import React from "react";
import { BrowserRouter } from "react-router-dom";
// import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Routes/Homepage";
import MealId from "./Routes/MealId";
import Search from "./Routes/Search";
import './App.css';



const App = () => {
    return (
 
      <BrowserRouter>

        {/* <NavBar /> */}
      <main>
        <Switch>
          <Route exact path="/"><Homepage /></Route>
          <Route exact path="/meal/:id"><MealId /></Route>
          <Route path="/search"><Search /></Route>
          {/* <Route exact path="/ingredients/:id"><Ingredients /></Route> */}
   
        </Switch>
      </main>
    </BrowserRouter>

  );
}

export default App;
