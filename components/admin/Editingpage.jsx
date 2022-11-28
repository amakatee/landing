import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
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



   //helpers
    const addInputField = (el, elSetter,  updatedArr, updatedArrSetter) => {
        if(updatedArr?.list) {
            const arr =[...el, '']
            elSetter(arr)
            console.log(arr)
        
            updatedArrSetter(prev => ({...prev, list:arr}))
            console.log(updatdetNavData)
            return

        }
        const list =  [...el, {}]
        elSetter(list)
        updatedArrSetter(prev => ({...prev,  boxes:list}))
   }

   const addListInput = (el, elSetter,  updatedArr, updatedArrSetter) => {
  //  list, setList, updatdetNavData, setUpdatedNavData)
  const arr =[...el, '']
  elSetter(arr)
  console.log(list)
  updatedArrSetter(prev => ({...prev, list:arr}))
  console.log(updatedArr)

   }
 //index, featuresBoxes, setFeaturesBoxes, updatedFeaturesData, setUpdatedFeaturesData
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

    const handleArrayText =(e, index, el ,elSetter) => {
        const {name, value} = e.target
        const list = [...el]
        if(!name ) {
            list[index] = value
            elSetter(list)
            console.log(list)
            return
        }
      
        
        console.log(index,name, value)
        
     
        list[index][name] = value
        console.log(list)
        elSetter(list)


    }



    //mutating sections
    const saveNavbar =  e => {
        e.preventDefault()
        setUpdatedNavData({...updatdetNavData ,list})
        updateNavbar(updatdetNavData)
    }
   
 

    const mutateData = (e, mutateFunc, updatedData) => {
        e.preventDefault()
        console.log(updatedData)
        mutateFunc(updatedData)
}

  

  

  
    


  return (
      <section className='editingPage'>
            <nav className='click' onClick={() => setEditiongPage(false)}><GrClose /></nav>
            <main className='edditing-data'>
                {/* <NavbarForm
                saveNavbar={saveNavbar} 
                handleNavbarInput={handleNavbarInput} 
                updatdetNavData={updateNavbarData}
                setUpdatedNavData={setUpdatedNavData}
                setList={setList}
                list={list}
              
                 /> */}

                 {/* //NAVBAR */}
                <form className='edit-navbar' onSubmit={e => mutateData(e, updateNavbar, updatdetNavData)}>
                    <h1>navbar</h1>
                    <input
                    name='logo'
                    type='text'
                    value={updatdetNavData.logo}
                    onChange={(e) => handleArrayData(e, null, updatdetNavData, setUpdatedNavData)}
                     />
                     <input
                    name='btnText'
                    type='text'
                    value={updatdetNavData.btnText}
                    onChange={(e) => handleArrayData(e, null, updatdetNavData, setUpdatedNavData)}
                     />
                       <button
                        onClick={() => addInputField(list, setList, updatdetNavData, setUpdatedNavData)}>add</button>
                     {list?.map((item, index) => {
                         return (
                            <div key={index}>
                            <input
                             value={item}
                             type="text"
                             onChange={e => handleArrayText(e, index,list, setList )}

                             />
                       
                             <button onClick={() => removeInput(index ,list, setList, updatdetNavData, setUpdatedNavData)}>delete</button>
                            
                             </div>
                        )
                     })}
                     <button type="submit">save navbar</button>

                </form>

                {/* BUNNER */}
                <form className='edit-banner' onClick={e => mutateData(e, updateBanner, updatedBannerData)}>
                    <h1>banner</h1>
                    <textarea
                    name='firstText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.firstText}
                    />
                    <textarea
                    name='secondText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.secondText}

                     />
                     <input
                    name='btnText'
                    type='text'
                    onChange={(e) => handleArrayData(e, null, updatedBannerData, setUpdatedBannerData)}
                    value={updatedBannerData.btnText}

                     />
                     <button type='submit'>Save </button>
                </form>

                {/* WORKFLOW */}
                <form className='edit-workflow' onClick={(e) =>mutateData(e, updateWorkflow, updatedWorkflowData)}>
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
                <form className='edit-features' onClick={e => mutateData(e, updateFeatures, updatedFeaturesData)}>
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
                <form className='edit-pricing' onSubmit={(e) => mutateData(e, updatePricing, updatedPricingData)}>
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
            </main>


      </section>
  )
}

export default Editingpage