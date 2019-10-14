import React, { Component } from "react";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
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
            </div>
        );
    }


}

export default Checkout;