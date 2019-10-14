import React, { Component } from "react";
import Aux from "../../hoc/dumb";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
const Ingredient_Prices = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.5,
    bacon: 0.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseAble: false,
        purchasing: false,
        showSpinner: false,
        error: false
    };

    componentDidMount() {
        axios.get("https://react-burger-app-84dcd.firebaseio.com/ingredients.json").then(response => {
            this.setState({ ingredients: response.data })
        }).catch(error => {
            this.setState({ error: error });
        })
    }
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
        // this.setState({ showSpinner: true });
        // const orders = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Nouman",
        //         address: "test City",
        //         country: "Pakistan"
        //     },
        //     email: "miannomanch@gmail.com",
        //     deliveryMethod: "fastest"
        // }
        // axios.post("/orders.json", orders)
        //     .then(response => {
        //         this.setState({ showSpinner: false, purchasing: false })
        //     })
        //     .catch(error => {
        //         this.setState({ showSpinner: false, purchasing: false });
        //     })
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: "/checkout",
            search: '?' + queryString
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients could not be fetched !</p> : <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls ingredientAdded={this.addIngredientHandler}
                        ingredientdeleted={this.removeIngredientHandler}
                        info={disabledInfo}
                        purchaseAble={this.state.purchaseAble}
                        price={this.state.totalPrice}
                        purchase={this.handlePurchaseAble} />
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                show={this.state.purchasing}
                cancelOrder={this.handlerCancelOrder}
                continueOrder={this.handlerConOrder} />
        }
        if (this.state.showSpinner) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} cancelBackdrop={this.handlerCancelModal}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default ErrorHandler(BurgerBuilder, axios);