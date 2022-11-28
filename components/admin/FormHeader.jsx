import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'


const FromHeader = ({text, show, setShow}) => {
  return (
    <div className='form-header'>
    <h1>{text}</h1>
    <IoIosArrowDown style={show ? {transform:'rotate(180deg)'} : {transform:'rotate(0deg)'}} onClick={() => setShow(prev => !prev)} size={20} />
 </div>
  )
}

export default FromHeader