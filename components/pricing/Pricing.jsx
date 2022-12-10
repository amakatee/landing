import React, {useRef, useEffect, useState} from 'react'
import SectionHeader from '../SectionHeader'
import { Swiper, SwiperSlide} from 'swiper/react';
import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi'

import 'swiper/css';

const Pricing = ({boxes, headerText}) => {
  const [width, setWidth ] = useState()

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth
      setWidth(width)
      console.log('updating width')
    }

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth) 

  }, [])

  console.log(width)
  

  const swiperRef = useRef(null)
  return (
    <main>
      <SectionHeader headerText={headerText}/>
      <div className='pricing-swiper'>
        <Swiper 
        ref={swiperRef}
        loop={true}
        spaceBetween={50}
        slidesPerView={width > 1000 ? 3 : 1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) =>  {
            console.log(swiper)
          }}
        >

          <div>
           
            <div>
            {boxes?.map((box, i) => (
              
               <SwiperSlide key={i} >
               <div className='pricing-swiper-box'>
                 <div className='pricing-card'>
                 <div className='pricing-image'>
                   <img src='price2.jpeg' />
                 </div>
                  <div className='pricing-text'>
                  <h2>{box.firstText}</h2>
                   <div className='card-price'>
                   <p >{box.secondText}</p>
                   </div>
   
                   <p >{box.thirdText}</p>
                   <div className='price-number'>
                   <p className='p-medium'>
                     {box.fourthText}
                   </p>
                   </div>
                  
                  </div>
                     
                     
                   
                 </div>
               </div>
               </SwiperSlide>

          ))}
            </div>
          </div>
       
         </Swiper>

         <div className='arrows-pricing'>
           <div  onClick={() => swiperRef.current.swiper.slidePrev()} > <HiArrowNarrowLeft size="30px"
    color="white" /></div>
           <div  onClick={() => swiperRef.current.swiper.slideNext()} ><HiArrowNarrowRight size="30px"
    color="white"/></div>
         </div>

      </div>
    </main>
  )
}

export default Pricing