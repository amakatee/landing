import React from 'react'
import {GrClose} from 'react-icons/gr'

const Application = ({setShow,userFormData}) => {
  console.log(userFormData)
  return (
    <section className='application-page'>
        <nav className='click' onClick={() => setShow(false)}><GrClose /></nav>
        <main className='edditing-data application-data'>
            <h2>latest forms data</h2>
            <div className='application-boxes'>
            {userFormData.map(u => 
             <div className='user-data-box'>
               <h4><span>username: </span>{u.firstInput}</h4>
               
               <p><span>dlya sviazi: </span>{u.secondInput}</p>
               <p><span>message: </span>{u.thirdInput}</p>
               {/* <p>{u.credentialsInput ? ""}</p> */}

               </div>)}

             </div>    

        </main>


    </section>
  )
}

export default Application