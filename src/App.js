import React from 'react'
import './App.css';
import Client from './Client';
import Dinner from './Dinner';
import FoodItems from './FoodItems';

function App() {
  return (
    <div className="App">
      <h1>React Js Props (For Fetching Data)</h1>
      <Dinner dishName="'Niharri'" sweetName="'Kheer'" />
      <Dinner dishName="'Baryani'" sweetName="'Jaleeb'i" />
      <Dinner dishName="'Khari'" sweetName="'Gajar ka Halwa'" />
        <br /> 
      <h2>SHOP WITH US</h2>
      <Client />
      <br /> 

      <h2>Top Food Items</h2>
      <FoodItems />

 
    </div>
  );
}

export default App;
