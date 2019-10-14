import React, { Component } from "react";
import Button from "../../../components/UI/Buttons/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
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
                this.setState({ showSpinner: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ showSpinner: false });
            })

    }
    render() {
        let form = (<form>
            <Input inputtype="input" type="text" name="name" placeholder="Your name" />
            <Input inputtype="input" type="email" name="email" placeholder="Your email" />
            <Input inputtype="input" type="text" name="street" placeholder="Street" />
            <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={this.orderHandler}> ORDER</Button>
        </form>);
        if (this.state.showSpinner) {
            form = <Spinner />
        }
        return (<div className="ContactData">
            <h3>Enter your Contact Data !</h3>
            {form}
        </div>);
    }
}

export default ContactData;