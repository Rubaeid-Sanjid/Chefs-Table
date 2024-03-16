import PropTypes from "prop-types";
import { AiOutlineFire } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";

const Recipe = ({ recipe }) => {

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={recipe_image}
            alt={`${recipe_name}`}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-centerr">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="border-b-2 pb-5 text-[#878787]">{short_description}</p>
          <div className="border-b-2 pb-5">
            <h3 className="font-medium mb-2">Ingredients: {ingredients.length}</h3>
            {
                ingredients.map((ingredient, idx) => <li className="ml-3 text-[#878787]" key={idx}>{ingredient}</li>).slice(0, 4)
            }
          </div>
          <div className="items-center text-[#282828CC] flex gap-2 mb-2">
            <CiClock2 /> 
            <h3>{preparing_time}</h3>
            <AiOutlineFire /> 
            <h3>{calories}</h3>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#0BE58A] rounded-3xl">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;
