import React, {useRef} from 'react'
import SectionHeader from '../SectionHeader'
import { Swiper, SwiperSlide} from 'swiper/react';
import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi'

import 'swiper/css';

const Pricing = ({boxes, headerText}) => {
  

  const swiperRef = useRef(null)
  return (
    <main>
      <SectionHeader headerText={headerText}/>
      <div className='pricing-swiper'>
        <Swiper 
        ref={swiperRef}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) =>  {
            console.log(swiper)
          }}
        >

          {boxes?.map(box => (
               <SwiperSlide>
               <div className='pricing-swiper-box'>
                 <div className='pricing-card'>
                   <h2>{box.firstText}</h2>
                   <div className='card-price'>
                   <p className='p-large'>{box.secondText}</p>
                    
                   </div>
   
                   <h2 className='h2text'>{box.thirdText}</h2>
                   <p className='p-medium'>
                     {box.fourthText}
                   </p>
                     
                     
                   
                 </div>
               </div>
               </SwiperSlide>

          ))}
       
         </Swiper>

         <div className='arrows-pricing'>
           <div  onClick={() => swiperRef.current.swiper.slidePrev()} > <HiArrowNarrowLeft size="30px"
    color="black" /></div>
           <div  onClick={() => swiperRef.current.swiper.slideNext()} ><HiArrowNarrowRight size="30px"
    color="black"/></div>
         </div>

      </div>
    </main>
  )
}

export default Pricing