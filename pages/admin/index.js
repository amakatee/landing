import React from 'react'

const index = () => {
  return (
    <main className='admin-page'>
        <button className='logout-btn'>log out</button>
        <br />
        <div className='admin-boxes'>
            <div className='admin-box'>
                <h3>Application</h3>
                <p>see new emails</p>

            </div>
            <div className='admin-box'>
               Edit page

            </div>
            <div className='admin-box'>
               manage admin

            </div>
        </div>
    </main>
  )
}

export default index