import React from "react";

const Button = (props) => {
    let btn_type = "Custom-Button " + props.btnType;
    if (props.disabled) {
        btn_type = "Custom-Button Disabled";
    }
    return (
        <button className={btn_type} disabled={props.disabled} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default Button;