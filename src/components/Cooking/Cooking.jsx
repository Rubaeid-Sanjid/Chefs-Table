import PropTypes from "prop-types";
import WantCook from "../WantCook/WantCook";
import CurrentCook from "../CurrentCook/CurrentCook";

const Cooking = ({
  wantCooks,
  handlePreparing,
  currentCooks,
  countTime,
  countCalories,
}) => {
  return (
    <div>
      <h2 className="text-2xl border-b-2 pb-3 text-center">
        Want to cook: {wantCooks.length}
      </h2>
      <div className="flex gap-10 my-3">
        <h3>Name</h3>
        <h3>Time</h3>
        <h3>Calories</h3>
      </div>

      <div>
        {wantCooks.map((wantCookItem, idx) => (
          <WantCook
            key={idx}
            wantCookItem={wantCookItem}
            handlePreparing={handlePreparing}
          ></WantCook>
        ))}
      </div>

      <h2 className="text-2xl border-b-2 pb-3 text-center">
        Currently cooking: {currentCooks.length}
      </h2>
      <div className="flex justify-between my-3">
        <h3>Name</h3>
        <h3>Time</h3>
        <h3>Calories</h3>
      </div>
      <div>
        {currentCooks.map((currentCooksItem, idx) => (
          <CurrentCook
            key={idx}
            currentCooksItem={currentCooksItem}
          ></CurrentCook>
        ))}
      </div>
      <div>
        <h3>Total Time = {countTime}</h3>
        <h3>Total Time = {countCalories}</h3>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  wantCooks: PropTypes.object,
  handlePreparing: PropTypes.func,
  currentCooks: PropTypes.object,
  countTime: PropTypes.number,
  countCalories: PropTypes.number,
};

export default Cooking;
