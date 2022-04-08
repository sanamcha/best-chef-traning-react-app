import React, {useState} from "react";
import {Link} from "react-router-dom";
 


const CategoriesData = [
    {
    idCategory: "1",
    strCategory: "Beef",
    strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
    },
    {
    idCategory: "2",
    strCategory: "Chicken",
    strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
    },
    {
    idCategory: "3",
    strCategory: "Cake",
    strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",

    },
    {
    idCategory: "4",
    strCategory: "Lamb",
    strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
    
    },
    {
    idCategory: "5",
    strCategory: "Taco",
    strCategoryThumb: "https://www.themealdb.com/images/category/miscellaneous.png",
    
    },
    {
    idCategory: "6",
    strCategory: "Pasta",
    strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
    },
    {
    idCategory: "7",
    strCategory: "Pork",
    strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
    },
    {
    idCategory: "8",
    strCategory: "Seafood",
    strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
    },
    {
    idCategory: "9",
    strCategory: "Side",
    strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
    
    },
    {
    idCategory: "10",
    strCategory: "Starter",
    strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
    
    },
    {
    idCategory: "11",
    strCategory: "Vegan",
    strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
    
    },
    {
    idCategory: "12",
    strCategory: "Vegetarian",
    strCategoryThumb: "https://www.themealdb.com/images/category/vegetarian.png",
    
    },
    {
    idCategory: "13",
    strCategory: "Breakfast",
    strCategoryThumb: "https://www.themealdb.com/images/category/breakfast.png",
    
    },
    {
    idCategory: "14",
    strCategory: "Goat",
    strCategoryThumb: "https://www.themealdb.com/images/category/goat.png",

    },
    ];


const Categories = () => {
    
    return (
        <div>{CategoriesData.map(c=>(
            <div>
               <Link to = {`/search/q=${c.strCategory}?`}>{c.strCategory}</Link>
                <img src={c.strCategoryThumb}
                    alt={c.strCategory} />
             
                     
            </div>       
        ))}     
        </div> 
    );
}

export default Categories;