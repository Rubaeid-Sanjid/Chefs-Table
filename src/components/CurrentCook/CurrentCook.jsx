import PropTypes from 'prop-types';

const CurrentCook = ({currentCooksItem, idx}) => {
    const {recipe_name, preparing_time, calories} = currentCooksItem;

    return (
        <div className='flex justify-between gap-6 items-center my-3 bg-[#28282808] p-3'>
            <h3>{idx + 1}</h3>
            <h3>{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
        </div>
    );
};

CurrentCook.propTypes = {
    currentCooksItem: PropTypes.object,
    idx: PropTypes.number
};

export default CurrentCook;