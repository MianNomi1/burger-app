import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>
    </ul>
);

export default NavigationItems;