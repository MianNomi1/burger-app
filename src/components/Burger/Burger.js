import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredients/BurgerIngrediants";
const burger = (props) => {

    const tranformedIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => <BurgerIngredient key={igkey + i} type={igkey} />);
    });
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>

    );
};

export default burger;