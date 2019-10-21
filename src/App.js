import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import './App.css';
import Checkout from "../src/containers/Checkout/Checkout";
import Orders from "../src/containers/Orders/Orders";
import Auth from "../src/containers/Auth/Auth";
import Logout from "../src/containers/Auth/logout";
import { connect } from "react-redux";
import * as actions from "../src/store/actions/index";
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/logout" exact component={Logout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}
export default connect(null, mapDispatchToProps)(App);
