import React from 'react';
import Product from './Product'
import './Client.css';

function Client() {
    return (
        <div className='client'>
    <Product 
      imge= "https://i.pinimg.com/originals/d0/f4/fc/d0f4fc818a35285642ba057436fc8720.jpg"
      name= "Hadia"
      />
    <Product 
      imge= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJ_F-1A3Xq8Utegml9B4dVtAiGSCdMwxM7w&usqp=CAU"
      name= "Nedia"
      />
    <Product 
      imge= "https://i.pinimg.com/originals/74/55/84/745584faf13c92dc1728fb076e604609.jpg"
      name= "Harim"
      />
          <Product 
      imge= "https://i.pinimg.com/originals/7e/77/ac/7e77ac82cea2566421ad9509a051b178.jpg"
      name= "Munaza"
      />
    <Product 
      imge= "https://i.pinimg.com/564x/7a/2d/d8/7a2dd833c7e784bda045ff5bacff0203.jpg"
      name= "Sadia"
      />
        </div>
    )
}

export default Client
