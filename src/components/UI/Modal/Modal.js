import React from "react";
import Aux from "../../../hoc/dumb";
import BackDrop from "../BackDrop/BackDrop";
const modal = (props) => (
    <Aux>
        <BackDrop show={props.show} onclickdelModal={props.cancelBackdrop} />
        <div className="Modal"
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? 1 : 0
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;