import React ,{useRef}from 'react'
import {useParams} from 'react-router-dom'
import {Col , Card , Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import "./css/product.css";

function Product(props) {
  const {product,AddToCart} = props;
  

  return (
  
          <div className="card my-3 text-center mx-auto">
          <NavLink to={`/products/${product._id}`}>
            {product.sale !="" &&
                    <div className="card-sale bg-black">
                    <span className="text-white">{product.sale}</span>
                    </div>
            }
              
              <div className="card-img mx-auto">
                <img src={`${product.img[0]}`}/>
              </div>
              <div className="card-details">
                <h3>{product.title}</h3>
                <p>{product.price}$</p>
              </div>
              </NavLink>
            <button onClick={AddToCart} className="py-1 text-white">Add To Cart</button>
            <div className={product.isInCart ? "inCart newInCart" : "inCart"}>
                <span>Already in Cart</span>
            </div>
          </div>
  )
}

export default Product