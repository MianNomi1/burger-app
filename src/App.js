import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import './App.css';
import Checkout from "../src/containers/Checkout/Checkout";
import Orders from "../src/containers/Orders/Orders";
import Auth from "../src/containers/Auth/Auth";
import Logout from "../src/containers/Auth/logout";

class App extends Component {
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

export default App;
