import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleWantCook}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

  return (
    <div>
      <div className="grid grid-cols-2">
        {
            recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe} handleWantCook={handleWantCook}></Recipe>)
        }
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleWantCook: PropTypes.func
};

export default Recipes;
