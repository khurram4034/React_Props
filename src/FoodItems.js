import React from 'react';
import Food from './Food';
import './FoodItems.css';


function FoodItems() {
    return (
        <div className='foodsItems'>
            <Food 
            foodImg= "https://www.recipetineats.com/wp-content/uploads/2020/11/Pasta-alla-norma-eggplant-pasta_6.jpg?w=900"
            foodName='Pasta'
            />
            <Food 
            foodImg= "https://cheetay-prod-media.s3.amazonaws.com/production/media/images/partners/2020/09/pizza2.jpg"
            foodName='Piza'
            />
            <Food 
            foodImg= "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries--500x375.jpg"
            foodName='Fries'
            />
            <Food 
            foodImg= "https://5.imimg.com/data5/PQ/XG/GLADMIN-58136472/veg-burger-500x500.png"
            foodName='Burgar'
            />
            <Food 
            foodImg= "https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg"
            foodName='Cake'
            />
            <Food
            foodImg= "https://www.alphafoodie.com/wp-content/uploads/2018/05/00pancakecake-scaled.jpg"
            foodName='Pancake'
            />
        </div>
    )
}

export default FoodItems
