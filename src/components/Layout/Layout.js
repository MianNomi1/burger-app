import React from "react";
import Aux from "../../hoc/dumb";
import ToolBar from "../Navigation/Toolbar/ToolBar";
const layout = (props) => (
    <Aux>
        <ToolBar />
        <main className="Layout-content">
            {props.children}
        </main>
    </Aux>
);

export default layout;