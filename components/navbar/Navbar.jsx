import React from 'react'
import Button from '../Button'
const Navbar = ({logo, btnText, list}) => {
  console.log(logo)
  return (
    <nav>
      <h2 className='logo h2text'>{logo}</h2>

      <div>
      <ul className='nav-options'>
        <li>Home</li>
        <li>Contact</li>
        <li>Abouts Us</li>

      </ul>
      <div className='burger'>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      </div>
      <Button btnText={btnText} />
    </nav>
  )
}

export default Navbar