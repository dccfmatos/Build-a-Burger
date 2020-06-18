import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES =  {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0
        }, 
        totalPrice: 4

    }

    addIngredientHandler = (type) => {
        //update ingredients
         const oldCount = this.state.ingredients[type]; //what is the old ingredient count for the given type?
         const updatedCount = oldCount + 1;//calculate the updated count
         const updatedIngredients = {//state should be updated in an immutable way
            ...this.state.ingredients//use spread operator to distribute the properties of the old array into the new object we are creating
        };
        updatedIngredients[type] = updatedCount;//acces the type and set the count
        
        //update the price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

    }

    removeIngredientHandler = (type) => {


    }


    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    }

};


export default BurgerBuilder;