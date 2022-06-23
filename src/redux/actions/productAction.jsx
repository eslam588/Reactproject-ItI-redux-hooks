import axios from "axios";
import {GET_PRODUCTS , GET_BY_NAME, GET_BY_CATALOG ,ADD_TO_CART ,INCREMENT, DECREMENT,DELETE_ITEM ,BANNER_CLOSE,TOTAL_ITEMS,deleteproductscart} from "../actions/types"



export const filterbyNameAction = (dispatch,searchName)=>{
    return dispatch({
        type:GET_BY_NAME,
        payload:searchName
    })
}
export const filterbyCategoryAction = (dispatch,searchCatalog)=>{
    return dispatch({
        type:GET_BY_CATALOG,
        payload:searchCatalog
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

export const bannerClose =(dispatch) => {
    dispatch({
      type: BANNER_CLOSE,
    });
  };

  export const totalItemsAction =(dispatch) => {
    dispatch({
      type: TOTAL_ITEMS,
    });
  };


  export const  deleteproductscartAction =(dispatch) => {
    dispatch({
      type:  deleteproductscart,
    });
  };

  
 

