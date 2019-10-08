import React from "react";
import Aux from "../../../hoc/dumb";
const orderSummary = (props) => {
    const orderedIngredients = Object.keys(props.ingredients)
        .map((igkey) => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: "capitalize" }}>{igkey}</span>: {props.ingredients[igkey]}
                </li>);
        })
    return (
        <Aux>
            <h2>Your Order !</h2>
            <p>Your Burger have following ingredients !</p>
            <ul>
                {orderedIngredients}
            </ul>
            <p>Continue To Checkout?</p>
        </Aux>
    );
}

export default orderSummary;