import axios from "axios";
import {GET_PRODUCTS , GET_BY_NAME, GET_BY_CATALOG ,ADD_TO_CART ,INCREMENT, DECREMENT,DELETE_ITEM} from "../actions/types"


export const filterbyNameAction = (dispatch,searchName)=>{
    return dispatch({
        type:GET_BY_NAME,
        payload:searchName
    })
}
export const addtocartAction = (dispatch,id) => {
    return dispatch({
        type:ADD_TO_CART,
        payload:id
    })
}

export const incrementAction = (dispatch,id) => {
    return dispatch({
        type:INCREMENT,
        payload:id
    })
}
export const decrementAction = (dispatch,id) => {
    return dispatch({
        type:DECREMENT,
        payload:id
    })
}

export const deleteAction = (dispatch,id) => {
    return dispatch({
        type:DELETE_ITEM,
        payload:id
    })
}



