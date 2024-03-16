import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

  return (
    <div>
      <div>
        <h2 className="text-4xl font-semibold text-center mb-6">Our Recipes</h2>
        <p className="text-[#150B2B99] w-10/12 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
            mauris aenean neque.
        </p>
      </div>
      <div className="grid grid-cols-2">
        {
            recipes.map((recipe, idx) => <Recipe key={idx} recipe={recipe}></Recipe>)
        }
      </div>
    </div>
  );
};

Recipes.propTypes = {};

export default Recipes;
