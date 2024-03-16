import PropTypes from 'prop-types';

const Cooking = ({wantCooks}) => {

    const {recipe_name, preparing_time, calories} = wantCooks;

    return (
        <div>
            <h2 className='text-2xl border-b-2 pb-3 text-center'>Want to cook: {wantCook.length}</h2>
            <div className='flex justify-between my-3'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>
            {
                wantCooks.map(wantCookItem => )
            }
            <div className='flex justify-between my-3'>
                <h3>{recipe_name}</h3>
                <h3>{preparing_time}</h3>
                <h3>{calories}</h3>
            </div>
            
            <h2 className='text-2xl border-b-2 pb-3 text-center'>Currently cooking: </h2>
            <div className='flex justify-between my-3'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    wantCook: PropTypes.object
};

export default Cooking;