import React from "react";

const input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input className="FormInputElement" {...props} />
            break;
        case 'textarea':
            inputElement = <textarea className="FormInputElement" {...props} />
            break;
        default:
            inputElement = <input className="FormInputElement" {...props} />
            break;
    }
    return (
        <div className="FormInput ">
            <label className="FormLabel">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;