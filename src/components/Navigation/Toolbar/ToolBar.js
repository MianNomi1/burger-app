import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
const toolbar = (props) => (
    <header className="ToolBar">
        <DrawerToggle clicked={props.toggleSideDrawer} />
        <Logo height="80%" />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;