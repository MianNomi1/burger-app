import React, { Component } from "react";
import Button from "../../../components/UI/Buttons/Button";
import axios from "../../../axios-orders";
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        showSpinner: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ showSpinner: true });
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Nouman",
                address: "test City",
                country: "Pakistan"
            },
            email: "miannomanch@gmail.com",
            deliveryMethod: "fastest"
        }
        axios.post("/orders.json", orders)
            .then(response => {
                this.setState({ showSpinner: false })
            })
            .catch(error => {
                this.setState({ showSpinner: false });
            })

    }
    render() {
        return (<div className="ContactData">
            <h3>Enter your Contact Data !</h3>
            <form>
                <input className="Input" type="text" name="name" placeholder="Your name" />
                <input className="Input" type="email" name="email" placeholder="Your email" />
                <input className="Input" type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}> ORDER</Button>
            </form>
        </div>);
    }
}

export default ContactData;