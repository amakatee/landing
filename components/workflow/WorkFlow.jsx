import React from 'react'
import SectionHeader from '../SectionHeader'

const WorkFlow = ({headerText, boxes}) => {
  return (
    <main className='main-workflow'>
        <SectionHeader headerText={headerText} />
        <div className='flow'>
            {boxes?.map((box, i) => (
             <div key={i} className='flow-box'>
               <div className='icon-img'>
               <img src='circle.png'/>
               </div>
               
                
                 <h3 className='h3-text'>{box.headerText}</h3>
                 <p className='text-block'>{box.text}</p>
              
               
             </div>
            ))}
        </div>
    </main>
  )
}

export default WorkFlow