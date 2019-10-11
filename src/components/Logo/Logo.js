import React from "react";

import burgerlogo from "../../assets/Image/burger-logo.png";

const burgerLogo = (props) => (
    <div className="Logo" style={{ height: props.height }}>
        <img src={burgerlogo} alt="MyBurger" />
    </div>
);

export default burgerLogo;