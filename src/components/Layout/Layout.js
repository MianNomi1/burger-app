import React, { Component } from "react";
import Aux from "../../hoc/dumb";
import ToolBar from "../Navigation/Toolbar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    handleSideBarClosing = () => {
        this.setState({ showSideDrawer: false });
    }
    handleToggleSideDrawer = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    render() {
        return (
            <Aux>
                <ToolBar toggleSideDrawer={this.handleToggleSideDrawer} />
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.handleSideBarClosing} />
                <main className="Layout-content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;