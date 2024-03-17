import { useState } from "react";
import "./App.css";
import Cooking from "./components/Cooking/Cooking";
import Recipes from "./components/Recipes/Recipes";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  const [wantCooks, setWantCooks] = useState([]);
  const [currentCooks, setCurrentCooks] = useState([]);

  const [countTime, setCountTime] = useState(0);
  const [countCalories, setCountCalories] = useState(0);

  const handleWantCook = (id, recipe) => {
    const newWantCooks = [...wantCooks, recipe];

    const isExist = wantCooks.find((item) => item.recipe_id === id);
    if (!isExist) {
      setWantCooks(newWantCooks);
    }
  };

  const handlePreparing = (id, preparing, preparing_time, calories) => {
    const newCurrentCooks = [...currentCooks, preparing];
    setCurrentCooks(newCurrentCooks);

    const remainingWantCook = wantCooks.filter(
      (wantCookItem) => wantCookItem.recipe_id !== id
    );
    setWantCooks(remainingWantCook);

    setCountTime(preparing_time + countTime);
    setCountCalories(calories + countCalories);
  };
  return (
    <>
      <Header></Header>

      <Banner></Banner>

      <div className="mt-12">
        <h2 className="text-4xl font-semibold text-center mb-6">Our Recipes</h2>
        <p className="text-[#150B2B99] md:w-10/12 mx-auto text-center">
          Indulge in a symphony of flavors with Our Recipes. From savory
          classics to innovative creations, discover culinary delights that will
          tantalize your taste buds and inspire your inner chef.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Recipes handleWantCook={handleWantCook}></Recipes>
        <Cooking
          wantCooks={wantCooks}
          handlePreparing={handlePreparing}
          currentCooks={currentCooks}
          countTime={countTime}
          countCalories={countCalories}
        ></Cooking>
      </div>
    </>
  );
}

export default App;
