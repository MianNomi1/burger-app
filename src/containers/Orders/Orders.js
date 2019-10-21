import React, { Component } from "react";
import Order from "../../components/Orders/Order";
import axios from "../../axios-orders";
import { connect } from "react-redux";
class Orders extends Component {
    state = {
        orders: [],
        showSpinner: true
    }
    componentDidMount() {
        let ttoken = this.props.token;
        if (this.props.token === null) {
            ttoken = localStorage.getItem('token');
        }
        axios.get('/orders.json?auth=' + ttoken)
            .then(res => {
                const fetchedOrders = [];
                console.log(res.data)
                for (let key in res.data) {
                    console.log(key);
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ showSpinner: false, orders: fetchedOrders })
            })
            .catch(err => {
                this.setState({ showSpinner: false })
            })
    }
    render() {
        return (
            this.state.orders.map(order => (
                <Order key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}
export default connect(mapStateToProps)(Orders);