import React from "react";

const Button = (props) => {
    let btn_type = "Custom-Button " + props.btnType;
    return (
        <button className={btn_type} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default Button;