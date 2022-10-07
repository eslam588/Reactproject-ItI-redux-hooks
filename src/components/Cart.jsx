import React ,{useEffect}from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {incrementAction,decrementAction , deleteAction,totalItemsAction,deleteproductscartAction} from"../redux/actions/productAction";
import { BsTrash } from "react-icons/bs";
import {Container} from "react-bootstrap";
import './css/cart.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  let {cart,total} = useSelector(state => state.productreducer);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    totalitem()
  }, [cart])
  
  

  let increment = (id) => {
    incrementAction(dispatch,id);
  }
  let decrement = (id) => {
    decrementAction(dispatch,id);
  }
  let deleteitem=(id)=> {
    deleteAction(dispatch,id);
  }

  let totalitem=()=>{
    totalItemsAction(dispatch);
  }

  let deleteallcart=()=>{
    deleteproductscartAction(dispatch);
      toast("order is completed");
    setTimeout(() => {
        navigate("/home");
    },5000)
  }
   



  
  return (
    <div className="text-center">
      <Container>
      <h1 className="text-center fs-1 my-3">cart</h1>
      <div className="cart d-block d-lg-flex">
      <div className="items-cart d-block mx-auto">
        {cart.length > 0 ? (cart.map(item => {
          return (
            
              <div className="cart-details d-lg-flex align-items-center justify-content-center  mt-5 border p-3 d-block mx-auto" >
               <img src={`../${item.img[0]}`} width="150px" height="150px" className="mx-5"/>
                <p className="mx-5 fs-5">{item.title}</p>
                <button type="button" className="" onClick={()=>increment(item._id)}>+</button>
                <span className="mx-5 fs-4 w-25">count : {item.count}</span>
                <button type="button" className="" onClick={()=>decrement(item._id)}>-</button>
                <p className="mx-5 fs-4">{item.price*item.count}$</p>
                <p className="mx-5"><BsTrash className="fs-1 mx-4 mt-2" onClick={()=> deleteitem(item._id)}/></p> 
               </div>
          )
        }
        )):<p className={`${cart.length === "0" ? "no-prod d-lg-block text-center" : "text-success fs-3 mt-5 text-center" }`}>no products in cart</p>}

        </div>
        <div className="total  border mt-5 ms-4 p-5 h-75 border-3">
          <p className="text-success fs-2">TotalPrice:{total?total:0}$</p>
          <button className="btn btn-primary mt-3" onClick={()=> deleteallcart()} >checkOut</button>
          
        </div>
        <ToastContainer className="toast-btn"/>
        </div> 
        </Container>

    </div>
  )
}

export default Cart