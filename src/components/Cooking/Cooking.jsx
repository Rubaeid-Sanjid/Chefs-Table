import PropTypes from 'prop-types';
import WantCook from '../WantCook/WantCook';

const Cooking = ({wantCooks}) => {

    return (
        <div>
            <h2 className='text-2xl border-b-2 pb-3 text-center'>Want to cook: {wantCooks.length}</h2>
            <div className='flex my-3'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>

            {
                wantCooks.map((wantCookItem, idx) =><WantCook key={idx} wantCookItem={wantCookItem}></WantCook>)
            }
            
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
    wantCooks: PropTypes.object
};

export default Cooking;