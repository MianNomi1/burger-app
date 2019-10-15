import React, { Component } from "react";
import Button from "../../../components/UI/Buttons/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            },
        },
        showSpinner: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ showSpinner: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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
    inputChangeHandler = (event, inputIdentifier) => {
        const updateOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updateOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updateOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updateOrderForm });
    }
    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (<form>
            {formElementArray.map(formElement => (
                <Input key={formElement.id} elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    change={(event) => this.inputChangeHandler(event, formElement.id)} />
            ))}
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