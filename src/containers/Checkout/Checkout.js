import React, { Component } from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "../../containers/Checkout/ContactData/ContactData";
import { Route } from "react-router-dom";
class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let params of query.entries()) {
            if (params[0] === 'price') {
                price = params[1];
            }
            else {
                ingredients[params[0]] = +params[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }
    cancelOrderHandler = () => {
        this.props.history.goBack();
    }
    continueOrderHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                    cancelOrder={this.cancelOrderHandler}
                    continueOrder={this.continueOrderHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />)} />
            </div>
        );
    }


}

export default Checkout;