import React from 'react'
import Slider from './Slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import Product from './Product'
import Extrapart from './extrapart'
import {useDispatch , useSelector} from 'react-redux';
import {addtocartAction,bannerClose} from"../redux/actions/productAction";
import {Col,Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";




function Home() {
  const dispatch = useDispatch();
  let {products} = useSelector(state => state.productreducer);
  let saleprodcts=products.filter(product => product.sale!=="");

  let productshalf= products.slice(0,12);

  console.log(productshalf);

  let AddToCart = (id) => {
    addtocartAction(dispatch,id)
    setTimeout(() => {
      bannerClose(dispatch);
  }, 1000);
  }


  return (
    <div>
        <Slider/>
        <Extrapart/>
        <div className="halfproducts text-center">
            <Container>
              <h1 className="m-5 ">Products</h1>
            <Row>
            {productshalf && productshalf.map(prod => {
              return (
                <Col className="col col-md-6 col-lg-3">
                  <Product product={prod} AddToCart={()=>AddToCart(prod._id)}/>
                </Col>
              )
            }) }
            </Row>
            <button className="showall text-center mx-auto my-5 p-2" onClick={AddToCart}><Link to="/products" className="">show all Products</Link></button>
            <hr></hr>
            </Container>
        </div>
        
        
        <div className="swipper">
            
            <h2 className="text-center m-5 ">Sale Products</h2>
            <Swiper className="bg-light text-center mx-auto "
              spaceBetween={30}
              slidesPerView={5}
              width={1400}
              autoplay
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {saleprodcts && saleprodcts.map(product =>  {
                return(
                  <SwiperSlide>
                    <Product product={product} AddToCart={()=>AddToCart(product._id)}  />
                  </SwiperSlide>
                )
              })}
            </Swiper>
        </div>
    </div>
  )
}

export default Home