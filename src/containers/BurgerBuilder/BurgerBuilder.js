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
import * as actions from "../../store/actions/index";

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        showSpinner: false,
    };

    componentDidMount() {
        this.props.onInitIngredients();
    }
    updatePurchaseAble(ingredients) {
        const sum = Object.keys(ingredients).map(item => {
            return ingredients[item];
        }).reduce((i, j) => {
            return i + j;
        }, 0);
        return (sum > 0)

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

        let burger = this.props.error ? <p>Ingredients could not be fetched !</p> : <Spinner />
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
        ings: state.burger.ingredients,
        price: state.burger.totalPrice,
        error: state.burger.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngrediantAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngrediantRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));