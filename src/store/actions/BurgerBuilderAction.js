import * as actionType from "./actionTypes";
import axios from "../../axios-orders";
export const addIngredient = (name) => {
    return {
        type: actionType.ADD_INGREDIENT,
        ingredientName: name
    }
}
export const removeIngredient = (name) => {
    return {
        type: actionType.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionType.FETCH_INGREDIENTS_FAILED
    }
}
export const setIngreients = (ingredients) => {
    return {
        type: actionType.SET_INGREDIENTS,
        ingredients: ingredients
    }

}

export const initIngredients = () => {
    return dispatch => {
        axios.get("https://react-burger-app-84dcd.firebaseio.com/ingredients.json").then(response => {
            dispatch(setIngreients(response.data))
        }).catch(error => {
            dispatch(fetchIngredientsFailed());
        })
    }
}