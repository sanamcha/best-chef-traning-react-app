const BASE_API = {
    mealDetails : "www.themealdb.com/api/json/v1/1/lookup.php?i=",
    randomMeal : "www.themealdb.com/api/json/v1/1/random.php",
    mealCategories : "www.themealdb.com/api/json/v1/1/categories.php",
    searchByName : "www.themealdb.com/api/json/v1/1/search.php?s=",
    mealAreas : "www.themealdb.com/api/json/v1/1/list.php?a=list",
    ingredients : "www.themealdb.com/api/json/v1/1/list.php?i=list",
    byCategory : "www.themealdb.com/api/json/v1/1/filter.php?c=",
    byArea : "www.themealdb.com/api/json/v1/1/filter.php?a=",
    filterByIngredient : "www.themealdb.com/api/json/v1/1/filter.php?i=",
    filterByCatagory : "www.themealdb.com/api/json/v1/1/filter.php?c=",
    image : "www.themealdb.com/images/ingredients"

}

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