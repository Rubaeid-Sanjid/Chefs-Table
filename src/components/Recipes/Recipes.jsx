import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 p-3 mt-5 w-10/12">
      {recipes.map((recipe, idx) => (
        <Recipe
          key={idx}
          recipe={recipe}
          handleWantCook={handleWantCook}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleWantCook: PropTypes.func,
};

export default Recipes;
