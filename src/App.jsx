import { useState } from 'react'
import './App.css'
import Cooking from './components/Cooking/Cooking'
import Recipes from './components/Recipes/Recipes'

function App() {

  const [wantCooks, setWantCooks] = useState([]);
  const [currentCooks, setCurrentCooks] = useState([]);

  const handleWantCook = (recipe) =>{
    const newWantCooks = [...wantCooks, recipe];
    setWantCooks(newWantCooks);
  }

  const handlePreparing = (id, preparing) =>{
    const newCurrentCooks = [...currentCooks, preparing];
    setCurrentCooks(newCurrentCooks);

    const remainingWantCook = wantCooks.filter(wantCookItem => wantCookItem.recipe_id !== id);
    setWantCooks(remainingWantCook);
  }
  return (
    <>
      <div>
        <h2 className="text-4xl font-semibold text-center mb-6">Our Recipes</h2>
        <p className="text-[#150B2B99] w-10/12 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
            mauris aenean neque.
        </p>
      </div>
      
      <div className='flex gap-6'>
        <Recipes handleWantCook={handleWantCook}></Recipes>
        <Cooking wantCooks={wantCooks} handlePreparing={handlePreparing} currentCooks={currentCooks}></Cooking>
      </div>
    </>
  )
}

export default App
