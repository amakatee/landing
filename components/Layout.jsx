import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Layout = ({children}) => {
  return (
   <>
   {/* <Navbar /> */}
   <main className='layout'>
       {children}
   </main>
   <Footer />

   </>
  )
}

export default Layout