import React from "react";

const backDrop = (props) => (
    props.show ? <div className="BackDrop" onClick={props.onclickdelModal}></div> : null
);

export default backDrop;