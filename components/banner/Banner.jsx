import React from 'react'
import Button from '../Button'
import { Link, animateScroll as scroll } from "react-scroll";

const chars1 =['玉', '不', '琢']
const chars2 = [ '不', '成', '器']

const Banner = ({img, firstText, secondText,  formText, btnText}) => {
  console.log(secondText)
  return (
    <main>
      <div className='banner-layout'></div>
      {/* <div className='characters'>
        <div> {chars1.map(char => <spn>{char}</spn>)}</div>
        <div> {chars2.map(char => <spn>{char}</spn>)}</div>
   
        </div> */}
        <div className='banner-img'>
          {/* <img className='girl-png-img' src='girl.png' /> */}
          <video  loop={true} muted={true} autoPlay={true} playsInline controls={false} >
         <source
         src='/lady.MP4'
         type='video/mp4'
         >
         </source>
        </video>
            {/* <img src={img ? img : 'china.jpeg'} /> */}
        </div>
        <div className='banner-text'>
            <h2 className='h2text'>{firstText}</h2>
            
            <p className='smallText'>{secondText} </p>
           <Link to='contact'>
           <Button btnText={btnText} />
           </Link>
         
        </div>
   
    </main>
  )
}

export default Banner