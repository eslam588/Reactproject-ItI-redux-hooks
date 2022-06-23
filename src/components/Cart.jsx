import React ,{useEffect}from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {incrementAction,decrementAction , deleteAction,totalItemsAction,deleteproductscartAction} from"../redux/actions/productAction";
import { BsTrash } from "react-icons/bs";
import {Container} from "react-bootstrap";
function Cart(props) {
  let {cart,total} = useSelector(state => state.productreducer);
  let dispatch = useDispatch();

  console.log(props.history);
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
  }

  
  return (
    <div className="text-center">
      <Container>
      <h1>cart</h1>
      <div className="cart d-flex ">
      <div className="items-cart  w-75">
        {cart.length > 0 ? (cart.map(item => {
          return (
            
              <div className="d-flex align-items-center mt-5 border p-3">
               <img src={`../${item.img[0]}`} width="100px" height="100px" className="mx-5"/>
                <p className="mx-5">{item.title}</p>
                <button type="button" className="" onClick={()=>increment(item._id)}>+</button>
                <span className="mx-4">count : {item.count}</span>
                <button type="button" className="" onClick={()=>decrement(item._id)}>-</button>
                <p className="mx-5">{item.price*item.count}$</p>
                <p className="mx-5"><BsTrash className="fs-2 mx-4 mt-2" onClick={()=> deleteitem(item._id)}/></p> 
               </div>
          )
        }
        )):<p className="text-success fs-3 mt-5">no products in cart</p>}

        </div>
        <div className="total w-25 border mt-5 ms-4 p-5 h-50">
          <p className="text-success fs-2">TotalPrice:{total?total:0}</p>
          <button className="btn btn-primary mt-3" onClick={()=> deleteallcart()} >checkOut</button>
        </div>
        </div> 
        <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
        </Container>

    </div>
  )
}

export default Cart