import * as actionTypes from "../../store/actions/actionTypes";
import { dispatch } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/rxjs/internal/observable/pairs";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return (dispatch) => {
        dispatch(authStart());
    }
}