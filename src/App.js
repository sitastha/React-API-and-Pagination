import React, { useEffect, useState } from "react";
import Food from "./Food";
import "./App.css";

const App = () => {
  const APP_ID = "34a126b7";
  const APP_KEY = "549065740d5daea81b239b33aa3f5ef7";

  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [submission, setSubmission] = useState("chicken");

  useEffect(() => {
    getFoods();
  }, [submission]);

  const getFoods = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${submission}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setFoods(data.hits);
    console.log(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setSubmission(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          search{" "}
        </button>
      </form>
      <div className="recepies">
        {foods.map((food) => (
          <Food
            key={food.recipe.label}
            title={food.recipe.label}
            calorie={food.recipe.calories}
            images={food.recipe.image}
            ingredient={food.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
