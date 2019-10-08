import React from "react";
import Aux from "../../../hoc/dumb";
import Button from "../../UI/Buttons/Button";
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
            <Button btnType="Danger" clicked={props.cancelOrder}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.continueOrder}>
                CONTINUE
            </Button>
        </Aux>
    );
}

export default orderSummary;