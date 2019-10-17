import React, { Component } from "react";
import Aux from "../../hoc/dumb";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import { connect } from "react-redux";
import * as BurgerBuilderActions from "../../store/actions/index";

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        showSpinner: false,
        error: false
    };

    componentDidMount() {
        // axios.get("https://react-burger-app-84dcd.firebaseio.com/ingredients.json").then(response => {
        //     this.setState({ ingredients: response.data })
        // }).catch(error => {
        //     this.setState({ error: error });
        // })
    }
    updatePurchaseAble(ingredients) {
        const sum = Object.keys(ingredients).map(item => {
            return ingredients[item];
        }).reduce((i, j) => {
            return i + j;
        }, 0);
        return (sum > 0)

    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const newCount = oldCount + 1;
    //     const updatedIngredients = { ...this.state.ingredients };
    //     updatedIngredients[type] = newCount;
    //     this.updatePurchaseAble(updatedIngredients);
    //     const priceAddition = Ingredient_Prices[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = priceAddition + oldPrice;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    // }
    removeIngredientHandler = (type) => {
        // const oldCount = this.state.ingredients[type];
        // if (oldCount <= 0) {
        //     return;
        // }
        // const newCount = oldCount - 1;
        // const updatedIngredients = { ...this.state.ingredients };
        // updatedIngredients[type] = newCount;
        // this.updatePurchaseAble(updatedIngredients);
        // const priceDeduction = Ingredient_Prices[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice - priceDeduction;
        // this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

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
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients could not be fetched !</p> : <Spinner />
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ingredientAdded={this.props.onIngrediantAdded}
                        ingredientdeleted={this.props.onIngrediantRemoved}
                        info={disabledInfo}
                        purchaseAble={this.updatePurchaseAble(this.props.ings)}
                        price={this.props.price}
                        purchase={this.handlePurchaseAble} />
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.props.ings}
                price={this.props.price}
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

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngrediantAdded: (ingName) => dispatch(BurgerBuilderActions.addIngredient(ingName)),
        onIngrediantRemoved: (ingName) => dispatch(BurgerBuilderActions.removeIngredient(ingName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));