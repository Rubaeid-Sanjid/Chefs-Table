
import PropTypes from 'prop-types';

const WantCook = ({wantCookItem}) => {
    const {recipe_name, preparing_time, calories, idx} = wantCookItem;
    console.log(wantCookItem);
    return (
        <div className='flex my-3'>
            <h3>{idx}</h3>
            <h3>{recipe_name}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
            <button className='btn bg-[#0BE58A] rounded-3xl'>Preparing</button>
        </div>
    );
};

WantCook.propTypes = {
    wantCookItem: PropTypes.object
};

export default WantCook;