import React from 'react';
import './Food.css';

function Food({foodImg, foodName}) {
    return (
        <div className='food'>
            <img className='food__img1'
            src= {foodImg}
            alt='pics'
            />
            <h3>{foodName}</h3>
        </div>
    )
}

export default Food
