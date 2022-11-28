import React from 'react'
import Button from '../Button'
const Navbar = ({logo, btnText, list}) => {
  console.log(logo)
  return (
    <nav>
      <h2 className='logo h2text'>{logo}</h2>

      <div>
      <ul className='nav-options'>
        {list.map((item, i) => (
            <li key={i}>{item}</li>

        ))}
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