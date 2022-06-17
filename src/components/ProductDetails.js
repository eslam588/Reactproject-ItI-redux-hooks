import React from 'react'
import {useParams} from 'react-router-dom';
import {addtocartAction} from"../redux/actions/productAction";
import {useSelector , useDispatch} from 'react-redux';
import {Container} from 'react-bootstrap'

function ProductDetails() {
  const {id} = useParams();
  let {products} = useSelector(state => state.productreducer);
  let dispatch= useDispatch();

  let detailsproduct = products && products.find(product => product._id === parseInt(id));

  let AddToCart = (id) => {
    addtocartAction(dispatch,id)
  }
  
   let srcimage = (detailsproduct.img);
  return (
    <div>
      <Container>
        <h1 className="text-center mt-4">ProductDetails</h1>
        <div className="details d-flex align-items-center justify-content-center border p-5 mt-3" >
          <div className="product-img w-25 mx-5">
            <img src={srcimage}  alt="Product" className="w-100 " />
          </div>
          <div className="product-details w-75 fs-4">
            <p><span className="text-success fs-2 ">Product Name:</span> {detailsproduct.title}</p>
            <p><span  className="text-success fs-2" >Price:</span> {detailsproduct.price}</p>
            <p><span  className="text-success fs-2 ">Category:</span> {detailsproduct.category}</p>
            <p><span  className="text-success fs-2 ">Description:</span><span className="">{detailsproduct.details}</span></p>

            <button class="btn btn-danger" onClick={()=>AddToCart(detailsproduct._id)}>Add To Cart</button>
          </div>
        </div>
     </Container>
    </div>
  )
}

export default ProductDetails