import React from 'react'


const NavbarForm = ({
    saveNavbar, 
    handleNavbarInput, 
    updatdetNavData, 
    setUpdatedNavData, 
    setList, 
    list
}) => {
    console.log(updatdetNavData)
  return (
    <form className='edit-navbar' onSubmit={saveNavbar}>
                    <h1>navbar</h1>
                    <input
                    type='text'
                    placeholder='logo'
                    value={updatdetNavData.logo}
                    onChange={e => setUpdatedNavData({...updatdetNavData, logo:e.target.value })}
                     />
                     <input
                    type='text'
                    placeholder='buttonText'
                    value={updatdetNavData.btnText}
                    onChange={e => setUpdatedNavData({...updatdetNavData, btnText:e.target.value })}
                     />
                       <button
                        onClick={() => {
                            setList([...list, ''])}}>add</button>
                     {list?.map((item, index) => {
                         return (
                         
                            <div key={index}>
                           <input
                             name="navVal" 
                             value={item}
                             type="text"

                            onChange={e => handleNavbarInput(e, index)}
                             />
                             <button onClick={() => {
                                 const newArr = list.filter((l, i) => {
                                     return index !== i
                                 })
                                setList(newArr)
                             }}>delete</button>
                            
                             </div>
                             
                           
                             
                            
                         )
                     })}
                     <button type="submit">save navbar</button>

                </form>
  )
}

export default NavbarForm