import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import {IoIosArrowDown} from 'react-icons/io'
import { updateNavbarData } from '../../fetchData/fetchingData'
import NavbarForm from './NavbarForm'


const Editingpage = ({
    setEditiongPage,
    navbarData,
    updateNavbar, 
    bannerData,
    updateBanner,
    workflowData,
    updateWorkflow,
    featuresData,
    updateFeatures,
    pricingData,
    updatePricing,
    contactData,
    updateContact


    }) => {

    const [ updatdetNavData, setUpdatedNavData] = useState(navbarData)
    const [ updatedBannerData, setUpdatedBannerData] = useState(bannerData)
    const [ updatedWorkflowData, setUpdateWorkflowData] = useState(workflowData)
    const [updatedFeaturesData, setUpdatedFeaturesData] = useState(featuresData)
    const [updatedPricingData, setUpdatedPricingData] = useState(pricingData)
    const [updatedContactData, setUpdatedContactData] = useState(contactData)
    
   
 
   
    const [list, setList] = useState(updatdetNavData.list)
    const [workflowBoxes, setWorkflowBoxes] = useState(updatedWorkflowData.boxes)
    const [featuresBoxes, setFeaturesBoxes] = useState(updatedFeaturesData.boxes)
    const [pricingBoxes, setPricingBoxes] = useState(updatedPricingData.boxes)
    const [contactBoxes, setContactBoxes] = useState(updatedContactData.formData)


    const [navbarShow, setNavbarShow ] = useState(false)



   //helpers
    const addInputField = (el, elSetter,  updatedArr, updatedArrSetter) => {
        if(updatedArr?.list) {
            const arr =[...el, ""]
            elSetter(arr)
            return
        }
        const arr =  [...el, {}]
        elSetter(arr)
        updatedArrSetter(prev => ({...prev,  boxes:arr}))
    }
    
   const removeInput = (index, el, elSetter, updatedArr, updatedArrSetter) => {
        if(updatedArr?.list) {
           const arr = [...el]
           arr.splice(index, 1)
           elSetter(arr)
           updatedArrSetter(prev => ({...prev,  list:arr}))
           console.log( updatedArr)
           return

        }
        const list = [...el]
        list.splice(index, 1)
        elSetter(list)
        updatedArrSetter(prev => ({...prev,  boxes:list}))
        console.log( featuresBoxes ,updatedArr)
    }

    const handleArrayData = (e, index, el, elSetter) => {
        const {name, value} = e.target
        if(!index) {
            const list = {...el}
            list[name]=value
            console.log(list)
            elSetter(list)
            return
        }
        const list = [...el]
        if(!name ) {
            list[index] = value
            elSetter(list)
            console.log(list)
            return
        }
        list[index][name]=value
        console.log(list, value)
        elSetter(list)
    }

    const handleArrayText =(e, index, el ,elSetter, updatedArr, setUpdatedArr) => {
        const {name, value} = e.target
        const list = [...el]
        if(!name ) {
            list[index] = value
            elSetter(list)
            setUpdatedArr(prev => ({...prev, list}))
            console.log(updatedArr)
            console.log(list)
            return
        }
        list[index][name] = value
        console.log(list)
        elSetter(list)


    }



    //mutating sections
    const mutateData = (e, mutateFunc, updatedData) => {
        e.preventDefault()
        console.log(updatedData)
        mutateFunc(updatedData)
    }

  return (
      <section className='editingPage'>
            <nav className='click' onClick={() => setEditiongPage(false)}><GrClose /></nav>
            <main className='edditing-data'>
               {/* //NAVBAR */}
                <form className='edit-navbar edit-section' onSubmit={e => mutateData(e, updateNavbar, updatdetNavData)}>
                     <div className='form-header'>
                        <h1>navbar</h1>
                        <IoIosArrowDown style={navbarShow ? {transform:'rotate(180deg)'} : {transform:'rotate(0deg)'}} onClick={() => setNavbarShow(prev => !prev)} size={20} />
                     </div>
                     {navbarShow &&
                     <>
                     <label className='label-div'><p>Logo:</p>
                    <input
                    className='input-styles'
                    name='logo'
                    type='text'
                    value={updatdetNavData.logo}
                    onChange={(e) => handleArrayData(e, null, updatdetNavData, setUpdatedNavData)}
                     />
                    </label>
                    <label className='label-div'><p>Button Text:</p>
                    <input
                    className='input-styles'
                    name='btnText'
                    type='text'
                    value={updatdetNavData.btnText}
                    onChange={(e) => handleArrayData(e, null, updatdetNavData, setUpdatedNavData)}
                     />
                    </label>
                    <button className='form-btns'
                        onClick={() => addInputField(list, setList, updatdetNavData, setUpdatedNavData)}>add</button>
                     {list?.map((item, index) => {
                         return (
                            <div className='boxes-styles' key={index}>
                                <label className='label-div'><p>List Item:</p>
                                <input
                                className='input-styles'
                                value={item}
                                type="text"
                                onChange={e => handleArrayText(e, index,list, setList, updatdetNavData, setUpdatedNavData )}
                            />
                                </label>
                           
                        <button className='form-btns' onClick={() => removeInput(index ,list, setList, updatdetNavData, setUpdatedNavData)}>delete</button>
                        </div>
                        )
                     })}
                     <button className='form-btns' type="submit">save navbar</button>
                     </>
                     }
                    
                </form>

                {/* BUNNER */}
                <form className=' edit-section' onClick={e => mutateData(e, updateBanner, updatedBannerData)}>
                    <h1>banner</h1>
                    <label ><p>Bunner First Text:</p>
                    <textarea
                    className='input-styles'
                    name='firstText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.firstText}
                    />
                    </label>
                   
                    <textarea
                    className='input-styles'
                    name='secondText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.secondText}

                     />
                     <input
                     className='input-styles'
                    name='btnText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.btnText}

                     />
                     <button className='form-btns' type='submit'>Save </button>
                </form>

                {/* WORKFLOW */}
                <form className='edit-workflow edit-section' onClick={(e) =>mutateData(e, updateWorkflow, updatedWorkflowData)}>
                    <h1>workflow</h1>
                    <input 
                    name='headerText'
                    type='text'
                    value={updatedWorkflowData.headerText}
                    onChange={(e) => handleArrayData(e, null, updatedWorkflowData, setUpdateWorkflowData)}
                    />

                    <button onClick={() => addInputField(workflowBoxes, setWorkflowBoxes,updatedWorkflowData, setUpdateWorkflowData)}>Add Box Data</button>
                    {workflowBoxes?.map((box, index) => {
                 
                        return (
                            <div key={index}>
                                <textarea 
                                name='text'
                                type="text"
                                value={box.text}
                                onChange={e => handleArrayText(e, index,workflowBoxes, setWorkflowBoxes )}
                                />
                                <button onClick={() => removeInput(index, workflowBoxes, setWorkflowBoxes, updatedWorkflowData, setUpdateWorkflowData)}
                                >delete</button>
                        </div>
                        )
                    })}
                    <button type='submit'>Save Workflow</button>
                </form>


                {/* FEATURES */}
                <form className='edit-features edit-section' onClick={e => mutateData(e, updateFeatures, updatedFeaturesData)}>
                    <h1>Features Field</h1>
                    <input 
                    name='headerText'
                    type='text'
                    value={updatedFeaturesData.headerText}
                    onChange={e => handleArrayData(e, null, updatedFeaturesData, setUpdatedFeaturesData)}                    
                    />

                    <button onClick={() => addInputField(featuresBoxes, setFeaturesBoxes, updatedFeaturesData, setUpdatedFeaturesData)}>Add new Feature</button>
                    {featuresBoxes.map((box, index) => {
                        return (
                            <div  key={index} className='boxes-cont'>
                                 <div>
                                <input
                                name='headerText'
                                type='text'
                                value={box.headerText}
                                onChange={e => handleArrayText(e, index, featuresBoxes, setFeaturesBoxes)}

                                 />
                                 <textarea
                                 name='text'
                                 type='text'
                                 value={box.text}
                                 onChange={(e) => handleArrayText(e, index, featuresBoxes, setFeaturesBoxes)}
                                  />
                                   <button onClick={() => removeInput(index, featuresBoxes, setFeaturesBoxes, updatedFeaturesData, setUpdatedFeaturesData)}
                                >delete</button>
                                
                            </div>
                            </div>
                           
                        )
                    })}
                    
                    <button type="submit">Save Features</button>

                </form>

                {/* PRICING */}
                <form className='edit-pricing edit-section' onSubmit={(e) => mutateData(e, updatePricing, updatedPricingData)}>
                    <h1>Pricing Field</h1>
                    <input
                    name='headerText'
                    type='text'
                    value={updatedPricingData.headerText}
                    
                    onChange={e => handleArrayData(e, null, updatedPricingData, setUpdatedPricingData)} 
                     />
                     <button onClick={() => addInputField(pricingBoxes, setPricingBoxes, updatedPricingData, setUpdatedPricingData)}>Add new Pricing</button>
                     {pricingBoxes.map((box, index) => (
                         <div>
                             <label> first Text
                             <textarea
                             name='firstText'
                             type='text'
                             value={box.firstText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <label> second Text
                             <textarea
                             name='secondText'
                             type='text'
                             value={box.secondText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <label> third Text
                             <textarea
                             name='thirdText'
                             type='text'
                             value={box.thirdText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <label> fourthText 
                             <textarea
                             name='fourthText'
                             type='text'
                             value={box.fourthText}
                             onChange={(e) => handleArrayText(e, index ,pricingBoxes, setPricingBoxes )}
                              />
                              </label>
                              <button onClick={() => removeInput(index,pricingBoxes, setPricingBoxes, updatedPricingData, setUpdatedPricingData)}>Delete</button>
                         </div>
                     ))}

                    <button type='submit'>Submit Pricign Data</button>

                </form>

                {/* CONTACT */}
                <form  className='edit-contact edit-section' onSubmit={(e) => mutateData(e, updateContact, updatedContactData)}>
                    <h1>Contact Field</h1>
                    <label> Header:
                    <input 
                    name='headerText'
                    type='text'
                    value={updatedContactData.headerText}
                    onChange={e => handleArrayData(e, null, updatedContactData, setUpdatedContactData)} 

                     />
                    </label>
                    {contactBoxes.map((box, index) => (
                        <div key={index} className="form-input-boxes">
                            <label> FirstInput:
                            <input
                            name='firstInput'
                            type='text'
                            value={box.firstInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> SecondInput:
                            <input
                            name='secondInput'
                            type='text'
                            value={box.secondInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> thirdInput:
                            <input
                            name='thirdInput'
                            type='text'
                            value={box.thirdInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> credentialsInput:
                            <input
                            name='credentialsInput'
                            type='text'
                            value={box.credentialsInput}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        <label> btnTextInput:
                            <input
                            name='btnText'
                            type='text'
                            value={box.btnText}
                            onChange={(e) => handleArrayText(e, index ,contactBoxes, setContactBoxes )}

                             />
                        </label>
                        </div>
                        
                        
                        
                    ))}

                    <button  type='submit'>Save Contact</button>
                    

                </form>
            </main>


      </section>
  )
}

export default Editingpage