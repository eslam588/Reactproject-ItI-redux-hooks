import React from 'react'
import Slider from './Slider'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import Product from './Product'
import {useDispatch , useSelector} from 'react-redux';
import {addtocartAction} from"../redux/actions/productAction";

function Home() {
  const dispatch = useDispatch();
  let {products} = useSelector(state => state.productreducer);
  let saleprodcts=products.filter(product => product.sale!="");

  let AddToCart = (id) => {
    addtocartAction(dispatch,id)
  }
  return (
    <div>
        <Slider/>
        <h2 className="text-center">Sale Products</h2>
        <Swiper className="bg-light text-center mx-auto"
          spaceBetween={30}
          slidesPerView={5}
          autoplay
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {saleprodcts && saleprodcts.map(product =>  {
            return(
              <SwiperSlide>
                <Product product={product} AddToCart={()=>AddToCart(product._id)} />
              </SwiperSlide>
            )
          })}
        </Swiper>
    </div>
  )
}

export default Home