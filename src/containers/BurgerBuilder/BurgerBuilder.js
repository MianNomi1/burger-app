import React, { Component } from "react";
import Aux from "../../hoc/dumb";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const Ingredient_Prices = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.5,
    bacon: 0.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseAble: false,
        purchasing: false
    };

    updatePurchaseAble(ingredients) {
        const sum = Object.keys(ingredients).map(item => {
            return ingredients[item];
        }).reduce((i, j) => {
            return i + j;
        }, 0);
        this.setState({ purchaseAble: sum > 0 });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        this.updatePurchaseAble(updatedIngredients);
        const priceAddition = Ingredient_Prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        this.updatePurchaseAble(updatedIngredients);
        const priceDeduction = Ingredient_Prices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    }

    handlePurchaseAble = () => {
        this.setState({ purchasing: true });
    }
    handlerCancelModal = () => {
        this.setState({ purchasing: false });
    }
    handlerCancelOrder = () => {
        this.setState({ purchasing: false });
    }
    handlerConOrder = () => {
        alert("Continue");
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelBackdrop={this.handlerCancelModal}>
                    <OrderSummary ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        show={this.state.purchasing}
                        cancelOrder={this.handlerCancelOrder}
                        continueOrder={this.handlerConOrder}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler}
                    ingredientdeleted={this.removeIngredientHandler}
                    info={disabledInfo}
                    purchaseAble={this.state.purchaseAble}
                    price={this.state.totalPrice}
                    purchase={this.handlePurchaseAble} />

            </Aux>
        );
    }
}

export default BurgerBuilder;