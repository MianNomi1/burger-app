import React from "react";

const input = (props) => {
    let inputElement = null;
    let classes = "FormInputElement ";
    if (props.invalid && props.shouldValidate && props.touched) {
        classes = classes.concat("FormInvalid");
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input className={classes} onChange={props.change} {...props.elementConfig} value={props.value} />
            break;
        case 'textarea':
            inputElement = <textarea className={classes} onChange={props.change} {...props.elementConfig} value={props.value} />
            break;
        case 'select':
            inputElement = <select className={classes} onChange={props.change} value={props.value}>
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