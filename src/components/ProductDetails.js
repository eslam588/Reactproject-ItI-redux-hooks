import React, {useRef,useState} from 'react'
import {useParams} from 'react-router-dom';
import {addtocartAction,bannerClose} from"../redux/actions/productAction";
import {useSelector , useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap'
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
    setTimeout(() => {
      bannerClose(dispatch);
  }, 1000);
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
        <h1 className="text-center m-4">ProductDetails</h1>
        <div className="details  d-lg-flex border p-2 mt-2">
          <div className="product-img text-center  "  onMouseMove={handleMouseMove}
          ref={imgDiv} onMouseLeave = { () => imgDiv.current.style.backgroundPosition = `center`}
          style={{backgroundImage: `url(${`../${detailsproduct.img[indexx]}`})` ,  width:'1300px' , height:'430px'}}></div>
          <div className="product-details fs-4  ms-4">
            <p><span className="text-success fs-3 fw-bold ">Product Name:</span> {detailsproduct.title}</p>
            <p><span  className="text-success fs-3 fw-bold" >Price:</span> {detailsproduct.price}</p>
            <p><span  className="text-success fs-3 fw-bold">Category:</span> {detailsproduct.category}</p>
            <p><span  className="text-success fs-3 fw-bold">Description:</span><span>{detailsproduct.details}</span></p>
           
            {
              srcimage.length>1 && srcimage.map((img,index)=>{
                return(
                     <img src={`../${img}`} key={index} onClick={()=>setIndex(index)} alt="" width="75px" height="75px" border="1" className="m-2"/> 
                )
                
              })
            }
            
            <br/>
            <button class="btn cart-btn mx-auto" onClick={()=>AddToCart(detailsproduct._id)}>Add To Cart</button>
          </div>
        </div>
        
     </Container>
     <div className="recommended">
            <h2 className="text-center my-4">Recommended Products</h2>
            <Swiper className=""
              spaceBetween={30}
              slidesPerView={5}
              width={1400}
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