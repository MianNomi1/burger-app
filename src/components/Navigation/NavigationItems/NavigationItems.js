import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" >Burger Builder</NavigationItem>
        {props.isAuth ? <NavigationItem link="/orders" >Orders</NavigationItem> : null}
        {props.isAuth ? <NavigationItem link="/logout" >LOGOUT</NavigationItem> : <NavigationItem link="/auth" >AUTHENTICATE</NavigationItem>}

    </ul>
);

export default NavigationItems;