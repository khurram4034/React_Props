import React from 'react';
import './Product.css';

function Product({imge, name}) {
    return (
        <div>
            <img className='product__img1'
            src= {imge}
            alt='pics'
            />
            <h3>{name}</h3>
        </div>
    )
}

export default Product
