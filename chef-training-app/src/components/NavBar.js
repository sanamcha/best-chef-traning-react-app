import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const toSearchPage = () => {
    history.push(`/search/q=${search}`);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <nav>
        <div>
          <div>
            <Link to="/">
              <span>Chef Training App</span>
            </Link>
            
            <ul>
              <li>
                <form onSubmit={toSearchPage}>
                  <input
                    className="input-field"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for a Meal..."
                  />
                  <button className="btn btn-success"type="submit" >Go!</button>
                </form>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li><Link to="/random">
              Popular Meal
            </Link></li>
            <li>
                <Link to="/categories">Categories</Link>
              </li>
              
              {/* <li>
                <Link to="/ingredients">Ingredients List</Link>
              </li> */}
              
              <li>
                <Link to="/ingredients/0">Ingredients</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  ); 
};

export default NavBar;