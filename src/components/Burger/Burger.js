import React from 'react';
import style from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { array } from 'prop-types';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => { ////we'll have an array of two elements [,]
            return [...Array(props.ingredients[igKey] )].map( (_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            } );
        } )
        .reduce((arr, el) => {//allows to transform an array into something else 
            return arr.concat(el)//it will return the updated arguments
        }, []);//initial value of this array is empty
        //with this the array is flatened and we can see the length of the array to know the sum
        //of the ingredients

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>;
        }

    return (
        <div className= {style.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
