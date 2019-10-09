import React from "react";
import Aux from "../../hoc/dumb";
import ToolBar from "../Navigation/Toolbar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
const layout = (props) => (
    <Aux>
        <ToolBar />
        <SideDrawer />
        <main className="Layout-content">
            {props.children}
        </main>
    </Aux>
);

export default layout;