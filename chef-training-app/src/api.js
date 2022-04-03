import axios from 'axios';

const BASE_API = {
    mealDetails : "https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
    randomMeal : "https://www.themealdb.com/api/json/v1/1/random.php",
    mealCategories : "https://www.themealdb.com/api/json/v1/1/categories.php",
    searchByName : "https://www.themealdb.com/api/json/v1/1/search.php?s=",
    mealAreas : "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    ingredients : "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    byCategory : "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
    byArea : "https://www.themealdb.com/api/json/v1/1/filter.php?a=",
    filterByIngredient : "https://www.themealdb.com/api/json/v1/1/filter.php?i=",
    filterByCatagory : "https://www.themealdb.com/api/json/v1/1/filter.php?c=",
    image : "https://www.themealdb.com/images/ingredients"
}



    const getMealDetails =  async (id) => {
        const result = await fetch(`${BASE_API.mealDetails}${id}`);
        const data = await result.json();
        return data;
      };

    async function getSearchByName(meal) {
        const result = await fetch(`${BASE_API.searchByName}${meal}`);
        const data = await result.json();
        return data.meals;
    }  

    // async function getRandomMeals(){
    //     const result = await fetch(BASE_API.randomMeal);
    //     let data = await result.json();
    //     return data;
    // }

    const getRandomMeals = async () => {
        let randMeals = [];
        while(randMeals.length !== 10){
            let result = await fetch(BASE_API.randomMeal);
            let data = await result.json();
            let isDup = !!randMeals.find((meal) => JSON.stringify(meal) === JSON.stringify(data.meals[0]));
            if(!isDup) {
                randMeals.push(data.meals[0]);
            }
        }
        return randMeals;  
    }


    async function getAreas(){
        const result = await fetch(BASE_API.mealAreas);
        const data = result.json();
        return data.meals;
    }

    const getIngredientImage = (ingredient) => {
        const imgResult = `${BASE_API.image}/${ingredient}.png`;
        return imgResult;
    };

    async function getIngredient() {
        const result = await fetch(`${BASE_API.ingredients}`);
        const data = await result.json();
        
        return data.meals;
    }
    async function getFilterByIngredient(ingredientName) {
        const result = await fetch(`${BASE_API.filterByIngredient}${ingredientName}`);
        const data = await result.json();

        return data.meals;
    };


const mealData = [
    {
        
        idMeal: "52767",
        strMeal: "Bakewell tart",
        strDrinkAlternate: null,
        strCategory: "Dessert",
        strArea: "British",
        strMealThumb: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
        strTags: "Tart,Baking,Alcoholic",
        
        },
        {
        idMeal: "52792",
        strMeal: "Bread and Butter Pudding",
        strDrinkAlternate: null,
        strCategory: "Dessert",
        strArea: "British",
        
        strMealThumb: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
        strTags: "Pudding,Brunch",
        
        },
        {
        idMeal: "52803",
        strMeal: "Beef Wellington",
        strDrinkAlternate: null,
        strCategory: "Beef",
        strArea: "British",
        strMealThumb: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
        strTags: "Meat,Stew",
        },
        {
        idMeal: "52807",
        strMeal: "Baingan Bharta",
        strDrinkAlternate: null,
        strCategory: "Vegetarian",
        strArea: "Indian",
        
        strMealThumb: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
        strTags: "Spicy,Bun,Calorific",
        
        },
        {
        idMeal: "52812",
        strMeal: "Beef Brisket Pot Roast",
        strDrinkAlternate: null,
        strCategory: "Beef",
        strArea: "American",
        
        strMealThumb: "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
        strTags: "Meat",
        
        },
        {
        idMeal: "52824",
        strMeal: "Beef Sunday Roast",
        strDrinkAlternate: null,
        strCategory: "Beef",
        strArea: "British",
        strMealThumb: "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
        strTags: "MainMeal",
        },
]
export { 
    mealData,
    getMealDetails,
    getSearchByName,
    getRandomMeals,
    getAreas,
    getIngredientImage,
    getIngredient,
    getFilterByIngredient
 } 

// export default BASE_API;