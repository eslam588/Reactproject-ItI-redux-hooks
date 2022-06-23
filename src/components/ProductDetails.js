import React, {useRef,useState} from 'react'
import {useParams} from 'react-router-dom';
import {addtocartAction} from"../redux/actions/productAction";
import {useSelector , useDispatch} from 'react-redux';
import {Container} from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import Product from './Product'

import './css/productdetails.css';



function ProductDetails() {

  const {id} = useParams();
  let {products} = useSelector(state => state.productreducer);
  let dispatch= useDispatch();
  // let saleprodcts=products.slice(0,10);
  let detailsproduct = products && products.find(product => product._id === parseInt(id));
  let saleprodcts= products && products.filter(product => product.category === detailsproduct.category)
  let [indexx,setIndex] = useState(0)
  let AddToCart = (id) => {
    addtocartAction(dispatch,id)
  }
  
   let srcimage = (detailsproduct.img);
  console.log(srcimage[0]);
   const imgDiv = useRef();

  const handleMouseMove = (e) =>{
    const {left , top , width , height} = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
}
  return (
    <div>
      <Container>
        <h1 className="text-center mt-2">ProductDetails</h1>
        <div className="details d-flex align-items-center justify-content-center border p-3 mt-3"  >
          <div className="product-img w-50 h-100 text-center"  onMouseMove={handleMouseMove}
          ref={imgDiv} onMouseLeave = { () => imgDiv.current.style.backgroundPosition = `center`}
          >
          <img src={`../${srcimage[indexx]}`}  alt="Product" className="w-75 h-25 mx-auto"/>
          </div>
          <div className="product-details w-75 fs-4">
            <p><span className="text-success fs-2 ">Product Name:</span> {detailsproduct.title}</p>
            <p><span  className="text-success fs-2" >Price:</span> {detailsproduct.price}</p>
            <p><span  className="text-success fs-2 ">Category:</span> {detailsproduct.category}</p>
            <p><span  className="text-success fs-2 ">Description:</span><span className="">{detailsproduct.details}</span></p>
           
            {
              srcimage.length>1 && srcimage.map((img,index)=>{
                return(
                     <img src={`../${img}`} key={index} onClick={()=>setIndex(index)} alt="" width="75px" height="75px" className="m-2" border="1" p-2 /> 
                )
                
              })
            }
            
            <br/>
            <button class="btn btn-danger" onClick={()=>AddToCart(detailsproduct._id)}>Add To Cart</button>
          </div>
        </div>
     </Container>
     <div className="recommended">
            <h2 className="text-center">Recommended Products</h2>
            <Swiper className=""
              spaceBetween={30}
              slidesPerView={5}
              autoplay
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {saleprodcts && saleprodcts.map(product => {
                return(
                  <SwiperSlide>
                    <Product product={product} AddToCart={()=>AddToCart(product._id)} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
        
     </div>
    </div>
  )
}

export default ProductDetails