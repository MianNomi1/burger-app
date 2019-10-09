import React from "react";
import SideDrawerLogo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = () => {
    return (
        <div className="SideDrawer">
            <SideDrawerLogo height="11%" />
            <NavigationItems />
        </div>
    );
}

export default SideDrawer;