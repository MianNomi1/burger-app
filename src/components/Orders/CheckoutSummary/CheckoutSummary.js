import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Buttons/Button";
const checkoutSummary = (props) => {
    return (<div className="CheckoutSummary">
        <h1>We hope it tastes Well !</h1>
        <div style={{ width: '300px', margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        <Button
            btnType='Danger'
            clicked={props.cancelOrder}>CANCEL</Button>
        <Button
            btnType='Success'
            clicked={props.continueOrder}>CONTINUE</Button>
    </div>);
}

export default checkoutSummary;