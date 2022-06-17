import React from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {incrementAction,decrementAction , deleteAction} from"../redux/actions/productAction";
import { BsTrash } from "react-icons/bs";
import {Container} from "react-bootstrap";
function Cart() {
  let {cart} = useSelector(state => state.productreducer);
  let dispatch = useDispatch();


  let increment = (id) => {
    incrementAction(dispatch,id);
  }
  let decrement = (id) => {
    decrementAction(dispatch,id);
  }
  let deleteitem=(id)=> {
    deleteAction(dispatch,id);
  }

  console.log(cart);
  return (
    <div className="text-center">
      <Container>
      <h1>cart</h1>
      <div className="items-cart ">
        {cart.length > 0 ? (cart.map(item => {
          return (
            
              <div className="d-flex align-items-center mt-5 border w-75 p-3">
               <img src={item.img} width="100px" height="100px" className="mx-5"/>
                <p className="mx-5">{item.title}</p>
                <button type="button" className="" onClick={()=>increment(item._id)}>+</button>
                <span className="mx-4">count : {item.count}</span>
                <button type="button" className="" onClick={()=>decrement(item._id)}>-</button>
                <p className="mx-5">{item.price*item.count}$</p>
                <p className="mx-5"><BsTrash className="fs-2 mx-4 mt-2" onClick={()=> deleteitem(item._id)}/></p> 
               </div>
              

            
          )
        }
        )):<p>no products in cart</p>}
        </div>
        </Container>
    </div>
  )
}

export default Cart