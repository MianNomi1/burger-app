import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredients/BurgerIngrediants";
const burger = () => {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bread-bottom" />
        </div>

    );
};

export default burger;