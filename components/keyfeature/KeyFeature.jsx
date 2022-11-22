import React from 'react'
import SectionHeader from '../SectionHeader'

const KeyFeature = ({headerText, boxes}) => {
  return (
    <main className='features-main'>
       <SectionHeader headerText={headerText}/>
        <div className='features'>
          {boxes.map((box, i) => (
             <div key={i} className='features-box'> 
               
             <h4 className='featureh4-text'>{box.headerText}</h4>
             <p className='p-medium'>{box.text}</p>

         </div>

          ))}
           
          
        </div>
    </main>
  )
}

export default KeyFeature