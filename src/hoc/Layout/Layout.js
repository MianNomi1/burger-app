import React, { Component } from "react";
import Aux from "../dumb";
import ToolBar from "../../components/Navigation/Toolbar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import {connect} from "react-redux";
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
                <ToolBar  isAuth ={this.props.isAuthenticated} toggleSideDrawer={this.handleToggleSideDrawer} />
                <SideDrawer 
                isAuth ={this.props.isAuthenticated}
                open={this.state.showSideDrawer}
                    closed={this.handleSideBarClosing} />
                <main className="Layout-content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
const mapStateToProps= state=>{
    return{
        isAuthenticated : state.auth.token !==null
    }
}

export default connect(mapStateToProps)(Layout);