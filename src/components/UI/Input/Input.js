import React from "react";

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input className="FormInputElement" onChange={props.change} {...props.elementConfig} value={props.value} />
            break;
        case 'textarea':
            inputElement = <textarea className="FormInputElement" onChange={props.change} {...props.elementConfig} value={props.value} />
            break;
        case 'select':
            inputElement = <select className="FormInputElement" onChange={props.change} value={props.value}>
                {props.elementConfig.options.map(option => (<option key={option.value} value={option.value}>
                    {option.displayValue}
                </option>))}
            </select>
            break;
        default:
            inputElement = <input className="FormInputElement" onChange={props.change} {...props.elementConfig} value={props.value} />
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