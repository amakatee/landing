import React, { useState } from 'react'
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
    updateFeatures


    }) => {

    const [ updatdetNavData, setUpdatedNavData] = useState(navbarData)
    const [ updatedBannerData, setUpdatedBannerData] = useState(bannerData)
    const [ updatedWorkflowData, setUpdateWorkflowData] = useState(workflowData)
    const [updatedFeaturesData, setUpdatedFeaturesData] = useState(featuresData)
   
   
   
    const [list, setList] = useState(updatdetNavData.list)
    const [workflowBoxes, setWorkflowBoxes] = useState(updatedWorkflowData.boxes)
    const [featuresBoxes, setFeaturesBoxes] = useState(updatedFeaturesData.boxes)



  //helpers
    const handleNavbarInput = (e, index) => {
        const newItem = list.map((item, i) => {
            return i === index ? e.target.value : item
        })
        setList(newItem)

    }

    const handleWorkflowText = (e, index) => {
        const newItem = workflowBoxes.map((box, i) => {
           
            return i === index ? {...box, text:e.target.value}  : box
        })
        setWorkflowBoxes(newItem)
    }

    const handleFeaturesHeader = (e, index) => {
        
        const newItem = featuresBoxes.map((box, i) => {
           return i === index ? {...box, headerText:e.target.value}  : box
        })
        setFeaturesBoxes(newItem)
    }

    const handleFeaturesText = (e, index) => {
        const newItem = featuresBoxes.map((box, i) => {
            return i === index ? {...box, text:e.target.value} : box
        })
        setFeaturesBoxes(newItem)
    }

    // const handleArrayData = (e, index, val, el, elSetter) => {
    //     const newItem = el.map((box, i) => {
    //         return i === index ? {...box, val:e.target.value}  : box
    //      })
    //      elSetter(newItem)


    // }

    //helpers ends
    
    const saveNavbar =  e => {
        e.preventDefault()
        setUpdatedNavData({...updatdetNavData ,list})
        console.log(updatdetNavData)
        updateNavbar(updatdetNavData)
        

    }


    const saveBanner = e => {
        e.preventDefault()
       updateBanner(updatedBannerData)
    }


    const saveWorkflow = (e) => {
        e.preventDefault()
        console.log(workflowBoxes)
        setUpdateWorkflowData({...updatedWorkflowData, boxes:workflowBoxes})
        updateWorkflow(updatedWorkflowData)
       
       

    }
    const saveFeatures = (e) => {
        e.preventDefault()
        setUpdatedFeaturesData({...updatedFeaturesData, boxes:featuresBoxes})
        updateFeatures(updatedFeaturesData)

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
                <form className='edit-navbar' onSubmit={saveNavbar}>
                    <h1>navbar</h1>
                    <input
                    type='text'
                    value={updatdetNavData.logo}
                    onChange={e => setUpdatedNavData({...updatdetNavData, logo:e.target.value })}
                     />
                     <input
                    type='text'
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

                {/* BUNNER */}
                <form className='edit-banner' onClick={saveBanner}>
                    <h1>banner</h1>
                    <textarea
              
                    type='text'
                    onChange={(e) => setUpdatedBannerData({...updatedBannerData,firstText:e.target.value})}
                    value={updatedBannerData.firstText}
                    />
                    <textarea
                    type='text'
                    onChange={e => setUpdatedBannerData({...updatedBannerData,secondText:e.target.value})}
                    value={updatedBannerData.secondText}

                     />
                     <input
                    type='text'
                    onChange={e => setUpdatedBannerData({...updatedBannerData,btnText:e.target.value})}
                    value={updatedBannerData.btnText}

                     />
                     <button type='submit'>Save </button>
                </form>

                {/* WORKFLOW */}
                <form className='edit-workflow' onClick={saveWorkflow}>
                    <h1>workflow</h1>
                    <input 
                    type='text'
                    value={updatedWorkflowData.headerText}
                    onChange={(e) => setUpdateWorkflowData({...updatedWorkflowData, headerText:e.target.value})}
                    />
                    <button onClick={() => {
                       setWorkflowBoxes([...workflowBoxes, ''])
                    }}>Add Box Data</button>
                    {workflowBoxes.map((box, index) => {
                        return (
                            <div key={index}>
                                <textarea 
                                type="text"
                                value={box.text}
                                onChange={(e) => handleWorkflowText(e, index)}
                              
                                />
                                <button onClick={() => {
                                 const newArr = workflowBoxes.filter((b, i) => {
                                     return index !== i
                                 })
                                setWorkflowBoxes(newArr)
                             }}>delete</button>
                        </div>
                        )
                    })}
                    <button type='submit'>Save Workflow</button>
                </form>


                {/* FEATURES */}
                <form className='edit-features' onClick={saveFeatures}>
                    <h1>Features Field</h1>
                    <input 
                    type='text'
                    value={updatedFeaturesData.headerText}
                    onChange={(e) => setUpdatedFeaturesData({...updatedFeaturesData, headerText: e.target.value})}
                    
                    />
                    <button onClick={() => {
                        return setFeaturesBoxes([...featuresBoxes, ''])
                    }}>Add new Feature</button>
                    {featuresBoxes.map((box, index) => {
                        return (
                            <div className='boxes-cont'>
                                 <div key={index}>
                                <input
                                type='text'
                                value={box.headerText}
                                onChange={(e) => handleFeaturesHeader(e, index)}

                                 />
                                 <textarea
                                 type='text'
                                 value={box.text}
                                 onChange={(e) => handleFeaturesText(e, index)}
                                  />
                                  <button onClick={() => {
                                      const newArr = featuresBoxes.filter((box, i) => {
                                          return index !== i 
                                      })
                                      setFeaturesBoxes(newArr)
                                  }}>Delete</button>
                            </div>
                            </div>
                           
                        )
                    })}
                    
                    <button type="submit">Save Features</button>

                </form>
            </main>


      </section>
  )
}

export default Editingpage