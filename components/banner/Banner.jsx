import React from 'react'
import Button from '../Button'

const Banner = ({img, firstText,  formText, btnText}) => {
  return (
    <main>
        <div className='banner-img'>
            <img src={img} />
        </div>
        <div className='banner-text'>
            <h2 className='bigText'>{firstText}</h2>
            <p className='ptext'>{formText} </p>
            <form>
           
                <input
                type='text'
                className='banner-input'
                placeholder='email'
              
                 />
                <Button btnText={btnText} />
            </form>
        </div>
   
    </main>
  )
}

export default Banner