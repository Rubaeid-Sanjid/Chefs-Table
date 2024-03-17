import PropTypes from 'prop-types';

const CurrentCook = ({currentCooksItem}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = currentCooksItem;

    return (
        <div className='flex justify-between gap-3 items-center my-3 bg-[#28282808] p-3'>
            <h3>{recipe_id}</h3>
            <h3>{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
        </div>
    );
};

CurrentCook.propTypes = {
    currentCooksItem: PropTypes.object
};

export default CurrentCook;