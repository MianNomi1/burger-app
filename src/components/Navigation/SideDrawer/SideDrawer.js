import React from "react";
import SideDrawerLogo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/dumb";
import BackDrop from "../../UI/BackDrop/BackDrop";

const SideDrawer = (props) => {
    let classes = ("SideDrawer ").concat("Close");
    if (props.open) {
        classes = ("SideDrawer ").concat("Open");
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={classes}>
                <SideDrawerLogo height="11%" />
                <NavigationItems />
            </div>
        </Aux>
    );
}

export default SideDrawer;