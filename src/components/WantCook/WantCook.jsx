
import PropTypes from 'prop-types';

const WantCook = ({wantCookItem, handlePreparing, idx}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = wantCookItem;

    return (
        <div className='flex justify-between gap-3 items-center my-3 bg-[#28282808] p-3'>
            <h3>{idx + 1}</h3>
            <h3>{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
            <button onClick={() => handlePreparing(recipe_id, wantCookItem, preparing_time, calories)} className='btn bg-[#0BE58A] rounded-3xl'>Preparing</button>
        </div>
    );
};

WantCook.propTypes = {
    wantCookItem: PropTypes.object,
    handlePreparing: PropTypes.func,
    idx: PropTypes.number
};

export default WantCook;