
import PropTypes from 'prop-types';

const WantCook = ({wantCookItem, handlePreparing}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = wantCookItem;

    return (
        <div className='flex justify-between my-3'>
            <h3>{recipe_id}</h3>
            <h3>{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
            <button onClick={() => handlePreparing(recipe_id, wantCookItem)} className='btn bg-[#0BE58A] rounded-3xl'>Preparing</button>
        </div>
    );
};

WantCook.propTypes = {
    wantCookItem: PropTypes.object,
    handlePreparing: PropTypes.func
};

export default WantCook;