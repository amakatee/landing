import React from 'react'
import SectionHeader from '../SectionHeader'

const WorkFlow = ({headerText, boxes}) => {
  return (
    <main>
        <SectionHeader headerText={headerText} />
        <div className='flow'>
            {boxes?.map((box, i) => (
             <div key={i} className='flow-box'>
                 <p className='flow-text'>{box.text}</p>
             </div>
            ))}
        </div>
    </main>
  )
}

export default WorkFlow